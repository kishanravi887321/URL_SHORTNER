# 🔗 URL Shortener

A full-stack URL shortener application built to understand and implement **Low-Level Design (LLD)** concepts in system design.

## 📚 Purpose

This project was created as a **learning exercise** to solidify my understanding of:

- **Low-Level Design (LLD)** principles
- **System Design** concepts for URL shorteners
- **Database schema design** for scalable applications
- **API design** and RESTful architecture
- **Frontend-Backend integration**

## 🏗️ System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│   Frontend      │ ──────► │   Backend API   │ ──────► │   MongoDB       │
│   (React)       │         │   (Express.js)  │         │   Database      │
│                 │ ◄────── │                 │ ◄────── │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
     Vercel                      Server                    Atlas/Local
```

## 🔄 How It Works

### URL Shortening Flow

```
1. User enters long URL
         │
         ▼
2. Frontend validates URL format
         │
         ▼
3. POST request to /api/shorten
         │
         ▼
4. Backend generates unique short code (nanoid - 8 chars)
         │
         ▼
5. Store mapping in MongoDB:
   {
     originalUrl: "https://example.com/very/long/path",
     shortCode: "AbC12XyZ",
     shortUrl: "https://short.saksin.online/AbC12XyZ"
   }
         │
         ▼
6. Return short URL to user
```

### URL Redirection Flow

```
1. User visits short URL (e.g., short.saksin.online/AbC12XyZ)
         │
         ▼
2. GET request to /:shortCode
         │
         ▼
3. Backend queries MongoDB for shortCode
         │
         ▼
4. If found → 302 Redirect to originalUrl
   If not found → 404 Error
```

## 🎯 LLD Concepts Implemented

### 1. **Short Code Generation**
```javascript
// Using nanoid for generating unique 8-character codes
// Base62 encoding: [a-zA-Z0-9]
// Possible combinations: 62^8 = 218 trillion unique codes
import { nanoid } from "nanoid";
const shortCode = nanoid(8); // e.g., "NlWlnNl7"
```

### 2. **Database Schema Design**
```javascript
const ShortSchema = {
  originalUrl: String,      // The original long URL
  shortCode: {              // Unique identifier
    type: String,
    required: true,
    unique: true,           // Indexed for O(1) lookup
  },
  shortUrl: String,         // Full short URL for convenience
  createdAt: Date,          // Timestamp for analytics
  expireAt: Date,           // TTL for link expiration
};
```

### 3. **API Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/shorten` | Create a new short URL |
| GET | `/:shortCode` | Redirect to original URL |

### 4. **Key Design Decisions**

| Decision | Reasoning |
|----------|-----------|
| **8-char codes** | Balance between URL length and collision resistance |
| **nanoid** | Cryptographically secure, URL-safe, no dependencies |
| **MongoDB** | Flexible schema, horizontal scaling, fast reads |
| **302 Redirect** | Temporary redirect allows analytics tracking |
| **Indexed shortCode** | O(1) lookup time for redirections |

## 📁 Project Structure

```
url_shorterner_backedn/
├── backend/
│   └── src/
│       ├── index.js              # Server entry point
│       ├── app.js                # Express app setup
│       ├── controllers/
│       │   └── mainShort.controllers.js  # Business logic
│       ├── models/
│       │   └── shortner.models.js        # MongoDB schema
│       ├── routes/
│       │   └── mainShort.routes.js       # API routes
│       └── utils/
│           ├── shornter.utils.js         # Short code generator
│           └── convertToshort.utils.js   # URL parser
│
└── frontend/
    └── frontend/
        ├── src/
        │   ├── components/       # React components
        │   ├── pages/            # Page components
        │   ├── services/         # API integration
        │   └── config/           # Configuration
        ├── vercel.json           # Vercel deployment config
        └── index.html            # SEO-optimized HTML
```

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **nanoid** - Short code generation
- **cors** - Cross-origin support

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Backend Setup
```bash
cd backend/src
npm install
# Create .env file with:
# PORT=3000
# MONGODB_URI=your_mongodb_connection_string
npm run dev
```

### Frontend Setup
```bash
cd frontend/frontend
npm install
npm run dev
```

## 🌐 Live Demo

- **Frontend**: [urlshortner.saksin.online](https://urlshortner.saksin.online)
- **Backend API**: [short.saksin.online](https://short.saksin.online)

## 📊 Scalability Considerations

For production-level scaling, consider:

1. **Caching Layer** - Redis for frequently accessed URLs
2. **Rate Limiting** - Prevent abuse and DDoS
3. **Database Sharding** - Horizontal scaling for billions of URLs
4. **CDN** - Geographic distribution for faster redirects
5. **Analytics** - Click tracking, geographic data, referrers

## 📝 API Reference

### Create Short URL
```http
POST /api/shorten
Content-Type: application/json

{
  "originalUrl": "https://example.com/very/long/url",
  "prefix": "custom"  // optional
}
```

**Response:**
```json
{
  "shortUrl": "https://short.saksin.online/AbC12XyZ",
  "shortCode": "AbC12XyZ"
}
```

### Redirect
```http
GET /:shortCode
```
**Response:** 302 Redirect to original URL

## 🎓 Learning Outcomes

Through this project, I gained hands-on experience with:

- ✅ Designing database schemas for high-read workloads
- ✅ Implementing URL-safe unique ID generation
- ✅ Building RESTful APIs with proper HTTP semantics
- ✅ Frontend-backend integration with CORS
- ✅ Deployment strategies (Vercel, cloud hosting)
- ✅ SEO optimization for web applications

## 📄 License

This project is open source and available for learning purposes.

---

*Built with ❤️ to learn System Design*
