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

const getFilters = axios.get(
  process.env.REACT_APP_BASE_ASSET_URL + "/form-builder/filters"
);
const filters = await getFilters;

let filteringParams = {};

const getElements = axios.get(
  process.env.REACT_APP_BASE_ASSET_URL + "/list-by-filters",
  {
    params: filteringParams,
  }
);
const elements = await getElements;

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const mapImgUrl = "https://i.imgur.com/u6dkjRJ.png";

const imageSrc = "https://images.unsplash.com/photo-1645263813697-b037b91e9907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80";
const mainBox = {
  // backgroundImage: "url(" + imageSrc + ")",
};

const minSrcUrl =
  "https://procolombia.co/sites/default/files/01-barranquilla-hori.jpg?1612187920";

const headerBox = {
  height: "5vh",
  background: "#CCF5AB",
  width: "100%",
};

const queryBox = {
  background: "#CCF5AB",
  height: "95vh",
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
  minHeight: "70vh",
  background: "#03A65A",
};

const resultBoxx = {
  height: "80vh",
  width: "60vw",
  background: "#CCF5AB",
  overflow: "scroll",
  "overflow-x": "hidden",
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
    sections: ["Tipo", "Subtipo", "Manifestacion", "Patrimonio", "Grupo"],
  },
];

const CulturalAssetListing = () => {
  const [assets, setAssets] = useState(elements.data.data);
  const [filterParams, setFilterParams] = useState([]);
  const [reqParams, setReqParams] = useState({});

  const sendRequest = () => {
    fetch(
      typeof reqParams === undefined ||
        (Object.keys(reqParams).length === 0 &&
          reqParams.constructor === Object)
        ? process.env.REACT_APP_BASE_ASSET_URL + "/list-by-filters"
        : process.env.REACT_APP_BASE_ASSET_URL +
            "/list-by-filters" +
            "?" +
            new URLSearchParams(reqParams)
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setAssets(result.data);
          // console.log("printing result data : " + result.data);
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
    var matchFound = false;
    var list = filterParams;
    for (let index = 0; index < list.length; index++) {
      if (list[index].name == param.name) {
        matchFound = true;
        list[index].params = param.params;
        setFilterParams(list);
        break;
      }
    }
    if (!matchFound) {
      list.push(param);
      setFilterParams(list);
    }
    console.log(list);
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
                  onDeleteFilters={() => setFilterParams([])}
                  filterBy={filterParams}
                ></FilterGroup>
              </Grid>
            </Box>
            {/* Result box */}
            <Box sx={resultBoxx}>
              <Grid container direction={"row"} justifyContent="space-evenly">
                {assets.map((element, index) => {
                  // console.log(element);
                  return (
                    <CardElement
                      key={index + element.name}
                      link={"/asset-detail/" + element.id}
                      item
                      color={"#025928"}
                      fontSize ={"1.5rem"}
                      // imgSrc={minSrcUrl}
                      imgSrc={
                        (element.imageList && element.imageList.length) > 0
                          ? element.imageList[0].imageBlob
                          : ""
                      }
                      title={element.name}
                    ></CardElement>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
      {/* <Box sx={resultBox} xs={12}>
        <Grid container direction={"row"} justifyContent="space-evenly">
          {assets.map((element, index) => {
            console.log(element);
            return (
              <CardElement
                key={index + element.name}
                link={"/asset-detail/" + element.id}
                item
                color={"#025928"}
                // imgSrc={minSrcUrl}
                imgSrc={
                  (element.imageList && element.imageList.length) > 0
                    ? element.imageList[0].imageBlob
                    : ""
                }
                title={element.name}
              ></CardElement>
            );
          })}
        </Grid>
      </Box> */}
    </ThemeProvider>
  );
};

export default CulturalAssetListing;
