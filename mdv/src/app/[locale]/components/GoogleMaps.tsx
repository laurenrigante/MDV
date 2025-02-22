import React from "react";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Pin,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

export default function Navbar() {
  type Poi = { key: string; location: google.maps.LatLngLiteral };

  const location: Poi = {
    key: "mdv",
    location: { lat: 45.435102, lng: -73.637896 },
  };

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        style={{ height: "400px", width: "100%" }}
        defaultZoom={13}
        defaultCenter={location.location}
        mapId="DEMO_MAP_ID"
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
      >
        <AdvancedMarker key={location.key} position={location.location} />
      </Map>
    </APIProvider>
  );
}
