# Mentorship Portal - Server Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation Steps

1. **Navigate to server directory:**
```bash
cd mentorship-portal/server
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Environment Variables:**
   - Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   - Edit `.env` with your MongoDB connection details

4. **Start the server:**
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

---

## 📋 Environment Configuration

### .env File
The `.env` file contains all server configuration. Create it in the `/server` directory with the following structure:

```env
# Server Configuration
PORT=5000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/mentorship_portal

# Environment
NODE_ENV=development
```

### Environment Variables Explained

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port |
| `MONGODB_URI` | `mongodb://localhost:27017/mentorship_portal` | MongoDB connection string |
| `NODE_ENV` | `development` | Environment (development/production) |

---

## 🗄️ MongoDB Setup

### Option 1: Local MongoDB
```bash
# Start MongoDB service
mongod

# Server will connect to localhost:27017/mentorship_portal
```

### Option 2: MongoDB Atlas (Cloud)
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and database user
3. Get connection string
4. Update `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mentorship_portal?retryWrites=true&w=majority
```

---

## 📊 Database Collections

The server automatically creates these collections:

### Domains
```javascript
{
  _id: ObjectId,
  name: String (unique, required),
  description: String,
  status: String (enum: ['active', 'inactive']),
  createdAt: Date,
  updatedAt: Date
}
```

### Mentors
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (unique, required),
  expertise: String (required),
  experience: Number,
  bio: String,
  status: String (enum: ['active', 'inactive']),
  createdAt: Date,
  updatedAt: Date
}
```

### Courses
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  domainId: ObjectId (ref: Domain),
  level: String (enum: ['beginner', 'intermediate', 'advanced']),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔌 API Endpoints

### Health Check
```
GET /health
```

### Dashboard
```
GET /api/dashboard
```
Returns: `{ domains, courses, mentors, timestamp }`

### Domains
```
GET /api/domains
```
Returns: `{ data: [], count: 0, timestamp }`

### Mentors
```
GET /api/mentors
```
Returns: `{ data: [], count: 0, timestamp }`

### Courses
```
GET /api/courses
```
Returns: `{ data: [], count: 0, timestamp }`

---

## 📝 Available Scripts

```bash
# Start server (production)
npm start

# Start server (development with nodemon)
npm run dev
```

---

## 🔧 Troubleshooting

### MongoDB Connection Error
- ✅ Ensure MongoDB is running
- ✅ Check `MONGODB_URI` in `.env`
- ✅ Verify firewall settings (for MongoDB Atlas)

### Port Already in Use
- ✅ Change `PORT` in `.env`
- ✅ Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # macOS/Linux
  lsof -i :5000
  kill -9 <PID>
  ```

### Module Not Found
- ✅ Run `npm install` again
- ✅ Delete `node_modules` and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## 📦 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **nodemon** (dev): Auto-restart on file changes

---

## 🚨 Important Notes

1. **Never commit `.env` file** - it's in `.gitignore`
2. **Keep sensitive data secure** - never expose MongoDB credentials
3. **Use `.env.example`** for documentation of required variables
4. **Test connections** after environment setup changes

---

## 📞 Support

For issues or questions, check the main project README.md
