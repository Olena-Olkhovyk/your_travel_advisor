import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { ClassNames } from "@emotion/react";
const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div style={{ height: "85vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAJ7C99K3haDlwbJE6gm3-lNUb6sQzz1Oo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
