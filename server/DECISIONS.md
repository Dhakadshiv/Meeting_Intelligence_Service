# Architecture & Design Decisions

This document explains the key technical decisions made while building the Hintro backend and the reasoning behind each one.

---

## 1. Express v5 over v4

**Decision:** Used `express@^5.2.1` instead of the more common v4.

**Why:** Express v5 ships with native async error handling — rejected promises in route handlers are automatically forwarded to error middleware without needing `try/catch` wrappers everywhere or packages like `express-async-errors`. This keeps controllers cleaner and reduces boilerplate.

---

## 2. MongoDB + Mongoose

**Decision:** MongoDB Atlas as the database, accessed via Mongoose ODM.

**Why:** The data in this project (assignments, user profiles, AI-generated content) is document-shaped and schema-flexible. Mongoose adds schema validation and model structure on top of Mongo's flexibility, which is the right balance for a project at this scale.

---

## 3. Google Gemini for AI Features

**Decision:** Used `@google/genai` (Gemini) instead of OpenAI or other LLM providers.

**Why:** Gemini's free tier is generous enough for assignment-scale usage. The `@google/genai` SDK is straightforward and supports both text generation and multimodal inputs, which leaves room to extend features later (e.g., analyzing uploaded files or images).

---

## 4. JWT with Cookies (not Authorization headers)

**Decision:** Tokens are stored in HTTP cookies via `cookie-parser`, not in `localStorage` or `Authorization` headers.

**Why:** Cookie-based JWTs with `httpOnly` flags are more resistant to XSS attacks. The client doesn't need to manually attach tokens to every request — the browser handles it automatically, simplifying frontend integration.

---

## 5. Resend for Transactional Email

**Decision:** Used the `resend` SDK for sending emails.

**Why:** Resend has a clean developer-friendly API, good deliverability, and a free tier that covers early-stage usage. Setting it up takes minutes compared to configuring SMTP or Nodemailer with a provider.

---

## 6. node-cron for Scheduled Tasks

**Decision:** Used `node-cron` for background scheduled jobs instead of a queue system like Bull or BullMQ.

**Why:** For this scale, a lightweight in-process cron is sufficient. A full queue system would add infrastructure overhead (Redis dependency) that isn't justified here.

---

## 7. Swagger for API Documentation

**Decision:** Auto-generated API docs via `swagger-jsdoc` + `swagger-ui-express`.

**Why:** Keeping docs in JSDoc comments alongside route definitions means they stay in sync with the code. It also gives anyone reviewing the project (or a frontend developer) a live, interactive reference without any extra tooling.

---

## 8. Separate `server.js` and `app.js`

**Decision:** Entry point (`server.js`) only handles DB connection and `app.listen`. Express setup lives in `server/app.js`.

**Why:** This separation makes the app easier to test — you can import `app.js` in tests without actually starting the server or connecting to the database.
