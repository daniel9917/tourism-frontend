import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import logo from "../../resources/card1.png";
import React from "react";

const CardElement = () => {
  return (
    <Box sx={{ maxWidth: 345 }}>
      <Card sx={{ maxWidth: 345 }} container>
        <CardMedia
          variant="outlined"
          component="img"
          heihgt="140"
          image={logo}
          alt="card 1"
        />
        <CardContent>
          <Typography variant="h4" align="center">
            {" "}
            Activos Culturales
          </Typography>
          <br></br>
          <Typography paragraph={true} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  function onButtonClicked(event) {
    alert("Button clicked" + event.toString());
  }
};

export default CardElement;
