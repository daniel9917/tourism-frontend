import logo from "./logo.svg";
import "./App.css";
import FilterElement from "./components/Filters/FilterCategory/FilterElement/FilterElement";
import FilterGroup from "./components/Filters/FilterGroup/FilterGroup";
import { Component, useState } from "react";
import Home from "./pages/Home/Home";
import { Box, Container } from "@mui/material";
import CardElement from "./components/CardElement/CardElement";
import Header from "./pages/Header/Header";
// import { ThemeProvider, createTheme } from '@mui/material';

// const theme = createTheme({
//   typography  : {
//     fontFamily : [
//       'Raleway'
//     ].join(',')
//   }
// });

function App() {
  const filterObjects = [
    {
      name: "Ubicacion",      
      sections: ["Pais", "Departamento", "Municipio"],
    },
    {
      name: "Comunidad",
      sections: ["Community", "Common"],
    },
    {
      name: "Clasificacion",
      sections: ["Tipo", "Subtipo", "Manifestacion", "Patrimonio", "Categoria"],
    },
  ];

  const getFilterObjects = () => {
    return filterObjects;
  };

  const rootBoxSx = {
    background: "linear-gradient(to top, #085c2c, #08a45c)",
    height: "100vh",
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
    // <ThemeProvider theme={theme}>
    <Box className="root__box" maxWidth={1} maxHeight={1} sx={rootBoxSx}>
      <Home></Home>
      {/* <Header></Header> */}
      {/* <CardElement title="titulo 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." imgSrc = "https://i.imgur.com/ABIjoz5.png"></CardElement> */}
    </Box>
    // {/* </ThemeProvider> */}
  );

  {
    /* <FilterGroup 
          filterObjects = {getFilterObjects()}
          onSelectFilters = {addParams}
          onApplyFilters = {getFilters}
          filterBy = {filterParams}>
        </FilterGroup> */
  }
}

export default App;
