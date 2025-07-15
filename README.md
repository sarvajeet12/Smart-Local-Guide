# 🌍 Smart Local Guide

A real-time location-based web application built with the **MERN stack** that helps users discover nearby places of interest. It uses geolocation, map integration, offline detection, and visibility-based interaction features.

---

## 📌 Project Features

* 📍 Get user’s current location using **Geolocation API**
* 🗺️ Display a live interactive map with markers using **Leaflet** (or Google Maps)
* ⚡ Detect internet status using **Network Information API**
* 👁️ Highlight list items as they come into view using **Intersection Observer API**
* 💾 Store Points of Interest (POIs) in MongoDB
* 🌐 Fully deployed using **Render** and **MongoDB Atlas**

---

## 🧱 Tech Stack

| Layer       | Technology                                       |
| ----------- | ------------------------------------------------ |
| Frontend    | React.js                                         |
| Backend     | Node.js + Express.js                             |
| Database    | MongoDB (Atlas)                                  |
| Map Library | Leaflet.js                                       |
| APIs Used   | Geolocation, Intersection Observer, Network Info |
| Hosting     | Render.com                                       |

---

## 🧭 How it Works

1. User opens the site → grants location access.
2. The app shows user location + nearby places on an interactive map.
3. POI markers can be clicked to reveal info.
4. Below the map, a scrollable list of POIs is highlighted when visible.
5. App detects and shows network status (Online/Offline).

---

## 🔗 Live URLs (after deployment)

* 🌐 **Frontend (React):** [https://smart-local-guide.onrender.com](https://smart-local-guide.onrender.com)
* 🔧 **Backend (Express API):** [https://smart-local-guide-api.onrender.com](https://smart-local-guide-api.onrender.com)

---

## 🚀 Deployment Guide (Render)

### 🔸 Step 1: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster
3. Add a database user + whitelist IP (`0.0.0.0/0` for dev)
4. Get your connection string:

   ```
   ```

mongodb+srv://<user>:<pass>@cluster.mongodb.net/smart-guide

````

### 🔸 Step 2: Backend Deployment on Render
1. Push your code to GitHub
2. Go to [Render](https://dashboard.render.com)
3. Click **New > Web Service**
4. Connect GitHub → Choose `server/` as root
5. Configure:
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Root Directory: `server`
   - Environment Variable:
     - `MONGO_URI = <your-Atlas-URI>`
6. Click **Create Web Service**

### 🔸 Step 3: Frontend Deployment on Render
1. Click **New > Static Site**
2. Choose `client/` as root folder
3. Build Command: `npm run build`
4. Publish Directory: `build`
5. Add environment variable:
   - `REACT_APP_API_URL = https://your-backend.onrender.com`
6. Click **Create Static Site**

---

## 🔁 Sample Postman Collection (POI API)

### 🌐 Endpoint: `POST /api/pois`

#### 🔸 Request Example:
```json
{
  "name": "Lalbagh Botanical Garden",
  "latitude": 12.9507,
  "longitude": 77.5848,
  "description": "Historic botanical garden with a lake, glasshouse, and diverse plant species."
}
````

#### 🔸 Success Response:

```json
{
  "message": "POI saved"
}
```

### 🌐 Endpoint: `GET /api/pois`

#### 🔸 Request:

```
GET https://your-backend.onrender.com/api/pois?lat=12.97&lng=77.59
```

#### 🔸 Response Example:

```json
[
  {
    "name": "Lalbagh Botanical Garden",
    "latitude": 12.9507,
    "longitude": 77.5848,
    "description": "Historic botanical garden...",
    "__v": 0
  },
  {
    "name": "UB City Mall",
    "latitude": 12.9716,
    "longitude": 77.5966,
    "description": "Upscale shopping mall with luxury brands and fine dining."
  }

]
```

---

## 📂 Folder Structure

```
smart-local-guide/
├── client/           # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   └── POICard.js
│       ├── App.js
│       ├── MapView.js
│       └── index.js
├── server/           # Express Backend
│   ├── models/
│   │   └── poi.js
│   ├── routes/
│   │   └── pois.js
│   └── index.js
```

---

## 📘 APIs Used

### 1. **Geolocation API**

Used to fetch the user's current latitude & longitude.

```js
navigator.geolocation.getCurrentPosition(...)
```

### 2. **Intersection Observer API**

Highlights POI cards when they enter the viewport.

```js
new IntersectionObserver((entries) => { ... });
```

### 3. **Network Information API**

Detects whether user is online or offline.

```js
navigator.onLine
```

---

## 💡 Future Ideas

* Add POI filters (e.g., parks, cafes)
* Add favorite saving with Background Sync
* Draw route between current location and POI using Canvas API

