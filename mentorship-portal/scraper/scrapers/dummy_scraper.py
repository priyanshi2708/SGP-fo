from db.mongo import MongoDBConnection

class Scraper:
    def __init__(self):
        self.db_connection = MongoDBConnection()

    def scrape_and_store(self):
        """
        Scrape dummy data and store it in MongoDB
        """
        # Connect to MongoDB
        db = self.db_connection.connect()
        if not db:
            print("Failed to connect to MongoDB")
            return

        # Dummy domains data
        domains = [
            {
                'name': 'Web Development',
                'description': 'Frontend and Backend web development technologies',
                'status': 'active'
            },
            {
                'name': 'Data Science',
                'description': 'Machine Learning, AI, and Data Analysis',
                'status': 'active'
            },
            {
                'name': 'Cloud Computing',
                'description': 'AWS, Azure, and GCP cloud platforms',
                'status': 'active'
            }
        ]

        # Dummy courses data
        courses = [
            {
                'title': 'Introduction to React',
                'description': 'Learn React fundamentals',
                'level': 'beginner'
            },
            {
                'title': 'Advanced Python',
                'description': 'Master advanced Python concepts',
                'level': 'advanced'
            },
            {
                'title': 'AWS Basics',
                'description': 'Get started with AWS cloud services',
                'level': 'beginner'
            }
        ]

        # Dummy mentors data
        mentors = [
            {
                'name': 'John Doe',
                'email': 'john@example.com',
                'expertise': 'Web Development',
                'experience': 10,
                'bio': 'Full-stack developer with 10 years of experience',
                'status': 'active'
            },
            {
                'name': 'Jane Smith',
                'email': 'jane@example.com',
                'expertise': 'Data Science',
                'experience': 8,
                'bio': 'Data scientist and ML engineer',
                'status': 'active'
            },
            {
                'name': 'Mike Johnson',
                'email': 'mike@example.com',
                'expertise': 'Cloud Computing',
                'experience': 12,
                'bio': 'Cloud architect and DevOps expert',
                'status': 'active'
            }
        ]

        # Insert data into MongoDB
        try:
            # Insert domains
            print("\n--- Inserting Domains ---")
            self.db_connection.insert_many_documents('domains', domains)

            # Insert courses
            print("\n--- Inserting Courses ---")
            self.db_connection.insert_many_documents('courses', courses)

            # Insert mentors
            print("\n--- Inserting Mentors ---")
            self.db_connection.insert_many_documents('mentors', mentors)

            # Verify data
            print("\n--- Verifying Data ---")
            print(f"Total Domains: {len(self.db_connection.find_all('domains'))}")
            print(f"Total Courses: {len(self.db_connection.find_all('courses'))}")
            print(f"Total Mentors: {len(self.db_connection.find_all('mentors'))}")

            print("\nData successfully scraped and stored!")

        except Exception as e:
            print(f"Error during scraping: {e}")

        finally:
            self.db_connection.disconnect()

if __name__ == '__main__':
    scraper = Scraper()
    scraper.scrape_and_store()
