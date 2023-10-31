import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import joblib

data = pd.read_csv('ClientClassifyData.csv', encoding='latin1')  
data['caseDescription'] = data['caseDescription'].str.lower().str.replace('[^\w\s]', '')


pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(max_features=5000)),
    ('model', MultinomialNB())
])

X = data['caseDescription']
y = data['clientType']

pipeline.fit(X, y)

joblib.dump(pipeline, 'client.joblib')

new_sentences = ["Two brothers were tenant of a landlord in a commercial property.One brother had one son and a daughter (both minor) when he got divorced with his wife.The children's went into mother's custody at the time of divorce and after some years the husband (co tenant) also died. Now can the children of the deceased brother(co tenant) claim the right","Our company is being sued for money laundering using foreign shell companies. The plaintiffs allege that the corporation used a network of shell companies to move billions of dollars in illicit proceeds from its various business operations around the world.The corporation denies all of the allegations. It claims that the shell companies were used for legitimate business purposes, such as protecting its intellectual property and trade secrets. It also claims that the funds were not illicit proceeds, but rather legitimate profits from its business operations", "The government alleges that My shop has been stockpiling essential goods, such as food and fuel, in order to create a shortage and drive up prices. My business denies these allegations and claim that it is simply stocking up on inventory in order to meet the needs of its customers. This is not setting prices artificially high, and that its prices are simply reflecting the increased cost of goods."]


predictions = pipeline.predict(new_sentences)

print("Predictions for new sentences:")
for sentence, prediction in zip(new_sentences, predictions):
    print(f"Sentence: '{sentence}'\nCategory: {prediction}\n")