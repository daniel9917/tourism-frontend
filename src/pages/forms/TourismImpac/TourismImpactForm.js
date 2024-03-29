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
import React, { useRef, useState, useEffect } from "react";
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
import urls from "../../../urls.json";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";

const formBuilderAPI__URL =
  process.env.REACT_APP_BASE_ASSET_URL + "/form-builder";

const impactFormBuilder__URL =
  process.env.REACT_APP_BASE_HOST_URL + "/form-builder";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const boxSx = {
  background: "#ffffff",
  height: "100vh",
};

const frogsImgUrl = "https://i.imgur.com/3uZahvX.png";

const introText =
  "Somos conscientes de las ventajas del turismo sin embargo, esta encuesta se enforca en detectar aquellos aspectos que no estan saliendo bien. En este espacio puede plasmar su punto de vista con respecto de los aspectos en cuestion. Este instrumento hace parte de la investigacion de turismo en la facultad de ingenieria. La encuesta es anonima, los datos solicitados son con proposito de caracterizacion.";

const getInitialAssets = axios.get(
  `${process.env.REACT_APP_BASE_ASSET_URL + "/list-by-filters"}`
);
const initialAssetsRequest = await getInitialAssets;

const getMunicipalities = axios.get(`${formBuilderAPI__URL}/Municipality`);
const municipalitiesRequest = await getMunicipalities;

const getDepartments = axios.get(`${formBuilderAPI__URL}/Department`);
const departmentsRequest = await getDepartments;

const getEthnicities = axios.get(`${formBuilderAPI__URL}/Ethnicity`);
const ethnicitiesRequest = await getEthnicities;

const getEthnicGroup = axios.get(`${formBuilderAPI__URL}/EthnicGroup`);
const ethnicGroupRequest = await getEthnicGroup;

const getSocialRelationships = axios.get(
  `${impactFormBuilder__URL}/SocialRelationships`
);
const socialRelationshipsRequest = await getSocialRelationships;

const getPersonalSecurity = axios.get(
  `${impactFormBuilder__URL}/PersonalSecurity`
);
const personalSecurityRequest = await getPersonalSecurity;

const getGoodHealth = axios.get(`${impactFormBuilder__URL}/GoodHealth`);
const goodHealthRequest = await getGoodHealth;

const getRest = axios.get(`${impactFormBuilder__URL}/Rest`);
const restRequest = await getRest;

const getTransit = axios.get(`${impactFormBuilder__URL}/Transit`);
const transitRequest = await getTransit;

const getCulturalRespect = axios.get(
  `${impactFormBuilder__URL}/CulturalRespect`
);
const culturalRespectRequest = await getCulturalRespect;

const getAculturation = axios.get(`${impactFormBuilder__URL}/Aculturation`);
const aculturationRequest = await getAculturation;

const getDisplacement = axios.get(`${impactFormBuilder__URL}/Displacement`);
const displacementRequest = await getDisplacement;

const getSocialRespect = axios.get(`${impactFormBuilder__URL}/SocialRespect`);
const socialRespectRequest = await getSocialRespect;

const getSecurity = axios.get(`${impactFormBuilder__URL}/Security`);
const securityRequest = await getSecurity;

const getDrugAddiction = axios.get(`${impactFormBuilder__URL}/DrugAddiction`);
const drugAddictionRequest = await getDrugAddiction;

const getProstitution = axios.get(`${impactFormBuilder__URL}/Prostitution`);
const prostitutionRequest = await getProstitution;

const getBegging = axios.get(`${impactFormBuilder__URL}/Begging`);
const beggingRequest = await getBegging;

const getCulturalModification = axios.get(
  `${impactFormBuilder__URL}/CulturalModification`
);
const culturalModificationRequest = await getCulturalModification;

const getSacredRespect = axios.get(`${impactFormBuilder__URL}/SacredRespect`);
const sacredRespectRequest = await getSacredRespect;

const getRejectMock = axios.get(`${impactFormBuilder__URL}/RejectMock`);
const rejectMockRequest = await getRejectMock;

const getTraditionalUse = axios.get(`${impactFormBuilder__URL}/TraditionalUse`);
const traditionalUseRequest = await getTraditionalUse;

const getLinguistincLoss = axios.get(
  `${impactFormBuilder__URL}/LinguistincLoss`
);
const linguistincLossRequest = await getLinguistincLoss;

const getCommodification = axios.get(
  `${impactFormBuilder__URL}/Commodification`
);
const commodificationRequest = await getCommodification;

const getAcceptance = axios.get(`${impactFormBuilder__URL}/Acceptance`);
const acceptanceRequest = await getAcceptance;

