import "./App.css";
import { useState } from "react";
import { Box } from "@mui/material";
import TourismImpactForm from "./pages/forms/TourismImpac/TourismImpactForm";
import CulturalAssetForm from "./pages/forms/CulturalAsset/CulturalAssetForm";
import Home from "./pages/Home/Home";
import CulturalAssetListing from "./pages/Listing/CulturalAssetListing";
import FilterGroup from "./components/Filters/FilterGroup/FilterGroup";
import CulturalAssetDetail from "./pages/Detail/CulturalAssetDetail";
import CharacteristicGroup from "./components/CharactheristicGroup/CharectiristicGroup";
import ListGroup from "./components/CharactheristicGroup/CharacteristicDisplay/ListGroup";
import RadarChart from "./components/Charts/RadarChart";
import ImpactTab from "./components/Tab/ImpactTab";

function App() {
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
    <Box maxWidth={1} maxHeight={1} sx={rootBoxSx}>
      {/* <CulturalAssetListing></CulturalAssetListing> */}
      {/* <Home></Home> */}
      {/* <Header></Header> */}
      {/* <CardElement title="titulo 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." imgSrc = "https://i.imgur.com/ABIjoz5.png"></CardElement> */}
      {/* <TourismImpactForm></TourismImpactForm> */}
      {/* <CulturalAssetForm></CulturalAssetForm> */}
      <CulturalAssetDetail></CulturalAssetDetail>
      {/* <ImpactTab></ImpactTab> */}
      {/* <RadarChart></RadarChart> */}
      {/* <CharacteristicGroup></CharacteristicGroup> */}
      {/* <ListGroup></ListGroup> */}
    </Box>
    // {/* </ThemeProvider> */}

    //  <FilterGroup
    //         filterObjects = {getFilterObjects()}
    //         onSelectFilters = {addParams}
    //         onApplyFilters = {getFilters}
    //         filterBy = {filterParams}>
    //   </FilterGroup>
  );
}

export default App;
