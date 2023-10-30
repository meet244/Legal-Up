from flask import Flask,jsonify,request
import requests
import json
import threading
import uuid
import random
import pickle
import os
from googletrans import Translator
from geopy.geocoders import Nominatim
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle
from sklearn.metrics import accuracy_score, classification_report
from flask_cors import CORS

# MODELS

# clientClassify = None
# with open('clientClassifyModel.pkl', 'rb') as modelFile:
#     clientClassify = pickle.load(modelFile)

caseClassify = None
with open('caseClassifyModel.pkl', 'rb') as modelFile:
    caseClassify = pickle.load(modelFile)

caseVectorizer = None
with open('case_vectorizer.pkl', 'rb') as vectorizerFile:
    caseVectorizer = pickle.load(vectorizerFile)

# clientVectorizer = None
# with open('client_vectorizer.pkl', 'rb') as vectorizerFile:
#     vectorizer = pickle.load(vectorizerFile)

# FUNCTIONS

def translateChecks(text:str) -> str:
    translator = Translator()

    # Text you want to translate
    # text_to_translate = "Ich liebe dich."
    # text_to_translate = "Konichiwa"

    # Detect the source language (optional)
    print(text)
    detected_lang = translator.detect(text).lang

    if(detected_lang!='en'):
    # Translate the text to another language (e.g., Spanish)
        translated_text = translator.translate(text, dest='en')
        return translated_text
    return text
    # print(f"Original Text: {text_to_translate}")
    # print(f"Detected Language: {detected_lang}")
    # print(f"Translated Text: {translated_text.text}")


def getMatchScore (lawyerObj, clientReqObj) : 
    totalPoints = 0
    
    # Points for Case Match
    caseTypePoints = 0
    for cCaseType in clientReqObj["caseType"]: 
        for lCaseType in lawyerObj["speciality"] : 
            if (lCaseType == cCaseType) : 
                if (caseTypePoints == 0) : caseTypePoints += 10
                else : caseTypePoints += 5
                
    totalPoints += caseTypePoints
            
    # Points for Languages
    languagePoints = 0
    for cLang in clientReqObj["languages"]: 
        for lLang in lawyerObj["languages"] : 
            if (lLang == cLang) : 
                if (languagePoints == 0) : languagePoints += 10
                else : languagePoints += 2
                
    totalPoints += languagePoints
    
    # Calculating Budget Points
    budgetPoints = 0
    a = max(clientReqObj["budget"], lawyerObj["price"])
    b = min(clientReqObj["budget"], lawyerObj["price"])
    diff = a-b
    if (diff < 250) : 
        diff = int(diff/250)
        budgetPoints += diff
        
    totalPoints += budgetPoints
    
    
    # Caluclating Location Points
    locationPoint = 0
    if (clientReqObj["location"] == lawyerObj["location"]) : locationPoint += 10
    totalPoints += locationPoint
    
    # Adding Lawyer Rating Points
    totalPoints += lawyerObj["rating"]*2
    
    
    
    # Returning TotalPoints
    return totalPoints

def sortFunction (t) : 
    return t[0]

def recommendedLawyers(clientReqObj) -> list : 

    with open('lawyers.json','r') as f : 
        lawyers = json.load(f)

    # recommendedMaleLawyers = []
    # recommendedFemaleLawyers = []
    lawyerList = []
    
    for lawyer in lawyers :
        score = getMatchScore(lawyer,clientReqObj)
        lawyerList.append((score,lawyer))
        # if (lawyer["gender"] == "F") : 
        #     recommendedFemaleLawyers.append( tuple( (score, lawyer) ) )
        # elif (lawyer["gender"] == "M") : 
        #     recommendedMaleLawyers.append( tuple( (score, lawyer) ) ) 
            
    # recommendedFemaleLawyers = sorted(recommendedFemaleLawyers, key= sortFunction, reverse=True)
    # recommendedMaleLawyers = sorted(recommendedMaleLawyers, key= sortFunction, reverse=True)
    
    # for i in range(20) : 
    #     lawyerList.append(recommendedFemaleLawyers[i])
    # for i in range(20) : 
    #     lawyerList.append(recommendedMaleLawyers[i])
        
    lawyerList = sorted(lawyerList, key= sortFunction, reverse=True)
    finalList = [obj for (s,obj) in lawyerList]    

        
    return finalList[0:15]


def findLocation(latitude:float,longitude:float) -> str:
    geolocator = Nominatim(user_agent="my-app")
    location = geolocator.reverse(f"{latitude}, {longitude}")

    return(location.raw['address']['city_district'])  # City
    print(location.raw['address']['state']) # State


