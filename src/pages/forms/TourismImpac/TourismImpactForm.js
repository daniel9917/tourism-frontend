import {
  Box,
  Container,
  Grid,
  Input,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import SingleQuestion from "../FormComponents/SingleQuestion";
import MultiValuedQuestion from "../FormComponents/MultivaluedQuestion";
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

const basicQuestions = [
  {
    name: "userEmail",
    question: "Correo",
    type: "email",
    placeHolder: "Tu dirección de correo electrónico",
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "dataTreatment",
    question: "¿Usted autoriza el uso de sus datos personales y respuestas?",
    type: "radioSelect",
    options: ["Si", "No"],
    required: true,
    color: "darkgreen",
  },
  {
    name: "department",
    question: "Departamento",
    type: "selectList",
    options: ["Departamento 1", "Departamento 2", "Departamento 3"],
    required: true,
    color: "darkgreen",
  },
  {
    name: "municipality",
    question: "Municipio",
    type: "selectList",
    options: ["Municipio 1", "Municipio 2", "Municipio 3"],
    required: true,
    color: "darkgreen",
  },
  {
    name: "ethnicGroup",
    question: "¿Con cuál grupo etnico se autoidentifica?",
    type: "radioSelect",
    options: ["ethnic group 1", "ethnic group 2", "ethnic group 3"],
    required: true,
    color: "darkgreen",
  },
  {
    name: "ethnicity",
    question: "¿Usted pertenece a alguna etnia?",
    type: "selectList",
    options: ["ethnicity 1", "ethnicity 2", "ethnicity 3"],
    required: true,
    color: "darkgreen",
  },
];

const qualityOfLifeQuestions = [
  {
    name: "socialRelationsips",
    question: "Relaciones Sociales",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "sr1",
        value:
          "Los turistas faltan el respeto a la comunidad y a su cultura, no se portan bien.",
      },
      {
        name: "sr2",
        value: "Los visitantes usan palabras ofensivas o groseras.",
      },
      {
        name: "sr3",
        value:
          "Los visitantes son sucios en su persona o dejan basura a su alrededor",
      },
      {
        name: "sr4",
        value:
          "Los comportamientos anteriores los hacen habitantes aun sin impacto del turista",
      },
      {
        name: "sr5",
        value: "No se puede descansar por el ruido que hacen los turistas",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "personalSecurity",
    question: "Seguridad Personal",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "ps1",
        value: "La inseguridad subió por la presencia de turistas",
      },
      {
        name: "ps2",
        value:
          "Mis hijas e hijos corren el riesgo de ser irresoetados por los turistas",
      },
      {
        name: "ps3",
        value:
          "La prostitución en jóvenes del pueblo aumentó por la llegada de turistas",
      },
      {
        name: "ps4",
        value:
          "Los comportamientos anteriores los hacen los habitantes aun sin impacto del turista",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "healthWellness",
    question: "Buena Salud",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "hw1",
        value:
          "Nuestros hijos están consumiendo drogas incentivados por los turistas",
      },
      {
        name: "hw2",
        value:
          "Nos estamos enfermando de cosas extrañas por la llegada de turistas",
      },
      {
        name: "hw3",
        value:
          "Estas situaciones las sufren los habitantes aun sin impacto del turista",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
];

const wellnessSustainability = [
  {
    name: "cosmogonyTradition",
    question: "Cosmogonía y tradición ",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "ct1",
        value: "Los turistas no respetan los lugares sagrados",
      },
      {
        name: "ct2",
        value:
          "Los turistas se burlan de los comportamientos tradicionales de la comunidad",
      },
      {
        name: "ct3",
        value: "Los niños y jóvenes están perdiendo sus tradiciones",
      },
      {
        name: "ct4",
        value: "Debemos acomodar muchas cosas al modo de los turistas",
      },
      {
        name: "ct5",
        value: "Perdemos nuestros orígenes por culpa del turismo",
      },
      {
        name: "ct6",
        value:
          "Los comportamientos anteriores los hacen los habitantes aun sin impacto del turista",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "ambientalSecurity",
    question: "Seguridad Ambiental - Naturaleza y Patrimonio",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "asnp1",
        value: "Los turistas rayan, se suben y maltratan los árboles , la naturaleza en general",
      },
      {
        name: "asnp2",
        value:
          "Los turistas maltratan a los animales",
      },
      {
        name: "asnp3",
        value: "Los turistas dañan los monumentos y los lugares culturales",
      },
      {
        name: "asnp4",
        value: "Los comportamientos anteriores los hacen los habitantes aun sin impacto del turista",
      }
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
];

const economicSituation = [
  {
    name: "economicSituation",
    question: "Acceso a bienes materiales",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "ec1",
        value: "Los precios de los alimentos, la vivienda y la recreación subieron por la legada de los turistas",
      },
      {
        name: "ec2",
        value:
          "Sólo unos pocos se quedan con los beneficios del turismo",
      },
      {
        name: "ec3",
        value: "No tenemos permiso de transitar por ciertos lugares para que los turistas no se molesten",
      },
      {
        name: "ec4",
        value: "Estas situaciones las sufren los habitantes aun sin impacto del turista",
      }
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
];

const TourismImpactForm = () => {
  const { register, handleSubmit } = useForm();
  const [dimensionValues, setDimensionValues] = useState([]);

  const addDimensionValue = (dimension) => {
    const currentValues = [...dimensionValues];

    if (objectNameInList(dimension.name, currentValues)) {
      currentValues.forEach((element, index) => {
        if (element.name === dimension.name) {
          currentValues[index] = dimension;
        }
      });
      setDimensionValues(currentValues);
    } else {
      setDimensionValues(currentValues.unshift(dimension));
    }
  };

  /**
   *
   * @param {*} name name to compare against
   * @param {*} objectList objects that have property name
   * @returns true if object matching property name is found, false in the other case
   */
  const objectNameInList = (name, objectList) => {
    var present = false;
    objectList.map((object) => {
      if (object.name === name) {
        present = true;
      }
    });
    return present;
  };

  var content;
  /**
   *
   * @param {*} question json objects that holds the contents of the question
   * @returns  should return the component given the type of the question.
   */
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
              <Grid
                color={question.color}
                sx={{ paddingTop: "2%" }}
                item
                xs={12}
              >
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
                <Typography fontWeight={"bolder"} color="darkgreen">
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
      case "dimensionCriteria":
        content = (
          <MultiValuedQuestion question={question}></MultiValuedQuestion>
        );
        break;
      default:
        content = (
          <SingleQuestion>
            <p>ghi</p>
          </SingleQuestion>
        );
        break;
    }
    return content;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (evt) => {
    console.log(evt.target);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth={1} sx={boxSx}>
        <Container>
          <form
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              margin: "10px 0",
            }}
          >
            {basicQuestions.map((question) => {
              return getQuestion(question);
            })}
            {qualityOfLifeQuestions.map((question) => {
              return getQuestion(question);
            })}
            {wellnessSustainability.map((question) => {
              return getQuestion(question);
            })}
            {economicSituation.map((question) => {
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
