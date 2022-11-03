import {
  Box,
  Checkbox,
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

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const boxSx = {
  background: "#ffffff",
  height: "100vh",
};

const testQuestions = [
  {
      name: "ethnicCommunityRelated",
      question: "Comunidad étnica con la que se relaciona?",
      type: "radioSelect",
      options: ["Indígena", "Afrocolombiano", "Raizal", "Rrom", "Ninguna"],
      // options : [
      //   {
      //     "name" : "Indigena",
      //     "id" : "id1"
      //   },{
      //     "name" : "Afro",
      //     "id" : "id2"
      //   },{
      //   "name" : "Raizal",
      //   "id" : "id3"
      // },{
      //   "name" : "Rrom",
      //   "id" : "id4"
      // },{
      //   "name" : "Ninguna",
      //   "id" : "id5"
      // }],
      required: true,
      color: "darkgreen",
    }
];

const CulturalAssetForm = () => {

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
    }
  ];

  const generatilitiesQuestions = [
    {
      name: "culturalAssetName",
      question: " Nombre del activo cultural o recurso turístico",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "alternateName",
      question: "Por cuál otro nombre se conoce?",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "subType",
      question: "Subtipo",
      type: "selectList",
      options: ["Subtipo 1", "Subtipo 2", "Subtipo 3"],
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
      name: "department",
      question: "Departamento",
      type: "selectList",
      options: ["Departamento 1", "Departamento 2", "Departamento 3"],
      required: true,
      color: "darkgreen",
    },
    {
      name: "location",
      question: "Ubicación",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "culturalAssetDescription",
      question: "Descripción del activo o recurso",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
  ];

  const characteristicsQuestions = [
  {
    name: "ethnicCommunityRelated",
    question: "Comunidad étnica con la que se relaciona?",
    type: "radioSelect",
    options: ["Indígena", "Afrocolombiano", "Raizal", "Rrom", "Ninguna"],
    required: true,
    color: "darkgreen",
  },
  {
    name: "inmaterialManifestation",
    question: "Es una manifestación Cultural Inmaterial?",
    type: "radioSelect",
    options: ["Si", "No"],
    required: true,
    color: "darkgreen",
  },{
    name: "sacredCosmogony",
    question: "Es sagrado o tiene interpretación cosmogónica ?",
    type: "radioSelect",
    options: ["Si", "No"],
    required: true,
    color: "darkgreen",
  },{
      name: "comogonyImportance",
      question: "Correo",
      type: "text",
      placeHolder: "Por qué es sagrado o tiene interpretación cosmogónica?",
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen"
    },
    {
      name: "belongsToManifestationType",
      codeName : "btmt",
      question: "A cuál tipo de manifestación pertenece? ",
      type: "checkBox",
      options: [
        "Actos festivos y lúdicos",
        "Artes populares",
        "Conocimientos tradicionales de la naturaleza y el universo",
        "Conocimientos y técnicas tradicionales del hábitat",
        "Cultura Culinaria",
        "Educación tradicional",
        "Espacios culturales",
        "Eventos religiosos tradicionales de carácter colectivo",
        "Juegos y deportes tradicionales",
        "Lengua y tradición oral",
        "Medicina tradicional y prácticas tradicionales de la salud",
        "Organización social",
        "Producción tradicional",
        "Técnicas y tradiciones fabricación objetos artesanales",
        "Ninguna"],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },{
        name: "safeguardingRegistration",
        question: "Registrado en salvaguardia?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "darkgreen",
      },{
        name: "uncescoRegistry",
        question: "Reconocido UNESCO ?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "darkgreen",
      },{
        name: "partOfNaturalReservation",
        question: "Es sagrado o tiene interpretación cosmogónica?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "darkgreen",
      },{
        name: "reservationName",
        question: "Nombre de la reserva y link",
        type: "text",
        placeHolder: "Tu rewspuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "ongoingRecognition",
        question: "Se está tramitando algún reconocimiento sobre el activo cultural?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "darkgreen",
      },{
        name: "reservationName",
        question: "Link música, documentales, películas que lo describen o lo usan",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "tourismallowance",
        question: "Está permitido el turismo en este lugar o con la  participación de este activo cultural?",
        type: "radioSelect",
        options: ["Si", "No", "N/A"],
        required: true,
        color: "darkgreen",
      }
  ];

  const wellnessQuestions = [
    
    {
        name: "sharedCommunities",
        codeName : "shc",
        question: "Activos culturales y recursos turísticos",
        type: "checkBox",
        options: [
          "Achagua (Achagua, ajagua, xagua, gente del rio.)",
          "Ambaló",
          "Amorúa (Wipiwe, Siripu, Mariposa)",
          "Conocimientos y técnicas tradicionales del hábitat",
          "Andakies",
          "Andoque (la gente del hacha - andoque, cha’oie, businka)",
          "Espacios culturales",
          "Eventos religiosos tradicionales de carácter colectivo",
          "Juegos y deportes tradicionales",
          "Lengua y tradición oral",
          "Medicina tradicional y prácticas tradicionales de la salud",
          "Organización social",
          "Producción tradicional",
          "Técnicas y tradiciones fabricación objetos artesanales",
          "Ninguna"],
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "vulnerability",
        codeName : "vuln",
        question: "Vulnerabilidad",
        type: "dimensionCriteria",
        criteria: ["Si", "No", "Aun no se sabe", "Ninguna"],
        options: [
          {
            name: "sr",
            value:
              "Adaptado a la vida nacional?",
          },
          {
            name: "sr",
            value: "Comercializado?	",
          },
          {
            name: "sr",
            value:
              "En riesgo de desaparecer?",
          },
        ],
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },
  ];

  const qualityQuestions = [
    {
        name: "assetGroupdClassification",
        question: "En qué grupo se clasifica el activo cultural?",
        type: "radioSelect",
        options: ["Patrimonio inmaterial -PI", "Patrimonio material (mueble e inmueble) - PM", "Festividades, eventos y convenciones - FE", "Grupos de especial interés - GE", "Sitios Naturales - SN"],
        required: true,
        color: "darkgreen",
    },{
        name: "criteria1",
        question: "Criterio 1: PI-Colectiva(14); PM-Estado de Conservación(21); FE-Organización del evento(30); GE-Pertinencia(10); SN-Sin Contaminación del Aire(10)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "criteria2",
        question: "Criterio 2: PI-Tradicional(14); PM-Constitución del Bien(21); FE-Beneficios Socioculturales para la Comunidad(20); GE-Representatividad(10); SN-Sin Contaminación del Agua(10)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "criteria3",
        question: "Criterio 3: PI-Anónima(14); PM-Representatividad General(28); FE-Beneficios Económicos Locales(20); GE-Relevancia(10); SN-Sin Contaminación Visual(10)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "criteria4",
        question: "Criterio 4: PI-Espontánea(14); PM-N/A; FE-N/A; GE-Naturaleza e identidad colectiva(10); SN-Estado de Conservación(10)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "criteria5",
        question: "Criterio 5: PI-Popular(14); PM-N/A; FE-N/A; GE-Vigencia(10); SN-Sin Contaminación Sonora(10)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "criteria6",
        question: "Criterio 6: PI-N/A; PM-N/A; FE-N/A; GE-Equidad(10); SN-Diversidad(10)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "criteria7",
        question: "Criterio 7: PI-N/A; PM-N/A; FE-N/A; GE-Responsabilidad(10); SN-Singularidad(10)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      },{
        name: "potential",
        question: "Potencial; Local (6), Departamental (12), Nacional (18), Continental (24), Global (30)? Escriba el número",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#e0dcdc",
        rgb: [224, 220, 220],
        color: "darkgreen",
      }
  ];

  const insideOutsideActivities = [
    {
      name: "nature",
      codeName : "nat",
      question: "Naturaleza",
      type: "dimensionCriteria",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: [
        {
          name: "nat",
          value: "Avistamiento de Aves",
        },
        {
          name: "nat",
          value:
            "Avistamiento de Ballenas",
        },
        {
          name: "nat",
          value:
            "Observación de Fauna",
        },
        {
          name: "nat",
          value:
            "Observación de Flora",
        },
        {
          name: "nat",
          value:
            "Ecoturismo",
        },{
          name: "nat",
          value:
            "Agroturismo",
        },
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    }, 
    {
      name: "touristicRoutes",
      codeName : "tr",
      question: "Recorridos turisticos",
      type: "dimensionCriteria",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: [
        {
          name: "tr",
          value: "Cruceros",
        },       
        {
          name: "tr",
          value: "Paseos en bote",
        },  
        {
          name: "tr",
          value: "Paseos en lancha",
        },
        {
          name: "tr",
          value: "Paseos en yate",
        },
        {
          name: "tr",
          value: "Paseos a caballo",
        },
        {
          name: "tr",
          value: "Excursiones",
        },
        {
          name: "tr",
          value: "Sobrevuelo",
        }      
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "folklore",
      codeName : "folk",
      question: "Folclore",
      type: "dimensionCriteria",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: [
        {
          name: "folk",
          value: "Actividades Religiosas",
        },       
        {
          name: "folk",
          value: "Rituales Místicos",
        },  
        {
          name: "folk",
          value: "Paseos en lancha",
        },
        {
          name: "folk",
          value: "Ferias y Fiestas",
        },
        {
          name: "folk",
          value: "Gastronomía Tipíca",
        },
        {
          name: "folk",
          value: "Artesanías",
        },
        {
          name: "folk",
          value: "Fotografía y filmación",
        },
        {
          name: "folk",
          value: "Otros Eventos",
        }      
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "otherServices",
      codeName : "os",
      question: "Otros servicios",
      type: "dimensionCriteria",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: [
        {
          name: "folk",
          value: "Alquiler de Carruajes",
        },       
        {
          name: "folk",
          value: "Alquiler de Botes",
        },  
        {
          name: "folk",
          value: "Alquiler de Bicicletas",
        },
        {
          name: "folk",
          value: "Alquiler de Caballos",
        },
        {
          name: "folk",
          value: "Alquiler de Equipo de Turismo (Aventura)",
        },
        {
          name: "folk",
          value: "Alquiler de Equipo de Vuelo (Aventura)",
        },
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    }
  ]

  const access = [
    {
      name: "access",
      question: "Acceso",
      type: "radioSelect",
      options: [
        "Libre", 
        "Restringido", 
        "Permanente", 
        "Permiso previo", 
        "Visita Exterior", 
        "Previo Pago", 
        "Con cita previa"],
      required: true,
      color: "darkgreen",
    },
    {
      name: "dateEvent",
      question: "Si es evento, cual es la fecha?",
      type: "date",
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "landAccess",
      codeName : "lnda",
      question: "Acceso terrestre",
      type: "checkBox",
      options: [
        "A pie",
        "A caballo",
        "Bicicleta",
        "Automovil",
        "Bus publico",
        "Taxi",
        "Tren",
        "Mototaxi",
        "Motocicleta",
        "Teleférico",
        "Ninguno"],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "aerialAccess",
      codeName : "arla",
      question: "Acceso aereo",
      type: "checkBox",
      options: [
        "Avion",
        "Avioneta",
        "Helicoptero",
        "Ninguno"
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "maritimeAccess",
      codeName : "mrta",
      question: "Acceso maritimo",
      type: "checkBox",
      options: [
        "Barco",
        "Bote",
        "Canoa",
        "Yate",
        "Lancha",
        "Balsa",
        "Balsa",
        "Ninguno",
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "accessRoute",
      codeName : "acsr",
      question: "Rutas de acceso",
      type: "radioSelect",
      options: [
        "Nacionales", 
        "Departamentales", 
        "Municipales", 
        "No aplica"],
      required: true,
      color: "darkgreen",
    }
  ];

  const assetFacilities = [
    {
      name: "basicServices",
      codeName : "bscs",
      question: "Servicios basicos",
      type: "checkBox",
      options: [
        "Agua potable",
        "Luz",
        "Alcantarillado",
        "Gas",
        "Internet",
        "Ninguno",
        "No aplica",
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "communications",
      codeName : "comm",
      question: "Comunicaciones",
      type: "checkBox",
      options: [
        "Teléfono",
        "Correo Certificado",
        "Radio - Emisora",
        "Página web",
        "Periódico",
        "Revista",
        "Volantes",
        "Ninguno",
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    }
  ];

  const recommendations = [
    {
      name: "quality",
      codeName : "qol",
      question: "Calidad de vida",
      type: "checkBox",
      options: [
        "Ropa cómoda, sombrero y bebidas hidratantes.",
        "Snacks pequeños como frutos secos, frutas e incluso bocadillos.",
        "Bloqueador solar y repelente",
        "Dormir con mosquitero",
        "Respetar normas de las comunidades",
        "Permiso para visitar los resguardos o las comunidades",
        "Guía certificado",
        "Celular GPS, brújula, linterna",
        "Vacunarse contra fiebre amarilla y tétano",
        "Incluir suero antiofídico polivalente y antidiareico en el botiquín",
        "Llevar botas de caucho, ropa de algodón, camisas manga larga, impermeable",
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },{
      name: "wellness",
      codeName : "wlls",
      question: "Sustentabilidad del Bienestar",
      type: "checkBox",
      options: [
        "Evitar fuentes de luz nocturnas",
        "Prohibido traficar con animales y fauna silvestre",
        "Prohibido contaminar los cuerpos de agua",
        "Prohibido encender fogatas",
        "No llevar enlatados ni elementos perecederos que dejen contaminación",
        "Llevarse la basura con usted",
        "Prohibido dañar la flora y el ecosistema",
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },{
      name: "economic",
      codeName : "ecos",
      question: "Situacion economica",
      type: "checkBox",
      options: [
        "Evitar regatear los precios puede ser un insulto o una falta de consideración",
        "Evitar pedir regalados los productos o servicios",
      ],
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
  ];


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
      case "date":
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
                  type="date"
                  name={question.name}
                  {...register(question.name, { required: question.required })}
                  fullWidth
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
                <RadioGroup
                  name="radioTest"
                >
                  {question.options.map((option) => {
                    return (
                      <FormControlLabel
                        value={option}
                        control={
                          <Radio
                          {...register(question.name, { required: true })}
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
                              fontSize={18}
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
                            <Typography
                              fontWeight={800}
                              color={"#7c8484"}
                              fontSize={18}
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
        content = "";
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
      <Box maxWidth={1} sx={boxSx}>
        <Container>
          <form
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              margin: "10px 0",
            }}            
          >
            {basicQuestions.map( (question) => {
                return getQuestion(question);
            })}
            {generatilitiesQuestions.map( (question) => {
                return getQuestion(question);
            })}
            {characteristicsQuestions.map( (question) => {
                return getQuestion(question);
            })}
            {wellnessQuestions.map( (question) => {
                return getQuestion(question);
            })}
            {qualityQuestions.map( (question) => {
                return getQuestion(question);
            })}
            {insideOutsideActivities.map( (question) => {
                return getQuestion(question);
            })}
            {access.map( (question) => {
                return getQuestion(question);
            })}
            {assetFacilities.map( (question) => {
                return getQuestion(question);
            })}
            {recommendations.map( (question) => {
                return getQuestion(question);
            })}
              {/* `{testQuestions.map( (question) => {
                  return getQuestion(question);
              })}` */}
            <input item type="submit" />
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CulturalAssetForm;
