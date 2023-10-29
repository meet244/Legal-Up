import pandas as pd
import numpy as np
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

# Load the saved model
with open('caseClassifyModel.pkl', 'rb') as modelFile:
    model = pickle.load(modelFile)

# Load the saved vectorizer from the training process
with open('vectorizer.pkl', 'rb') as vectorizerFile:
    vectorizer = pickle.load(vectorizerFile)

# Text Preprocessing (same as in the training file)
def preprocess_text(text):
    text = text.lower()
    text = text.replace('[^\w\s]', '')
    return text

# Example input text
input_text = "Your input text goes here."

# Preprocess the input text
input_text = preprocess_text(input_text)

# Feature Extraction (TF-IDF Vectorization)
input_text_vectorized = vectorizer.transform([input_text])

# Make predictions using the loaded model
predicted_class = model.predict(input_text_vectorized)

# Print the predicted class
print("Predicted Class:", predicted_class[0])
