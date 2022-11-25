import React from "react";
import { ThemeProvider, createTheme, Box, Container } from "@mui/material";
import { useState } from "react";
import FilterGroup from "../../components/Filters/FilterGroup/FilterGroup";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const queryBox = {
  background: "#CCF5AB",
  height: "100vh"
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
      <Box maxWidth={1} sx={queryBox}>
        <FilterGroup
          filterObjects={getFilterObjects()}
          onSelectFilters={addParams}
          onApplyFilters={getFilters}
          filterBy={filterParams}
        ></FilterGroup>
      </Box>
    </ThemeProvider>
  );
};

export default CulturalAssetListing;
