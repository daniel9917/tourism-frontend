import {
  Box,
  Grid,
} from "@mui/material";

import Paragraph from "../Fonts/Paragraph";
import Subtitle from "../Fonts/Subtitle";

import "./CardElement.css";

const boxSx = {
  border: 1,
  borderColor: "transparent",
  borderRadius: "5%",
  boxShadow: 20,
  marginTop : "1%",
  marginBottom : "1%"
};


const CardElement = (props) => {
  const description = props.description ? (
    <Grid item className="cardDescription">
      <Paragraph content={props.description} color={"white"}></Paragraph>
    </Grid>
  ) : (
    <br></br>
  );

  return (
    <Box maxWidth="20%" sx={boxSx} backgroundColor={props.color}>
      <Grid container direction={"column"} alignItems={"center"}>
        <img
          style={{ paddingTop: "3%" }}
          className="__card_image"
          src={props.imgSrc}
        ></img>
        <Grid item className="cardTitle">
          <Subtitle
            shadowType="dizzy"
            content={props.title}
            fontSize = "medium"
            color={"white"}
          ></Subtitle>
        </Grid>
        {description}
      </Grid>
    </Box>
  );
};


export default CardElement;
