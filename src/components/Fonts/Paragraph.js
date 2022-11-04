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
            case "extra" :
                typoSx.fontSize = "4rem";
            break;
            case "large" :
                typoSx.fontSize = "3rem";
            break;
            case "medium" :
                typoSx.fontSize = "2rem";
            break;
            case "normal" :
                typoSx.fontSize = "1rem";
            break;
            default :
                typoSx.fontSize = size;
            break;
        }        
    }

    if (props.size){
        setFontSize(props.size);
    }

    if (props.color) {
        typoSx.color = props.color;
    }


  return (
    <ThemeProvider theme={theme}>
      <Typography alignItems={"stretch"} sx ={typoSx}>{props.content}</Typography>
    </ThemeProvider>
  );
};

export default Paragraph;
