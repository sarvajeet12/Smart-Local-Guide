// MapView.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapView = ({ location, pois }) => {
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.lat, location.lng]} icon={userIcon}>
        <Popup>You are here</Popup>
      </Marker>
      {pois.map((poi, index) => (
        <Marker key={index} position={[poi.latitude, poi.longitude]}>
          <Popup>
            <strong>{poi.name}</strong>
            <br />
            {poi.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
