import { Box, ThemeProvider, createTheme, Grid } from "@mui/material";
import "./Header.css";
import Subtitle from "../../components/Fonts/Subtitle";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const titleBox = {
  width: "30%",
  height: "100%",
};

const spacingBox = {
  width: "50%",
  height: "100%",
};

const loginBox = {
  width: "20%",
  height: "100%",
};

const mainBox = {
  minHeight: "-webkit-fill-available",
};

const subtitleSx = {
  color: "#025928",
  t1: "2.5rem",
  t2: "1.5rem",
};

const paddingBox = {
  height: "44%",
  width: "67%",
};

const Header = (props) => {
  if (props.fontColor) {
    subtitleSx.color = props.fontColor;
  }
  if (props.fontSize) {
    switch (props.fontSize) {
      case "big":
        subtitleSx.t1 = "3rem";
        subtitleSx.t2 = "2rem"
        break;      
      default:
        break;
    }
  }
  return (
    <ThemeProvider theme={theme}>
      {/* <Box sx={mainBox}> */}
      <Grid container direction="row" alignItems={"center"} sx={mainBox}>
        <Box sx={titleBox}>
          <Grid
            container
            direction={"col"}
            justifyContent="center"
            alignContent={"center"}
          >
            <Link reloadDocument to={`/`}>
              <Subtitle
                color={subtitleSx.color}
                fontSize={subtitleSx.t1}
                content="Turismo Consciente"
              />
            </Link>
          </Grid>
        </Box>
        <Box sx={spacingBox}>
          <br></br>
        </Box>
        <Box sx={loginBox}>
          <Subtitle
            fontSize={subtitleSx.t2}
            // padding={{ right: "6%", top: "0.6%" }}
            color={subtitleSx.color}
            content=""
          />
        </Box>
        {/* <Grid sx={{ height: "100%" }} container direction={"row"}>
          <Subtitle color="#025928" content="Ecoturismo"></Subtitle>
        </Grid> */}
      </Grid>
      {/* </Box> */}
    </ThemeProvider>
  );
};

export default Header;
