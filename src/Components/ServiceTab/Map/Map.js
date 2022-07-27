import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import iconUrl from "../../../assets/marker/marker-icon.png";

const icon = L.icon({ iconUrl });

function Map() {
  const position = [41.306475, 69.178640];
  return (
    <div className="container my-5 pb-5">
      <div className="row">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "500px" }}
        >
          <TileLayer
            attribution='&copy; 
            <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon} />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