def preprocess_text(text):
    text = text.lower()
    text = text.replace('[^\w\s]', '')
    return text

def getCaseType(query:str) -> [str]:

    input_text = preprocess_text(query)
    input_text_vectorized = caseVectorizer.transform([input_text])
    predictions = caseClassify.predict_proba(input_text_vectorized)
    for sentence, prob in zip([query], predictions):
        top_values = []
        labels = caseClassify.classes_
        for label, probability in zip(labels, prob):
            # Add the item_value to the top_values list if it's one of the top 3 values
            if(probability<0.08):continue
            if (len(top_values) < 3):
                top_values.append([round(probability,4), label])
            else:
                # Find the minimum value in the top_values list
                tops = [i[0] for i in top_values]
                min_value = min(tops)

                # Replace the minimum value with item_value if it's larger
                if probability > min_value:
                    min_index = tops.index(min_value)
                    top_values[min_index] = [round(probability,4), label]

                # print(f"Category: {label}\tProbability: {probability:.4f}")
        # print("----------------------------------------")
        # print(sentence)
        # print("----------------------------------------")
        r = []
        for t in (top_values):
            r.append(t[1])
            # print(f"{t[1]} - {100*t[0]}")
        return r

# def getClientType(query:str) -> [str]:
    
#     X_new = vectorizer.transform([query])
    
#     # Make predictions using the loaded model
#     predictions = clientClassify.predict(X_new)
#     # You can also use model.predict_proba(X_new) if you need probability scores

#     return predictions

app = Flask(__name__)
CORS(app)

app.static_url_path='/static'
app.static_folder='static'

@app.route('/')
def hi():
    # ip = request.remote_addr  # Get the IP address of the user
    # response = requests.get(f"http://api.ipstack.com/{ip}?access_key=bbccbd3f1f37d9562e10a53cd69445f7")
    # data = response.json()
    # print(data)
    # city = data.get('city', 'Unknown')
    # state = data.get('region_name', 'Unknown')
    # country = data.get('country_name', 'Unknown')
    
    return jsonify(f'Hello, Mumbai!')

@app.route('/1')
def hi2():
    file = os.path.join(os.getcwd(), 'model', 'case_vectorizer.pkl')
    with open(file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    return jsonify(f'Hello, Mumbai!')


@app.route('/api/rate')
def rate():
    r = request.json.get("rate")
    r = float(r)
    
    if(r>5):return 'Error',400
    
    return jsonify('ok')


# @app.route('/api/query', methods=['POST'])
@app.route('/api/query',methods=['POST','GET'])
def query():
    # Translate
    q = request.json.get('query')

    q = translateChecks(q)

    # Case Classify
    cases = getCaseType(q)

    # Client Classify
    # clientType = getClientType(q)
    clientType =[""]

    # Find Location
    lat = request.json.get('latitude')
    lon = request.json.get('longitude')
    state = findLocation(float(lat),float(lon))
    
    # Recommend Model
    client = {
        "clientType" : clientType,
        "caseType" : cases,
        "location" : state,
        "languages" : ["English","Hindi"],
        "budget" : 300
    }
    finals = recommendedLawyers(client)

    return jsonify(finals)
    # process query
    # example result
    ans = {
    "name": "Jayesh Kapur",
    "experience": 23,
    "typesOfCases": [
        "Immigration Law",
        "Medical Law"
    ],
    "location": "Bangalore",
    "possibleClients": "Large Corporations",
    "ClientFeedback": 5.0,
    "jurisdiction": "High Court",
    "price": 242.45,
    "avgDaysOfDisposal": 100,
    "languages": [
        "Telugu",
        "Urdu",
        "Tamil"
    ]
}
    return jsonify([ans])


@app.route('/api/form',methods=['POST','GET'])
def form():
    try:
        l = {
            "name": str(request.json.get('name')),
            "id": str(uuid.uuid4()),
            "experience": int(request.json.get('experience')),
            "speciality": (request.json.get('speciality')),
            "location": str(request.json.get('location')),
            "clientType": str(request.json.get('clientType')),
            "rating": random.uniform(0.0, 5.0),
            "jurisdiction": str(request.json.get('jurisdiction')),
            "price": float(request.json.get('price')),
            "avgDaysOfCompletion": int(request.json.get('avgDaysOfCompletion')),
            "languages": (request.json.get('languages')),
            "gender": str(request.json.get('gender'))
        }

        with open('lawyers.json', 'r') as file:
            data = json.load(file)

        data.append(l)
        print(data[-1])
        with open('lawyers.json', 'w') as file:
            json.dump(data, file, indent=4)

        return "ok"
    except:
        return "",400


    return "ok"

if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0")
