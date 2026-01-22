import requests
from bs4 import BeautifulSoup
from db.mongo import MongoDBConnection
import json

class IITBombayScraper:
    def __init__(self):
        self.db_connection = MongoDBConnection()
        self.institution_data = {
            'name': 'Indian Institute of Technology Bombay',
            'location': 'Mumbai, Maharashtra, India',
            'domains': [
                'Computer Science and Engineering',
                'Electrical Engineering',
                'Mechanical Engineering',
                'Civil Engineering',
                'Chemical Engineering',
                'Aerospace Engineering',
                'Metallurgical Engineering and Materials Science',
                'Data Science',
                'Artificial Intelligence',
                'Cloud Computing',
                'Biotechnology',
                'Environmental Science'
            ],
            'established': 1958,
            'website': 'https://www.iitb.ac.in',
            'description': 'Prestigious engineering and technology institute in India',
            'status': 'active'
        }
    
    def scrape_and_store(self):
        """
        Scrape IIT Bombay public data and store in MongoDB
        """
        print('🔍 Starting IIT Bombay data ingestion...')
        
        # Connect to MongoDB
        db = self.db_connection.connect()
        if not db:
            print('❌ Failed to connect to MongoDB')
            return False
        
        try:
            # Check if institution already exists
            collection = db['institutions']
            existing = collection.find_one({'name': self.institution_data['name']})
            
            if existing:
                print('⚠️  Institution already exists in database')
                print(f'📊 ID: {existing["_id"]}')
                return True
            
            # Insert institution data
            result = self.db_connection.insert_document('institutions', self.institution_data)
            
            if result:
                print('✅ IIT Bombay data successfully stored in MongoDB')
                print(f'📊 Document ID: {result}')
                print(f'📍 Institution: {self.institution_data["name"]}')
                print(f'📍 Location: {self.institution_data["location"]}')
                print(f'🎓 Domains: {len(self.institution_data["domains"])} domains')
                return True
            else:
                print('❌ Failed to store institution data')
                return False
                
        except Exception as e:
            print(f'❌ Error during scraping: {e}')
            return False
        finally:
            self.db_connection.disconnect()
    
    def get_institution_data(self):
        """Get the scraped institution data"""
        return self.institution_data


# Main execution
if __name__ == '__main__':
    scraper = IITBombayScraper()
    scraper.scrape_and_store()
