# 🏫 Institution Data Ingestion Module - IIT Bombay

## 📋 Module Overview

This is a complete proof-of-concept implementation that demonstrates:
- **Python Scraper** → Scrapes institution data
- **MongoDB** → Stores institution documents
- **Node.js API** → Exposes data via REST endpoints
- **React Frontend** → Displays institutions beautifully

---

## 🎯 What's Implemented

### 1. Python Scraper (`scraper/`)

#### Files:
- **`db/mongo.py`** - MongoDB connection class with CRUD operations
- **`scrapers/iitb_scraper.py`** - IIT Bombay data ingestion
- **`requirements.txt`** - Updated with requests and BeautifulSoup4

#### Data Scraped:
```python
{
  'name': 'Indian Institute of Technology Bombay',
  'location': 'Mumbai, Maharashtra, India',
  'domains': [
    'Computer Science and Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    # ... 9 more domains
  ],
  'established': 1958,
  'website': 'https://www.iitb.ac.in',
  'description': 'Prestigious engineering and technology institute in India',
  'status': 'active'
}
```

### 2. Node.js Backend (`server/`)

#### New Files:
- **`src/models/Institution.js`** - Mongoose schema with fields:
  - `name` (String, unique, required)
  - `location` (String, required)
  - `domains` (Array of Strings, required)
  - `established` (Number)
  - `website` (String)
  - `description` (String)
  - `status` (String enum: active/inactive)

- **`src/controllers/institutionController.js`** - Controller functions:
  - `getInstitutions()` - Fetch all institutions
  - `getInstitutionById(id)` - Fetch single institution
  - `createInstitution()` - Create new institution

- **`src/routes/institutionRoutes.js`** - Routes:
  - `GET /api/institutions` - List all
  - `GET /api/institutions/:id` - Get by ID
  - `POST /api/institutions` - Create new

#### Updated Files:
- **`src/app.js`** - Imported and registered `institutionRoutes`

### 3. React Frontend (`client/`)

#### New Files:
- **`src/pages/Institutions/Institutions.jsx`** - Complete page with:
  - Fetch institutions on component mount
  - Display loading and error states
  - Show institution details in cards
  - Grid layout for domains
  - Status badges

#### Updated Files:
- **`src/services/api.js`** - Added `institutionAPI` object with:
  - `getInstitutions()`
  - `getInstitutionById(id)`
  - `createInstitution(data)`
- **`src/App.jsx`** - Added `/institutions` route
- **`src/components/layout/Sidebar.jsx`** - Added navigation link

---

## 🚀 Quick Start Guide

### Step 1: Install Python Dependencies

```bash
cd mentorship-portal/scraper
pip install -r requirements.txt
```

### Step 2: Run the Scraper

```bash
cd mentorship-portal/scraper
python -m scrapers.iitb_scraper
```

**Expected Output:**
```
🔍 Starting IIT Bombay data ingestion...
✅ MongoDB connected successfully
✅ IIT Bombay data successfully stored in MongoDB
📊 Document ID: 507f1f77bcf86cd799439011
📍 Institution: Indian Institute of Technology Bombay
📍 Location: Mumbai, Maharashtra, India
🎓 Domains: 12 domains
```

### Step 3: Start the Backend Server

```bash
cd mentorship-portal/server
npm install  # if not already done
npm run dev
```

**Expected Output:**
```
✅ MongoDB connected successfully
📊 Database: Mentorship-Portal
🔗 Connection URI: mongodb://localhost:27017/Mentorship-Portal
🚀 Server Information:
   Port: 5000
   Environment: development
   Server is running on http://localhost:5000
```

### Step 4: Start the Frontend

```bash
cd mentorship-portal/client
npm install  # if not already done
npm run dev
```

**Expected Output:**
```
VITE v... ready in ... ms

➜  Local:   http://localhost:5173/
```

### Step 5: Access the Application

1. Open **`http://localhost:5173`** in your browser
2. Click on **"Institutions"** in the sidebar
3. See your scraped IIT Bombay data displayed beautifully!

---

## 📊 API Endpoints

### Health Check
```
GET http://localhost:5000/health
```

**Response:**
```json
{
  "status": "Server is running",
  "timestamp": "2024-01-22T10:30:45.123Z",
  "environment": "development"
}
```

### Get All Institutions
```
GET http://localhost:5000/api/institutions
```

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Indian Institute of Technology Bombay",
      "location": "Mumbai, Maharashtra, India",
      "domains": ["Computer Science...", "Electrical Engineering", ...],
      "established": 1958,
      "website": "https://www.iitb.ac.in",
      "description": "Prestigious engineering and technology institute in India",
      "status": "active",
      "createdAt": "2024-01-22T10:30:45.123Z",
      "updatedAt": "2024-01-22T10:30:45.123Z"
    }
  ],
  "count": 1,
  "timestamp": "2024-01-22T10:30:45.123Z"
}
```

### Get Single Institution
```
GET http://localhost:5000/api/institutions/:id
```

### Create Institution
```
POST http://localhost:5000/api/institutions

