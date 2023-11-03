from flask import Flask, jsonify, request
import json
from gradio_client import Client
from googletrans import Translator
from geopy.geocoders import Nominatim
from flask_cors import CORS

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
    with open('lawyers.json','r') as f :
        lawyers = json.load(f)
    
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
    # print(location.raw["address"]["state"])  

def preprocess_text(text):
    text = text.lower()
    text = text.replace("[^\w\s]", "")
    return text

def getCaseClient(query:str)->([str],str):

    client = Client("https://meet244-legal-up-lawyer-recommendation-system.hf.space/--replicas/2nzx9/")
    result = client.predict(
            query,	# str  in 'Legal Case'
            api_name="/predict"
    )
    return (result[0].split(", "),result[1])

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

    cases,clientType = getCaseClient(q)
    
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
    return "ok"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")