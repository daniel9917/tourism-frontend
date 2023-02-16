import React from "react";
import { Box, ThemeProvider, createTheme, Grid } from "@mui/material";
import Paragraph from "../../Fonts/Paragraph";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Assignment from "@mui/icons-material/Assignment";
import {
  AddSharp,
  BoltSharp,
  ForestSharp,
  ForkRightSharp,
  LocationOnSharp,
  MosqueSharp,
} from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const titleBoxSx = {
  display: "flex",
  background: "#03A65A",
  width: "fit-content",
  borderRadius: "10px",
};

const contentBoxSx = {
  padding: "1%",
  background: "#D9D9D9",
  marginTop: "5px",
  borderRadius: "20px",
};

const elementBoxSx = {
  background: "#025928",
  display: "flex",
  borderRadius: "5px",
  margin: "1%",
};

const iconSx = {
  color: "#ffffff",
  fontSize: "50px",
};

const getIcon = (objectName) => {
  switch (objectName) {
    case "Clasificacion":
      return <ArrowDropDownIcon sx={iconSx} />;
    case "Ubicacion":
      return <LocationOnSharp sx={iconSx} />;
    case "Naturaleza del activo":      
      return <Assignment sx={iconSx} />;
    case "Estado":
      return <AddSharp sx={iconSx} />;
    case "Acceso":
      return <ForkRightSharp sx={iconSx} />;
    case "Cosmogonia":
      return <MosqueSharp sx={iconSx} />;
    default:
      return <BoltSharp sx={iconSx} />;
  }
};

const getName = (objectName) => {
  switch (objectName) {
    case "Clasificacion":
      return "Clasificación";
    case "Ubicacion":
      return "Ubicación";
    case "Naturaleza del activo":      
      return "Naturaleza del activo";
    case "Estado":
      return "Estado";
    case "Acceso":
      return "Acceso";
    case "Cosmogonia":
      return "Cosmogonia";
    default:
      return objectName;
  }
};

const TagGroup = (props) => {
  const element = props.data;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: "2%", marginBottom: "2%" }}>
        <Box sx={titleBoxSx}>
          <Box
            style={{
              width: "fit-content",
              borderRadius: "50%",
            }}
          >
            {getIcon(element.objectName)}
            {/* <ArrowDropDownIcon sx={{ color: "#ffffff", fontSize: "50px" }} /> */}
          </Box>
          <Paragraph
            color="#ffffff"
            padding="5px"
            bold
            content={getName(element.objectName)}
            size="1.7rem"
          ></Paragraph>
        </Box>
        <Grid
          container
          sx={contentBoxSx}
          direction="row"
          justifyContent={"flex-start"}
        >
          {element.values.map((item, index) => {
            return (
              <Box key = {index} sx={elementBoxSx}>
                <Paragraph
                  size="1.3rem"
                  padding="5px"
                  bold
                  content={item.objectName + ": "}
                  color="#ffffff"
                ></Paragraph>
                <Paragraph
                  size="1.3rem"
                  padding="5px"
                  style="italic"
                  color="#ffffff"
                  content={item.values.map(v => v.replace("¿", "")).map(v => v.replace("?", "")).join(",")}
                ></Paragraph>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default TagGroup;
