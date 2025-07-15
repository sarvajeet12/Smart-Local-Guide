import React, { useEffect, useState } from "react";
import axios from "axios";
import MapView from "./MapView";
import POICard from "./components/POICard";

const App = () => {
  const [location, setLocation] = useState(null);
  const [pois, setPois] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location) {
      axios
        .get(
          `http://localhost:5000/api/pois?lat=${location.lat}&lng=${location.lng}`
        )
        .then((res) => setPois(res.data));
    }
  }, [location]);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <div>
      <h1>Smart Local Guide</h1>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      {location && <MapView location={location} pois={pois} />}
      <div style={{ marginTop: "20px" }}>
        {pois.map((poi, i) => (
          <POICard key={i} poi={poi} />
        ))}
      </div>
    </div>
  );
};

export default App;
