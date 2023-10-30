import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle
from sklearn.metrics import accuracy_score, classification_report

# Step 1: Load your labeled dataset (you need to prepare this dataset)
data = pd.read_csv('ClientClassifyData.csv', encoding='latin1')  # Modify this with your dataset

# Step 2: Text Preprocessing (you may need to customize this based on your data)
# Example: Tokenization, lowercase, and remove punctuation
data['caseDescription'] = data['caseDescription'].str.lower().str.replace('[^\w\s]', '')

# Step 3: Feature Extraction (TF-IDF Vectorization)
vectorizer = TfidfVectorizer(max_features=5000)
X = vectorizer.fit_transform(data['caseDescription'])
y = data['clientType']

# Step 4: Model Selection and Training (Multinomial Naive Bayes)
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = MultinomialNB()
# model.fit(X_train, y_train)
model.fit(X, y)

# Saving Model as Pickle
with open('clientClassifyModel.pkl', 'wb') as modelFile : 
    pickle.dump(model, modelFile)

with open('client_vectorizer.pkl', 'wb') as vectorizerFile:
    pickle.dump(vectorizer, vectorizerFile)

# Step 6: Model Evaluation
# y_pred = model.predict(X_test)
# accuracy = accuracy_score(y_test, y_pred)
# print(f'Accuracy: {accuracy:.2f}')
# print(classification_report(y_test, y_pred))

# Step 7: Use the trained model to classify new sentences
new_sentences = ["Two brothers were tenant of a landlord in a commercial property.One brother had one son and a daughter (both minor) when he got divorced with his wife.The children's went into mother's custody at the time of divorce and after some years the husband (co tenant) also died. Now can the children of the deceased brother(co tenant) claim the right","Our company is being sued for money laundering using foreign shell companies. The plaintiffs allege that the corporation used a network of shell companies to move billions of dollars in illicit proceeds from its various business operations around the world.The corporation denies all of the allegations. It claims that the shell companies were used for legitimate business purposes, such as protecting its intellectual property and trade secrets. It also claims that the funds were not illicit proceeds, but rather legitimate profits from its business operations", "The government alleges that My shop has been stockpiling essential goods, such as food and fuel, in order to create a shortage and drive up prices. My business denies these allegations and claim that it is simply stocking up on inventory in order to meet the needs of its customers. This is not setting prices artificially high, and that its prices are simply reflecting the increased cost of goods."]
X_new = vectorizer.transform(new_sentences)
predictions = model.predict(X_new)
# predictions = model.predict_proba(X_new)
print("Predictions for new sentences:")
for sentence, prediction in zip(new_sentences, predictions):
    print(f"Sentence: '{sentence}'\tCategory: {prediction}")

    

