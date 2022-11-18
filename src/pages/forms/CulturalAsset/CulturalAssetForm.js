import {
  Box,
  Checkbox,
  Container,
  Grid,
  Input,
  RadioGroup,
  Button,
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
import Title from "../../../components/Fonts/Title";
import axios from "axios";

const formBuilderAPI__URL =
  "http://localhost:8080/cultural-assets/form-builder";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const boxSx = {
  background: "#b03404",
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
    color: "#b03404",
  },
];

const CulturalAssetForm = () => {
  const [municipalities, setMunicipalities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [ehtnicGroup, setEhtnicGroup] = useState([]);
  const [subtypes, setSubtypes] = useState([]);
  const [manifestations, setManifestations] = useState([]);
  const [groups, setGroups] = useState([]);
  const [sports, setSports] = useState([]);
  const [access, setAccess] = useState([]);
  const [tours, setTours] = useState([]);
  const [folklore, setFolklore] = useState([]);
  const [otherServices, setOtherServices] = useState([]);

  const [terrestrialAccess, setTerrestrialAccess] = useState([]);
  const [aerialAccess, setAerialAccess] = useState([]);
  const [maritimeAccess, setMaritimeAccess] = useState([]);

  const [communication, setCommunications] = useState([]);
  const [publicService, setPublicServices] = useState([]);

  const [accessRoutes, setAccessRoutes] = useState([]);

  


  //Calling form builder API to get Values.
  axios
    .get(`${formBuilderAPI__URL}/Municipality`)
    .then((response) => response.data)
    .then((data) => {
      setMunicipalities(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading municipalities due to: " + error);
    });

  axios
  .get(`${formBuilderAPI__URL}/Communication`)
  .then((response) => response.data)
  .then((data) => {
    setCommunications(
      data.values.map((value) => {
        return {
          name: `${value.name}`,
          value: `${value.id}`,
        };
      })
    );
  })
  .catch((error) => {
    console.log("Error loading communications due to: " + error);
  });

  axios
  .get(`${formBuilderAPI__URL}/AccessRoute`)
  .then((response) => response.data)
  .then((data) => {
    setAccessRoutes(
      data.values.map((value) => {
        return {
          name: `${value.name}`,
          value: `${value.id}`,
        };
      })
    );
  })
  .catch((error) => {
    console.log("Error loading accessRoutes due to: " + error);
  });

  axios
    .get(`${formBuilderAPI__URL}/PublicService`)
    .then((response) => response.data)
    .then((data) => {
      setPublicServices(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading publicServices due to: " + error);
    });

  axios
    .get(`${formBuilderAPI__URL}/Department`)
    .then((response) => response.data)
    .then((data) => {
      setDepartments(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading departments due to: " + error);
    });

  axios
    .get(`${formBuilderAPI__URL}/Ethnicity`)
    .then((response) => response.data)
    .then((data) => {
      setEthnicities(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading ethnicities due to: " + error);
    });

  axios
    .get(`${formBuilderAPI__URL}/Subtype`)
    .then((response) => response.data)
    .then((data) => {
      setSubtypes(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading subtypes due to: " + error);
    });
  axios
    .get(`${formBuilderAPI__URL}/EthnicGroup`)
    .then((response) => response.data)
    .then((data) => {
      setEhtnicGroup(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading ethnic groups due to: " + error);
    });
  axios
    .get(`${formBuilderAPI__URL}/Manifestation`)
    .then((response) => response.data)
    .then((data) => {
      setManifestations(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading manifestations due to: " + error);
    });
  axios
    .get(`${formBuilderAPI__URL}/Group`)
    .then((response) => response.data)
    .then((data) => {
      setGroups(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading groups due to: " + error);
    });

    axios
    .get(`${formBuilderAPI__URL}/Sport`)
    .then((response) => response.data)
    .then((data) => {
      setSports(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading sports due to: " + error);
    });
  
    axios
    .get(`${formBuilderAPI__URL}/Access`)
    .then((response) => response.data)
    .then((data) => {
      setAccess(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading accesses due to: " + error);
    });

    axios
    .get(`${formBuilderAPI__URL}/Folklore`)
    .then((response) => response.data)
    .then((data) => {
      setFolklore(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading folklore due to: " + error);
    });

    axios
    .get(`${formBuilderAPI__URL}/Tours`)
    .then((response) => response.data)
    .then((data) => {
      setTours(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading tours due to: " + error);
    });

    axios
    .get(`${formBuilderAPI__URL}/OtherServices`)
    .then((response) => response.data)
    .then((data) => {
      setOtherServices(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading other services due to: " + error);
    });

    axios
    .get(`${formBuilderAPI__URL}/Maritime`)
    .then((response) => response.data)
    .then((data) => {
      setMaritimeAccess(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading maritime accesses due to: " + error);
    });

    axios
    .get(`${formBuilderAPI__URL}/Terrestrial`)
    .then((response) => response.data)
    .then((data) => {
      setTerrestrialAccess(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error terrestrialAccesses services due to: " + error);
    });

    axios
    .get(`${formBuilderAPI__URL}/Aerial`)
    .then((response) => response.data)
    .then((data) => {
      setAerialAccess(
        data.values.map((value) => {
          return {
            name: `${value.name}`,
            value: `${value.id}`,
          };
        })
      );
    })
    .catch((error) => {
      console.log("Error loading aerial accesses due to: " + error);
    });

  const getBasicQuestions = () => {
    let basicQuestions = [
      {
        name: "email",
        question: "Correo",
        type: "email",
        placeHolder: "Tu dirección de correo electrónico",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
    ];
    return basicQuestions.map((basicQuestion) => {
      if (basicQuestion.name === "municipalityId") {
        basicQuestion.options = municipalities;
      } else if (basicQuestion.name === "departmentId") {
        basicQuestion.options = departments;
      } else if (basicQuestion.name === "ethnicity") {
        basicQuestion.options = ethnicities;
      } else if (basicQuestion.name === "ethnicGroup") {
        basicQuestion.options = ehtnicGroup;
      } else if (basicQuestion.name === "subtypeId") {
        basicQuestion.options = subtypes;
      }
      return basicQuestion;
    });
  };

  const getGeneralitiesQuestions = () => {
    const generatilitiesQuestions = [
      {
        name: "name",
        question: " Nombre del activo cultural o recurso turístico",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "alternateNames",
        question:
          "Por cuál otro nombre se conoce? (Ingresar nombres separados por comas)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "subtypeId",
        question: "Subtipo",
        type: "selectList",
        options: ["Subtipo 1", "Subtipo 2", "Subtipo 3"],
        required: true,
        color: "#b03404",
      },
      {
        name: "municipalityId",
        question: "Municipio",
        type: "selectList",
        options: ["Municipio 1", "Municipio 2", "Municipio 3"],
        required: true,
        color: "#b03404",
      },
      {
        name: "departmentId",
        question: "Departamento",
        type: "selectList",
        options: ["Departamento 1", "Departamento 2", "Departamento 3"],
        required: true,
        color: "#b03404",
      },
      {
        name: "locationDetail ",
        question: "Ubicación",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "description",
        question: "Descripción del activo o recurso",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
    ];

    return generatilitiesQuestions.map((basicQuestion) => {
      if (basicQuestion.name === "municipalityId") {
        basicQuestion.options = municipalities;
      } else if (basicQuestion.name === "departmentId") {
        basicQuestion.options = departments;
      } else if (basicQuestion.name === "ethnicity") {
        basicQuestion.options = ethnicities;
      } else if (basicQuestion.name === "ethnicGroupsssssssss") {
        basicQuestion.options = ehtnicGroup;
      } else if (basicQuestion.name === "subtypeId") {
        basicQuestion.options = subtypes;
      }
      return basicQuestion;
    });
  };

  const getCharacteristicsQuestions = () => {
    const characteristicsQuestions = [
      {
        name: "assetCommunitiesTypes",
        question: "Tipo de comunidad étnica con la que se relaciona?",
        type: "radioSelect",
        options: ["Indígena", "Afrocolombiano", "Raizal", "Rrom", "Ninguna"],
        required: true,
        color: "#b03404",
      },
      {
        name: "inmaterialManifestation",
        question: "Es una manifestación Cultural Inmaterial?",
        type: "radioSelectt",
        options: [
          {
            name: "Si",
            value: true,
          },
          {
            name: "No",
            value: false,
          },
        ],
        required: true,
        color: "#b03404",
      },
      {
        name: "cosomogony",
        question: "Es sagrado o tiene interpretación cosmogónica?",
        type: "radioSelectt",
        options: [
          {
            name: "Si",
            value: true,
          },
          {
            name: "No",
            value: false,
          },
        ],
        required: true,
        color: "#b03404",
      },
      {
        name: "cosmogonyDescription",
        question: "Por qué es sagrado o tiene interpretación cosmogónica?",
        type: "text",
        placeHolder: "Es sagrado o tiene interpretacion cosmogonica, ya que...",
        required: false,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "assetManifestations",
        codeName: "btmt",
        question: "A cuál tipo de manifestación pertenece? ",
        type: "checkBoxx",
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
          "Ninguna",
        ],
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "safeguardingRegistry",
        question: "Registrado en salvaguardia?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "#b03404",
      },
      {
        name: "unescoRegistry",
        question: "Reconocido UNESCO ?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "#b03404",
      },
      {
        name: "partOfNaturalReservation",
        question: "Se encuentra en una reservas natural?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "#b03404",
      },
      {
        name: "reservationLink",
        question: "Nombre de la reserva y link",
        type: "text",
        placeHolder: "Tu rewspuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "onGoingRecognition",
        question:
          "Se está tramitando algún reconocimiento sobre el activo cultural?",
        type: "radioSelect",
        options: ["Si", "No"],
        required: true,
        color: "#b03404",
      },
      {
        name: "links",
        question:
          "Link música, documentales, películas que lo describen o lo usan",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "tourismPermit",
        question:
          "Está permitido el turismo en este lugar o con la  participación de este activo cultural?",
        type: "radioSelect",
        options: ["Si", "No", "N/A"],
        required: true,
        color: "#b03404",
      },
    ];

    return characteristicsQuestions.map((basicQuestion) => {
      if (basicQuestion.name === "municipalityId") {
        basicQuestion.options = municipalities;
      } else if (basicQuestion.name === "departmentId") {
        basicQuestion.options = departments;
      } else if (basicQuestion.name === "ethnicity") {
        basicQuestion.options = ethnicities;
      } else if (basicQuestion.name === "ethnicCommunity") {
        basicQuestion.options = ehtnicGroup;
      } else if (basicQuestion.name === "subtypeId") {
        basicQuestion.options = subtypes;
      } else if (basicQuestion.name === "assetManifestations") {
        basicQuestion.options = manifestations;
      }
      return basicQuestion;
    });
  };

  const wellnessQuestions = [
    {
      name: "assetCommunities",
      codeName: "shc",
      question: "Cuales pueblos o etnias lo comparten?",
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
        "Ninguna",
      ],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "assetVulnerabilityList",
      codeName: "vuln",
      question: "Vulnerabilidad",
      type: "dimensionCriteria",
      criteria: ["Si", "No", "Aun no se sabe", "Ninguna"],
      options: [
        {
          name: "sr",
          value: "Adaptado a la vida nacional?",
        },
        {
          name: "sr",
          value: "Comercializado?	",
        },
        {
          name: "sr",
          value: "En riesgo de desaparecer?",
        },
      ],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
  ];

  const qualityQuestions = [
    {
      name: "assetGroupdClassification",
      question: "En qué grupo se clasifica el activo cultural?",
      type: "radioSelect",
      options: [
        "Patrimonio inmaterial -PI",
        "Patrimonio material (mueble e inmueble) - PM",
        "Festividades, eventos y convenciones - FE",
        "Grupos de especial interés - GE",
        "Sitios Naturales - SN",
      ],
      required: true,
      color: "#b03404",
    },
    {
      name: "criteria1",
      question:
        "Criterio 1: PI-Colectiva(14); PM-Estado de Conservación(21); FE-Organización del evento(30); GE-Pertinencia(10); SN-Sin Contaminación del Aire(10)",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "criteria2",
      question:
        "Criterio 2: PI-Tradicional(14); PM-Constitución del Bien(21); FE-Beneficios Socioculturales para la Comunidad(20); GE-Representatividad(10); SN-Sin Contaminación del Agua(10)",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "criteria3",
      question:
        "Criterio 3: PI-Anónima(14); PM-Representatividad General(28); FE-Beneficios Económicos Locales(20); GE-Relevancia(10); SN-Sin Contaminación Visual(10)",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "criteria4",
      question:
        "Criterio 4: PI-Espontánea(14); PM-N/A; FE-N/A; GE-Naturaleza e identidad colectiva(10); SN-Estado de Conservación(10)",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "criteria5",
      question:
        "Criterio 5: PI-Popular(14); PM-N/A; FE-N/A; GE-Vigencia(10); SN-Sin Contaminación Sonora(10)",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "criteria6",
      question:
        "Criterio 6: PI-N/A; PM-N/A; FE-N/A; GE-Equidad(10); SN-Diversidad(10)",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "criteria7",
      question:
        "Criterio 7: PI-N/A; PM-N/A; FE-N/A; GE-Responsabilidad(10); SN-Singularidad(10)",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "potential",
      question:
        "Potencial; Local (6), Departamental (12), Nacional (18), Continental (24), Global (30)? Escriba el número",
      type: "text",
      placeHolder: "Tu respuesta",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
  ];

  const insideOutsideActivities = [
    {
      name: "assetNatureList",
      codeName: "nat",
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
          value: "Avistamiento de Ballenas",
        },
        {
          name: "nat",
          value: "Observación de Fauna",
        },
        {
          name: "nat",
          value: "Observación de Flora",
        },
        {
          name: "nat",
          value: "Ecoturismo",
        },
        {
          name: "nat",
          value: "Agroturismo",
        },
      ],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "touristicRoutes",
      codeName: "tr",
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
        },
      ],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "folklore",
      codeName: "folk",
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
        },
      ],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "otherServices",
      codeName: "os",
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
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
  ];

  const accessRoute = [
    {
      name: "assetAccessList",
      question: "Acceso",
      type: "radioSelect",
      options: [
        "Libre",
        "Restringido",
        "Permanente",
        "Permiso previo",
        "Visita Exterior",
        "Previo Pago",
        "Con cita previa",
      ],
      required: true,
      color: "#b03404",
    },
    {
      name: "dateEvent",
      question: "Si es evento, cual es la fecha?",
      type: "date",
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "landAccess",
      codeName: "lnda",
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
        "Ninguno",
      ],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "aerialAccess",
      codeName: "arla",
      question: "Acceso aereo",
      type: "checkBox",
      options: ["Avion", "Avioneta", "Helicoptero", "Ninguno"],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "maritimeAccess",
      codeName: "mrta",
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
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "assetRouteList",
      codeName: "acsr",
      question: "Rutas de acceso",
      type: "radioSelect",
      options: ["Nacionales", "Departamentales", "Municipales", "No aplica"],
      required: true,
      color: "#b03404",
    },
  ];

  const assetFacilities = [
    {
      name: "basicServices",
      codeName: "bscs",
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
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "communications",
      codeName: "comm",
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
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
  ];

  const recommendations = [
    {
      name: "quality",
      codeName: "qol",
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
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "wellness",
      codeName: "wlls",
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
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "economic",
      codeName: "ecos",
      question: "Situacion economica",
      type: "checkBox",
      options: [
        "Evitar regatear los precios puede ser un insulto o una falta de consideración",
        "Evitar pedir regalados los productos o servicios",
      ],
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
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
                <RadioGroup name="radioTest">
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
      case "radioSelectt":
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
                    return (
                      <MenuItem value={option.value}>{option.name}</MenuItem>
                    );
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
                <Typography fontWeight={"bolder"} color="#b03404">
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
      case "checkBoxx":
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
                  {question.options.map((option) => {
                    return (
                      <Grid item>
                        <FormControlLabel
                          value={option.name}
                          control={
                            <Checkbox
                              color="success"
                              xs={6}
                              value={option.value}
                              {...register(question.name, { max: 3 })}
                            />
                          }
                          label={option.name}
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
            <Container>
              <Box paddingTop={"3%"}>
                <Title
                  size="extra"
                  color="#ffffff"
                  textAlign="center"
                  titleName="Activos culturales y recursos turisticos"
                ></Title>
              </Box>

              <Box paddingTop={"3%"}>
                {getBasicQuestions().map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="1. Generalidades"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>
              <Box paddingTop={"3%"}>
                {getGeneralitiesQuestions().map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              {/* {generatilitiesQuestions.map( (question) => {
                return getQuestion(question);
            })} */}

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="2. Caracteristicas"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>
              <Box paddingTop={"3%"}>
                {getCharacteristicsQuestions().map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              {/*************************************/}

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="3. Indicadores de bienestar"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>

              <Box paddingTop={"3%"}>
                {wellnessQuestions.map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="4. Calidad"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>

              <Box paddingTop={"3%"}>
                {qualityQuestions.map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="5. Actividades dentro y fuera del activo"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>

              <Box paddingTop={"3%"}>
                {insideOutsideActivities.map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="6. Acceso"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>

              <Box paddingTop={"3%"}>
                {accessRoute.map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="7. Facilidades del atractivo "
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>

              <Box paddingTop={"3%"}>
                {assetFacilities.map((question) => {
                  return getQuestion(question);
                })}
              </Box>

              <Box paddingTop={"5%"}>
                <Title
                  shadow="bottom-left"
                  textAlign="center"
                  color="#ffffff"
                  size="big"
                  titleName="8. Recomendaciones de visita"
                />
              </Box>
              <Box paddingTop={"3%"}>
                <Box
                  sx={{ background: "#ffffff", height: "0.5vh", width: "100%" }}
                ></Box>
              </Box>

              <Box paddingTop={"3%"}>
                {recommendations.map((question) => {
                  return getQuestion(question);
                })}
              </Box>
            </Container>

            {/* `{testQuestions.map( (question) => {
                  return getQuestion(question);
              })}` */}
            {/* <input item type="submit" /> */}
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
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CulturalAssetForm;
