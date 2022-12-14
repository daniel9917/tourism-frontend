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
import InputMap from "../../../components/Maps/InputMap";

import urls from "../../../urls.json";
import Header from "../../Header/Header";

const formBuilderAPI__URL =
  process.env.REACT_APP_BASE_ASSET_URL + "/form-builder";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const boxSx = {
  background: "#b03404",
};

const getVulnerabilities = axios.get(`${formBuilderAPI__URL}/Vulnerability`);
const vulnerabilities = await getVulnerabilities;

const getMunicipalities = axios.get(`${formBuilderAPI__URL}/Municipality`);
const municipalitiess = await getMunicipalities;

const getDepartments = axios.get(`${formBuilderAPI__URL}/Department`);
const departmentss = await getDepartments;

const getEthnicities = axios.get(`${formBuilderAPI__URL}/Ethnicity`);
const ethnicitiess = await getEthnicities;

const getEhtnicGroups = axios.get(`${formBuilderAPI__URL}/EthnicGroup`);
const ehtnicGroups = await getEhtnicGroups;

const getSubtypes = axios.get(`${formBuilderAPI__URL}/Subtype`);
const subtypess = await getSubtypes;

const getManifestations = axios.get(`${formBuilderAPI__URL}/Manifestation`);
const manifestationss = await getManifestations;

const getGroups = axios.get(`${formBuilderAPI__URL}/Group`);
const groupss = await getGroups;

const getSports = axios.get(`${formBuilderAPI__URL}/Sport`);
const sportss = await getSports;

const getAccesss = axios.get(`${formBuilderAPI__URL}/Access`);
const accesss = await getAccesss;

const getFolkloress = axios.get(`${formBuilderAPI__URL}/Folklore`);
const folkloress = await getFolkloress;

const getTourss = axios.get(`${formBuilderAPI__URL}/Tours`);
const tourss = await getTourss;

const getOtherServicess = axios.get(`${formBuilderAPI__URL}/OtherServices`);
const otherServicess = await getOtherServicess;

const getMaritimeAccesss = axios.get(`${formBuilderAPI__URL}/Maritime`);
const maritimeAccesss = await getMaritimeAccesss;

const getTerrestrialAccesss = axios.get(`${formBuilderAPI__URL}/Terrestrial`);
const terrestrialAccesss = await getTerrestrialAccesss;

const getAerialAccess = axios.get(`${formBuilderAPI__URL}/Aerial`);
const aerialAccesss = await getAerialAccess;

const getCommunicationss = axios.get(`${formBuilderAPI__URL}/Communication`);
const comunicationss = await getCommunicationss;

const getAccessRoutess = axios.get(`${formBuilderAPI__URL}/AccessRoute`);
const accessRoutess = await getAccessRoutess;

const getPublicServicess = axios.get(`${formBuilderAPI__URL}/PublicService`);
const publicServicess = await getPublicServicess;

const getNaturess = axios.get(`${formBuilderAPI__URL}/Nature`);
const naturess = await getNaturess;

const getQualityRecommendationss = axios.get(`${formBuilderAPI__URL}/Quality`);
const qualityRecommendationss = await getQualityRecommendationss;

const getCriteria = axios.get(`${formBuilderAPI__URL}/Criteria`);
const criterias = await getCriteria;

const getWellnessRecommendationss = axios.get(
  `${formBuilderAPI__URL}/Wellness`
);
const wellnessRecommendationss = await getWellnessRecommendationss;

const getEconomicRecommendationss = axios.get(
  `${formBuilderAPI__URL}/Economic`
);
const economicRecommendationss = await getEconomicRecommendationss;

