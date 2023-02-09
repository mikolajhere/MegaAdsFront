import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../context/search.context";

import "leaflet/dist/leaflet.css";
import "./Map.css"; 

import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
});

export const Map = () => {
  const { search } = useContext(SearchContext);

  // TODO 36:48
  useEffect(() => {
    console.log("Make request to search for", search);
  }, [search]);

  return (
    <div className="map">
      <h1>Search for: {search}</h1>
      <MapContainer center={[50.2657152, 18.9945008]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />
        <Marker position={[50.2657152, 18.9945008]} icon={ICON}>
          <Popup>
            <h2>IT.focus</h2>
            <p>cool firma</p>
          </Popup>
        </Marker>
      </MapContainer>
      <MapContainer center={[51.2657152, 19.9945008]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />
        <Marker position={[51.2657152, 19.9945008]} icon={ICON}>
          <Popup>
            <h2>IT.focus</h2>
            <p>cool firma</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
