from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/')
def hi():
    return jsonify('Hello, World!')


@app.route('/api/lawer')
def lawer():

    return jsonify('Hello, World!')


# @app.route('/api/query', methods=['POST'])
@app.route('/api/query')
def query():
    q = request.json.get('query')
    print(q)
    # process query
    # example result
    ans = {
    "name": "Jayesh Kapur",
    "experience": 23,
    "typesOfCases": [
        "Immigration Law",
        "Medical Law"
    ],
    "location": "Bangalore",
    "possibleClients": "Large Corporations",
    "ClientFeedback": 5.0,
    "jurisdiction": "High Court",
    "price": 242.45,
    "avgDaysOfDisposal": 100,
    "languages": [
        "Telugu",
        "Urdu",
        "Tamil"
    ]
}
    return jsonify([ans])


if __name__ == '__main__':
    app.run(debug=True)