Body:
{
  "name": "Stanford University",
  "location": "Stanford, California, USA",
  "domains": ["Computer Science", "Engineering", "Medicine"],
  "established": 1885,
  "website": "https://www.stanford.edu",
  "description": "Leading research university",
  "status": "active"
}
```

---

## 🗂️ Complete File Structure

```
mentorship-portal/
├── scraper/
│   ├── requirements.txt              ✏️ Updated
│   ├── db/
│   │   └── mongo.py                 ✏️ Existing (functional)
│   └── scrapers/
│       ├── dummy_scraper.py
│       └── iitb_scraper.py           ✨ NEW
├── server/
│   ├── .env                         ✏️ Existing
│   ├── .env.example                 ✏️ Existing
│   ├── src/
│   │   ├── app.js                   ✏️ Updated (added institutionRoutes)
│   │   ├── server.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   ├── Course.js
│   │   │   ├── Domain.js
│   │   │   ├── Mentor.js
│   │   │   └── Institution.js        ✨ NEW
│   │   ├── controllers/
│   │   │   ├── dashboardController.js
│   │   │   └── institutionController.js  ✨ NEW
│   │   └── routes/
│   │       ├── dashboardRoutes.js
│   │       └── institutionRoutes.js    ✨ NEW
│   └── package.json
└── client/
    ├── src/
    │   ├── App.jsx                  ✏️ Updated (added route)
    │   ├── services/
    │   │   └── api.js               ✏️ Updated (added institutionAPI)
    │   ├── components/
    │   │   └── layout/
    │   │       └── Sidebar.jsx       ✏️ Updated (added nav link)
    │   └── pages/
    │       ├── Dashboard/
    │       ├── Domains/
    │       ├── Mentors/
    │       └── Institutions/         ✨ NEW
    │           └── Institutions.jsx
    └── package.json
```

---

## 🔄 Data Flow Diagram

```
Python Scraper (iitb_scraper.py)
          ↓
   Scrapes IIT Bombay Data
          ↓
   MongoDB (institutions collection)
          ↓
   Express API (/api/institutions)
          ↓
   React Component (Institutions.jsx)
          ↓
   Browser Display
```

---

## 📝 Key Implementation Details

### Python (Scraper)

**Connection:**
```python
from db.mongo import MongoDBConnection

db_connection = MongoDBConnection()
db = db_connection.connect()
db_connection.insert_document('institutions', data)
```

### Node.js (Backend)

**Model:**
```javascript
const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  domains: { type: [String], required: true },
  // ... other fields
})
```

**Controller:**
```javascript
export const getInstitutions = async (req, res) => {
  const institutions = await Institution.find()
  res.json({ data: institutions, count: institutions.length })
}
```

**Routes:**
```javascript
router.get('/', getInstitutions)
router.post('/', createInstitution)
```

### React (Frontend)

**API Call:**
```javascript
const { institutionAPI } = from '../../services/api'

useEffect(() => {
  institutionAPI.getInstitutions()
    .then(res => setInstitutions(res.data.data))
    .catch(err => setError(err.message))
}, [])
```

---

## ✅ Testing the Module

### 1. Test MongoDB Connection
```bash
# In Python
python -c "from db.mongo import MongoDBConnection; db = MongoDBConnection(); db.connect()"
```

### 2. Test API Endpoint
```bash
# In terminal
curl http://localhost:5000/api/institutions
```

### 3. Test React Component
- Navigate to `/institutions` in the browser
- Should display the scraped institution data

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
❌ MongoDB connection error
```
**Fix:** Ensure MongoDB is running and `MONGODB_URI` in `.env` is correct

### Scraper Not Finding Data
```
⚠️  Institution already exists in database
```
**Fix:** Data already inserted. To re-insert, delete the document from MongoDB:
```javascript
db.institutions.deleteOne({ name: 'Indian Institute of Technology Bombay' })
```

### API Returns Empty Array
```json
{ "data": [], "count": 0 }
```
**Fix:** Run the scraper first to populate the database

### React Shows "Failed to Fetch"
**Fix:** Ensure:
1. Backend server is running on port 5000
2. CORS is enabled in `app.js`
3. Check browser console for specific error

---

## 📦 Dependencies Added

### Python
```
requests==2.31.0        # HTTP requests
beautifulsoup4==4.12.2  # Web scraping
```

### Node.js
- Already have: express, mongoose, cors, dotenv

### React
- Already have: axios, react, react-router-dom

---

## 🎓 Learning Outcomes

This module demonstrates:
✅ Python-MongoDB integration with pymongo
✅ RESTful API design with Express
✅ React hooks (useState, useEffect)
✅ Axios for API calls
✅ Error handling and loading states
✅ Component lifecycle management
✅ Full-stack data flow (Python → MongoDB → Node → React)

---

## 📌 Notes

- All code uses **ES modules** (`import`/`export`)
- **No authentication** required for this PoC
- **Minimal UI** styling (using inline styles)
- Data is **hardcoded** (not fetched from web) for reliability
- Ready for **production** enhancements

---

## 🚀 Next Steps (Future Enhancements)

1. Add **real web scraping** instead of hardcoded data
2. Implement **authentication** (JWT/OAuth)
3. Add **input validation** on backend
4. Create **database indexes** for performance
5. Add **CSS styling** for better UI
6. Implement **pagination** for large datasets
7. Add **error recovery** mechanisms
8. Create **unit tests** for all components

---

**Status**: ✅ Complete and Runnable!
