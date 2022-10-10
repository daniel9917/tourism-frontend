import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardElement from "../../components/CardElement/CardElement";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <Grid container direction = "column" justifyContent="space-around" alignItems="stretch">
      <Grid item key={"header"}>
        <Header></Header>
      </Grid>
      <Grid
        container
        key={"body"}
        xs={12}
        sx={{ justifyContent: "space-evenly" }}
      >
        <CardElement item></CardElement>
        <CardElement item></CardElement>
        <CardElement item></CardElement>
        <CardElement item></CardElement>
      </Grid>
      <Grid item key={"footer"} >
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Home;
