import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyAuwt2OGN57-n7FoD4aRP_orDI5XAS02t8",
  version: "weekly",
  libraries: ["places"]
});

const containerStyle = {
  width: "",
  height: "70vh",
};

const center = {
   
  lat: -22.358720317091315, 
  lng: -46.93256436441782  
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAuwt2OGN57-n7FoD4aRP_orDI5XAS02t8",
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <div id="localizacao" className="mt-20">
      <div className="rounded-lg">
        

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(SimpleMap);
