import { Box, ThemeProvider, createTheme, Grid } from "@mui/material";
import "./Header.css";
import Subtitle from "../../components/Fonts/Subtitle";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const titleBox = {
  width: "20%",
  height : "100%"
};

const spacingBox = {
  width: "60%",
  height : "100%"
};

const loginBox = {
  width: "20%",
  height : "100%"
};

const mainBox = {
  minHeight: "-webkit-fill-available",
};

const paddingBox = {
  height: "44%",
  width: "67%",
};

const Header = () => {
  return (
    // <Grid
    //   container
    //   className="__header"
    //   direction={"row"}
    //   alignItems={"center"}
    //   justifyContent={"space-around"}
    //   color="white"
    // >
    //   <Grid justifyContent={"flex-start"}>
    //     <Title titleName = "Ecoturismo"></Title>
    //   </Grid>
    //     <Box>
    //       <Grid container direction={"row"}>
    //         <Box>
    //           <Grid container direction={"column"} alignItems={"center"}>
    //           <SearchIcon fontSize="large" />
    //           </Grid>
    //         </Box>
    //         <Title titleName = "Iniciar sesión "></Title>
    //       </Grid>
    //     </Box>
    // </Grid>
    <ThemeProvider theme={theme}>
      {/* <Box sx={mainBox}> */}
        <Grid container direction="row" alignItems={"center"} sx ={mainBox} >
          <Box sx={titleBox}>
            <Grid container direction={"col"} justifyContent = "center" alignContent={"center"}>
              <Subtitle color="#025928" fontSize="2.5rem" content="Ecoturismo" />
            </Grid>
          </Box>
          <Box sx={spacingBox}>
            <br></br>
          </Box>
          <Box sx={loginBox}>
            <Subtitle
              fontSize="1.5rem"
              // padding={{ right: "6%", top: "0.6%" }}
              color="#025928"
              content="Iniciar sesion"
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
