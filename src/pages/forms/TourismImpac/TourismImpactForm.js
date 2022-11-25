import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
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
import Title from "../../../components/Fonts/Title";
import Paragraph from "../../../components/Fonts/Paragraph";
import { ExpandMoreRounded } from "@mui/icons-material";
import axios from "axios";

const formBuilderAPI__URL =
  "http://localhost:8080/cultural-assets/form-builder";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const boxSx = {
  background: "#ffffff",
  height: "100vh",
};

const qualityOfLifeQuestions = [
  {
    name: "socialRelationsips",
    codeName: "sr",
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
    codeName: "ps",
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
    codeName: "hw",
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
    codeName: "ct",
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
    codeName: "asnp",
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
    codeName: "ecs",
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
    codeName: "lta",
    question: "Me gusta que vengan turistas a mi municipio",
    type: "radioSelect",
    options: [
      { name: "Si", value: 3 },
      { name: "Tal vez", value: 2 },
      { name: "No", value: 1 },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "touristSpotted",
    codeName: "ts",
    question: "Cuando veo un rutista en mi ciudad o municipio",
    type: "checkBox",
    options: [
      "Me siento inseguro",
      "Me siento inferior",
      "No sé de qué hablarle",
      "No me interesa habarle",
      "Me es indiferente",
      "Ninguna",
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "touristSpokenInteraction",
    codeName: "tsi",
    question: "Cuando hablo con un turista",
    type: "checkBox",
    options: [
      "No le respondo lo que me pregunta porque no sé",
      "No sé en dónde quedan los lugares por los que me pregunta",
      "Le hablo de mala manera",
      "Me pregunta por historias y temas de mi lugar que desconozco",
      "Ninguna",
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
];

const communityMemberOpinion = [
  {
    name: "communityShouldDefine",
    codeName: "csd",
    question: "Creo que la comunidad del destino debe participar en definir",
    type: "dimensionCriteria",
    criteria: ["Si", "No", "Tal vez"],
    options: [
      {
        name: "csd1",
        value: "Si el activo cultural se debe usar en el turismo",
      },
      {
        name: "csd2",
        value:
          "La conducta que deben tener los turistas y las sanciones si no se cumplen",
      },
      {
        name: "csd3",
        value:
          "Cómo deben ser usados los beneficios de la actividad turística en beneficio de la comunidad",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "hostSuggestion",
    question:
      "Qué sugiere usted para que las tradiciones, cultura, cosmogonía y forma de vida, sean respetadas y conservadas ante la visita de turistas?",
    type: "text",
    placeHolder: "Tu respuesta",
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "municipalityLacks",
    question:
      "Qué hace falta en su municipio o ciudad para que el turismo mejore?",
    type: "text",
    placeHolder: "Tu respuesta",
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "hostTourismSectorParticipation",
    codeName: "htsp",
    question: "Es usted parte del sector turístico de su municipio?",
    type: "checkBox",
    options: [
      "Hospedaje",
      "Gastronomía",
      "Transporte",
      "Tour Operador",
      "Docente o investigador",
      "Estudiante",
      "Oficina de gobierno",
      "Habitante del lugar",
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
];

const hostRegionCulturalAssets = [
  {
    name: "culturalAssetRecognition",
    codeName: "car",
    question: "Usted conoce estos activos culturales de su region?",
    type: "dimensionCriteria",
    criteria: ["Si", "No"],
    options: [
      {
        name: "car1",
        value: "Maloca Ipanoré",
      },
      {
        name: "car2",
        value: "Cuevas de Urania",
      },
      {
        name: "car3",
        value: "Cerro Flechas",
      },
      {
        name: "car4",
        value: "Hee Yaia Keti Oka",
      },
      {
        name: "car5",
        value: "Yuca brava",
      },
      {
        name: "car6",
        value: "Raudal del Jirijirimo",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "culturalAssetSacred",
    codeName: "cas",
    question:
      "En su conocimiento, alguno de estos activos culturales es sagrado?",
    type: "dimensionCriteria",
    criteria: ["Si", "No", "No se"],
    options: [
      {
        name: "car1",
        value: "Maloca Ipanoré",
      },
      {
        name: "car2",
        value: "Cuevas de Urania",
      },
      {
        name: "car3",
        value: "Cerro Flechas",
      },
      {
        name: "car4",
        value: "Hee Yaia Keti Oka",
      },
      {
        name: "car5",
        value: "Yuca brava",
      },
      {
        name: "car6",
        value: "Raudal del Jirijirimo",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "tourismPositiveImpacts",
    codeName: "tpi",
    question:
      "Cuáles impactos positvos trae el turismo en estos activos culturales?",
    type: "dimensionCriteriaCheckbox",
    // type: "dimensionCriteria",
    criteria: [
      "Genera dinero para la comunidad",
      "Los turistas lo respetan y disfrutan",
      "Se ha mejorado la seguridad",
      "Tiene señalización",
      "Las personas están dispuestas a pagar",
      "Hay más información sobre el lugar",
      "Ha mejorado su aspecto",
      "Ninguno",
    ],
    options: [
      {
        name: "tpi1",
        value: "Maloca Ipanoré",
      },
      {
        name: "tpi2",
        value: "Cuevas de Urania",
      },
      {
        name: "tpi3",
        value: "Cerro Flechas",
      },
      {
        name: "tpi4",
        value: "Hee Yaia Keti Oka",
      },
      {
        name: "tpi5",
        value: "Yuca brava",
      },
      {
        name: "tpi6",
        value: "Raudal del Jirijirimo",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "tourismNegativeImpacts",
    codeName: "tni",
    question:
      "Cuáles impactos negativos trae el turismo en estos activos culturales?",
    type: "dimensionCriteriaCheckbox",
    // type: "dimensionCriteria",
    criteria: [
      "Genera dinero sólo para los turoperadores",
      "Los turistas lo ensucian y lo dañan",
      "Está muy inseguro",
      "No tiene señalizacion",
      "La gente va y no paga",
      "No hay nada de información sobre él",
      "Se ha dañado su aspecto",
      "Ninguno",
    ],
    options: [
      {
        name: "tni1",
        value: "Maloca Ipanoré",
      },
      {
        name: "tni2",
        value: "Cuevas de Urania",
      },
      {
        name: "tni3",
        value: "Cerro Flechas",
      },
      {
        name: "tni4",
        value: "Hee Yaia Keti Oka",
      },
      {
        name: "tni5",
        value: "Yuca brava",
      },
      {
        name: "tni6",
        value: "Raudal del Jirijirimo",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
  {
    name: "culturalAssetAsCulturalAttractive",
    codeName: "caaca",
    question:
      "Según su opinión, ¿estos activos culturales pueden ser usados como atractivos turísticos?",
    type: "dimensionCriteria",
    criteria: ["Si", "No", "Tal vez"],
    options: [
      {
        name: "caaca1",
        value: "Maloca Ipanoré",
      },
      {
        name: "caaca2",
        value: "Cuevas de Urania",
      },
      {
        name: "caaca3",
        value: "Cerro Flechas",
      },
      {
        name: "caaca4",
        value: "Hee Yaia Keti Oka",
      },
      {
        name: "caaca5",
        value: "Yuca brava",
      },
      {
        name: "caaca6",
        value: "Raudal del Jirijirimo",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  },
];

const frogsImgUrl = "https://i.imgur.com/3uZahvX.png";

const introText =
  "Somos conscientes de las ventajas del turismo sin embargo, esta encuesta se enforca en detectar aquellos aspectos que no estan saliendo bien. En este espacio puede plasmar su punto de vista con respecto de los aspectos en cuestion. Este instrumento hace parte de la investigacion de turismo en la facultad de ingenieria. La encuesta es anonima, los datos solicitados son con proposito de caracterizacion.";

const TourismImpactForm = () => {
  const [municipalities, setMunicipalities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [ehtnicGroup, setEhtnicGroup] = useState([]);

  //Calling form builder API to get Values.
  axios
    .get(`${formBuilderAPI__URL}/Municipality`)
    .then((response) => response.data)
    .then((data) => {
      setMunicipalities(data.values);
    });

  axios
    .get(`${formBuilderAPI__URL}/Department`)
    .then((response) => response.data)
    .then((data) => {
      setDepartments(data.values);
    })
    .catch((error) => {
      console.log("Error loading departments due to: " + error);
    });

  axios
    .get(`${formBuilderAPI__URL}/Ethnicity`)
    .then((response) => response.data)
    .then((data) => {
      setEthnicities(data.values);
    })
    .catch((error) => {
      console.log("Error loading departments due to: " + error);
    });

  axios
    .get(`${formBuilderAPI__URL}/EthnicGroup`)
    .then((response) => response.data)
    .then((data) => {
      setEhtnicGroup(data.values.map((value) => 
        {
          // let ethnicGroup ={};
          // ethnicGroup.name = value.name;
          // ethnicGroup.value = value.id;
          return {
            "name" : `${value.name}`,
            "value" : `${value.id}`,
          };
        }
      ));
    })
    .catch((error) => {
      console.log("Error loading departments due to: " + error);
    });

  const getBasicQuestions = () => {
    let basicQuestions = [
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
        question:
          "¿Usted autoriza el uso de sus datos personales y respuestas?",
        type: "radioSelect",
        options: [
          { name: "Si", value: "true" },
          { name: "No", value: "false" },
        ],
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
    return basicQuestions.map((basicQuestion) => {
      if (basicQuestion.name === "municipality") {
        basicQuestion.options = municipalities;
      } else if (basicQuestion.name === "department") {
        basicQuestion.options = departments;
      } else if (basicQuestion.name === "ethnicity") {
        basicQuestion.options = ethnicities;
      } else if (basicQuestion.name === "ethnicGroup") {
        basicQuestion.options = ehtnicGroup;
      }
      return basicQuestion;
    });
  };

  const ref = useRef(null);
  const onClickScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { register, handleSubmit, getValues } = useForm();
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
                  type="text"
                  name={question.name}
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
              <Grid item xs={12} sx={{ paddingBottom: "2%", paddingTop: "1%" }}>
                <RadioGroup name="radioTest">
                  {question.options.map((option) => {
                    return (
                      <FormControlLabel
                        value={option.value}
                        control={
                          <Radio
                            {...register(question.name, { required: true })}
                            onClick={() => {
                              console.log(register.selectTest);
                            }}
                            color="success"
                          />
                        }
                        label={option.name}
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
                    return <MenuItem value={option.id}>{option.name}</MenuItem>;
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
                paddingTop={"1%"}
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
                            <Typography
                              fontWeight={800}
                              color={"#7c8484"}
                              fontSize={"1rem"}
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
                                    {...register(
                                      question.codeName + "." + index
                                    )}
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
      case "dimensionCriteriaCheckbox":
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
                paddingTop={"1%"}
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
                            <Grid
                              xs={Math.floor(12 / question.criteria.length)}
                              item
                            >
                              <Typography
                                fontWeight={100}
                                color={"#7c8484"}
                                fontSize={"1rem"}
                              >
                                {c}
                              </Typography>
                            </Grid>
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
                                  <FormControlLabel
                                    value={option.value + ""}
                                    control={
                                      <Checkbox
                                        color="success"
                                        value={i}
                                        {...register(
                                          question.codeName + "." + i
                                        )}
                                      />
                                    }
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
      case "checkBox":
        content = (
          <SingleQuestion>
            <Grid container direction={"column"}>
              <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography color={question.color} fontWeight={"bolder"}>
                  {question.question}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%", paddingTop: "1%" }}>
                <Grid
                  direction={"column"}
                  // onChange={handleChange}
                >
                  {question.options.map((option, index) => {
                    return (
                      <Grid item>
                        <FormControlLabel
                          value={option + ""}
                          control={
                            <Checkbox
                              color="success"
                              xs={6}
                              value={option}
                              {...register(question.name, { max: 3 })}
                            />
                          }
                          label={option}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </SingleQuestion>
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
    console.log(data);
  };

  const handleChange = (evt) => {
    console.log(evt);
    console.log(getValues());
  };

  function getBackgroudOpacity(opacity, rgb) {
    var bg = "rgba(" + [rgb, opacity].join(",") + ")";
    // alert(bg,rgb);
    return bg;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Intro */}
      <Box maxWidth={1} sx={{ background: "#ffffff" }}>
        <Grid container direction={"row"}>
          <Grid item xs={5}>
            <Box>
              <Grid container justifyContent={"center"}>
                <Grid item>
                  <img item src={frogsImgUrl} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid container xs={1} justifyContent={"center"}>
            <Box
              sx={{ background: "#d09c3c", height: "100%", width: "7%" }}
              borderRadius={"50px"}
            ></Box>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction={"column"} maxWidth="60%">
              <Grid item className="title">
                <Title color="#d09c3c" size="extra" titleName="Impactos" />
                <Title color="#d09c3c" size="extra" titleName="del turismo " />
                <Title color="#d09c3c" size="extra" titleName="en el destino" />
              </Grid>
              <Grid
                container
                direction={"column"}
                alignItems={"center"}
                paddingTop={"5%"}
              >
                <Paragraph
                  color="#000000"
                  size="1.2rem"
                  content={introText}
                ></Paragraph>
                <br></br>
                <Button
                  color="success"
                  sx={{
                    background: "#08a45c",
                    minWidth: "50%",
                    borderRadius: "20px",
                  }}
                  onClick={onClickScroll}
                >
                  <ExpandMoreRounded
                    fontSize="large"
                    sx={{ color: "#ffffff" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Form */}
      <Box paddingTop={"5%"} maxWidth={1} sx={boxSx}>
        <Box ref={ref}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              margin: "10px 0",
            }}
          >
            <Container sx={{ paddingBottom: "2%" }}>
              {getBasicQuestions().map((question) => {
                return getQuestion(question);
              })}
            </Container>
            <Box sx={{ background: "#08a45c", paddingBottom: "2%" }}>
              <Container>
                <Box paddingTop={"3%"}>
                  <Title
                    textAlign="center"
                    shadow="bottom-left"
                    color="#ffffff"
                    size="medium"
                    titleName="Calidad de vida"
                  />
                </Box>
                <Box paddingTop={"3%"}>
                  <Box
                    sx={{ background: "#ffffff", height: "1vh", width: "100%" }}
                  ></Box>
                </Box>
                <Box paddingTop={"3%"}>
                  {qualityOfLifeQuestions.map((question) => {
                    return getQuestion(question);
                  })}
                </Box>
              </Container>
            </Box>

            <Box sx={{ background: "#085c2c", paddingBottom: "2%" }}>
              <Container>
                <Box paddingTop={"3%"}>
                  <Title
                    textAlign="center"
                    shadow="bottom-left"
                    color="#ffffff"
                    size="medium"
                    titleName="Sustentabilidad del bienestar"
                  />
                </Box>
                <Box paddingTop={"3%"}>
                  <Box
                    sx={{ background: "#ffffff", height: "1vh", width: "100%" }}
                  ></Box>
                </Box>
                <Box paddingTop={"3%"}>
                  {wellnessSustainability.map((question) => {
                    return getQuestion(question);
                  })}
                </Box>
              </Container>
            </Box>

            <Box sx={{ background: "#b84c14", paddingBottom: "2%" }}>
              <Container>
                <Box paddingTop={"3%"}>
                  <Title
                    textAlign="center"
                    shadow="bottom-left"
                    color="#ffffff"
                    size="medium"
                    titleName="Situacion economica"
                  />
                </Box>
                <Box paddingTop={"3%"}>
                  <Box
                    sx={{ background: "#ffffff", height: "1vh", width: "100%" }}
                  ></Box>
                </Box>
                <Box paddingTop={"3%"}>
                  {economicSituation.map((question) => {
                    return getQuestion(question);
                  })}
                </Box>
              </Container>
            </Box>

            <Container>
              <Box paddingTop={"3%"}>
                <Title
                  textAlign="center"
                  shadow="lighter-gray"
                  color="#085c2c"
                  size="medium"
                  titleName="Mi comportamiento como habitante anfitrion"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#085c2c", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>
              <Box paddingTop={"3%"}>
                {hostBehaviour.map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"3%"}>
                <Title
                  textAlign="center"
                  shadow="lighter-gray"
                  color="#085c2c"
                  size="medium"
                  titleName="Mi opinion como integrante de la comunidad"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#085c2c", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>
              <Box paddingTop={"3%"}>
                {communityMemberOpinion.map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"3%"}>
                <Title
                  textAlign="center"
                  shadow="lighter-gray"
                  color="#085c2c"
                  size="medium"
                  titleName="Los activos culturales de mi region"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#085c2c", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>
              <Box paddingTop={"3%"}>
                {hostRegionCulturalAssets.map((question) => {
                  return getQuestion(question);
                })}
              </Box>
            </Container>
            <Container>
              <Grid container justifyContent={"center"} padding="5%">
                <Button
                  sx={{
                    background: "#78d48c",
                    textTransform: "initial",
                    width: "50%",
                    borderRadius: "18px",
                  }}
                  type="submit"
                >
                  <Title
                    titleName="Enviar formulario"
                    size="medium"
                    color="#ffffff"
                  ></Title>
                </Button>
              </Grid>
            </Container>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TourismImpactForm;
