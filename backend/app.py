from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from opensearchpy import OpenSearch

app = Flask(__name__)
CORS(app)
# Initialize the OpenSearch client
client = OpenSearch(
    hosts=[{'host': 'localhost', 'port': 9200}],
    http_compress=True
)

# Root route
@app.route('/')
def index():
    return "Welcome to the EpiRecipes API!"

# API endpoint to handle search queries
@app.route('/search', methods=['GET'])
def search():
    keyword = request.args.get('q', '')  # Get the search query from the request
    response = client.search(
        body={
            "query": {
                "multi_match": {
                    "query": keyword,
                    "fields": ["title^2", "ingredients"]  # You can change this based on your fields
                }
            }
        }
    )
    return jsonify(response['hits']['hits'])  # Return the search results as JSON

if __name__ == '__main__':
    app.run(debug=True)
