import React from "react";
import { ThemeProvider, createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 15,
    fontFamily: ["Raleway"].join(","),
  },
});

const Paragraph = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography alignItems={"stretch"} color={props.color}>{props.content}</Typography>
    </ThemeProvider>
  );
};

export default Paragraph;
