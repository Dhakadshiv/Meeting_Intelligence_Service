# Hintro — Backend API

A RESTful backend built with **Node.js + Express**, powering the Hintro assignment platform. It handles user authentication, AI-assisted features via Google Gemini, scheduled tasks, and transactional emails.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Runtime | Node.js |
| Framework | Express v5 |
| Database | MongoDB (Mongoose) |
| AI | Google Gemini (`@google/genai`) |
| Auth | JWT + cookie-parser |
| Email | Resend |
| Scheduler | node-cron |
| API Docs | Swagger (swagger-jsdoc + swagger-ui-express) |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- API keys for Gemini and Resend

### Installation

```bash
git clone https://github.com/your-username/hintro_assignment.git
cd hintro_assignment
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
GEMINI_API=your_gemini_api_key
JWT_SECRET=your_jwt_secret
RESEND_API=your_resend_api_key
```

> `.env` is gitignored — never commit it.

### Run

```bash
node server.js
```

Server starts at `http://localhost:3000`

---

## Project Structure

```
hintro_assignment/
├── server.js               # Entry point
├── server/
│   ├── app.js              # Express app setup
│   ├── database/
│   │   └── db.js           # MongoDB connection
│   ├── routes/             # API route definitions
│   ├── controllers/        # Route handlers
│   ├── models/             # Mongoose schemas
│   ├── middleware/         # Auth, error handling
│   └── utils/              # Helpers (email, cron, AI)
├── .env                    # Environment variables (gitignored)
├── .gitignore
└── package.json
```

---

## API Documentation

Swagger UI is available at:

```
http://localhost:3000/api-docs
```

---

## License

ISC
