import React from "react";
import { ThemeProvider, createTheme, Typography } from "@mui/material";

const theme = createTheme({
    typography : {        
        fontFamily : [
            'Raleway',
        ].join(',')
    }
});

const Subtitle = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h4" fontWeight={800} sx={{
                textShadow : '2px 2px 10px #000000',
                color : props.color
            }}>
                {props.content}
            </Typography>
        </ThemeProvider>
    );
};

export default Subtitle;