const CulturalAssetForm = () => {
  const vulnList = vulnerabilities.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const critList = criterias.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      groupId: `${value.groupId}`,
    };
  });

  const munList = municipalitiess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const depList = departmentss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const ethList = ethnicitiess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const ethngList = ehtnicGroups.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const subtypeList = subtypess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const manifestationsList = manifestationss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const groupList = groupss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const sportList = sportss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const accessList = accesss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const tourList = tourss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const folkloreList = folkloress.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const otherServicesList = otherServicess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const terrestrialAccessList = terrestrialAccesss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const aerialAccessList = aerialAccesss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const maritimeAccesssList = maritimeAccesss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const comunicationssList = comunicationss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const accessRoutessList = accessRoutess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const publicServicessList = publicServicess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const naturessList = naturess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const qualityRecommendationsList = qualityRecommendationss.data.values.map(
    (value) => {
      return {
        name: `${value.name}`,
        value: `${value.id}`,
      };
    }
  );

  const wellnessRecommendationsList = wellnessRecommendationss.data.values.map(
    (value) => {
      return {
        name: `${value.name}`,
        value: `${value.id}`,
      };
    }
  );

  const economicRecommendationsList = economicRecommendationss.data.values.map(
    (value) => {
      return {
        name: `${value.name}`,
        value: `${value.id}`,
      };
    }
  );

  // const  List = .data.values.map((value) => {
  //   return {
  //     name: `${value.name}`,
  //     value: `${value.id}`,
  //   }
  // });;

  const [municipalities, setMunicipalities] = useState(munList);
  const [departments, setDepartments] = useState(depList);
  const [ethnicities, setEthnicities] = useState(ethList);
  const [ehtnicGroup, setEhtnicGroup] = useState(ethngList);
  const [subtypes, setSubtypes] = useState(subtypeList);
  const [manifestations, setManifestations] = useState(manifestationsList);
  const [groups, setGroups] = useState(groupList);
  const [sports, setSports] = useState(sportList);
  const [access, setAccess] = useState(accessList);
  const [tours, setTours] = useState(tourList);
  const [folklore, setFolklore] = useState(folkloreList);
  const [otherServices, setOtherServices] = useState(otherServicesList);
  const [terrestrialAccess, setTerrestrialAccess] = useState(
    terrestrialAccessList
  );
  const [aerialAccess, setAerialAccess] = useState(aerialAccessList);
  const [maritimeAccess, setMaritimeAccess] = useState(maritimeAccesssList);
  const [communication, setCommunications] = useState(comunicationssList);
  const [publicService, setPublicServices] = useState(publicServicessList);
  const [accessRoutes, setAccessRoutes] = useState(accessRoutessList);
  const [natureList, setNatureList] = useState(naturessList);
  const [assetVulnerabilityList, setAssetVulnerabilityList] =
    useState(vulnList);
  const [qualityRecommendations, setQualityRecommendationsList] = useState(
    qualityRecommendationsList
  );
  const [wellnessRecommendations, setWellnessRecommendationsList] = useState(
    wellnessRecommendationsList
  );
  const [economicRecommendations, setEconomicRecommendations] = useState(
    economicRecommendationsList
  );

  const [locationObject, setLocationObject] = useState({});

  const [imageList, setImageList] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  const [criteriaQuestions, setCriteriaQuestions] = useState([]);

  const updatedLocationObject = (locationDTO) => {
    //Ordering for assetts, this must match the Value in the database.
    setLocationObject(locationDTO);
    console.log(locationDTO);
  };

  const getBasicQuestions = () => {
    let basicQuestions = [
      {
        name: "email",
        question: "Correo",
        type: "email",
        placeHolder: "Tu direcci??n de correo electr??nico",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
    ];
    return basicQuestions;
  };

  const getFileQuestions = () => {
    return [
      {
        name: "imageList",
        question: "Imagenes del activo cultural",
        type: "multiImage",
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
    ];
  };

  const getGeneralitiesQuestions = () => {
    const generatilitiesQuestions = [
      {
        name: "name",
        question: " Nombre del activo cultural o recurso tur??stico",
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
          "Por cu??l otro nombre se conoce? (Ingresar nombres separados por comas)",
        type: "text",
        placeHolder: "Tu respuesta",
        required: false,
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
        name: "Ubicacion",
        question: "Ubicacion del activo o recurso",
        type: "mapPick",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "locationDetail",
        question: "Detalle de la ubicaci??n",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "description",
        question: "Descripci??n del activo o recurso",
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
        question: "Tipo de comunidad ??tnica con la que se relaciona?",
        type: "radioSelectt",
        options: ["Ind??gena", "Afrocolombiano", "Raizal", "Rrom", "Ninguna"],
        required: true,
        color: "#b03404",
      },
      {
        name: "inmaterialManifestation",
        question: "Es una manifestaci??n Cultural Inmaterial?",
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
        name: "cosmogony",
        question: "Es sagrado o tiene interpretaci??n cosmog??nica?",
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
        question: "Por qu?? es sagrado o tiene interpretaci??n cosmog??nica?",
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
        question: "A cu??l tipo de manifestaci??n pertenece? ",
        type: "checkBoxx",
        options: [
          "Actos festivos y l??dicos",
          "Artes populares",
          "Conocimientos tradicionales de la naturaleza y el universo",
          "Conocimientos y t??cnicas tradicionales del h??bitat",
          "Cultura Culinaria",
          "Educaci??n tradicional",
          "Espacios culturales",
          "Eventos religiosos tradicionales de car??cter colectivo",
          "Juegos y deportes tradicionales",
          "Lengua y tradici??n oral",
          "Medicina tradicional y pr??cticas tradicionales de la salud",
          "Organizaci??n social",
          "Producci??n tradicional",
          "T??cnicas y tradiciones fabricaci??n objetos artesanales",
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
        type: "radioSelectt",
        // options: ["Si", "No"],
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
        name: "unescoRegistry",
        question: "Reconocido UNESCO ?",
        type: "radioSelectt",
        // options: ["Si", "No"],
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
        name: "partOfNaturalReservation",
        question: "Se encuentra en una reservas natural?",
        type: "radioSelectt",
        // options: ["Si", "No"],
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
        name: "reservationLink",
        question: "Nombre de la reserva y link",
        type: "text",
        placeHolder: "Tu rewspuesta",
        required: false,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "onGoingRecognition",
        question:
          "Se est?? tramitando alg??n reconocimiento sobre el activo cultural?",
        type: "radioSelectt",
        // options: ["Si", "No"],
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
        name: "links",
        question:
          "Link m??sica, documentales, pel??culas que lo describen o lo usan",
        type: "text",
        placeHolder: "Tu respuesta",
        required: false,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "tourismPermit",
        question:
          "Est?? permitido el turismo en este lugar o con la  participaci??n de este activo cultural?",
        type: "radioSelectt",
        options: ["Si", "No", "N/A"],
        options: [
          {
            name: "Si",
            value: true,
          },
          {
            name: "No",
            value: false,
          },
          {
            name: "N/A",
            value: 0,
          },
        ],
        required: true,
        color: "#b03404",
      },
    ];

    return characteristicsQuestions.map((basicQuestion) => {
      if (basicQuestion.name === "assetManifestations") {
        basicQuestion.options = manifestations;
      } else if (basicQuestion.name === "assetCommunitiesTypes") {
        basicQuestion.options = ethnicities;
      }
      return basicQuestion;
    });
  };

  const getWellnessQuestions = () => {
    const wellnessQuestions = [
      {
        name: "assetCommunities",
        codeName: "shc",
        question: "Cuales pueblos o etnias lo comparten?",
        type: "checkBoxx",
        options: [
          "Achagua (Achagua, ajagua, xagua, gente del rio.)",
          "Ambal??",
          "Amor??a (Wipiwe, Siripu, Mariposa)",
          "Conocimientos y t??cnicas tradicionales del h??bitat",
          "Andakies",
          "Andoque (la gente del hacha - andoque, cha???oie, businka)",
          "Espacios culturales",
          "Eventos religiosos tradicionales de car??cter colectivo",
          "Juegos y deportes tradicionales",
          "Lengua y tradici??n oral",
          "Medicina tradicional y pr??cticas tradicionales de la salud",
          "Organizaci??n social",
          "Producci??n tradicional",
          "T??cnicas y tradiciones fabricaci??n objetos artesanales",
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
        type: "dimensionCriteriaId",
        criteria: ["Si", "No", "Aun no se sabe", "N/A"],
        options: assetVulnerabilityList,
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
    ];

    return wellnessQuestions.map((basicQuestion) => {
      if (basicQuestion.name === "assetCommunities") {
        basicQuestion.options = ehtnicGroup;
      }
      return basicQuestion;
    });
  };

  const getCriteriaQuestions = (groupId) => {
    return critList
      .filter((c) => c.groupId === groupId)
      .map((c, index) => {
        return {
          name: "criteria[" + index + "]",
          question: c.name,
          type: "text",
          placeHolder: "Tu respuesta",
          required: true,
          hex: "#b03404",
          rgb: [224, 220, 220],
          color: "#b03404",
        };
      });
  };

  const getQualityQuestions = () => {
    const qualityQuestions = [
      {
        name: "groupId",
        question: "En qu?? grupo se clasifica el activo cultural?",
        type: "radioSelectt",
        options: groups,
        onChange: (evt) => {
          setCriteriaQuestions(getCriteriaQuestions(evt.target.value));
          console.log(criteriaQuestions);
        },
        required: true,
        color: "#b03404",
      },
      // {
      //   name: "criteria1",
      //   question:
      //     "Criterio 1: PI-Colectiva(14); PM-Estado de Conservaci??n(21); FE-Organizaci??n del evento(30); GE-Pertinencia(10); SN-Sin Contaminaci??n del Aire(10)",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
      // {
      //   name: "criteria2",
      //   question:
      //     "Criterio 2: PI-Tradicional(14); PM-Constituci??n del Bien(21); FE-Beneficios Socioculturales para la Comunidad(20); GE-Representatividad(10); SN-Sin Contaminaci??n del Agua(10)",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
      // {
      //   name: "criteria3",
      //   question:
      //     "Criterio 3: PI-An??nima(14); PM-Representatividad General(28); FE-Beneficios Econ??micos Locales(20); GE-Relevancia(10); SN-Sin Contaminaci??n Visual(10)",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
      // {
      //   name: "criteria4",
      //   question:
      //     "Criterio 4: PI-Espont??nea(14); PM-N/A; FE-N/A; GE-Naturaleza e identidad colectiva(10); SN-Estado de Conservaci??n(10)",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
      // {
      //   name: "criteria5",
      //   question:
      //     "Criterio 5: PI-Popular(14); PM-N/A; FE-N/A; GE-Vigencia(10); SN-Sin Contaminaci??n Sonora(10)",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
      // {
      //   name: "criteria6",
      //   question:
      //     "Criterio 6: PI-N/A; PM-N/A; FE-N/A; GE-Equidad(10); SN-Diversidad(10)",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
      // {
      //   name: "criteria7",
      //   question:
      //     "Criterio 7: PI-N/A; PM-N/A; FE-N/A; GE-Responsabilidad(10); SN-Singularidad(10)",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
      // {
      //   name: "potential",
      //   question:
      //     "Potencial; Local (6), Departamental (12), Nacional (18), Continental (24), Global (30)? Escriba el n??mero",
      //   type: "text",
      //   placeHolder: "Tu respuesta",
      //   required: true,
      //   hex: "#b03404",
      //   rgb: [224, 220, 220],
      //   color: "#b03404",
      // },
    ];

    return qualityQuestions.map((basicQuestion) => {
      if (basicQuestion.name === "groupId") {
        basicQuestion.options = groups;
      }
      return basicQuestion;
    });
  };

  const insideOutsideActivities = [
    {
      name: "assetNatureList",
      codeName: "nat",
      question: "Naturaleza",
      type: "dimensionCriteriaId",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: natureList,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "sports",
      codeName: "sp",
      question: "Deportes / Aventura",
      type: "dimensionCriteriaId",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: sports,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "touristicRoutes",
      codeName: "tr",
      question: "Recorridos turisticos",
      type: "dimensionCriteriaId",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: tours,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "folklore",
      codeName: "folk",
      question: "Folclore",
      type: "dimensionCriteriaId",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: folklore,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "otherServices",
      codeName: "os",
      question: "Otros servicios",
      type: "dimensionCriteriaId",
      criteria: ["Dentro", "Fuera", "N/A"],
      options: otherServices,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
  ];

  const accessRoute = [
    {
      name: "accessDetail",
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
      required: false,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "landAccess",
      codeName: "lnda",
      question: "Acceso terrestre",
      type: "checkBoxx",
      options: terrestrialAccess,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "aerialAccess",
      codeName: "arla",
      question: "Acceso aereo",
      type: "checkBoxx",
      options: aerialAccess,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "maritimeAccess",
      codeName: "mrta",
      question: "Acceso maritimo",
      type: "checkBoxx",
      options: maritimeAccess,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "assetRouteList",
      codeName: "acsr",
      question: "Rutas de acceso",
      type: "radioSelectt",
      options: accessRoutes,
      required: false,
      color: "#b03404",
    },
  ];

  const assetFacilities = [
    {
      name: "basicServices",
      codeName: "bscs",
      question: "Servicios basicos",
      type: "checkBoxx",
      options: publicService,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "communications",
      codeName: "comm",
      question: "Comunicaciones",
      type: "checkBoxx",
      options: communication,
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
      type: "checkBoxx",
      options: qualityRecommendations,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "wellness",
      codeName: "wlls",
      question: "Sustentabilidad del Bienestar",
      type: "checkBoxx",
      options: wellnessRecommendations,
      required: true,
      hex: "#b03404",
      rgb: [224, 220, 220],
      color: "#b03404",
    },
    {
      name: "economic",
      codeName: "ecos",
      question: "Situacion economica",
      type: "checkBoxx",
      options: economicRecommendations,
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

  const loadImages = () => {
    console.log(fileToBase64(imageList));
  };

  const handleImageList = (evt) => {
    setImageList(evt.target.files);
    console.log(imageList);
  };

  const fileToBase64 = (files) => {
    let images = [];

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    Array.prototype.forEach.call(files, async (file) => {
      const fileBase64 = await toBase64(file);
      setImagenes(images);
      images.push(fileBase64);
    });
    console.log(imagenes);
    return images;
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
      case "mapPick":
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
                <InputMap onSetLocation={updatedLocationObject}></InputMap>
                {/* <Input
                  type="text"
                  name={question.name}
                  {...register(question.name, { required: question.required })}
                  fullWidth
                  placeholder={question.placeHolder}
                ></Input> */}
              </Grid>
            </Grid>
          </SingleQuestion>
        );
        break;
      case "multiImage":
        content = (
          <SingleQuestion>
            <Grid container direction={"column"}>
              <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography color={question.color} fontWeight={"bolder"}>
                  {" "}
                  {question.question}{" "}
                </Typography>
              </Grid>
              <br></br>
              <Grid
                item
                xs={12}
                sx={{
                  paddingBottom: "2%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {/* <Input
                    type="text"
                    name={question.name}
                    {...register(question.name, { required: question.required })}
                    fullWidth
                    placeholder={question.placeHolder}
                  ></Input> */}
                <input
                  accept="image/*"
                  id="image-files"
                  multiple
                  type={"file"}
                  onChange={handleImageList}
                />
                <input
                  type="button"
                  onClick={loadImages}
                  value="Cargar Imagenes"
                />
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
                <RadioGroup onChange={question.onChange} name="radioTest">
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
      case "dimensionCriteriaId":
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
                            <Typography>{option.name}</Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <Grid
                              container
                              justifyContent={"space-around"}
                              alignContent="center"
                            >
                              {question.criteria.map((c, i) => {
                                // console.log(i + option.value);
                                return (
                                  <input
                                    type="radio"
                                    name={question.codeName}
                                    {...register(
                                      question.codeName + "." + index,
                                      { required: question.required }
                                    )}
                                    value={i + option.value}
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
                            <Typography>{option.name}</Typography>
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
                                    name={question.codeName}
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
      case "dimensionCriteriaa":
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
                            <Typography>{option.name}</Typography>
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
                                    name={question.codeName}
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
                          value={option.value}
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
    let request = formatculturalAssetRequest(data);
    console.log(request);
    postAsset(request);
  };

  const postAsset = (asset) => {
    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };
    let url = process.env.REACT_APP_BASE_ASSET_URL;

    axios({
      method: "POST",
      url: url,
      headers: headers,
      data: asset,
    }).then((res) => {
      console.log(res);
      alert("Successfully posted host");
    });

    // axios.post(urls.baseAssetURL, asset).then((res) => {
    //   console.log(res);
    //   alert("Successfully posted host");
    // });
  };

  function formatculturalAssetRequest(body) {
    let culturalAsset = {};
    culturalAsset.departmentId = body.departmentId;
    culturalAsset.municipalityId = body.municipalityId;
    culturalAsset.subtypeId = body.subtypeId;
    culturalAsset.groupId = body.groupId;
    culturalAsset.name = body.name;

    //Date event set up
    if (!(body.dateEvent === "")) {
      var parts = body.dateEvent.split("-");
      parts = new Date(parts[0], parts[1] - 1, parts[2]);
      culturalAsset.dateEvent = parts.toISOString().substring(0, 19);
    }

    console.log(fileToBase64(imageList));

    culturalAsset.description = body.description;
    culturalAsset.locationDetail = body.locationDetail;
    culturalAsset.cosmogony = body.cosmogony;
    culturalAsset.cosmogonyDescription = body.cosmogonyDescription;
    culturalAsset.inmaterialManifestation = body.inmaterialManifestation;
    culturalAsset.safeguardingRegistry = body.safeguardingRegistry;
    culturalAsset.unescoRegistry = body.unescoRegistry;
    culturalAsset.tourismPermit = body.tourismPermit;
    culturalAsset.partOfNaturalReservation = body.partOfNaturalReservation;
    culturalAsset.reservationLink = body.reservationLink;
    culturalAsset.onGoingRecognition = body.onGoingRecognition;
    culturalAsset.links = body.links.split(",");

    //Set up of location object for culturalAsset
    let location = {
      parentLocationId: !body.municipalityId
        ? body.departmentId
        : body.municipalityId,
      detail: body.locationDetail,
      latitude: locationObject.lat,
      longitude: locationObject.lng,
      name: body.name,
      orderingId: "336e030a-6a7f-11ed-a1eb-0242ac120002",
    };

    culturalAsset.locationObject = location;

    culturalAsset.alternateNames = body.alternateNames.split(",");


    if (body.assetManifestations) {
      culturalAsset.assetManifestations = body.assetManifestations.map(
        (assetManifestationId) => {
          return {
            manifestationId: assetManifestationId,
          };
        }
      );
    }

    culturalAsset.assetRouteList = [
      {
        routeId: body.assetRouteList,
      },
    ];

    if (!body.assetCommunities){
      alert('Seleccione al menos una comunidad etnica asociada al activo');
    }
    culturalAsset.assetCommunities = body.assetCommunities.map(
      (assetCommunityId) => {
        return {
          communityId: assetCommunityId,
        };
      }
    );

    let fullAccessList = [];

    if (body.maritimeAccess) {
      fullAccessList.concat(body.maritimeAccess);
    }
    if (body.aerialAccess) {
      fullAccessList.concat(body.aerialAccess);
    }
    if (body.terrestrialAccess) {
      fullAccessList.concat(body.terrestrialAccess);
    }

    culturalAsset.assetAccessList = fullAccessList.map((accessId) => {
      return {
        accessId: accessId,
      };
    });

    //Formating sports in request
    culturalAsset.assetSportList = body.sp
      .map((s) => {
        if (s[0] === "0") {
          return s.substring(1, s.length);
        }
      })
      .filter((element) => {
        return element !== undefined;
      })
      .map((sportId) => {
        return {
          sportId: sportId,
        };
      });

    //Formating offers in request
    const offerTour = body.tr
      .map((s) => {
        if (s[0] === "0") {
          return s.substring(1, s.length);
        }
      })
      .filter((element) => {
        return element !== undefined;
      });

    const offerFolk = body.folk
      .map((s) => {
        if (s[0] === "0") {
          return s.substring(1, s.length);
        }
      })
      .filter((element) => {
        return element !== undefined;
      });

    const offerOtherServices = body.os
      .map((s) => {
        if (s[0] === "0") {
          return s.substring(1, s.length);
        }
      })
      .filter((element) => {
        return element !== undefined;
      });

    let fullOfferList = [...offerOtherServices, ...offerFolk, ...offerTour];

    culturalAsset.assetOfferList = fullOfferList.map((offerId) => {
      return {
        offerId: offerId,
      };
    });

    //Formating vulnerabilities in request
    const vulnerabilitiesLists = body.vuln
      .map((s) => {
        if (s[0] === "0") {
          return s.substring(1, s.length);
        }
      })
      .filter((element) => {
        return element !== undefined;
      });

    culturalAsset.assetVulnerabilityList = vulnerabilitiesLists.map(
      (vulnerabilityId) => {
        return {
          vulnerabilityId: vulnerabilityId,
        };
      }
    );

    //Formating nature in request
    const fullNatureList = body.nat
      .map((s) => {
        if (s[0] === "0") {
          return s.substring(1, s.length);
        }
      })
      .filter((element) => {
        return element !== undefined;
      });
    culturalAsset.assetNatureList = fullNatureList.map((natureId) => {
      return {
        natureId: natureId,
      };
    });

    if (body.communications) {
      culturalAsset.assetCommunicationList = body.communications.map(
        (communicationId) => {
          return {
            communicationId: communicationId,
          };
        }
      );
    }

    if (body.basicServices) {
      culturalAsset.assetPublicServiceList = body.basicServices.map(
        (publicServiceId) => {
          return {
            publicServiceId: publicServiceId,
          };
        }
      );
    }

    let currentCritList = critList.filter((c) => c.groupId === body.groupId);

    culturalAsset.assetCriteriaList = body.criteria
      .filter((c) => !(c === ""))
      .map((c, index) => {
        return {
          criteriaId: currentCritList[index].value,
          score: c,
        };
      });

    culturalAsset.imageList = imagenes.map((image) => {
      return {
        imageBlob: image,
      };
    });

    let fullRecList = [];
    if (body.quality){
      fullRecList.concat(body.quality);
    }
    if (body.wellness){
      fullRecList.concat(body.wellness);
    }
    if (body.economic){
      fullRecList.concat(body.economic);
    }
    culturalAsset.assetRecommendationList =  fullRecList.map((r) => {
      return {
        recommendationId: r,
      };
    });

    return culturalAsset;
  }

  const handleChange = (evt) => {
    console.log(evt);
    console.log(getValues());
  };

  function getBackgroudOpacity(opacity, rgb) {
    var bg = "rgba(" + [rgb, opacity].join(",") + ")";
    return bg;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth={1} sx={boxSx}>
        <Header fontColor="#ffffff" fontSize="big"></Header>
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

              <Box paddingTop={"3%"}>
                {getFileQuestions().map((question) => {
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
                {getWellnessQuestions().map((question) => {
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
                {getQualityQuestions().map((question) => {
                  return getQuestion(question);
                })}
              </Box>
              <Box paddingTop={"3%"}>
                {criteriaQuestions.map((question) => {
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
