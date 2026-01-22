# 📊 Institution Data Ingestion Module - Visual Guide

## 🔄 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     USER BROWSER                                │
│          http://localhost:5173/institutions                     │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ 1. User clicks "Institutions"
                         │
        ┌────────────────▼────────────────┐
        │  React Component                 │
        │  ├─ Institutions.jsx             │
        │  ├─ useState (institutions)      │
        │  ├─ useEffect (fetch data)       │
        │  └─ render (display)             │
        └────────────────┬────────────────┘
                         │
                         │ 2. Axios API call
                         │ institutionAPI.getInstitutions()
                         │
        ┌────────────────▼────────────────┐
        │  Express.js API                 │
        │  ├─ Route: GET /api/institutions│
        │  ├─ Controller: getInstitutions │
        │  └─ Port: 5000                  │
        └────────────────┬────────────────┘
                         │
                         │ 3. Mongoose query
                         │ Institution.find()
                         │
        ┌────────────────▼────────────────┐
        │  MongoDB                         │
        │  ├─ Collection: institutions     │
        │  ├─ Database: Mentorship-Portal │
        │  └─ Document: IIT Bombay data   │
        └─────────────────────────────────┘
```

## 🏗️ Architecture Layers

```
┌─────────────────────────────────────────┐
│     PRESENTATION LAYER (Frontend)       │
├─────────────────────────────────────────┤
│  Institutions.jsx                       │
│  ├─ Fetches data                        │
│  ├─ Shows loading state                 │
│  ├─ Displays institutions               │
│  └─ Handles errors                      │
└─────────────────┬───────────────────────┘
                  │
                  │ HTTP (Axios)
                  │
┌─────────────────▼───────────────────────┐
│     APPLICATION LAYER (Backend)         │
├─────────────────────────────────────────┤
│  institutionRoutes.js                   │
│  ├─ GET /api/institutions               │
│  ├─ GET /api/institutions/:id           │
│  └─ POST /api/institutions              │
│                                         │
│  institutionController.js               │
│  ├─ getInstitutions()                   │
│  ├─ getInstitutionById()                │
│  └─ createInstitution()                 │
└─────────────────┬───────────────────────┘
                  │
                  │ Mongoose ODM
                  │
┌─────────────────▼───────────────────────┐
│     DATA LAYER (Database)               │
├─────────────────────────────────────────┤
│  Institution.js (Model/Schema)          │
│  ├─ name (String)                       │
│  ├─ location (String)                   │
│  ├─ domains ([String])                  │
│  ├─ established (Number)                │
│  ├─ website (String)                    │
│  ├─ description (String)                │
│  └─ status (Enum)                       │
│                                         │
│  MongoDB Collection: institutions       │
└─────────────────────────────────────────┘
```

## 🐍 Python Scraper Flow

```
START
  │
  ├─ Import MongoDBConnection
  │
  ├─ Create IITBombayScraper instance
  │
  ├─ Connect to MongoDB
  │  └─ Check connection ✓
  │
  ├─ Prepare institution data
  │  ├─ name
  │  ├─ location
  │  ├─ domains (12 items)
  │  ├─ established
  │  ├─ website
  │  └─ description
  │
  ├─ Check if already exists
  │  ├─ YES → Return early ✓
  │  └─ NO → Continue
  │
  ├─ Insert document into MongoDB
  │  └─ Returns: inserted_id ✓
  │
  ├─ Log success messages
  │  ├─ ✅ MongoDB connected
  │  ├─ ✅ Data successfully stored
  │  ├─ 📊 Document ID
  │  ├─ 📍 Institution name & location
  │  └─ 🎓 Number of domains
  │
  ├─ Disconnect from MongoDB
  │
