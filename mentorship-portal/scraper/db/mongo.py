import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

class MongoDBConnection:
    def __init__(self):
        self.uri = os.getenv('MONGODB_URI', 'mongodb://localhost:27017/')
        self.db_name = os.getenv('DB_NAME', 'mentorship_portal')
        self.client = None
        self.db = None

    def connect(self):
        try:
            self.client = MongoClient(self.uri)
            self.db = self.client[self.db_name]
            print(f"Connected to MongoDB: {self.db_name}")
            return self.db
        except Exception as e:
            print(f"Error connecting to MongoDB: {e}")
            return None

    def disconnect(self):
        if self.client:
            self.client.close()
            print("Disconnected from MongoDB")

    def insert_document(self, collection_name, document):
        try:
            collection = self.db[collection_name]
            result = collection.insert_one(document)
            print(f"Inserted document with ID: {result.inserted_id}")
            return result.inserted_id
        except Exception as e:
            print(f"Error inserting document: {e}")
            return None

    def insert_many_documents(self, collection_name, documents):
        try:
            collection = self.db[collection_name]
            result = collection.insert_many(documents)
            print(f"Inserted {len(result.inserted_ids)} documents")
            return result.inserted_ids
        except Exception as e:
            print(f"Error inserting documents: {e}")
            return None

    def find_all(self, collection_name):
        try:
            collection = self.db[collection_name]
            documents = list(collection.find())
            return documents
        except Exception as e:
            print(f"Error finding documents: {e}")
            return None
