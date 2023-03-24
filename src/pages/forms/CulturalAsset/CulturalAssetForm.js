import {
  Box,
  Checkbox,
  Container,
  Grid,
  Input,
  RadioGroup,
  Button,
  Typography,
  TextField,
  ListItemText,
  OutlinedInput,
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
import Paragraph from "../../../components/Fonts/Paragraph";
import SingleQuestion from "../FormComponents/SingleQuestion";
import { useForm } from "react-hook-form";
import Title from "../../../components/Fonts/Title";
import axios from "axios";
import InputMap from "../../../components/Maps/InputMap";
import "./CulturalAssetForm.css";
import { useNavigate } from "react-router-dom";

import Header from "../../Header/Header";

const formBuilderAPI__URL =
  process.env.REACT_APP_BASE_ASSET_URL + "/form-builder";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
    fontWeight: "bold",
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

const getTypes = axios.get(`${formBuilderAPI__URL}/Type`);
const typess = await getTypes;

const getCategories = axios.get(`${formBuilderAPI__URL}/Category`);
const categoriess = await getCategories;

const getPatrimonies = axios.get(`${formBuilderAPI__URL}/Patrimony`);
const patrimoniess = await getPatrimonies;

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
      min: `${value.min}`,
      max: `${value.max}`,
    };
  });

  const munList = municipalitiess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      parentLocationId: `${value.parentLocationId}`,
      value: `${value.id}`,
    };
  });

  const depList = departmentss.data.values.map((value) => {
    return {
      name: `${value.name}`,
      parentLocationId: `${value.parentLocationId}`,
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
      communityTypeId: `${value.communityTypeId}`,
      value: `${value.id}`,
    };
  });

  const subtypeList = subtypess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      typeId: `${value.typeId}`,
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

  const typeList = typess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      categoryId: `${value.categoryId}`,
    };
  });

  const categoryList = categoriess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      patrimonyId: `${value.patrimonyId}`,
    };
  });

  const patrimonyList = patrimoniess.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      assetGroupId: `${value.assetGroupId}`,
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

  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [selectedGroup, setSelectedGroup] = useState({
    name: "No hay un grupo seleccionado. Por favor elija un subtipo valido.",
  });
  const [selectedAssetCommunities, setSelectedAssetCommunities] = useState([]);
  const [selectedSubtype, setSelectedSubtype] = useState("");
  const [selectedMun, setSelectedMun] = useState("");
  const [selectedDep, setSelectedDep] = useState("");
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

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const updatedLocationObject = (locationDTO) => {
    //Ordering for assetts, this must match the Value in the database.
    setLocationObject(locationDTO);
    // console.log(locationDTO);
  };

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
    return basicQuestions;
  };

  const getFileQuestions = () => {
    return [
      {
        name: "imageList",
        question: "Imágenes del activo cultural",
        instructions:
          "Por favor haga click en el boton 'choose files' para subir las imagenes y luego click en 'Cargar Imagenes' para guardar las imagenes en el sistema. Imagenes con tamaño máximo de 1MB.",
        id: "image-files",
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
        question: " Nombre del activo cultural",
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
          "¿Por cuál otro nombre se conoce? (Ingresar nombres separados por comas)",
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
        value: selectedSubtype,
        onChange: (evt) => {
          let typeId = subtypeList.filter(
            (s) => s.value === evt.target.value
          )[0].typeId;
          let categoryId = typeList.filter((t) => t.value === typeId)[0]
            .categoryId;
          let patrimonyId = categoryList.filter(
            (c) => c.value === categoryId
          )[0].patrimonyId;
          let groupId = patrimonyList.filter((p) => p.value === patrimonyId)[0]
            .assetGroupId;
          // Filtering questions using group id
          setCriteriaQuestions(getCriteriaQuestions(groupId));
          // Obtaining selected subtype
          setSelectedSubtype(evt.target.value);
          // Obtaining selected group for rendering
          setSelectedGroup(groupList.filter((g) => g.value === groupId)[0]);
          setSelectedGroupId(groupId);
        },
        options: ["Subtipo 1", "Subtipo 2", "Subtipo 3"],
        required: true,
        color: "#b03404",
      },
      {
        name: "departmentId",
        question: "Departamento",
        value: selectedDep,
        type: "selectList",
        options: ["Departamento 1", "Departamento 2", "Departamento 3"],
        required: true,
        color: "#b03404",
        onChange: (evt) => {
          setMunicipalities(
            munList.filter((mun) => mun.parentLocationId === evt.target.value)
          );
          setSelectedDep(evt.target.value);
        },
      },
      {
        name: "municipalityId",
        question: "Municipio",
        value: selectedMun,
        type: "selectList",
        options: ["Municipio 1", "Municipio 2", "Municipio 3"],
        onChange: (evt) => {
          console.log(evt.target);
          setSelectedMun(evt.target.value);
        },
        required: true,
        color: "#b03404",
      },
      {
        name: "Ubicacion",
        question: "Ubicación del activo cultural",
        type: "mapPick",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "locationDetail",
        question:
          "Detalle de la ubicación, indicar dirección o indicaciones de llegada.",
        type: "text",
        placeHolder: "Tu respuesta",
        required: true,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "description",
        question: "Descripción del activo cultural",
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
        question: "¿Con qué tipo de comunidad étnica con la que se relaciona?",
        type: "radioSelectt",
        options: ["Indígena", "Afrocolombiano", "Raizal", "Rrom", "Ninguna"],
        onChange: (evt) => {
          setEhtnicGroup(
            ethngList.filter((eg) => eg.communityTypeId === evt.target.value)
          );
        },
        required: true,
        color: "#b03404",
      },
      {
        name: "inmaterialManifestation",
        question: "¿Es una manifestación Cultural Inmaterial?",
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
        onChange: (evt) => {
          console.log(evt.target.value);
        },
        required: true,
        color: "#b03404",
      },
      {
        name: "cosmogony",
        question: "¿Es sagrado o tiene interpretación cosmogónica?",
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
        question: "¿Por qué es sagrado o tiene interpretación cosmogónica?",
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
        question: "¿A cuál tipo de manifestación pertenece? ",
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
        question: "¿Registrado en salvaguardia?",
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
        question: "¿Reconocido UNESCO ?",
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
        question: "¿Se encuentra en una reserva natural?",
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
        name: "reservationName",
        question: "Nombre de la reserva",
        type: "text",
        placeHolder: "Tu respuesta",
        required: false,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "reservationLink",
        question: "Link de la reserva",
        type: "text",
        placeHolder: "Tu respuesta",
        required: false,
        hex: "#b03404",
        rgb: [224, 220, 220],
        color: "#b03404",
      },
      {
        name: "onGoingRecognition",
        question:
          "¿Se está tramitando algún reconocimiento sobre el activo cultural?",
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
          "Link música, documentales, películas que lo describen o lo usan (por favor ingresar links separados por comas).",
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
          "¿Está permitido el turismo en este lugar o con la  participación de este activo cultural?",
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
        question: "¿Cuáles pueblos o etnias lo comparten?",
        type: "multiSelect",
        value: selectedAssetCommunities,
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
        onChange: (event) => {
          const {
            target: { value },
          } = event;
          const preventDuplicate = value.filter(
            (v, i, a) => a.findIndex((t) => t === v) === i
          );
          setSelectedAssetCommunities(
            // On autofill we get a the stringified value.
            typeof preventDuplicate === "string"
              ? preventDuplicate.split(",")
              : preventDuplicate
          );
          console.log(event.target.value);
        },
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

        if (c.name.includes("Potencia")){
          return {
            name: "criteria[" + index + "]",
            question : c.name,
            min: c.min,
            max: c.max,
            pattern : /^(6|12|18|30)$/,
            type: "number",
            placeHolder: "Tu respuesta",
            required: true,
            hex: "#b03404",
            rgb: [224, 220, 220],
            color: "#b03404",
          };
        }

        return {
          name: "criteria[" + index + "]",
          question:
            c.name +
            ". (Valor mínino: " +
            c.min +
            ", Valor máximo: " +
            c.max +
            ".)",
          min: c.min,
          max: c.max,
          type: "number",
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
        name: "selectedGroup",
        question: "Grupo en el que se clasifica el activo cultural",
        type: "label",
        color: "#b03404",
        value: selectedGroup.name,
      },
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
      question: "¿Si es evento, cual es la fecha?",
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
      question: "Servicios básicos",
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
      question: "Situación economica",
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
    alert("Imagenes cargadas");
  };

  const handleImageList = (evt) => {
    setImageList(evt.target.files);
    // console.log(imageList);
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
      try {
        if (file.size > 1024000) {
          throw new Error("Tamaño inválido de la imágen. 1MB máx.");
        }
        const fileBase64 = await toBase64(file);
        setImagenes(images);
        images.push(fileBase64);
      } catch (e) {
        alert(e);
      }
    });
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
      case "label":
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
                <Paragraph
                  color="#000000"
                  padding="5px"
                  bold
                  content={question.value}
                  size="1.7rem"
                ></Paragraph>
              </Grid>
            </Grid>
          </SingleQuestion>
        );
        break;
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
                  sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                ></Input>
              </Grid>
            </Grid>
          </SingleQuestion>
        );
        break;
      case "number":
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
                  type="number"
                  name={question.name}
                  {...register(question.name, {
                    pattern : question.pattern ? question.pattern : "",
                    required: question.required,
                    min: question.min,
                    max: question.max,
                  })}
                  sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                  onChange={question.onChange}
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
              <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography color={"#000000"} fontWeight={"bold"}>
                  {question.instructions}
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
                  id={question.id}
                  multiple
                  type={"file"}
                  onChange={handleImageList}
                />
                <input
                  type="button"
                  onClick={() => {
                    document.getElementById(question.id).value = [];
                    setImageList([]);
                    setImagenes([]);
                  }}
                  value="Eliminar imagenes"
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
                  sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
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
                            color="success"
                          />
                        }
                        label={
                          <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {option}
                          </Typography>
                        }
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
                            color="success"
                          />
                        }
                        label={
                          <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {option.name}
                          </Typography>
                        }
                        // label={option.name}
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
                  value={question.value}
                  fullWidth
                  {...register(question.name, {
                    onChange: question.onChange,
                    required: true,
                  })}
                  color="success"
                >
                  {question.options
                    .sort(function (a, b) {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    })
                    .map((option) => {
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
      case "multiSelect":
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
                  multiple
                  fullWidth
                  value={question.value}
                  onChange={question.onChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) =>
                    selected.length > 7
                      ? selected
                          .slice(0, 6)
                          .map((x) => x.name)
                          .join(", ")
                      : selected.map((x) => x.name).join(", ")
                  }
                >
                  {question.options.map((option) => (
                    <MenuItem key={option.id} value={option}>
                      <Checkbox
                        checked={selectedAssetCommunities.indexOf(option) > -1}
                      />
                      <ListItemText primary={
                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                          {option.name}
                        </Typography>
                        } 
                      />
                    </MenuItem>
                  ))}
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
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }} >{option.name}</Typography>
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
                                    style={{ width: "1.5em", height: "1.5em" }}
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
                          
                          label={
                            <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                              {option.name}
                            </Typography>}
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
      alert("Activo cultural registrado!");
      refreshPage();
    });

    // axios.post(urls.baseAssetURL, asset).then((res) => {
    //   console.log(res);
    //   alert("Successfully posted host");
    // });
  };

  function formatculturalAssetRequest(body) {
    var culturalAsset = {};
    // console.log(body);
    console.log(critList);
    console.log(criteriaQuestions);
    console.log(selectedSubtype);
    culturalAsset.departmentId = body.departmentId;
    culturalAsset.municipalityId = body.municipalityId;
    culturalAsset.subtypeId = body.subtypeId;
    culturalAsset.groupId = body.groupId;
    culturalAsset.name = body.name;
    culturalAsset.assetCommunityType = body.assetCommunitiesTypes;

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
    culturalAsset.reservationName = body.reservationName;
    culturalAsset.reservationLink = body.reservationLink;
    culturalAsset.onGoingRecognition = body.onGoingRecognition;
    culturalAsset.links = body.links;
    culturalAsset.accessDetail = body.accessDetail;    

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

    culturalAsset.alternateNames = body.alternateNames;

    if (body.assetManifestations && body.inmaterialManifestation) {
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

    if (selectedAssetCommunities.size < 1) {
      alert("Seleccione al menos una comunidad etnica asociada al activo");
    }
    culturalAsset.assetCommunities = selectedAssetCommunities.map(
      (assetCommunityId) => {
        return {
          communityId: assetCommunityId.value,
        };
      }
    );

    let fullAccessList = [];

    if (body.maritimeAccess) {
      fullAccessList = fullAccessList.concat(body.maritimeAccess);
    }if (body.aerialAccess) {
      fullAccessList = fullAccessList.concat(body.aerialAccess);
    }if (body.landAccess) {
      fullAccessList = fullAccessList.concat(body.landAccess);
    }

    culturalAsset.assetAccessList = fullAccessList.map((accessId) => {
      return {
        accessId: accessId,
      };
    });

    //Formating sports in request
    culturalAsset.assetSportList = body.sp
      .map((s) => {
        return {
          sportId: s.substring(1, s.length),
          score: s[0],
        };
      })
      .filter((element) => {
        return element !== undefined;
      })
      .map((sport) => {
        return {
          sportId: sport.sportId,
          score: sport.score,
        };
      });

    //Formating offers in request
    const offerTour = body.tr
      .map((s) => {
        return {
          offerId: s.substring(1, s.length),
          score: s[0],
        };
      })
      .filter((element) => {
        return element !== undefined;
      });

    const offerFolk = body.folk
      .map((s) => {
        return {
          offerId: s.substring(1, s.length),
          score: s[0],
        };
      })
      .filter((element) => {
        return element !== undefined;
      });

    const offerOtherServices = body.os
      .map((s) => {
        return {
          offerId: s.substring(1, s.length),
          score: s[0],
        };
      })
      .filter((element) => {
        return element !== undefined;
      });

    let fullOfferList = [...offerOtherServices, ...offerFolk, ...offerTour];

    culturalAsset.assetOfferList = fullOfferList.map((offer) => {
      return {
        offerId: offer.offerId,
        score: offer.score,
      };
    });

    //Formating vulnerabilities in request
    const vulnerabilitiesLists = body.vuln
      .map((s) => {
        return {
          vulnerabilityId: s.substring(1, s.length),
          score: s[0],
        };
      })
      .filter((element) => {
        return element !== undefined;
      })
      .map((vulnerability) => {
        return {
          vulnerabilityId: vulnerability.vulnerabilityId,
          score: vulnerability.score,
        };
      });

    culturalAsset.assetVulnerabilityList = vulnerabilitiesLists;

    //Formating nature in request
    const fullNatureList = body.nat
      .map((s) => {
        return {
          natureId: s.substring(1, s.length),
          score: s[0],
        };
      })
      .filter((element) => {
        return element !== undefined;
      });
    culturalAsset.assetNatureList = fullNatureList.map((nature) => {
      return {
        natureId: nature.natureId,
        score: nature.score,
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

    let currentCritList = critList.filter((c) => c.groupId === selectedGroupId);

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

    if (body.quality) {
      fullRecList = fullRecList.concat(body.quality);
    }
    if (body.wellness) {
      fullRecList = fullRecList.concat(body.wellness);
    }
    if (body.economic) {
      fullRecList = fullRecList.concat(body.economic);
    }
    culturalAsset.assetRecommendationList = fullRecList.map((r) => {
      return {
        recommendationId: r,
      };
    });

    console.log(culturalAsset);
    return culturalAsset;
  }

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
                  size="large"
                  shadow="bottom-left"
                  color="#ffffff"
                  textAlign="center"
                  titleName="Formulario de activos culturales"
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
                {getFileQuestions().map((question) => {
                  return getQuestion(question);
                })}
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
                    titleName="Guardar Activo Cultural"
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
