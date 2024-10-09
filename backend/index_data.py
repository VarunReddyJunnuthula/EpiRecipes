import json
from opensearchpy import OpenSearch

client = OpenSearch(
    hosts=[{'host': 'localhost', 'port': 9200}]
)

# Load dataset
with open('epirecipes.json','r') as f:
    recipes = json.load(f)

for recipe in recipes:
    client.index(index='recipes', body=recipe)
