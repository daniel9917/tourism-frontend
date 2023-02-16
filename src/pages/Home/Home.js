import React, { Component } from "react";
import { Card, Grid, Typography, Box, Divider } from "@mui/material";
import CardElement from "../../components/CardElement/CardElement";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

const Home = () => {

  //Styles for grid container and grid items
  const gridContainerSx = {};

  const gridItemSx = {};


  //Array that holds the contents of the cards of the home page
  const cardContents = [
    {
      title: "Vincular activos",
      imgSrc : "https://i.imgur.com/guzB9Lh.jpg",
      link : "/asset",
      color : "#088c4c",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Visualizar activos",
      link : "/list",
      imgSrc : "https://i.imgur.com/Zb85TBy.jpg",
      color : "#088c4c",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Reconozcamos los impactos del turismo en donde vivimos.",
      imgSrc : "https://i.imgur.com/9zDA2lh.jpg",
      link : "/impact",
      color : "#088c4c",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "¿Soy un turista consciente?",
      imgSrc : "https://i.imgur.com/smaXMOR.jpg",
      color : "#088c4c",
      link : "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ];

  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      justifyContent={"space-between"}
      sx={gridContainerSx}
    >
      <Grid item key={"header"} sx={gridItemSx} xs={12}>
        <Header></Header>
      </Grid>
      <Grid item key={"content"} sx={gridItemSx} xs={12}>
        <Grid
          container
          key={"body"}
          xs={12}
          sx={{ justifyContent: "space-evenly" }}
        >
          {cardContents.map((content) => {
            return (
              <CardElement
                item
                color = {content.color}
                link = {content.link}
                imgSrc = {content.imgSrc}
                title= {content.title}
                description = {content.description}
              ></CardElement>
            );
          })}
        </Grid>
      </Grid>
      <Grid item key={"footer"} sx={gridItemSx} xs={12}>
        {/* <Footer></Footer> */}
      </Grid>
    </Grid>
  );
};

const contents = () => {
  return (
    <Grid
      container
      item
      key={"body"}
      xs={12}
      sx={{ justifyContent: "space-evenly" }}
    >
      <CardElement item></CardElement>
      <CardElement item></CardElement>
      <CardElement item></CardElement>
    </Grid>
  );
};

export default Home;
