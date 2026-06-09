# Meeting Intelligence Service

## Overview

Meeting Intelligence Service is a backend application that helps teams manage meetings, analyze meeting transcripts using AI, track action items, detect overdue tasks, and send reminder notifications.

The system is built using Node.js, Express.js, MongoDB, Gemini AI, and Swagger.

## Features

* User Registration and Login
* JWT Authentication
* Meeting Creation and Management
* AI-Powered Meeting Analysis
* Transcript Citation Support
* Action Item Management
* Action Item Status Tracking
* Overdue Task Detection
* Scheduled Reminder Jobs
* Third-Party Notification Integration
* Swagger API Documentation
* Global Error Handling
* Request Trace ID Support

## Technology Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Gemini AI
* JWT Authentication
* Swagger OpenAPI
* Node Cron
* Render

## Installation

Clone Repository

```bash
git clone <repository-url>
cd Meeting_Intelligence_Service
```

Install Dependencies

```bash
npm install
```

Create Environment File

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

```

Run Application

```bash
npm start
```



## API Documentation

Swagger URL:

```text
https://your-render-url/api-docs
```

## Deployment

Application is deployed on Render.

Deployment URL:

```text
https://your-render-url
```

## API Examples

Create Meeting

POST /api/meetings

```json
{
  "title": "Sprint Planning",
  "participants": [
    "Alice",
    "Bob"
  ],
  "meetingDate": "2026-06-01",
  "transcript": [
    {
      "timestamp": "00:10",
      "speaker": "Alice",
      "text": "We should launch next Friday."
    }
  ]
}
```

Analyze Meeting

POST /api/analyze/:id

Create Action Item

POST /api/action-items

Update Action Item Status

PATCH /api/action-items/:id/status

Get Action Items

GET /api/action-items

## Author

Shivam Dhakad