END
```

## 📁 File Structure Tree

```
mentorship-portal/
│
├─ scraper/
│  ├─ requirements.txt ..................... ✏️ Updated
│  ├─ db/
│  │  └─ mongo.py .......................... (Existing)
│  └─ scrapers/
│     ├─ dummy_scraper.py ................. (Existing)
│     └─ iitb_scraper.py .................. ✨ NEW
│
├─ server/
│  ├─ .env ................................ (Configured)
│  ├─ .env.example ........................ (Configured)
│  ├─ .gitignore
│  ├─ package.json
│  ├─ MONGODB_SETUP.md
│  └─ src/
│     ├─ app.js ........................... ✏️ Updated
│     ├─ server.js
│     ├─ config/
│     │  └─ db.js
│     ├─ models/
│     │  ├─ Course.js
│     │  ├─ Domain.js
│     │  ├─ Mentor.js
│     │  └─ Institution.js ................ ✨ NEW
│     ├─ controllers/
│     │  ├─ dashboardController.js
│     │  └─ institutionController.js ...... ✨ NEW
│     └─ routes/
│        ├─ dashboardRoutes.js
│        └─ institutionRoutes.js .......... ✨ NEW
│
├─ client/
│  ├─ package.json
│  ├─ vite.config.js
│  ├─ index.html
│  └─ src/
│     ├─ App.jsx .......................... ✏️ Updated
│     ├─ main.jsx
│     ├─ services/
│     │  └─ api.js ........................ ✏️ Updated
│     ├─ context/
│     │  └─ AppContext.jsx
│     ├─ components/
│     │  ├─ common/
│     │  │  └─ Loader.jsx
│     │  └─ layout/
│     │     ├─ Navbar.jsx
│     │     └─ Sidebar.jsx ............... ✏️ Updated
│     ├─ pages/
│     │  ├─ Dashboard/
│     │  ├─ Domains/
│     │  ├─ Mentors/
│     │  └─ Institutions/ ................ ✨ NEW
│     │     └─ Institutions.jsx
│     └─ assets/
│        └─ styles/
│           └─ main.css
│
├─ IMPLEMENTATION_COMPLETE.md ............ 📖 Guide
├─ INSTITUTION_MODULE.md ................ 📖 Technical
├─ QUICK_START.md ....................... 📖 Quick ref
├─ IMPLEMENTATION_SUMMARY.md ............ 📖 Summary
├─ START_PROJECT.bat .................... 🚀 Windows
├─ START_PROJECT.sh ..................... 🚀 Mac/Linux
├─ SETUP_COMPLETE.md
└─ README.md
```

## 🔌 Component Relationships

```
┌──────────────────────────────────────────────────────────┐
│                     App.jsx                              │
│  Routes:                                                 │
│  ├─ / → Dashboard                                        │
│  ├─ /domains → Domains                                   │
│  ├─ /mentors → Mentors                                   │
│  └─ /institutions → Institutions ✨ NEW                 │
└──────────┬───────────────────────────────────────────────┘
           │
           ├─ Sidebar.jsx (Nav)
           │  ├─ Link to /
           │  ├─ Link to /domains
           │  ├─ Link to /mentors
           │  └─ Link to /institutions ✨ NEW
           │
           └─ Institutions.jsx ✨ NEW
              ├─ Imports: institutionAPI
              ├─ State: [institutions, loading, error]
              ├─ Hook: useEffect (fetch)
              └─ UI: Institution cards
                 ├─ Name
                 ├─ Location
                 ├─ Domains grid
                 └─ Status badge
```

## 🔄 Request/Response Cycle

### GET /api/institutions

**Request:**
```
GET /api/institutions HTTP/1.1
Host: localhost:5000
Content-Type: application/json
```

**Response:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Indian Institute of Technology Bombay",
      "location": "Mumbai, Maharashtra, India",
      "domains": [
        "Computer Science and Engineering",
        "Electrical Engineering",
        ...
      ],
      "established": 1958,
      "website": "https://www.iitb.ac.in",
      "description": "Prestigious engineering and technology institute in India",
      "status": "active",
      "createdAt": "2024-01-22T10:30:45.123Z",
      "updatedAt": "2024-01-22T10:30:45.123Z"
    }
  ],
  "count": 1,
  "timestamp": "2024-01-22T10:30:45.789Z"
}
```

## 🚀 Startup Sequence

```
Time  Component          Status           Output
─────────────────────────────────────────────────────────
 0s   Terminal 1         Start scraper
      Python Scraper     Running          🔍 Starting...
      ↓
      MongoDB            Connected        ✅ Connected
      ↓
      Insert Document    Success          ✅ Data stored
                                           📊 ID: ...

 2s   Terminal 2         Start backend
      Node.js            Starting         Loading...
      ↓
      Connect MongoDB    Connected        ✅ Connected
      ↓
      Express Server     Running          🚀 Listening on :5000
                                           
 4s   Terminal 3         Start frontend
      React/Vite         Building         Bundling...
      ↓
      Vite Dev Server    Running          ➜ Local: :5173
      
 5s   Browser            Opens
      User clicks        Navigation       Fetching...
      "Institutions"     ↓
      Component mounts   API call         GET /api/institutions
                         ↓
                         Success          200 OK
                                           
 6s   Display            Renders          ✅ IIT Bombay displayed!
```

