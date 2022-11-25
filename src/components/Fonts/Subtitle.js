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

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" fontWeight={800} sx={typoSx}>
        {props.content}
      </Typography>
    </ThemeProvider>
  );
};

export default Subtitle;
