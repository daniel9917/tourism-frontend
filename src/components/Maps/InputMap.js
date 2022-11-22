import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
import { useState } from "react";
import React from "react";
import { Typography } from "@mui/material";
import { useCallback } from "react";


const mapStyle = {
  width: "100%",
  height: "50vh",
};


const InputMap = (props) => {
  const [mapInstance, setMapInstance] = useState();
  const [mapCenter, setMapCenter] = useState({
    lat: 4,
    lng: -73,
  });
  const [visible, setVisible] = useState(true);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 4,
    lng: -73,
  });
  const onClick = (evt) => {
    let position = evt.latLng.toJSON();
    setMarkerPosition(position);
    setMapCenter(position);
    setVisible(true);
    props.onSetLocation(position);
  };

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyABILdx8RhuvHwMNbjNKnhDlOgqHu92SY4",
  });

  const onLoadMap = useCallback(function onLoad(mapInstance) {
    setMapInstance(mapInstance);
  });

  if (loadError) {
    return <Typography>Map cannot be loaded right now, sorry.</Typography>;
  }

  if (isLoaded) {
    return (
      <GoogleMap
        onClick={onClick}
        zoom={5}
        center={mapCenter}
        mapContainerStyle={mapStyle}
        onLoad={onLoadMap}
      >
        <Marker
          position={markerPosition}
          visible={visible}
          map={mapInstance}
          //   onLoad={onLoadMarker}
        ></Marker>
      </GoogleMap>
    );
  }
};

export default InputMap;