const getBenefits = axios.get(`${impactFormBuilder__URL}/Benefits`);
const benefitsRequest = await getBenefits;

const getPrices = axios.get(`${impactFormBuilder__URL}/Prices`);
const pricesRequest = await getPrices;

const getTouristConduct = axios.get(`${impactFormBuilder__URL}/TouristConduct`);
const touristConductRequest = await getTouristConduct;

const getCosmogonyTradition = axios.get(
  `${impactFormBuilder__URL}/CosmogonyTradition`
);
const cosmogonyTraditionRequest = await getCosmogonyTradition;

const getEnvironmentalSecurity = axios.get(
  `${impactFormBuilder__URL}/EnvironmentalSecurity`
);
const environmentalSecurityRequest = await getEnvironmentalSecurity;

const getAccessToMaterialAssets = axios.get(
  `${impactFormBuilder__URL}/AccessToMaterialAssets`
);
const accessToMaterialAssetsRequest = await getAccessToMaterialAssets;

const getCommunityShouldDefine = axios.get(
  `${impactFormBuilder__URL}/CommunityShouldDefine`
);
const communityShouldDefineRequest = await getCommunityShouldDefine;

const getTourismSector = axios.get(`${impactFormBuilder__URL}/TourismSector`);

const tourismSectorRequest = await getTourismSector;

// const get = axios.get(`${impactFormBuilder__URL}/`);
// const Request = await get;

// const get = axios.get(`${impactFormBuilder__URL}/`);
// const Request = await get;

