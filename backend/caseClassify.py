import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import joblib

data1 = pd.read_csv('CaseClassifyData.csv', encoding='latin1') 
data2 = pd.read_csv("ClientClassifyData.csv")

data1['caseDescription'] = data1['caseDescription'].str.lower().str.replace('[^\w\s]', '')
data2['caseDescription'] = data2['caseDescription'].str.lower().str.replace('[^\w\s]', '')

x = []
y = []

for val in data1['caseDescription'] : 
    x.append(val)
    
for val in data2['caseDescription'] : 
    x.append(val)
    
for val in data1['caseType'] : 
    y.append(val)
    
for val in data2['caseType'] : 
    y.append(val)
    
print(len(x))
print(len(y))
    
model = MultinomialNB()

pipe = Pipeline([
    ('vectorizer', TfidfVectorizer(max_features=5000)),
    ('model', MultinomialNB()),
])

pipe.fit(x, y)

new_sentences = ["Two brothers were tenant of a landlord in a commercial property.One brother had one son and a daughter (both minor) when he got divorced with his wife.The children's went into mother's custody at the time of divorce and after some years the husband (co tenant) also died. Now can the children of the deceased brother(co tenant) claim the right", "If a co-tenant dies, their share of the income from the commercial property will be taxed as part of their estate. The surviving co-tenant(s) will continue to be taxed on their share of the income.","I am a filmmaker and I am working on a new movie. I want to make sure that I do not infringe on any copyrights in my film. Can you help me review my script and identify any potential copyright issues?","I am a US citizen who is married to a foreign national. My spouse wants to immigrate to the United States. Can you help me file a petition for my spouse and assist them with the immigration process?","I was recently injured in a medical malpractice incident. I am considering filing a lawsuit against the doctor or hospital. Can you help me assess the strength of my case and advise me on how to proceed?"]

joblib.dump(pipe, 'case.joblib')

new_sentences = [sentence.lower().replace('[^\w\s]', '') for sentence in new_sentences]

predictions = pipe.predict_proba(new_sentences)

print("Predictions for new sentences:")
for sentence, prob in zip(new_sentences, predictions):
    top_values = []
    labels = pipe.named_steps['model'].classes_
    for label, probability in zip(labels, prob):
        if len(top_values) < 3:
            top_values.append([round(probability, 4), label])
        else:
            tops = [i[0] for i in top_values]
            min_value = min(tops)
            if probability > min_value:
                min_index = tops.index(min_value)
                top_values[min_index] = [round(probability, 4), label]

    print("----------------------------------------")
    print(sentence)
    print("----------------------------------------")
    for t in top_values:
        print(f"{t[1]} - {round(100 * t[0], 2)}")