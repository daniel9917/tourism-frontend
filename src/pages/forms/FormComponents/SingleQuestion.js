import { Box } from "@mui/system";
import React from "react";
import {
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import "./SingleQuestion.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(""),
  },
});


const SingleQuestion = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0} minWidth={"100%"} paddingTop={"2%"}>
        <Grid item xs={12} bgcolor={"#dcdcdc"} borderRadius = {"30px"}>
          <Box alignContent={"center"} paddingRight={"5%"} paddingLeft={"5%"} borderRadius = {"50%"}>
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SingleQuestion;
