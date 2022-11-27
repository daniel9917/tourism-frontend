import React from "react";
import { ThemeProvider, createTheme, Box, Grid } from "@mui/material";
import { useState } from "react";
import FilterGroup from "../../components/Filters/FilterGroup/FilterGroup";
import Header from "../Header/Header";
import { Title } from "@mui/icons-material";
import Subtitle from "../../components/Fonts/Subtitle";
import Paragraph from "../../components/Fonts/Paragraph";
import CardElement from "../../components/CardElement/CardElement";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const elements = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const mapImgUrl = "https://i.imgur.com/u6dkjRJ.png";

const mainBox = {};

const minSrcUrl =
  "https://procolombia.co/sites/default/files/01-barranquilla-hori.jpg?1612187920";

const headerBox = {
  height: "5vh",
  background: "#CCF5AB",
  width: "100%",
};

const queryBox = {
  background: "#CCF5AB",
  height: "100vh",
};

const filterBox = {
  width: "30%",
};

const mapBox = {
  width: "40%",
};

const descriptionBox = {
  width: "30%",
};

const resultBox = {
  background: "#03A65A",
};

const boxSx = {
  background: "#08a45c",
};

const filterObjects = [
  {
    name: "Ubicación",
    sections: ["Pais", "Departamento", "Municipio"],
  },
  {
    name: "Comunidad",
    sections: ["Community", "Common"],
  },
  {
    name: "Clasificación",
    sections: ["Tipo", "Subtipo", "Manifestacion", "Patrimonio", "Categoria"],
  },
];

const CulturalAssetListing = () => {
  const getFilterObjects = () => {
    return filterObjects;
  };

  const filterSections = ["Ubicacion", "Categoria", "Clasificacion"];
  const [filterParams, setFilterParams] = useState([]);

  const getFilters = () => {
    console.log(filterParams);
  };

  const addParams = (param) => {
    var jsonString = JSON.stringify(param);
    console.log(JSON.parse(jsonString));
    var matchFound = false;
    for (let index = 0; index < filterParams.length; index++) {
      if (filterParams[index].name == param.name) {
        matchFound = true;
        filterParams[index].params = param.params;
        setFilterParams(filterParams);
        break;
      }
    }
    if (!matchFound) {
      filterParams.push(param);
      setFilterParams(filterParams);
    }
    console.log(filterParams);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={mainBox} xs={12}>
        <Box maxWidth={1} sx={headerBox}>
          <Header></Header>
        </Box>
        <Box maxWidth={1} sx={queryBox}>
          <Grid
            sx={{
              minHeight: "-webkit-fill-available",
            }}
            container
            direction={"row"}
            alignItems="center"
          >
            <Box sx={filterBox}>
              <Grid container direction={"col"} justifyContent={"center"}>
                <FilterGroup
                  filterObjects={getFilterObjects()}
                  onSelectFilters={addParams}
                  onApplyFilters={getFilters}
                  filterBy={filterParams}
                ></FilterGroup>
              </Grid>
            </Box>
            <Box sx={mapBox}>
              <Grid
                container
                direction={"col"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={mapImgUrl}
                  style={{
                    width: "90%",
                    height: "auto",
                  }}
                />
              </Grid>
            </Box>
            <Box sx={descriptionBox}>
              <Grid
                direction={"col"}
                alignItems="center"
                justifyContent={"center"}
                maxWidth={"80%"}
              >
                <Subtitle
                  color="#025928"
                  fontSize="big"
                  shadowType="light"
                  content="Mapa de activos"
                ></Subtitle>
                <Paragraph
                  padding={{ top: "5%" }}
                  content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                  color="#025928"
                ></Paragraph>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box sx={resultBox} xs={12}>
        <Grid container direction={"row"} justifyContent="space-evenly">
          {elements.map((element) => {
            return (
                <CardElement
                  item
                  color={"#025928"}
                  imgSrc={minSrcUrl}
                  title="Activo cultural"
                ></CardElement>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CulturalAssetListing;
