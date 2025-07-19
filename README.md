# 🚚 Delivery Route Optimizer API

A Node.js and Express-based backend API that calculates the most efficient route between delivery points using the Google Maps Directions API. This project is designed to help businesses optimize delivery operations, reduce travel time, and improve efficiency.

---

## 🔧 Features

- 📍 Accepts multiple delivery addresses as input
- 🧠 Calculates optimized delivery routes using Google Maps Directions API
- 📊 Returns total distance and estimated time
- 🔒 Environment variables are securely managed
- 🧪 Ready for integration with any frontend or third-party apps

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Google Maps Directions API**
- **dotenv** for environment configuration
- **CORS** enabled for client-side integration

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rohan682/route-optimizer-api.git
cd route-optimizer-api 
```

---

### 2. Install dependencies

```bash
npm install
```

---

### Set up your environment variables

GOOGLE_MAPS_API_KEY=your_own_google_api_key_here
MONGODB_URI=your_mongodb_connection_string_here

🔒 Note: For security, .env is included in .gitignore and not pushed to GitHub. Refer to .env.example for the expected structure.

---

### ▶️ Run the Server

```bash
npm start
```

The server will run on http://localhost:5000 by default.

---

### 📬 API Endpoint

Request Body:

```json
{
  "origin": "123 Main St, Sydney",
  "destination": "456 High St, Melbourne",
  "waypoints": [
    "789 Elm St, Canberra",
    "321 Oak St, Albury"
  ]
}
```

Response:

```json
{
  "distance": "923 km",
  "duration": "10 hours 12 mins",
  "optimized_order": [
    "789 Elm St, Canberra",
    "321 Oak St, Albury"
  ]
}
```

---

### 🌍 Deployment
You can deploy this API to platforms like Render, Railway, or Heroku.

Make sure to securely add your environment variables on the platform's dashboard.

---

### 🧪 Example Use Case
This API can power:

🛒 E-commerce delivery systems

🧃 Food and grocery delivery apps

🧾 Courier and logistics companies

---

### 🛡 Security
API keys are excluded from the repository using .gitignore

Sensitive data is managed via environment variables

.env.example provided for setup reference

---

### 🤝 Contributing
Pull requests and feature suggestions are welcome!

---

### 📄 License
This project is open-source under the MIT License.

---

### 🙌 Acknowledgements
Google Maps Platform

Express.js