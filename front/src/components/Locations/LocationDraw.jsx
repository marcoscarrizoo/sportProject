import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "500px",
};

function LocationDraw({ location }) {
  const apiKey =
    process.env.GOOGLE_MAPS_API_KEY ||
    "AIzaSyBAjB7JUJkHdTJZDtv2Ot713ZG7dT0gcOw";
  const pos = {
    lat: parseFloat(location.lat),
    lng: parseFloat(location.lng),
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={pos} zoom={10}>
        <Marker position={pos} />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(LocationDraw);
