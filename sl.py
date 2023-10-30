import streamlit as st
import pickle


clientClassify = None
with open('clientClassifyModel.pkl', 'rb') as modelFile:
    clientClassify = pickle.load(modelFile)

caseClassify = None
with open('caseClassifyModel.pkl', 'rb') as modelFile:
    caseClassify = pickle.load(modelFile)

caseVectorizer = None
with open('case_vectorizer.pkl', 'rb') as vectorizerFile:
    caseVectorizer = pickle.load(vectorizerFile)

clientVectorizer = None
with open('client_vectorizer.pkl', 'rb') as vectorizerFile:
    vectorizer = pickle.load(vectorizerFile)


def preprocess_text(text):
    text = text.lower()
    text = text.replace('[^\w\s]', '')
    return text

def getCaseType(query:str) -> [str]:

    input_text = preprocess_text(query)
    input_text_vectorized = caseVectorizer.transform([input_text])
    predictions = caseClassify.predict_proba(input_text_vectorized)
    max_one = ""
    max_prob = 0.0
    for sentence, prob in zip([query], predictions):
        top_values = []
        labels = caseClassify.classes_
        for label, probability in zip(labels, prob):
            max_prob = probability if(max_prob<probability) else max_prob
            max_one = label
            if(probability<0.08):continue
            if (len(top_values) < 3):
                top_values.append([round(probability,4), label])
            else:
                tops = [i[0] for i in top_values]
                min_value = min(tops)
                if probability > min_value:
                    min_index = tops.index(min_value)
                    top_values[min_index] = [round(probability,4), label]
        r = ""
        if(len(top_values)!=0):
            for t in top_values:
                if(r!=""):r+=', '
                r+=t[1]
        else:
            r+=max_one+' (Not Sure)'
        return r

def getClientType(query:str) -> str:
    
    X_new = vectorizer.transform([query])
    
    predictions = clientClassify.predict(X_new)
    
    return predictions[0]


st.title("Legal Up")

input_text = st.text_area("Enter Legal Case:", height=5)  # Set an initial height


if st.button("Submit"):

    if len(input_text.split()) < 40:
        st.error("Input is too less. Please enter at least 40 words.")
    else:

        caseType = getCaseType(input_text)
        st.write("Case Type:")
        st.success(caseType)
        # st.text_input("Case Type:", value=caseType, key="case_type", disabled=True)
        clientType = getClientType(input_text)
        st.write("Client Type:")
        st.success(clientType)
        # st.text_input("Client Type:", value=clientType, key="client_type",disabled=True)
