import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/search.context";
import { SimpleAdEntity } from "types";
import { icon } from "leaflet";
import { SingleAd } from "./SingleAd";
import { apiUrl } from "../../config/api";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const ICON = icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
});

export const Map = () => {
  const { search } = useContext(SearchContext);
  const [ads, setAds] = useState<SimpleAdEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/ad/search/${search}`);
      const data = await res.json();

      setAds(data);
    })();
  }, [search]);

  return (
    <div className="map">
      <MapContainer center={[50.2657152, 18.9945008]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />

        {ads.map((ad) => (
          <Marker key={ad.id} position={[ad.lat, ad.lon]} icon={ICON}>
            <Popup>
              <SingleAd id={ad.id} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
