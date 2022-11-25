import FilterElement from "../FilterCategory/FilterElement/FilterElement";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import Subtitle from "../../Fonts/Subtitle";
import Paragraph from "../../Fonts/Paragraph";
import Title from "../../Fonts/Title";

const boxCardSx = {
  maxWidth: "250px",
  background: "#ffffff",
  borderRadius: "5%",
};

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const FilterGroup = (props) => {
  const filterObjects = props.filterObjects;

  const applyFilters = props.onApplyFilters;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxCardSx}>
        {/* {filterValues.map(filterValue => (
                <FilterElement name = {filterValue}></FilterElement>
            ))} */}
        <Grid container direction={"column"} justifyContent="center">
          <Box paddingTop={1}>
            <Subtitle
              paddingTop
              textAlign="center"
              color="#025928"
              shadowType="light"
              content="Filtros"
            />
          </Box>

          <Box padding={3} >
            <Box sx={{
            background : "#e8e4e4",
            backgroundOrigin: "content-box",
            borderRadius : "20px 20px 20px 20px"
          }}>

            {filterObjects.map((filterObject) => (
              <FilterElement
                name={filterObject.name}
                sections={filterObject.sections}
                onFormAccept={props.onSelectFilters}
              ></FilterElement>
            ))}
            </Box>

          </Box>
          <Box>
            <Grid container justifyContent="center" alignItems={"center"}>
              <Button
                sx={{
                  background: "#78d48c",
                  textTransform: "initial",
                  width: "70%",
                  borderRadius : "20px 20px 20px 20px"
                }}
                onClick={applyFilters}
              >
                <Title
                    titleName="Aplicar filtros"
                    size="1.1rem"
                    color="#ffffff"
                  ></Title>
                {/* <Paragraph
                  size="1.3rem"
                  color="#ffffff"
                  content={"Aplicar Filtros"}
                  textAlign="center"
                ></Paragraph> */}
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default FilterGroup;
