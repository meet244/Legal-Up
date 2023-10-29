import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report

# Step 1: Load your labeled dataset (you need to prepare this dataset)
data = pd.read_csv('queryData.csv', encoding='latin1')  # Modify this with your dataset

# Step 2: Text Preprocessing (you may need to customize this based on your data)
# Example: Tokenization, lowercase, and remove punctuation
data['Query'] = data['Query'].str.lower().str.replace('[^\w\s]', '')

# Step 3: Feature Extraction (TF-IDF Vectorization)
vectorizer = TfidfVectorizer(max_features=5000)
X = vectorizer.fit_transform(data['Query'])
y = data['Topic']

# Step 4: Model Selection and Training (Multinomial Naive Bayes)
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = MultinomialNB()
# model.fit(X_train, y_train)
model.fit(X, y)

# Step 6: Model Evaluation
# y_pred = model.predict(X_test)
# accuracy = accuracy_score(y_test, y_pred)
# print(f'Accuracy: {accuracy:.2f}')
# print(classification_report(y_test, y_pred))

# Step 7: Use the trained model to classify new sentences
new_sentences = ["Two brothers were tenant of a landlord in a commercial property.One brother had one son and a daughter (both minor) when he got divorced with his wife.The children's went into mother's custody at the time of divorce and after some years the husband (co tenant) also died. Now can the children of the deceased brother(co tenant) claim the right", "If a co-tenant dies, their share of the income from the commercial property will be taxed as part of their estate. The surviving co-tenant(s) will continue to be taxed on their share of the income.","I am a filmmaker and I am working on a new movie. I want to make sure that I do not infringe on any copyrights in my film. Can you help me review my script and identify any potential copyright issues?","I am a US citizen who is married to a foreign national. My spouse wants to immigrate to the United States. Can you help me file a petition for my spouse and assist them with the immigration process?","I was recently injured in a medical malpractice incident. I am considering filing a lawsuit against the doctor or hospital. Can you help me assess the strength of my case and advise me on how to proceed?"]
X_new = vectorizer.transform(new_sentences)
# predictions = model.predict(X_new)
predictions = model.predict_proba(X_new)
print("Predictions for new sentences:")
# for sentence, prediction in zip(new_sentences, predictions):
    # print(f"Sentence: '{sentence}'\tCategory: {prediction}")
maxing = 0.00
# ret = [{1:["family",9.99]}]
for sentence, prob in zip(new_sentences, predictions):
    top_values = []
    labels = model.classes_
    for label, probability in zip(labels, prob):
        # Add the item_value to the top_values list if it's one of the top 3 values
        if len(top_values) < 3:
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
    print("----------------------------------------")
    print(sentence)
    print("----------------------------------------")
    for t in (top_values):
        print(f"{t[1]} - {100*t[0]}")
    

