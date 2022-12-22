import React from "react";
import { Box, ThemeProvider, createTheme, Grid } from "@mui/material";
import { TextSnippetOutlined, BoltSharp } from "@mui/icons-material";
import Paragraph from "../../Fonts/Paragraph";
import { Container } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const element = {
  objectName: "Recomendaciones de Visita",
  values: [
    {
      objectName: "Quality",
      values: ["Respetar normas de las comunidades", "Guía certificado"],
    },
    {
      objectName: "Wellness",
      values: [
        "Evitar fuentes de luz nocturnas",
        "Prohibido contaminar los cuerpos de agua",
      ],
    },
    {
      objectName: "Economic",
      values: [
        "Evitar regatear los precios puede ser un insulto o una falta de consideración",
      ],
    },
  ],
};

const mainBoxSx = {
    padding: "1%",
    background: "#03A65A",
    marginTop: "5px",
    borderRadius: "20px",
}

const titleBoxSx = {
  display: "flex",
  width: "fit-content",
  borderRadius: "10px",
};

const iconSx = {
  color: "#ffffff",
  fontSize: "50px",
};

const getIcon = (objectName) => {
  switch (objectName) {
    case "Recomendaciones de Visita":
      return <TextSnippetOutlined sx={iconSx} />;
    default:
      return <BoltSharp sx={iconSx} />;
  }
};

const ListGroup = (props) => {
  const element = props.data;
  if (element.values.length < 1) {
    return <h1></h1>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Box sx = {mainBoxSx}>
        <Grid container direction={"column"}>
          <Box>
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
                content={element.objectName}
                size="1.7rem"
              ></Paragraph>
            </Box>
          </Box>
          <Container>
          {element.values.map((el) => {
            return (
              <Grid container direction = {"column"}>
                <Grid item>
                <Paragraph
                  color="#ffffff"
                  padding="5px"
                  bold
                  content={el.objectName}
                  size="1.3rem"
                ></Paragraph>
                </Grid>
                <Grid item>
                <ul>
                  {el.values.map((value) => {
                    return (
                      <li>
                        <Paragraph
                          color="#ffffff"
                          padding="5px"
                          content={value}
                          size="1.3rem"
                        ></Paragraph>
                      </li>
                    );
                  })}
                </ul>
                </Grid>
              </Grid>
            );
          })}
          </Container>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default ListGroup;
