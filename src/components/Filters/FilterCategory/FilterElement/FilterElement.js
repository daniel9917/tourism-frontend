import { React, useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
import Paragraph from "../../../Fonts/Paragraph";
import Subtitle from "../../../Fonts/Subtitle";
import Title from "../../../Fonts/Title";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const boxCardStyle = {};

const FilterElement = (props) => {
  const name = props.name;
  const sections = props.sections;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let filtervalues = new Map();
  sections.forEach((element) => {
    filtervalues.set(element.objectName.toLowerCase(), "");
  });

  const selectOnChange = (event) => {
    filtervalues.set(event.target.id, event.target.value);
  };

  const handleClick = () => {
    var jsonData = {};
    var columnName = name;
    jsonData[columnName] = Object.fromEntries(filtervalues);

    props.onFormAccept({
      name: name,
      params: Object.fromEntries(filtervalues),
    });
    // console.log( {
    //     'name' : name,
    //     'params' : Object.fromEntries(filtervalues)
    // });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    borderRadius: "3%",
    p: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxCardStyle}>
        {/* <p onClick={handleOpen}>{name}</p> */}
        <Paragraph
          customClickEvent={handleOpen}
          size="1.3rem"
          color="#025928"
          content={name}
          textAlign="center"
        ></Paragraph>
        <Modal sx={{ border: "none" }} open={open} onClose={handleClose}>
          <Box sx={style}>
            <Grid
              sx={{ border: "none" }}
              container
              direction={"col"}
              justifyContent="center"
            >
              <Box>
                <Subtitle
                  color="#025928"
                  content={"Filtros por " + name}
                ></Subtitle>
              </Box>
              {/* <Typography>Filtros por {name}</Typography> */}
              <Box paddingTop="5%" minWidth={"100%"}>
                {sections.map((section, index) => (
                  <Grid
                    container
                    key={index}
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-evenly"
                    padding={2}
                  >
                    <Grid item>
                      <Paragraph
                        // customClickEvent={handleOpen}
                        size="1.3rem"
                        color="#025928"
                        content={section.objectName}
                        // textAlign="center"
                      ></Paragraph>
                    </Grid>
                    <Grid item>
                      <select
                        style={{
                          borderColor: "transparent",
                          minHeight: "30px",
                          borderRadius: "5px",
                        }}
                        id={section.objectName.toLowerCase().trim()}
                        onChange={selectOnChange}
                      >
                        {section.values
                          .sort(function (a, b) {
                            if (a.name < b.name) {
                              return -1;
                            }
                            if (a.name > b.name) {
                              return 1;
                            }
                            return 0;
                          })
                          .map((value, index) => (
                            <option key={index} value={value.id}>
                              {value.name}
                            </option>
                          ))}
                      </select>
                    </Grid>
                  </Grid>
                ))}
              </Box>

              <Grid containter></Grid>

              <Box
                paddingTop={"5%"}
                minWidth={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    background: "#78d48c",
                    textTransform: "initial",
                    width: "70%",
                    borderRadius: "20px 20px 20px 20px",
                  }}
                  onClick={handleClick}
                >
                  <Title titleName="Select" size="1rem" color="#ffffff"></Title>
                </Button>
              </Box>
            </Grid>
          </Box>
        </Modal>
        {/* {sections.map(section => (
                <p>{section}</p>
            ))} */}
      </Box>
    </ThemeProvider>
  );
};

export default FilterElement;
