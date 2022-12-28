import React, { useEffect } from "react";
import { ThemeProvider, createTheme, Box, Grid } from "@mui/material";
import { useState } from "react";
import FilterGroup from "../../components/Filters/FilterGroup/FilterGroup";
import Header from "../Header/Header";
import { Title } from "@mui/icons-material";
import Subtitle from "../../components/Fonts/Subtitle";
import Paragraph from "../../components/Fonts/Paragraph";
import CardElement from "../../components/CardElement/CardElement";
import urls from "../../urls.json";
import axios from "axios";
import filterValues from "../../filters.json";


const getFilters = axios.get(process.env.REACT_APP_BASE_ASSET_URL + "/form-builder/filters");
const filters = await getFilters;

let filteringParams = {};

const getElements = axios.get(process.env.REACT_APP_BASE_ASSET_URL + "/list-by-filters", {      
    params: filteringParams,
});
const elements = await getElements;

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

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
  minHeight : "100vh",
  background: "#03A65A",
};

const filterObjects = [
  {
    name: "Ubicación",
    sections: ["Departamento", "Municipio"],
  },
  {
    name: "Comunidad",
    sections: ["Community"],
  },
  {
    name: "Clasificación",
    sections: ["Tipo", "Subtipo", "Manifestacion", "Patrimonio", "Categoria"],
  },
];

const CulturalAssetListing = () => {
  const [assets, setAssets] = useState(elements.data.data);
  const [filterParams, setFilterParams] = useState([]);
  const [reqParams, setReqParams] = useState({});

  const sendRequest = () => {
    fetch(
      (typeof reqParams === undefined) ||
        (Object.keys(reqParams).length === 0 &&
          reqParams.constructor === Object)
        ? process.env.REACT_APP_BASE_ASSET_URL+"/list-by-filters"
        : process.env.REACT_APP_BASE_ASSET_URL+"/list-by-filters" + "?" + new URLSearchParams(reqParams)
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setAssets(result.data);
          console.log("printing result data : " + result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getFilterObjects = () => {
    return filterObjects;
  };

  const getAssets = () => {
    let params = formatObjectFilter(filterParams);
    console.log(params);
    setReqParams(params);
    sendRequest();
  };

  const formatObjectFilter = (filterAssetParams) => {
    let objectFilters = [];
    let params = {};

    filterAssetParams.map((fp) => {
      let keys = Object.keys(fp.params);
      keys.map((key) => {
        if (
          !(typeof filterValues[key] === undefined) &&
          fp.params[key] !== ""
        ) {
          let filterDTO = {
            [filterValues[key]]: fp.params[key],
          };
          objectFilters.push(filterDTO);
        }
      });
    });

    objectFilters.map((object) => {
      let keys = Object.keys(object);
      params[keys[0]] = object[keys[0]];
    });

    return params;
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
                  filterSections={filters.data}
                  filterObjects={getFilterObjects()}
                  onSelectFilters={addParams}
                  onApplyFilters={getAssets}
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
          {assets.map((element, index) => {
            return (
              <CardElement
                key={index + element.name}
                link = {'/asset-detail/'+element.id}
                item
                color={"#025928"}
                imgSrc={minSrcUrl}
                title={element.name}
              ></CardElement>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CulturalAssetListing;
