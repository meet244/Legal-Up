from langdetect import detect
# Things to find out
# location, typeOfCase, experience, priceRange, AvgDays, languages
# 
# sort
# 


query = "I am involved in a child custody dispute and need a lawyer to represent me in court."
query = "I am buying a house and need a lawyer to review the contract and represent me at closing."
query = "I was injured in an accident and need a lawyer to help me file a claim against the responsible party."
query = "I am considering divorce and need a lawyer to advise me on my rights and options.I have been served with divorce papers and need a lawyer to represent me in court.I am negotiating a divorce settlement and need a lawyer to protect my interests."
language = detect(query)
print(language)
      
import spacy

nlp = spacy.load("en_core_web_sm")
# query = "Client's query here"
doc = nlp(query)

entities = [(ent.text, ent.label_) for ent in doc.ents]
print(entities)
