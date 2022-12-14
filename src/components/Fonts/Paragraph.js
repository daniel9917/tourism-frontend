import React from "react";
import { ThemeProvider, createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 15,
    fontFamily: ["Raleway"].join(","),
  },
});

const Paragraph = (props) => {
  const typoSx = {};

  const setFontSize = (size) => {
    switch (size) {
      case "extra":
        typoSx.fontSize = "4rem";
        break;
      case "large":
        typoSx.fontSize = "3rem";
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

  if (props.fontStyle) {
    typoSx.fontStyle = props.fontStyle;
  }

  if (props.bold) {
    typoSx.fontWeight = '800';
  }

  if (props.shadow){
    typoSx.shadow = props.textShadow;
  }

  if (props.size) {
    setFontSize(props.size);
  }

  if (props.color) {
    typoSx.color = props.color;
  }

  if (props.textAlign) {
    typoSx.textAlign = props.textAlign;
  }

  if (props.padding) {
    typoSx.padding = props.padding;
    if (props.paddingLeft){
      typoSx.paddingLeft = props.paddingLeft;
    }
    if (props.paddingTop){
      typoSx.paddingTop = props.paddingTop;
    }
    if(props.padding.left) {
      typoSx.paddingLeft = props.padding.left;
    }
    if(props.padding.top){
      typoSx.paddingTop = props.padding.top;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div onClick={props.customClickEvent}>
        <Typography alignItems={"stretch"} sx={typoSx}>
          {props.content}
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default Paragraph;
