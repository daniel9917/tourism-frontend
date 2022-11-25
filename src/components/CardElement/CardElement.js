import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import logo from "../../resources/card1.png";
import React from "react";

import Paragraph from "../Fonts/Paragraph";
import Subtitle from "../Fonts/Subtitle";
import { Image } from "@mui/icons-material";

import "./CardElement.css";

const boxSx = {
  border: 1,
  borderColor: "transparent",
  borderRadius: "5%",
  boxShadow: 20,
};

const imgSx = {
  maxWidth : "100%"
};

const CardElement = (props) => {
  return (
    <Box maxWidth="20%" sx={boxSx} backgroundColor={props.color}>
      <Grid container direction={"column"} alignItems={"center"}>
        <Grid item>
          <img className = "__card_image" src={props.imgSrc}></img>
        </Grid>
        <Grid item className="cardTitle">
          <Subtitle shadowType = "dizzy" content={props.title} color={"white"}></Subtitle>
        </Grid>
        <Grid item className="cardDescription">
          <Paragraph content={props.description} color={"white"} ></Paragraph>
        </Grid>
      </Grid>
    </Box>
  );
};

function onButtonClicked(event) {
  alert("Button clicked" + event.toString());
}

export default CardElement;
