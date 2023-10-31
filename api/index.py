from flask import Flask, jsonify, request
import json
import uuid
import random
import joblib
import os
from googletrans import Translator
from geopy.geocoders import Nominatim
from flask_cors import CORS


clientClassify = None
with open('client.joblib', 'rb') as modelFile:
    clientClassify = joblib.load(modelFile)

caseClassify = None
with open('case.joblib', 'rb') as modelFile:
    caseClassify = joblib.load(modelFile)



def translateChecks(text: str) -> str:
    translator = Translator()

    
    
    

    
    print(text)
    detected_lang = translator.detect(text).lang

    if detected_lang != "en":
        
        translated_text = translator.translate(text, dest="en")
        return translated_text
    return text
    
    
    


def getMatchScore(lawyerObj, clientReqObj):
    totalPoints = 0

    
    caseTypePoints = 0
    for cCaseType in clientReqObj["caseType"]:
        for lCaseType in lawyerObj["speciality"]:
            if lCaseType == cCaseType:
                if caseTypePoints == 0:
                    caseTypePoints += 10
                else:
                    caseTypePoints += 5

    totalPoints += caseTypePoints

    
    languagePoints = 0
    for cLang in clientReqObj["languages"]:
        for lLang in lawyerObj["languages"]:
            if lLang == cLang:
                if languagePoints == 0:
                    languagePoints += 10
                else:
                    languagePoints += 2

    totalPoints += languagePoints

    
    budgetPoints = 0
    a = max(clientReqObj["budget"], lawyerObj["price"])
    b = min(clientReqObj["budget"], lawyerObj["price"])
    diff = a - b
    if diff < 250:
        diff = int(diff / 250)
        budgetPoints += diff

    totalPoints += budgetPoints

    
    locationPoint = 0
    if clientReqObj["location"] == lawyerObj["location"]:
        locationPoint += 10
    totalPoints += locationPoint

    
    totalPoints += lawyerObj["rating"] * 2

    
    return totalPoints


def sortFunction(t):
    return t[0]


def recommendedLawyers(clientReqObj) -> list:
    with open(os.path.join(os.getcwd(), 'dataset', 'lawyers.json'),'r') as f :
        lawyers = json.load(f)
    
    lawyers = []

    
    
    lawyerList = []

    for lawyer in lawyers:
        score = getMatchScore(lawyer, clientReqObj)
        lawyerList.append((score, lawyer))
        
        
        
        

    
    

    
    
    
    

    lawyerList = sorted(lawyerList, key=sortFunction, reverse=True)
    finalList = [obj for (s, obj) in lawyerList]

    return finalList[0:15]


def findLocation(latitude: float, longitude: float) -> str:
    geolocator = Nominatim(user_agent="my-app")
    location = geolocator.reverse(f"{latitude}, {longitude}")

    return location.raw["address"]["city_district"]  
    print(location.raw["address"]["state"])  


def preprocess_text(text):
    text = text.lower()
    text = text.replace("[^\w\s]", "")
    return text


def getCaseType(query:str) -> [str]:

    predictions = caseClassify.predict_proba(query)
    for sentence, prob in zip([query], predictions):
        top_values = []
        labels = caseClassify.classes_
        for label, probability in zip(labels, prob):
            
            if(probability<0.08):continue
            if (len(top_values) < 3):
                top_values.append([round(probability,4), label])
            else:
                
                tops = [i[0] for i in top_values]
                min_value = min(tops)

                
                if probability > min_value:
                    min_index = tops.index(min_value)
                    top_values[min_index] = [round(probability,4), label]

                
        
        
        
        r = []
        for t in (top_values):
            r.append(t[1])
            
        return r

def getClientType(query:str) -> [str]:
    predictions = clientClassify.predict(query)
    return predictions

app = Flask(__name__)
CORS(app)

app.static_url_path = "/static"
app.static_folder = "static"


@app.route("/")
def hi():
    return jsonify(f"Hello, There!")


@app.route("/api/rate")
def rate():
    r = request.json.get("rate")
    r = float(r)

    if r > 5:
        return "Error", 400

    return jsonify("ok")


@app.route("/api/query", methods=["POST", "GET"])
def query():
    
    q = request.json.get("query")

    q = translateChecks(q)

    
    cases = getCaseType(q)
    cases = [""]

    
    clientType = getClientType(q)
    clientType = [""]

    
    lat = request.json.get("latitude")
    lon = request.json.get("longitude")
    state = findLocation(float(lat), float(lon))

    
    client = {
        "clientType": clientType,
        "caseType": cases,
        "location": state,
        "languages": ["English", "Hindi"],
        "budget": 300,
    }
    finals = recommendedLawyers(client)

    return jsonify(finals)


@app.route("/api/form", methods=["POST", "GET"])
def form():
    try:
        l = {
            "name": str(request.json.get("name")),
            "id": str(uuid.uuid4()),
            "experience": int(request.json.get("experience")),
            "speciality": (request.json.get("speciality")),
            "location": str(request.json.get("location")),
            "clientType": str(request.json.get("clientType")),
            "rating": random.uniform(0.0, 5.0),
            "jurisdiction": str(request.json.get("jurisdiction")),
            "price": float(request.json.get("price")),
            "avgDaysOfCompletion": int(request.json.get("avgDaysOfCompletion")),
            "languages": (request.json.get("languages")),
            "gender": str(request.json.get("gender")),
        }

        with open("lawyers.json", "r") as file:
            data = json.load(file)

        data.append(l)
        print(data[-1])
        with open("lawyers.json", "w") as file:
            json.dump(data, file, indent=4)

        return "ok"
    except:
        return "", 400


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")