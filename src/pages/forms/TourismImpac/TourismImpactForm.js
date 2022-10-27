import {
  Box,
  Container,
  Grid,
  Input,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ThemeProvider,
  createTheme,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import SingleQuestion from "../FormComponents/SingleQuestion";
import { useForm } from "react-hook-form";
import "./TourismImpactForm";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const boxSx = {
  background: "#ffffff",
  height: "100vh",
};

const questions = [
  {
    name: "userEmail",
    question: "Correo",
    type: "email",
    placeHolder: "tu direccion de correo electronico",
    required: true,
    color: "darkgreen"
  },
  {
    name: "dataTreatment",
    question: "Autoriza el uso de sus datos personales y respuestas?",
    type: "radioSelect",
    options: ["Si", "No"],
    required: true,
    color: "darkgreen"
  },
  {
    name: "department",
    question: "Departamento",
    type: "selectList",
    options: ["Departamento 1", "Departamento 2", "Departamento 3"],
    required: true,
    color: "darkgreen"
  },
  {
    name: "municipality",
    question: "Municipio",
    type: "selectList",
    options: ["Municipio 1", "Municipio 2", "Municipio 3"],
    required: true,
    color: "darkgreen"
  },
  {
    name: "ethnicGroup",
    question: "Con cual grupo etnico se autoidentifica?",
    type: "radioSelect",
    options: ["ethnic group 1", "ethnic group 2", "ethnic group 3"],
    required: true,
    color: "darkgreen"
  },
  {
    name: "ethnicity",
    question: "Usted pertenece a alguna etnia?",
    type: "selectList",
    options: ["ethnicity 1", "ethnicity 2", "ethnicity 3"],
    required: true,
    color: "darkgreen"
  },
];

const TourismImpactForm = () => {
  var content;
  const getQuestion = (question) => {
    let content = "";
    switch (question.type) {
      case "text":
        content = (
          <SingleQuestion>
            <Grid container direction={"column"}>
              <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography color={question.color} fontWeight={"bolder"}>
                  {" "}
                  {question.question}{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <Input
                  name="text"
                  {...register(question.name, { required: question.required })}
                  fullWidth
                  placeholder={question.placeHolder}
                ></Input>
              </Grid>
            </Grid>
          </SingleQuestion>
        );
        break;
      case "radioSelect":
        content = (
          <SingleQuestion>
            <Grid container direction={"column"}>
              <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography color={question.color} fontWeight={"bolder"}>
                  {" "}
                  {question.question}{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <RadioGroup
                  name="radioTest"
                  {...register(question.name, { required: true })}
                >
                  {question.options.map((option) => {
                    return (
                      <FormControlLabel
                        value={option + ""}
                        control={<Radio color="success" />}
                        label={option}
                      />
                    );
                  })}
                </RadioGroup>
              </Grid>
            </Grid>
          </SingleQuestion>
        );
        break;
      case "selectList":
        content = (
          <SingleQuestion>
            <Grid container direction={"column"}>
              <Grid color={question.color} sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography fontWeight={"bolder"}>
                  {question.question}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <Select
                  value={register.selectTest}
                  onChange={handleChange}
                  fullWidth
                  {...register(question.name, { required: true })}
                  disableUnderline={true}
                  color="success"
                >
                  {question.options.map((option) => {
                    return <MenuItem value={option}>{option}</MenuItem>;
                  })}
                </Select>
              </Grid>
            </Grid>
          </SingleQuestion>
        );
        break;
      case "email":
        content = (
          <SingleQuestion>
            <Grid container direction={"column"}>
              <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography fontWeight={"bolder"} color = "darkgreen">
                  {" "}
                  {question.question}{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <Input
                  type="email"
                  {...register(question.name, { required: question.required })}
                  fullWidth
                  placeholder={question.placeHolder}
                  color="success"
                ></Input>
              </Grid>
            </Grid>
          </SingleQuestion>
        );
        break;
      default:
        content = <SingleQuestion></SingleQuestion>;
        break;
    }
    return content;
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (evt) => {
    console.log(evt.target);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth={1} sx={boxSx}>
        <Container >
          <form
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              margin: "10px 0",
            }}
          >
            {questions.map((question) => {
              return getQuestion(question);
            })}
            <input item type="submit" />
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default TourismImpactForm;
