import json
import faiss
import numpy as np
from sklearn.preprocessing import LabelEncoder

with open("lawyers.json", 'r') as file:
    data_list = json.load(file)

numeric = ["experience", "rating", "price", "avgDaysOfCompletion"]
string = ["location", "languages", "speciality"]

# vector = []
n_vectors = []
s_vectors = []

label_encoder = LabelEncoder()
label_encoder.fit([data["location"] for data in data_list])

for data in data_list:
    # n_vector = [data for attr in numeric]
    n_vector = [data[attr] for attr in numeric]
    n_vector = np.array(n_vector, dtype='float32')
    n_vectors.append(n_vector)

    location_encoded = label_encoder.transform([data["location"]])
    location_vector = np.array(location_encoded, dtype='int64')
    s_vectors.append(location_vector)

combined_vectors = np.concatenate((n_vectors, s_vectors), axis=1)

index = faiss.IndexFlatL2(combined_vectors.shape[1])

# index.add(combined_vectors)
index.add(np.array(combined_vectors))

faiss.write_index(index, "index_file.index")
np.save("vectors.npy", np.array(combined_vectors))
