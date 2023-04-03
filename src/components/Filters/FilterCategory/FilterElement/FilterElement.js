import { React, useEffect, useState } from "react";
import { Box, Grid, Modal, Select, MenuItem } from "@mui/material";
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
  const selected = props.selected;

  const [open, setOpen] = useState(false);
  const [changedOnes, setChangedOnes] = useState([]);

  useEffect(() => {
    if (open) {
      setChangedOnes(selected);
    }
  }, [open])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let filtervalues = new Map();
  sections.forEach((element) => {
    filtervalues.set(element.objectName.toLowerCase(), "");
  });

  const getName = (id) => {
    return []
      .concat(
        ...sections.map((s) => {
          return s.values.map((v) => {
            if (v.id === id) {
              return { yes: true, name: s.objectName };
            }
          });
        })
      )
      .filter(function (el) {
        return el != null;
      })[0].name.toLowerCase();
  };

  const selectOnChange = (event) => {
    var newValues = changedOnes;
    let json = {
      name: getName(event.target.value),
      value: event.target.value,
    };

    if (newValues.length > 0) {
      let existent = false;
      newValues = changedOnes.map((c) => {
        if (c.name == json.name) {
          existent = true;
          return json;
        }
        return c;
      });
      if (!existent) {
        newValues.push(json);
      }
    } else {
      newValues.push(json);
    }

    setChangedOnes(newValues);
    console.log(newValues);
    filtervalues.set(event.target.id, event.target.value);
  };

  const handleClick = () => {
    var json = Object.fromEntries(filtervalues);
    changedOnes.forEach (c => {
      json[c.name] = c.value;
    })
    console.log(json);
    props.onFormAccept({
      name: name,
      params: json,
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
                      {/* <select
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
                      </select> */}
                      <Select
                        sx={{
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
                            <MenuItem key={index} value={value.id}>
                              {value.name}
                            </MenuItem>
                          ))}
                      </Select>
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
