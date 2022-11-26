import React from "react";
import { ThemeProvider, createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const Subtitle = (props) => {
  const getShadowType = (type) => {
    switch (type) {
      case "dizzy":
        return "2px 2px 10px #000000";
      case "light":
        return "2px 2px 2px #9ea19f";
      default:
        return "";
    }
  };

  const getFontSize = (size) => {
    switch (size) {
      case "extra":
        return "4rem";
      case "large":
        return "3rem";
      case "big":
        return "2.5rem";
      case "medium":
        return "2rem";
      case "normal":
        return "1rem";
      default:
        return size;
    }
  };


  const typoSx = {};

  if (props.shadowType) {
    typoSx.textShadow = getShadowType(props.shadowType);
  }

  if (props.color) {
    typoSx.color = props.color;
  }

  if (props.textAlign) {
    typoSx.textAlign = props.textAlign;
  }

  if (props.fontSize){
    typoSx.fontSize = getFontSize(props.fontSize);
  }

  
  if (props.padding) {
    if(props.padding.left) {
      typoSx.paddingLeft = props.padding.left;
    }
    if(props.padding.top){
      typoSx.paddingTop = props.padding.top;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" fontWeight={800} sx={typoSx}>
        {props.content}
      </Typography>
    </ThemeProvider>
  );
};

export default Subtitle;
