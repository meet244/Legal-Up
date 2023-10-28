import json
# Lawyer Data Format : 
# {
#     "name": "Arnav Dubey",
#     "experience": 29,
#     "speciality": [
#         "Tax",
#         "Intellectual Property",
#         "Criminal"
#     ],
#     "location": "Delhi",
#     "clientType": "Small Businesses",
#     "rating": 2.0,
#     "jurisdiction": "Specialized Court",
#     "price": 435.66,
#     "avgDaysOfCompletion": 119,
#     "languages": [
#         "Kannada",
#         "Urdu",
#         "Tamil"
#     ]
# }

# Client Request Format : 
# {
#     clientType : "Small Bussinesses" | "Individuals" | "Large Corporation",
#     caseType,    --> done
#     location,     
#     languages,(Default English , Hindi)
#     budget,   --> Default 250 
# }

with open('./newLawyers.json','r') as f : 
    lawyers = json.load(f)


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

def recommendedLawyers(lawyers, clientReqObj) : 
    recommendedMaleLawyers = []
    recommendedFemaleLawyers = []
    finalLawyerList = []
    
    for lawyer in lawyers :
        score = getMatchScore(lawyer,clientReqObj)
        if (lawyer["gender"] == "F") : 
            recommendedFemaleLawyers.append( tuple( (score, lawyer) ) )
        elif (lawyer["gender"] == "M") : 
            recommendedMaleLawyers.append( tuple( (score, lawyer) ) ) 
            
    recommendedFemaleLawyers = sorted(recommendedFemaleLawyers, key= sortFunction, reverse=True)
    recommendedMaleLawyers = sorted(recommendedMaleLawyers, key= sortFunction, reverse=True)
    
    for i in range(20) : 
        finalLawyerList.append(recommendedFemaleLawyers[i])
    for i in range(20) : 
        finalLawyerList.append(recommendedMaleLawyers[i])
        
    finalLawyerList = sorted(finalLawyerList, key= sortFunction, reverse=True)
        
    return finalLawyerList
    
cReq1 = {
    "clientType" : "Individual",
    "caseType" : ["Criminal"],
    "location" : "Delhi",
    "languages" : ["English","Hindi"],
    "budget" : 300
}

rL = recommendedLawyers(lawyers, cReq1)

for l in rL : 
    print(l)