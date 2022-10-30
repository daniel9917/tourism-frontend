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
    codeName : "sr",
    question: "Relaciones Sociales",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "sr",
        value:
          "Los turistas faltan el respeto a la comunidad y a su cultura, no se portan bien.",
      },
      {
        name: "sr",
        value: "Los visitantes usan palabras ofensivas o groseras.",
      },
      {
        name: "sr",
        value:
          "Los visitantes son sucios en su persona o dejan basura a su alrededor",
      },
      {
        name: "sr",
        value:
          "Los comportamientos anteriores los hacen habitantes aun sin impacto del turista",
      },
      {
        name: "sr",
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
    codeName : "ps",
    question: "Seguridad Personal",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "ps",
        value: "La inseguridad subió por la presencia de turistas",
      },
      {
        name: "ps",
        value:
          "Mis hijas e hijos corren el riesgo de ser irresoetados por los turistas",
      },
      {
        name: "ps",
        value:
          "La prostitución en jóvenes del pueblo aumentó por la llegada de turistas",
      },
      {
        name: "ps",
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
    codeName : "hw",
    question: "Buena Salud",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "hw",
        value:
          "Nuestros hijos están consumiendo drogas incentivados por los turistas",
      },
      {
        name: "hw",
        value:
          "Nos estamos enfermando de cosas extrañas por la llegada de turistas",
      },
      {
        name: "hw",
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
    codeName : "ct",
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
    codeName : "asnp",
    question: "Seguridad Ambiental - Naturaleza y Patrimonio",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "asnp1",
        value:
          "Los turistas rayan, se suben y maltratan los árboles , la naturaleza en general",
      },
      {
        name: "asnp2",
        value: "Los turistas maltratan a los animales",
      },
      {
        name: "asnp3",
        value: "Los turistas dañan los monumentos y los lugares culturales",
      },
      {
        name: "asnp4",
        value:
          "Los comportamientos anteriores los hacen los habitantes aun sin impacto del turista",
      },
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
    codeName : "ecs",
    question: "Acceso a bienes materiales",
    type: "dimensionCriteria",
    criteria: ["No sucede", "A veces", "Mucho", "Critico"],
    options: [
      {
        name: "ec1",
        value:
          "Los precios de los alimentos, la vivienda y la recreación subieron por la legada de los turistas",
      },
      {
        name: "ec2",
        value: "Sólo unos pocos se quedan con los beneficios del turismo",
      },
      {
        name: "ec3",
        value:
          "No tenemos permiso de transitar por ciertos lugares para que los turistas no se molesten",
      },
      {
        name: "ec4",
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

const hostBehaviour = [
  {
    name: "likeTouristArrival",
    codeName : "lta",
    question: "Me gusra que vengan turistas a mi municipio",
    type: "multiCheckBox",
    options: [
      {
        name: "lta1",
        value:
          "Los precios de los alimentos, la vivienda y la recreación subieron por la legada de los turistas",
      },
      {
        name: "lta2",
        value: "Sólo unos pocos se quedan con los beneficios del turismo",
      },
      {
        name: "lta3",
        value:
          "No tenemos permiso de transitar por ciertos lugares para que los turistas no se molesten",
      },
      {
        name: "lta4",
        value:
          "Estas situaciones las sufren los habitantes aun sin impacto del turista",
      },
      {
        name: "lta5",
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
                        control={
                          <Radio
                            onClick={() => {
                              console.log(register.selectTest);
                            }}
                            color="success"
                          />
                        }
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
          <Grid container spacing={0} minWidth={"100%"} paddingTop={"2%"}>
            <Grid
              item
              xs={12}
              bgcolor={"#dcdcdc"}
              borderRadius={"30px"}
              sx={
                !question.opacity
                  ? null
                  : {
                      background: getBackgroudOpacity(
                        question.opacity,
                        question.rgb
                      ),
                    }
              }
            >
              <Box
                alignContent={"center"}
                paddingRight={"5%"}
                paddingLeft={"5%"}
                borderRadius={"50%"}
              >
                <Grid container direction={"row"}>
                  <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                    <Typography color={question.color} fontWeight={"bolder"}>
                      {" "}
                      {question.question}{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={4}></Grid>
                      <Grid container justifyContent={"space-around"} xs={8}>
                        {question.criteria.map((c) => {
                          return (
                            <Typography fontWeight={800} color={"#7c8484"} fontSize={18}
                              xs={Math.floor(12 / question.criteria.length)}
                            >
                              {" "}
                              {c}{" "}
                            </Typography>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                    {question.options.map((option, index) => {
                      return (
                        <Grid
                          container
                          paddingTop={"2%"}
                          spacing={1}
                          minWidth="100%"
                          alignItems={"center"}
                        >
                          <Grid item xs={4}>
                            <Typography>{option.value}</Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <Grid
                              container
                              justifyContent={"space-around"}
                              alignContent="center"
                            >
                              {question.criteria.map((c, i) => {
                                return (
                                  <input
                                    type="radio"
                                    name={question.codeName + "." + index}
                                    {...register(question.codeName + "." + index)}
                                    value={i}
                                    color="success"
                                  />
                                );
                              })}
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
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

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log("holaaaaaaaaaaaaa");
    console.log(data);
  };

  const handleChange = (evt) => {
    console.log(evt.target);
  };

  function getBackgroudOpacity(opacity, rgb) {
    var bg = "rgba(" + [rgb, opacity].join(",") + ")";
    // alert(bg,rgb);
    return bg;
  }

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
