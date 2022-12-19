import React from "react";
import { Box, ThemeProvider, createTheme, Grid } from "@mui/material";
import Paragraph from "../Fonts/Paragraph";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  AddSharp,
  BoltSharp,
  ForestSharp,
  ForkRightSharp,
  LocationOnSharp,
  MosqueSharp,
} from "@mui/icons-material";
import TagGroup from "./CharacteristicDisplay/TagGroup.js";
import ListGroup from "./CharacteristicDisplay/ListGroup";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const titleBoxSx = {
  display: "flex",
  background: "#B54815",
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
  fontSize: "50px" 
};

const getIcon = (objectName) => {
  switch (objectName) {
    case "Clasificacion":
      return <ArrowDropDownIcon sx={iconSx} />;
    case "Ubicacion":
      return <LocationOnSharp sx={iconSx} />;
    case "Naturaleza":
      return <ForestSharp sx={iconSx} />;
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

const CharacteristicGroup = (props) => {
  const data = props.data;
  // console.log(data);
  if (data.length < 1) {
    return <h1></h1>;
  }

  const getGroupType = (element) => {
    switch (element.objectName) {
      case "Recomendaciones de Visita":
        return <ListGroup data ={element}></ListGroup>
      case "Comunidades Etnicas":
        return <ListGroup data ={element}></ListGroup>
      default:
        return <TagGroup data = {element}></TagGroup>;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {data.map((element) => {
        // console.log(element);
        return (
          getGroupType(element)
          // <TagGroup data = {element}></TagGroup>
        //   <Box sx={{ marginTop: "2%", marginBottom: "2%" }}>
        //     <Box sx={titleBoxSx}>
        //       <Box
        //         style={{
        //           background: "#B54815",
        //           width: "fit-content",
        //           borderRadius: "50%",
        //         }}
        //       >
        //         {getIcon(element.objectName)}
        //         {/* <ArrowDropDownIcon sx={{ color: "#ffffff", fontSize: "50px" }} /> */}
        //       </Box>
        //       <Paragraph
        //         color="#ffffff"
        //         padding="5px"
        //         bold
        //         content={element.objectName}
        //         size="1.7rem"
        //       ></Paragraph>
        //     </Box>
        //     <Grid
        //       container
        //       sx={contentBoxSx}
        //       direction="row"
        //       justifyContent={"flex-start"}
        //     >
        //       {element.values.map((item) => {
        //         return (
        //           <Box sx={elementBoxSx}>
        //             <Paragraph
        //               size="1.3rem"
        //               padding="5px"
        //               bold
        //               content={item.objectName + ": "}
        //               color="#ffffff"
        //             ></Paragraph>
        //             <Paragraph
        //               size="1.3rem"
        //               padding="5px"
        //               style="italic"
        //               color="#ffffff"
        //               content={item.values.join(",")}
        //             ></Paragraph>
        //           </Box>
        //         );
        //       })}
        //       {/* <Box sx={elementBoxSx}>
        //   <Paragraph
        //     size="1.3rem"
        //     padding="5px"
        //     bold
        //     content="Grupo: "
        //     color="#ffffff"
        //   ></Paragraph>
        //   <Paragraph
        //     size="1.3rem"
        //     padding="5px"
        //     style="italic"
        //     color="#ffffff"
        //     content="grupo1"
        //   ></Paragraph>
        // </Box>
        // <Box sx={elementBoxSx}>
        //   <Paragraph
        //     size="1.3rem"
        //     padding="5px"
        //     bold
        //     content="Grupo: "
        //     color="#ffffff"
        //   ></Paragraph>
        //   <Paragraph
        //     size="1.3rem"
        //     padding="5px"
        //     style="italic"
        //     color="#ffffff"
        //     content="grupo1"
        //   ></Paragraph>
        // </Box>
        // <Box sx={elementBoxSx}>
        //   <Paragraph
        //     size="1.3rem"
        //     padding="5px"
        //     bold
        //     content="Grupo: "
        //     color="#ffffff"
        //   ></Paragraph>
        //   <Paragraph
        //     size="1.3rem"
        //     padding="5px"
        //     style="italic"
        //     color="#ffffff"
        //     content="grupo1"
        //   ></Paragraph>
        // </Box> */}
        //     </Grid>
        //   </Box>
        );
      })}
    </ThemeProvider>
  );
};

export default CharacteristicGroup;
