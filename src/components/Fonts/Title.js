import { Typography } from "@mui/material";
import React from "react";
import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
    typography : {            
        fontFamily : [
            'Raleway'            
        ].join('')
}});

const Title = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3" fontWeight={800}>{props.titleName}</Typography>
        </ThemeProvider>
    );
};

export default Title;