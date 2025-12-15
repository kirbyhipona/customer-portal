# Customer Portal MVP

A **minimal Customer Portal** built with **Next.js** (frontend) and **Express.js** (backend), integrated with the **ServiceM8 API**.

This MVP allows users to:

* Log in using email and phone number
* View all bookings from ServiceM8
* See booking details and attachments
* Send and receive messages per booking
* Serve as a functional internal tool for testing customer interactions

---

## Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Setup Instructions](#setup-instructions)
    * [Backend](#backend)
    * [Frontend](#frontend)
* [Environment Variables](#environment-variables)
* [Running the App](#running-the-app)
* [Sample Data](#sample-data)
* [Tech Stack](#tech-stack)
* [Notes](#notes)
* [Troubleshooting](#troubleshooting)
* [License](#license)

---

## Features

* Fetch bookings from ServiceM8 API
* Display booking details and attachments
* Messaging system for each booking
* Simple MVP UI for demonstration purposes

---

## Prerequisites

* Node.js >= 18.x
* npm >= 9.x
* ServiceM8 API Key

---

## Setup Instructions

### Backend

1.  Navigate to the backend folder:

    ```bash
    cd backend
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create your environment file:

    ```bash
    cp .env.example .env
    ```

4.  Open `.env` and set your ServiceM8 API key and port:

    ```bash
    SERVICEM8_TOKEN=your_servicem8_api_key_here
    PORT=4000
    ```

5.  Ensure the `data` folder exists and create an empty messages file:

    ```bash
    mkdir -p data
    echo "[]" > data/messages.json
    ```

### Frontend

1.  Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create your environment file (if required):

    ```bash
    cp .env.example .env
    ```

4.  Set the backend API URL in `.env`:

    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:4000
    ```

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
| :--- | :--- |
| `SERVICEM8_TOKEN` | Your ServiceM8 API key |
| `PORT` | Backend server port (default: 4000) |

### Frontend (`frontend/.env`)

| Variable | Description |
| :--- | :--- |
| `NEXT_PUBLIC_API_URL` | URL to backend API (e.g., `http://localhost:4000`) |

---

## Running the App

1.  Start backend:

    ```bash
    cd backend
    npm start
    ```

2.  Start frontend:

    ```bash
    cd frontend
    npm run dev
    ```

3.  Open your browser:

    ```
    http://localhost:3000
    ```

Log in, navigate to bookings, view details, attachments, and messages.

---

## Sample Data

You can populate `backend/data/messages.json` with the following sample structure for testing (replace `"job_123"` with an actual ServiceM8 Job ID):

```json
{
  "job_123": [
    {
      "from": "customer",
      "text": "When is the technician arriving?",
      "createdAt": "2025-12-15T08:00:00.000Z"
    },
    {
      "from": "technician",
      "text": "We expect to be there within the hour.",
      "createdAt": "2025-12-15T08:15:00.000Z"
    }
  ]
}