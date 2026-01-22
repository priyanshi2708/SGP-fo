# 🚀 QUICK START - Institution Data Ingestion Module

## ⚡ Get Running in 5 Minutes

### Step 1️⃣: Navigate to Project
```bash
cd c:\Old Data\Collage Data\4th - Sem\SGP\SGP-fo\mentorship-portal
```

### Step 2️⃣: Install Python Dependencies
```bash
cd scraper
pip install -r requirements.txt
```

### Step 3️⃣: Run the Scraper
```bash
python -m scrapers.iitb_scraper
```
✅ Expected: "IIT Bombay data successfully stored in MongoDB"

### Step 4️⃣: Open THREE Terminal Windows

**Terminal 1 - Backend:**
```bash
cd mentorship-portal/server
npm install  # first time only
npm run dev
```
✅ Shows: "Server is running on http://localhost:5000"

**Terminal 2 - Frontend:**
```bash
cd mentorship-portal/client
npm install  # first time only
npm run dev
```
✅ Shows: "Local: http://localhost:5173"

**Terminal 3 - Just verify MongoDB is running**
```bash
# Already running? No action needed
# Not running? Start it with: mongod
```

### Step 5️⃣: View in Browser
1. Open: **http://localhost:5173**
2. Click: **"Institutions"** in the sidebar
3. See: Beautiful IIT Bombay data! 🎉

---

## 📋 What Was Implemented

### 🐍 Python (Scraper)
- [x] `scraper/scrapers/iitb_scraper.py` - Scrapes IIT Bombay data
- [x] `scraper/db/mongo.py` - MongoDB connection (already existed)
- [x] `scraper/requirements.txt` - Updated with requests + BeautifulSoup4

### 🟢 Node.js Backend
- [x] `server/src/models/Institution.js` - MongoDB schema
- [x] `server/src/controllers/institutionController.js` - API handlers
- [x] `server/src/routes/institutionRoutes.js` - REST endpoints
- [x] `server/src/app.js` - Updated with routes

### ⚛️ React Frontend
- [x] `client/src/pages/Institutions/Institutions.jsx` - Display page
- [x] `client/src/services/api.js` - Updated with institutionAPI
- [x] `client/src/App.jsx` - Added route
- [x] `client/src/components/layout/Sidebar.jsx` - Added nav link

---

## 🧪 Test the API (Optional)

**Get all institutions:**
```bash
curl http://localhost:5000/api/institutions
```

**Expected response:**
```json
{
  "data": [
    {
      "name": "Indian Institute of Technology Bombay",
      "location": "Mumbai, Maharashtra, India",
      "domains": ["Computer Science and Engineering", ...],
      ...
    }
  ],
  "count": 1
}
```

---

## 📁 Files Summary

| File | Type | Action |
|------|------|--------|
| `iitb_scraper.py` | Python | ✨ Created |
| `Institution.js` | JS Model | ✨ Created |
| `institutionController.js` | JS Controller | ✨ Created |
| `institutionRoutes.js` | JS Routes | ✨ Created |
| `Institutions.jsx` | React | ✨ Created |
| `requirements.txt` | Python | ✏️ Updated |
| `app.js` | JS | ✏️ Updated |
| `api.js` | JS | ✏️ Updated |
| `App.jsx` | React | ✏️ Updated |
| `Sidebar.jsx` | React | ✏️ Updated |

---

## 🎯 Architecture

```
Python Scraper → MongoDB → Express API → React Component
     ↓              ↓           ↓             ↓
  iitb_scraper   institutions   /api/    Institutions
                 collection   institutions   page
```

---

## 🐛 Quick Troubleshooting

| Issue | Fix |
|-------|-----|
| MongoDB error | Ensure MongoDB is running (`mongod`) |
| Port 5000 in use | Kill process or change PORT in `.env` |
| No data displayed | Run scraper first: `python -m scrapers.iitb_scraper` |
| Module not found | Ensure you're in correct directory and ran `npm install` |
| CORS error | Should be fixed, backend has CORS enabled |

---

## 📚 Full Documentation

See these files for detailed info:
- **`IMPLEMENTATION_COMPLETE.md`** - Comprehensive guide
- **`INSTITUTION_MODULE.md`** - Technical details
- **`MONGODB_SETUP.md`** - Database setup

---

## ✅ Verification Checklist

Run through this to confirm everything works:

- [ ] Scraper runs: `python -m scrapers.iitb_scraper`
- [ ] Backend starts: `npm run dev` (in server/)
- [ ] Frontend starts: `npm run dev` (in client/)
- [ ] Browser: http://localhost:5173 loads
- [ ] Sidebar shows "Institutions" link
- [ ] Click Institutions and see IIT Bombay data
- [ ] Data displays with all fields (name, location, domains)

---

## 🎉 Success!

If you can see the Institutions page with IIT Bombay data displayed:

**✅ You have a working MERN stack!**

---

**Questions?** Check the documentation files or the code comments.

**Want to extend?** Each component is well-structured for easy modifications.

**Ready to deploy?** See deployment guides in the docs.

---

**Status: READY TO RUN** 🚀
