# Mentorship Management Portal

A full-stack MERN (MongoDB, Express, React, Node.js) application with a Python scraper module for managing mentorship programs.

## Project Structure

```
mentorship-portal/
├── client/          # React Frontend
├── server/          # Node.js + Express Backend
├── scraper/         # Python Web Scraper
└── README.md
```

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Scraper
- Python 3
- PyMongo
- MongoDB

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB (running locally or cloud)

### Client Setup

```bash
cd client
npm install
```

Create `.env` file in client folder:
```
VITE_API_URL=http://localhost:5000/api
```

Run development server:
```bash
npm run dev
```

### Server Setup

```bash
cd server
npm install
```

Create `.env` file in server folder:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mentorship_portal
NODE_ENV=development
```

Run development server:
```bash
npm run dev
```

### Scraper Setup

```bash
cd scraper
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
python scrapers/dummy_scraper.py
```

## API Endpoints

- `GET /api/dashboard` - Dashboard statistics
- `GET /api/domains` - List all domains
- `GET /api/mentors` - List all mentors
- `GET /api/courses` - List all courses
- `GET /health` - Server health check

## Features

1. **Dashboard** - Overview statistics (domains, courses, mentors count)
2. **Domains** - View and manage mentorship domains
3. **Mentors** - View and manage mentor profiles
4. **Data Scraper** - Populate MongoDB with dummy data

## Running the Full Stack

1. Start MongoDB
2. Run the scraper to populate data: `python scrapers/dummy_scraper.py`
3. Start the backend: `npm run dev` (from server folder)
4. Start the frontend: `npm run dev` (from client folder)
5. Access the app at `http://localhost:5173`

## Notes

- This is a minimal, functional setup focused on connectivity
- UI is basic but responsive
- Data is fetched from MongoDB via Express API
- Proper error handling and loading states included

## License

ISC
