import React from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { useState } from "react";
import FilterGroup from "../../components/Filters/FilterGroup/FilterGroup";
import Header from "../Header/Header";
import { Title } from "@mui/icons-material";
import Subtitle from "../../components/Fonts/Subtitle";
import Paragraph from "../../components/Fonts/Paragraph";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const mainBox = {};

const headerBox = {
  height: "13vh",
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

const resultBox = {};

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
      <div sx={{ overflow: "hidden" }}>
        <Box sx={mainBox}>
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
                <Grid
                  container
                  direction="col"
                  justifyContent={"center"}
                >
                  <FilterGroup
                    filterObjects={getFilterObjects()}
                    onSelectFilters={addParams}
                    onApplyFilters={getFilters}
                    filterBy={filterParams}
                  ></FilterGroup>
                </Grid>
              </Box>
              <Box sx={mapBox}></Box>
              <Box sx={descriptionBox}>
                <Grid
                  direction="col"
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
          <Box maxWidth={1} sx={resultBox}></Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default CulturalAssetListing;