## 📊 Data Model Diagram

```
Institution Document
├─ _id (ObjectId)
│  └─ Automatically generated by MongoDB
│
├─ name (String)
│  └─ "Indian Institute of Technology Bombay"
│
├─ location (String)
│  └─ "Mumbai, Maharashtra, India"
│
├─ domains ([String])
│  ├─ "Computer Science and Engineering"
│  ├─ "Electrical Engineering"
│  ├─ "Mechanical Engineering"
│  ├─ "Civil Engineering"
│  ├─ "Chemical Engineering"
│  ├─ "Aerospace Engineering"
│  ├─ "Metallurgical Engineering and Materials Science"
│  ├─ "Data Science"
│  ├─ "Artificial Intelligence"
│  ├─ "Cloud Computing"
│  ├─ "Biotechnology"
│  └─ "Environmental Science"
│
├─ established (Number)
│  └─ 1958
│
├─ website (String)
│  └─ "https://www.iitb.ac.in"
│
├─ description (String)
│  └─ "Prestigious engineering and technology institute in India"
│
├─ status (String)
│  └─ "active"
│
└─ Timestamps
   ├─ createdAt (Date)
   └─ updatedAt (Date)
```

## 🎯 Feature Implementation Map

```
┌─ SCRAPER ──────────────────────────────────────────┐
│                                                     │
│  ✅ Connect to MongoDB (PyMongo)                   │
│  ✅ Read MONGODB_URI from .env                     │
│  ✅ Prepare institution data                       │
│  ✅ Check for duplicates                           │
│  ✅ Insert into 'institutions' collection          │
│  ✅ Log all operations                             │
│  ✅ Error handling                                 │
│  ✅ Can be run standalone                          │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─ BACKEND ──────────────────────────────────────────┐
│                                                     │
│  ✅ Institution.js (Mongoose Schema)               │
│     ├─ name (required, unique)                     │
│     ├─ location (required)                         │
│     ├─ domains (required array)                    │
│     ├─ established, website, description           │
│     └─ status (enum: active/inactive)              │
│                                                     │
│  ✅ institutionController.js                       │
│     ├─ getInstitutions()                           │
│     ├─ getInstitutionById(id)                      │
│     └─ createInstitution()                         │
│                                                     │
│  ✅ institutionRoutes.js                           │
│     ├─ GET /                                       │
│     ├─ GET /:id                                    │
│     └─ POST /                                      │
│                                                     │
│  ✅ app.js Updated                                 │
│     └─ Registered institutionRoutes                │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─ FRONTEND ─────────────────────────────────────────┐
│                                                     │
│  ✅ Institutions.jsx (Complete Page)               │
│     ├─ Fetch data on mount                         │
│     ├─ Loading state                               │
│     ├─ Error handling with retry                   │
│     ├─ Display institution cards                   │
│     ├─ Domains grid layout                         │
│     ├─ Status badges                               │
│     └─ External links                              │
│                                                     │
│  ✅ api.js Updated                                 │
│     └─ institutionAPI object                       │
│        ├─ getInstitutions()                        │
│        ├─ getInstitutionById()                     │
│        └─ createInstitution()                      │
│                                                     │
│  ✅ App.jsx Updated                                │
│     └─ Added /institutions route                   │
│                                                     │
│  ✅ Sidebar.jsx Updated                            │
│     └─ Added institutions nav link                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## 🧪 Test Paths

```
Test 1: Scraper
  Run: python -m scrapers.iitb_scraper
  Verify: Document in MongoDB

Test 2: Database
  Run: Check MongoDB collection
  Verify: institutions collection exists

Test 3: API
  Run: curl http://localhost:5000/api/institutions
  Verify: Returns institution data

Test 4: Frontend
  Run: Click "Institutions" in sidebar
  Verify: Data displays on page

Test 5: Create New
  Run: POST to /api/institutions with data
  Verify: New institution appears in list
```

---

**All systems are ✅ GO for launch!**
