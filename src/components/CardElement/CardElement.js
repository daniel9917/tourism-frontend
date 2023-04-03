import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import Paragraph from "../Fonts/Paragraph";
import Subtitle from "../Fonts/Subtitle";

import "./CardElement.css";

const CardElement = (props) => {
  const boxSxx = {
    border: 1,
    borderColor: "transparent",
    borderRadius: "5%",
    boxShadow: 20,
    marginTop: "1%",
    marginBottom: "1%",
  };

  const [boxSx, setBoxSx] = useState(boxSxx);

  const onCursorIn = () => {
    boxSxx.cursor = "pointer";
    setBoxSx(boxSxx);
  };

  const onCursorOut = () => {
    boxSxx.cursor = "default";
    setBoxSx(boxSxx);
  };

  const description = props.description ? (
    <Grid item className="cardDescription">
      <Paragraph content={props.description} color={"white"}></Paragraph>
    </Grid>
  ) : (
    <br></br>
  );

  return (
    <Box
      onMouseEnter={onCursorIn}
      onMouseLeave={onCursorOut}
      maxWidth="20%"
      sx={boxSx}
      backgroundColor={props.color}
    >
      <Grid container direction={"column"} alignItems={"center"}>
        <img
          style={{ paddingTop: "3%" }}
          className="__card_image"
          src={(props.imgSrc && !(props.imgSrc === "")) ? props.imgSrc : "https://www.muskersbroughtonhall.com.au/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"}
        ></img>
        <Grid item className="cardTitle">
          <Link to={props.link}>
            <Subtitle
              shadowType="dizzy"
              content={props.title}
              fontSize={(props.fontSize && !(props.fontSize === "")) ? props.fontSize : "medium"}
              color={"white"}
            ></Subtitle>
          </Link>
        </Grid>
        {description}
      </Grid>
    </Box>
  );
};

export default CardElement;
