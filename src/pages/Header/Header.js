import { Grid, Typography, Box, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import Title from "../../components/Fonts/Title";
const Header = () => {
  return (
    <Grid
      container
      className="__header"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      color="white"
    >
      <Grid justifyContent={"flex-start"}>
        <Title titleName = "Ecoturismo"></Title>        
      </Grid>
        <Box>
          <Grid container direction={"row"}>
            <Box>
              <Grid container direction={"column"} alignItems={"center"}>
              <SearchIcon fontSize="large" />
              </Grid>
            </Box>
            <Title titleName = "Iniciar sesión "></Title>          
          </Grid>
        </Box>
    </Grid>
  );
};

export default Header;