const TourismImpactForm = () => {
  const initialAssetList = initialAssetsRequest.data;
  // console.log(process.env.REACT_APP_BASE_ASSET_URL + "/list-by-filters");

  const munList = municipalitiesRequest.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      parentLocationId: `${value.parentLocationId}`,
    };
  });

  const depList = departmentsRequest.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      parentLocationId: `${value.parentLocationId}`,
    };
  });

  const ethList = ethnicitiesRequest.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const ethngList = ethnicGroupRequest.data.values.map((value) => {
    return {
      name: `${value.name}`,
      communityTypeId: `${value.communityTypeId}`,
      value: `${value.id}`,
    };
  });

  const personalSecurityList = personalSecurityRequest.data.values.map(
    (value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    }
  );

  const socialRelationshipsList = socialRelationshipsRequest.data.values.map(
    (value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    }
  );

  const restList = restRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const transitList = transitRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const culturalRespectList = culturalRespectRequest.data.values.map(
    (value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    }
  );

  const aculturationList = aculturationRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const displacementList = displacementRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const socialRespectList = socialRespectRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const securityList = securityRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const drugAddictionList = drugAddictionRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const prostitutionList = prostitutionRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const beggingList = beggingRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const culturalModificationList = culturalModificationRequest.data.values.map(
    (value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    }
  );

  const sacredRespectList = sacredRespectRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const rejectMockList = rejectMockRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const traditionalUseList = traditionalUseRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const linguistincLossList = linguistincLossRequest.data.values.map(
    (value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    }
  );

  const commodificationList = commodificationRequest.data.values.map(
    (value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    }
  );

  const acceptanceList = acceptanceRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const benefitsList = benefitsRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const pricesList = pricesRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const touristConductList = touristConductRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const goodHealthList = goodHealthRequest.data.values.map((value) => {
    return {
      name: `${value.description}`,
      value: `${value.id}`,
    };
  });

  const cosmogonyTraditionList = cosmogonyTraditionRequest.data.values.map(
    (value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    }
  );

  const environmentalSecurityList =
    environmentalSecurityRequest.data.values.map((value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    });

  const accessToMaterialAssetsList =
    accessToMaterialAssetsRequest.data.values.map((value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    });

  const communityShouldDefineList =
    communityShouldDefineRequest.data.values.map((value) => {
      return {
        name: `${value.description}`,
        value: `${value.id}`,
      };
    });

  const tourismSectorList = tourismSectorRequest.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
    };
  });

  const [municipalities, setMunicipalities] = useState(munList);
  const [departments, setDepartments] = useState(depList);
  const [ethnicities, setEthnicities] = useState(ethList);
  const [ehtnicGroup, setEhtnicGroup] = useState(ethngList);

  // const [socialRelationships, setSocialRelationships] = useState(
  //   socialRelationshipsList
  // );
  // const [personalSecurity, setPersonalSecurity] =
  //   useState(personalSecurityList);
  // const [goodHealth, setGoodHealth] = useState(goodHealthList);

  const [rest, setRest] = useState(restList);
  const [transit, setTransit] = useState(transitList);
  const [culturalRespect, setCulturalRespect] = useState(culturalRespectList);
  const [aculturation, setAculturaltion] = useState(aculturationList);
  const [displacement, setDisplacement] = useState(displacementList);
  const [socialRespect, setSocialRespect] = useState(socialRespectList);
  const [security, setSecurity] = useState(securityList);
  const [drugAddiction, setDrugAddiction] = useState(drugAddictionList);
  const [prostitution, setProstitution] = useState(prostitutionList);
  const [begging, setBegging] = useState(beggingList);
  const [culturalModification, setCulturalModification] = useState(
    culturalModificationList
  );
  const [sacredRespect, setSacredRespect] = useState(sacredRespectList);
  const [rejectMock, setRejectMock] = useState(rejectMockList);
  const [traditionalUse, setTraditionalUse] = useState(traditionalUseList);
  const [linguistincLoss, setLinguistincLoss] = useState(linguistincLossList);
  const [commodification, setCommodification] = useState(commodificationList);
  const [acceptance, setAcceptance] = useState(acceptanceList);
  const [benefits, setBenefits] = useState(benefitsList);
  const [prices, setPrices] = useState(pricesList);
  const [touristConduct, setTouristConduct] = useState(touristConductList);

  // const [cosmogonyTradition, setCosmogonyTradition] = useState(
  //   cosmogonyTraditionList
  // );
  // const [environmentalSecurity, setEnvironmentalSecurity] = useState(
  //   environmentalSecurityList
  // );
  // const [accessToMaterialAssets, setAccessToMaterialAssets] = useState(
  //   accessToMaterialAssetsList
  // );
  const [communityShouldDefine, setCommunityShouldDefine] = useState(
    communityShouldDefineList
  );
  const [tourismSector, setTourismSector] = useState(tourismSectorList);

  const [isFetched, setIsFetched] = useState(false);
  // const [assets, setAssets] = useState([]);
  const [assets, setAssets] = useState([]);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [changed, setChanged] = useState(false);
  const [url, setUrl] = useState(
    process.env.REACT_APP_BASE_ASSET_URL + "/list-by-filters"
  );

  useEffect(() => {
    async function fetchData() {
      if (
        !(url === process.env.REACT_APP_BASE_ASSET_URL + "/list-by-filters")
      ) {
        const response = await fetch(url);
        response.json().then((response) => {
          // console.log(response);
          alert("assets updated");
          setAssets(response.data ? response.data : []);
          setIsFetched(true);
        });
      }
    }
    fetchData();
  }, [url]);

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const getBasicQuestions = () => {
    let basicQuestions = [
      {
        name: "email",
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
        options: departments,
        onChange: (evt) => {
          // console.log(assets);
          setMunicipalities(
            munList.filter((ca) => ca.parentLocationId === evt.target.value)
          );
          var u =
            process.env.REACT_APP_BASE_ASSET_URL +
            "/list-by-filters?" +
            "location=" +
            evt.target.value;
          // console.log(u);
          setUrl(u);
        },
        required: true,
        color: "darkgreen",
      },
      {
        name: "municipality",
        question: "Municipio",
        type: "selectList",
        options: municipalities,
        onChange: (evt) => {
          var u =
            process.env.REACT_APP_BASE_ASSET_URL +
            "/list-by-filters?" +
            "location=" +
            evt.target.value;
          // console.log(u);
          setUrl(u);
        },
        required: true,
        color: "darkgreen",
      },
      {
        name: "ethnicGroup",
        question: "¿Con cuál grupo etnico se autoidentifica?",
        type: "radioSelectt",
        options: ethnicities,
        required: true,
        onChange: (evt) => {
          // console.log(evt.target.value);
          setEhtnicGroup(
            ethngList.filter((eg) => eg.communityTypeId === evt.target.value)
          );
        },
        color: "darkgreen",
      },
      {
        name: "ethnicity",
        question: "¿A qué pueblo pertenece?",
        onChange: (evt) => {
          // console.log(evt.target.value);
          // console.log(assets);
          // console.log(
          //   assets.data.filter((asset) =>
          //     asset.assetCommunities
          //       .map((assetCommunity) => assetCommunity.communityId)
          //       .includes(evt.target.value)
          //   )
          // );
          // setSelectedAssets(
          //   assets.data.filter((asset) =>
          //     asset.assetCommunities
          //       .map((assetCommunity) => assetCommunity.communityId)
          //       .includes(evt.target.value)
          //   )
          // );
          // assets.data.map(
          //   asset => {
          //     console.log(asset);
          //   }
          // );
          // assets.data.filter(
          //   asset => asset.assetCommunitites.map(assetCommunity => {assetCommunity.communityId}).includes("")
          // )
        },
        type: "selectList",
        options: ehtnicGroup,
        required: true,
        color: "darkgreen",
      },
    ];
    return basicQuestions;
  };

  // const qualityOfLifeQuestions = [
  //   {
  //     name: "socialRelationships",
  //     codeName: "sr",
  //     question: "Relaciones Sociales",
  //     type: "dimensionCriteriaId",
  //     criteria: ["No sucede", "A veces", "Mucho", "Critico"],
  //     options: socialRelationships,
  //     required: true,
  //     hex: "#e0dcdc",
  //     rgb: [224, 220, 220],
  //     color: "darkgreen",
  //   },
  //   {
  //     name: "personalSecurity",
  //     codeName: "ps",
  //     question: "Seguridad Personal",
  //     type: "dimensionCriteriaId",
  //     criteria: ["No sucede", "A veces", "Mucho", "Critico"],
  //     options: personalSecurity,
  //     required: true,
  //     hex: "#e0dcdc",
  //     rgb: [224, 220, 220],
  //     color: "darkgreen",
  //   },
  //   {
  //     name: "healthWellness",
  //     codeName: "hw",
  //     question: "Buena Salud",
  //     type: "dimensionCriteriaId",
  //     criteria: ["No sucede", "A veces", "Mucho", "Critico"],
  //     options: goodHealth,
  //     required: true,
  //     hex: "#e0dcdc",
  //     rgb: [224, 220, 220],
  //     color: "darkgreen",
  //   },
  // ];

  // const wellnessSustainability = [
  //   {
  //     name: "cosmogonyTradition",
  //     codeName: "ct",
  //     question: "Cosmogonía y tradición ",
  //     type: "dimensionCriteriaId",
  //     criteria: ["No sucede", "A veces", "Mucho", "Critico"],
  //     options: cosmogonyTradition,
  //     required: true,
  //     hex: "#e0dcdc",
  //     rgb: [224, 220, 220],
  //     color: "darkgreen",
  //   },
  //   {
  //     name: "ambientalSecurity",
  //     codeName: "asnp",
  //     question: "Seguridad Ambiental - Naturaleza y Patrimonio",
  //     type: "dimensionCriteriaId",
  //     criteria: ["No sucede", "A veces", "Mucho", "Critico"],
  //     options: environmentalSecurity,
  //     required: true,
  //     hex: "#e0dcdc",
  //     rgb: [224, 220, 220],
  //     color: "darkgreen",
  //   },
  // ];

  // const economicSituation = [
  //   {
  //     name: "economicSituation",
  //     codeName: "ecs",
  //     question: "Acceso a bienes materiales",
  //     type: "dimensionCriteriaId",
  //     criteria: ["No sucede", "A veces", "Mucho", "Critico"],
  //     options: accessToMaterialAssets,
  //     required: true,
  //     hex: "#e0dcdc",
  //     rgb: [224, 220, 220],
  //     color: "darkgreen",
  //   },
  // ];

  const socialRelationshipQuestions = [
    {
      name: "rest",
      codeName: "rest",
      question: "Descanso",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: rest,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "transit",
      codeName: "transit",
      question: "Tránsito",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: transit,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "culturalRespect",
      codeName: "culturalRespect",
      question: "Respeto Cultural",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: culturalRespect,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "aculturation",
      codeName: "aculturation",
      question: "Aculturación",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: aculturation,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "displacement",
      codeName: "displacement",
      question: "Desplazamiento",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: displacement,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
  ];

  const personalSecurityQuestions = [
    {
      name: "socialRespect",
      codeName: "socialRespect",
      question: "Respeto Social",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: socialRespect,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "security",
      codeName: "security",
      question: "Seguridad",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: security,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "drugAddiction",
      codeName: "drugAddiction",
      question: "Drogadicción",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: drugAddiction,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "prostitution",
      codeName: "prostitution",
      question: "Prostitución",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: prostitution,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "begging",
      codeName: "begging",
      question: "Mendicidad",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: begging,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
  ];

  const cosmogonyTraditionQuestions = [
    {
      name: "culturalModification",
      codeName: "culturalModification",
      question: "Modificación Cultural",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: culturalModification,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "sacredRespect",
      codeName: "sacredRespect",
      question: "Respeto Sagrado",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: sacredRespect,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "rejectMock",
      codeName: "rejectMock",
      question: "Rechazo o burla tradicional",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: rejectMock,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "traditionalUse",
      codeName: "traditionalUse",
      question: "Usos Tradicionales",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: traditionalUse,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "linguistincLoss",
      codeName: "linguistincLoss",
      question: "Pérdida Linguística",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: linguistincLoss,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
  ];

  const participationQuestions = [
    {
      name: "commodification",
      codeName: "commodification",
      question: "Mercantilización",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: commodification,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "acceptance",
      codeName: "acceptance",
      question: "Aceptación",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: acceptance,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "benefits",
      codeName: "benefits",
      question: "Beneficios",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: benefits,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "prices",
      codeName: "prices",
      question: "Precios",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: prices,
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
    {
      name: "touristConduct",
      codeName: "touristConduct",
      question: "Conducta turista",
      type: "dimensionCriteriaId",
      criteria: ["No sucede", "A veces", "Mucho", "Critico"],
      options: touristConduct,
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
      question: "Cuando veo un turista en mi ciudad o municipio",
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
    // {
    //   name: "communityShouldDefine",
    //   codeName: "csd",
    //   question: "Creo que la comunidad del destino debe participar en definir",
    //   type: "dimensionCriteriaa",
    //   criteria: ["Si", "No", "Tal vez"],
    //   options: communityShouldDefine,
    //   required: true,
    //   hex: "#e0dcdc",
    //   rgb: [224, 220, 220],
    //   color: "darkgreen",
    // },
    {
      name: "hostSuggestion",
      question:
        "¿Qué sugiere usted para que las tradiciones, cultura, cosmogonía y forma de vida, sean respetadas y conservadas ante la visita de turistas?",
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
        "¿Qué hace falta en su municipio o ciudad para que el turismo mejore?",
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
      question: "¿Es usted parte del sector turístico de su municipio?",
      type: "checkBoxx",
      options: tourismSector,
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
      options: assets.map((a) => {
        return {
          name: a.id,
          value: a.name,
        };
      }),
      // options: selectedAssets && selectedAssets.length > 0
      // ? selectedAssets.map((a) => {
      //     return {
      //       name: a.id,
      //       value: a.name,
      //     };
      //   })
      // : [{
      //   name : "",
      //   value : 0
      // }],
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
      criteria: ["Si", "No", "No lo sé"],
      options: assets.map((a) => {
        return {
          name: a.id,
          value: a.name,
        };
      }),
      // options: selectedAssets && selectedAssets.length > 0
      // ? selectedAssets.map((a) => {
      //     return {
      //       name: a.id,
      //       value: a.name,
      //     };
      //   })
      // : [{
      //   name : "",
      //   value : 0
      // }],
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
      options: assets.map((a) => {
        return {
          name: a.id,
          value: a.name,
        };
      }),
      // options: selectedAssets && selectedAssets.length > 0
      // ? selectedAssets.map((a) => {
      //     return {
      //       name: a.id,
      //       value: a.name,
      //     };
      //   })
      // : [{
      //   name : "",
      //   value : 0
      // }],
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
      options: assets.map((a) => {
        return {
          name: a.id,
          value: a.name,
        };
      }),
      // options: selectedAssets && selectedAssets.length > 0
      // ? selectedAssets.map((a) => {
      //     return {
      //       name: a.id,
      //       value: a.name,
      //     };
      //   })
      // : [{
      //   name : "",
      //   value : 0
      // }],
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
      // options: selectedAssets && selectedAssets.length > 0
      //   ? selectedAssets.map((a) => {
      //       return {
      //         name: a.id,
      //         value: a.name,
      //       };
      //     })
      //   : [{
      //     name : "",
      //     value : 0
      //   }],
      options: assets.map((a) => {
        return {
          name: a.id,
          value: a.name,
        };
      }),
      required: true,
      hex: "#e0dcdc",
      rgb: [224, 220, 220],
      color: "darkgreen",
    },
  ];

  const ref = useRef(null);
  const onClickScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { register, handleSubmit, getValues } = useForm();
  const [dimensionValues, setDimensionValues] = useState();

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
                  fullWidth
                  {...register(question.name, {
                    onChange: question.onChange,
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
                                      question.codeName + "." + index,
                                      { required: question.required }
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
                                return (
                                  <input
                                    type="radio"
                                    name={question.codeName}
                                    style={{ width: "1.5em", height: "1.5em" }}
                                    {...register(
                                      question.codeName + "." + index,
                                      { required: question.required }
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
                                    style={{ width: "1.5em", height: "1.5em" }}
                                    name={question.codeName}
                                    {...register(
                                      question.codeName + "." + index,
                                      { required: question.required }
                                    )}
                                    value={3 - i}
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
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={2}></Grid>
                      <Grid container justifyContent={"space-around"} xs={10}>
                        {question.criteria.map((c) => {
                          return (
                            <Grid
                              xs={Math.floor(12 / question.criteria.length)}
                              item
                            >
                              <Typography                                
                                fontWeight={"bolder"}
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
                  <br></br>
                  <br></br>
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
                          <Grid item xs={2}>
                            <Typography >{option.value}</Typography>
                          </Grid>
                          <Grid item xs={10}>
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
                  {question.options.map((option, index) => {
                    return (
                      <Grid item>
                        <FormControlLabel
                          value={option.value + ""}
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
    let host = {
      email: data.email,
      municipalityId: data.municipality,
      departmentId: data.department,
      dataTreatment: data.dataTreatment,
      suggestion: data.hostSuggestion,
      lack: data.municipalityLacks,
      municipalityId: data.municipality,
      communityTypeId: data.ethnicGroup,
      communityId: data.ethnicity,
    };
    /**
     * GIVING FORMAT TO FACTORS
     */

    // // QUALITY OF LIFE
    // let socialRelationshipsFactor = {
    //   factorId: "fe68bcdc-725c-11ed-a1eb-0242ac120002",
    //   characteristicScoreList: socialRelationships.map((sr, index) => {
    //     return {
    //       characteristicId: sr.value,
    //       score: +data.sr[index],
    //     };
    //   }),
    // };
    // let personalSecurityFactor = {
    //   factorId: "07d30ce6-725d-11ed-a1eb-0242ac120002",
    //   characteristicScoreList: personalSecurity.map((sr, index) => {
    //     return {
    //       characteristicId: sr.value,
    //       score: +data.ps[index],
    //     };
    //   }),
    // };
    // let healthWellnessFactor = {
    //   factorId: "13af3b70-725d-11ed-a1eb-0242ac120002",
    //   characteristicScoreList: goodHealth.map((sr, index) => {
    //     return {
    //       characteristicId: sr.value,
    //       score: +data.hw[index],
    //     };
    //   }),
    // };

    // // WELLNESS SUSTAINABILITY
    // let cosmogonyTraditionFactor = {
    //   factorId: "28260b24-725d-11ed-a1eb-0242ac120002",
    //   characteristicScoreList: cosmogonyTradition.map((sr, index) => {
    //     return {
    //       characteristicId: sr.value,
    //       score: +data.ct[index],
    //     };
    //   }),
    // };
    // let environmentalSecurityFactor = {
    //   factorId: "2e53551a-725d-11ed-a1eb-0242ac120002",
    //   characteristicScoreList: environmentalSecurity.map((sr, index) => {
    //     return {
    //       characteristicId: sr.value,
    //       score: +data.asnp[index],
    //     };
    //   }),
    // };

    // // ECONOMIC SITUATION
    // let accessToGoodsFactor = {
    //   factorId: "3639b4e0-725d-11ed-a1eb-0242ac120002",
    //   characteristicScoreList: accessToMaterialAssets.map((sr, index) => {
    //     return {
    //       characteristicId: sr.value,
    //       score: +data.ecs[index],
    //     };
    //   }),
    // };

    // SOCIAL RELATIONSHIPS

    let restFactor = {
      factorId: "afa9dc1c-482f-4503-bd49-682c8e6db0d5",
      characteristicScoreList: rest.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.rest[index],
        };
      }),
    };

    let transitFactor = {
      factorId: "bb6e83b9-6c2d-4a6e-8f32-c2addd0edf41",
      characteristicScoreList: transit.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.transit[index],
        };
      }),
    };

    let culturalRespectFactor = {
      factorId: "fefc3c86-298d-440b-a09f-33f3b8453311",
      characteristicScoreList: culturalRespect.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.culturalRespect[index],
        };
      }),
    };

    let aculturationFactor = {
      factorId: "a58ce4f7-bebf-435c-95d2-ce02e6dd65ed",
      characteristicScoreList: aculturation.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.aculturation[index],
        };
      }),
    };

    let displacementFactor = {
      factorId: "3a6c0ec3-5bab-4f6f-84ed-c541be862898",
      characteristicScoreList: displacement.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.displacement[index],
        };
      }),
    };

    // PERSONAL SECURITY

    let socialRespectFactor = {
      factorId: "8c44ee0a-6ed8-4fd4-8003-c9eaf6ccd242",
      characteristicScoreList: socialRespect.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.socialRespect[index],
        };
      }),
    };

    let securityFactor = {
      factorId: "af758aa0-bcf7-495b-830e-51714e895c48",
      characteristicScoreList: security.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.security[index],
        };
      }),
    };

    let drugAddictionFactor = {
      factorId: "04f7ef0e-3c59-49ee-a4db-8378deb88ede",
      characteristicScoreList: drugAddiction.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.drugAddiction[index],
        };
      }),
    };

    let prostitutionFactor = {
      factorId: "da60e858-9a4f-40c2-bb04-d3046a3a5fae",
      characteristicScoreList: prostitution.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.prostitution[index],
        };
      }),
    };

    let beggingFactor = {
      factorId: "6eae370f-4b8a-49c7-bd44-0e38e62c6b3c",
      characteristicScoreList: begging.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.begging[index],
        };
      }),
    };

    // COSMOGONY TRADTITION

    let culturalModificationFactor = {
      factorId: "170b0b4d-6d33-4e70-80bf-4650d2ca2225",
      characteristicScoreList: culturalModification.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.culturalModification[index],
        };
      }),
    };

    let sacredRespectFactor = {
      factorId: "1b495a5e-3b77-4e41-8c42-efb1d3bd3114",
      characteristicScoreList: sacredRespect.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.sacredRespect[index],
        };
      }),
    };

    let rejectMockFactor = {
      factorId: "a97e33d4-87d7-4a33-a29f-7ce568631cf2",
      characteristicScoreList: rejectMock.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.rejectMock[index],
        };
      }),
    };

    let traditionalUseFactor = {
      factorId: "c1af3fe6-3319-4ff0-9d94-3bfa43f60b6d",
      characteristicScoreList: traditionalUse.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.traditionalUse[index],
        };
      }),
    };

    let linguistincLossFactor = {
      factorId: "ab0195e4-dc0f-4317-b243-9ddc358369d8",
      characteristicScoreList: linguistincLoss.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.linguistincLoss[index],
        };
      }),
    };

    // PARTICIPATION

    let commodificationFactor = {
      factorId: "d7c09c90-7cdf-4ae8-b59a-abd7c771d541",
      characteristicScoreList: commodification.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.commodification[index],
        };
      }),
    };

    let acceptanceFactor = {
      factorId: "656e8c4c-f7f2-47b4-8228-316fe9246f8e",
      characteristicScoreList: acceptance.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.acceptance[index],
        };
      }),
    };

    let benefitsFactor = {
      factorId: "1f727c49-173a-4b43-996c-ef19abd2292f",
      characteristicScoreList: benefits.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.benefits[index],
        };
      }),
    };

    let pricesFactor = {
      factorId: "eeb3a779-25a2-46f6-8819-c9990c49d905",
      characteristicScoreList: prices.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.prices[index],
        };
      }),
    };

    let touristConductFactor = {
      factorId: "6d3db707-e4f1-449a-81af-d62b1540700b",
      characteristicScoreList: touristConduct.map((sr, index) => {
        return {
          characteristicId: sr.value,
          score: +data.touristConduct[index],
        };
      }),
    };

    // COMMUNITY SHOULD DEFINE
    // let communityShouldDefineFactor = {
    //   factorId: "761d43c6-7292-11ed-a1eb-0242ac120002",
    //   characteristicScoreList: communityShouldDefine.map((sr, index) => {
    //     return {
    //       characteristicId: sr.value,
    //       score: +data.csd[index],
    //     };
    //   }),
    // };

    // let qualityOfLifeFactorType = {
    //   factorTypeId: "db181048-725c-11ed-a1eb-0242ac120002",
    //   factorList: [
    //     socialRelationshipsFactor,
    //     personalSecurityFactor,
    //     healthWellnessFactor,
    //   ],
    // };

    // let wellnessSustainabilityFactoryType = {
    //   factorTypeId: "deca53ae-725c-11ed-a1eb-0242ac120002",
    //   factorList: [cosmogonyTraditionFactor, environmentalSecurityFactor],
    // };

    // let economicSituationFactoryType = {
    //   factorTypeId: "e625b058-725c-11ed-a1eb-0242ac120002",
    //   factorList: [accessToGoodsFactor],
    // };

    // let touristRelationshipFactoryType = {
    //   factorTypeId: "ecc1ebfc-725c-11ed-a1eb-0242ac120002",
    //   factorList: [communityShouldDefineFactor],
    // };

    // NEW FACTOR TYPES
    let socialRelationshipsFactorType = {
      factorTypeId: "457cbe5a-b256-11ed-afa1-0242ac120002",
      factorList: [
        restFactor,
        transitFactor,
        culturalRespectFactor,
        aculturationFactor,
        displacementFactor,
      ],
    };

    let personalSecurityFactorType = {
      factorTypeId: "0de5bb22-be4f-432b-a0e7-b2f37c2bac3b",
      factorList: [
        socialRespectFactor,
        securityFactor,
        drugAddictionFactor,
        prostitutionFactor,
        beggingFactor,
      ],
    };

    let comsogonyTraditionFactorType = {
      factorTypeId: "855d1f7b-8e33-4997-b2e2-51a11a39a3b1",
      factorList: [
        culturalModificationFactor,
        sacredRespectFactor,
        rejectMockFactor,
        traditionalUseFactor,
        linguistincLossFactor,
      ],
    };

    let participationFactorType = {
      factorTypeId: "2c3bf929-e9a8-4edf-b768-ddbc8d447ccf",
      factorList: [
        commodificationFactor,
        acceptanceFactor,
        benefitsFactor,
        pricesFactor,
        touristConductFactor,
      ],
    };

    let maturity = {
      factorTypeList: [
        // qualityOfLifeFactorType,
        // wellnessSustainabilityFactoryType,
        // economicSituationFactoryType,
        // touristRelationshipFactoryType,
        socialRelationshipsFactorType,
        personalSecurityFactorType,
        comsogonyTraditionFactorType,
        participationFactorType,
      ],
    };
    host.maturity = maturity;

    if (data.hostTourismSectorParticipation) {
      host.hostTourismSectorList = data.hostTourismSectorParticipation.map(
        (htsp) => {
          return {
            tourismSectorId: htsp,
          };
        }
      );
    }

    console.log(host);

    postHost(host);

    // console.log(data);
  };

  const postHost = (host) => {
    axios.post(process.env.REACT_APP_BASE_HOST_URL, host).then((res) => {
      console.log(res);
      alert("Impactos sobre activos cultural registrado!");
      refreshPage();
    });
  };

  function getBackgroudOpacity(opacity, rgb) {
    var bg = "rgba(" + [rgb, opacity].join(",") + ")";
    // alert(bg,rgb);
    return bg;
  }

  // if (isFetched) {
  //   console.log(assets);
  // }
  // console.log(initialAssetList);
  console.log(assets);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "7vh", background: "#ffffff" }}>
        <Header></Header>
      </Box>
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
            {/* <Box sx={{ background: "#08a45c", paddingBottom: "2%" }}>
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
            </Box> */}

            <Box sx={{ background: "#08a45c", paddingBottom: "2%" }}>
              <Container>
                <Box paddingTop={"3%"}>
                  <Title
                    textAlign="center"
                    shadow="bottom-left"
                    color="#ffffff"
                    size="medium"
                    titleName="Relaciones Sociales"
                  />
                </Box>
                <Box paddingTop={"3%"}>
                  <Box
                    sx={{ background: "#ffffff", height: "1vh", width: "100%" }}
                  ></Box>
                </Box>
                <Box paddingTop={"3%"}>
                  {socialRelationshipQuestions.map((question) => {
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
                    titleName="Seguridad Personal"
                  />
                </Box>
                <Box paddingTop={"3%"}>
                  <Box
                    sx={{ background: "#ffffff", height: "1vh", width: "100%" }}
                  ></Box>
                </Box>
                <Box paddingTop={"3%"}>
                  {personalSecurityQuestions.map((question) => {
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
                    titleName="Cosmogonía y tradición"
                  />
                </Box>
                <Box paddingTop={"3%"}>
                  <Box
                    sx={{ background: "#ffffff", height: "1vh", width: "100%" }}
                  ></Box>
                </Box>
                <Box paddingTop={"3%"}>
                  {cosmogonyTraditionQuestions.map((question) => {
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
                    titleName="Participación"
                  />
                </Box>
                <Box paddingTop={"3%"}>
                  <Box
                    sx={{ background: "#ffffff", height: "1vh", width: "100%" }}
                  ></Box>
                </Box>
                <Box paddingTop={"3%"}>
                  {participationQuestions.map((question) => {
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

              {assets.length > 0 && (
                <Box>
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
                      sx={{
                        background: "#085c2c",
                        height: "0.5vh",
                        width: "100%",
                      }}
                    ></Box>
                  </Box>
                  <Box paddingTop={"3%"}>
                    {hostRegionCulturalAssets.map((question) => {
                      return getQuestion(question);
                    })}
                  </Box>
                </Box>
              )}
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
                    titleName="Registrar mis respuestas"
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
