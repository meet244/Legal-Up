import json
import faiss
import numpy as np
from sklearn.preprocessing import LabelEncoder

with open("lawyers.json", 'r') as file:
    data_list = json.load(file)

loaded_index = faiss.read_index("index_file.index")
loaded_vectors = np.load("vectors.npy")

label_encoder = LabelEncoder()
label_encoder.fit([data["location"] for data in data_list])

def search_lawyers(query, k=5):
    query_attributes = ["experience", "rating", "price", "avgDaysOfCompletion"]
    query_location = label_encoder.transform([query['location']])[0]
    # q_numeric_vector = [query[attr] for attr in query_attributes]
    q_numeric_vector = [query[attr] for attr in query_attributes]
    q_numeric_vector = np.array(q_numeric_vector, dtype='float32')
    query_vector = np.concatenate((q_numeric_vector, [query_location]))

    # search
    query_vector = query_vector.reshape(1, -1).astype('float32')
    D, I = loaded_index.search(query_vector, k)

    #top-k lawyers
    top_lawyers = [data_list[i] for i in I[0]]

    return top_lawyers

sample_query = {
    "experience": 10,
    "rating": 4.5,
    "price": 200,
    "avgDaysOfCompletion": 30,
    "location": "Kolkata",
    "languages": ["English", "Spanish"],
    "speciality": ["Criminal", "Defense"]
}

# result = search_lawyers(sample_query)
result = search_lawyers(sample_query)

print("Top Lawyers for the Query:")
# for i, lawyer in result:
for i, lawyer in enumerate(result):
    print(f"Rank {i+1}: {lawyer['name']} - Location: {lawyer['location']}")

