import { Typography } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(""),
  },
});

const Title = (props) => {
  const typoSx = {};

  const setFontSize = (size) => {
    switch (size) {
      case "extra":
        typoSx.fontSize = "4rem";
        break;
      case "large":
        typoSx.fontSize = "3rem";
        break;
      case "big":
        typoSx.fontSize = "2.5rem";
        break;
      case "medium":
        typoSx.fontSize = "2rem";
        break;
      case "normal":
        typoSx.fontSize = "1rem";
        break;
      default:
        typoSx.fontSize = size;
        break;
    }
  };

  const setShadow = (shadow) => {
    switch (shadow) {
      case "bottom-left":
        typoSx.textShadow = "5px 5px 10px #383535";
        break;
      case "lighter-gray":
        typoSx.textShadow = "2px 5px 5px gray";
        break;
      case "lighter-black":
        typoSx.textShadow = "2px 5px 7px black";
        break;
      case "medium":
        typoSx.textShadow = "2rem";
        break;
      case "normal":
        typoSx.textShadow = "1rem";
        break;
      default :
        typoSx.textShadow = shadow;
        break
    }
  };

  const setTextAlign = (shadow) => {
    switch (shadow) {
      case "center":
        typoSx.textAlign = "center";
        break;
      case "end":
        typoSx.textAlign = "end";
        break;
      case "left":
        typoSx.textAlign = "left";
        break;
      case "right":
        typoSx.textAlign = "right";
        break;
    }
  };

  if (props.padding) {
    typoSx.padding = props.padding;
  }

  if (props.shadow) {
    setShadow(props.shadow);
  }

  if (props.size) {
    setFontSize(props.size);
  }

  if (props.color) {
    typoSx.color = props.color;
  }

  if (props.textAlign) {
    setTextAlign(props.textAlign);
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" fontWeight={800} sx={typoSx}>
        {props.titleName}
      </Typography>
    </ThemeProvider>
  );
};

export default Title;
