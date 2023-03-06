import React from "react";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea, Radar } from "react-chartjs-2";
import Title from "../../components/Fonts/Title";
import Paragraph from "../Fonts/Paragraph";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  ArcElement,
  Legend
);

const cardBoxSx = {
  // margin: "1%",
  width: "30%",
  background: "#ffffff",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  flexWrap: "wrap",
};

const getTotalScores = (factorTypeList) => {
  return factorTypeList
    .map((factorType) => {
      return factorType.factorList
        .map((factor) => {
          return (
            factor.characteristicList
              .map((cl) =>
                isNaN(+cl.averageCharacteristicScore)
                  ? 0
                  : +cl.averageCharacteristicScore
              )
              .reduce((partialSum, a) => partialSum + a, 0) /
            factor.characteristicList.length
          );
        })
        .filter((value) => {
          return !Number.isNaN(value);
        });
    })
    .flat(1);
};

const getLabels = (factorTypeList) => {
  return factorTypeList
    .map((ft) =>
      ft.factorList.map((f) => {
        return getActualName(f.name);
      })
    )
    .flat(1)
    .filter(
      (o) =>
        !(
          o === "COSMOGONY AND TRADITION" ||
          o === "ACCEPTANCE AND PARTICIPATION"
        )
    );
};


const getActualName = (str) => {
  switch (str) {
    case "SOCIAL RELATIONSHIPS":
      return "Relaciones Sociales";
    case "PERSONAL SECURITY":
      return "Seguridad Personal";
    case "COSMOGONY TRADITION":
      return "Cosmogonía y tradición";
    case "PARTICIPATION":
      return "Participación";
    default:
      return str;
  }
};

const options = {
  scales: {
    r: {
      min: 0,
      max: 3,
      beginAtZero: true,
    },
  },
};

const RadarChart = (props) => {
  if (props.cummulative) {
    const a = getTotalScores(props.data);
    const numParts = 4;
    const partSize = Math.ceil(a.length / numParts);

    const parts = [];

    for (let i = 0; i < numParts; i++) {
      const start = i * partSize;
      const end = start + partSize;
      parts.push(a.slice(start, end));
    }

    const aData = parts.map((p) => {
      return p.map((num) => num).reduce((a, b) => a + b, 0) / 5;
    });
    let data = {
      labels: props.labels,
      datasets: [
        {
          label: "Impacto Acumulado",
          data: aData,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(175, 192, 192)",
            "rgb(85, 92, 192)",
            "rgb(45, 12, 192)",
            "rgb(220, 19, 192)",
            "rgb(201, 153, 207)",
            "rgb(54, 162, 235)",
          ],
        },
      ],
    };

    return (
      <Box sx={cardBoxSx}>
        <Box sx={{ display: "block", width: "100%" }}>
          <PolarArea data={data}></PolarArea>
        </Box>
      </Box>
    );
  }

  const factor = props.data;

  let data = {
    labels: factor.characteristicList.map((characteristic, index) => {
      return "Criterio " + (index + 1);
    }),
    datasets: [
      {
        label: "Respuesta promedio",
        data: factor.characteristicList.map((characteristic) => {
          return characteristic.averageCharacteristicScore;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const getName = (name) => {
    switch (name) {
      case "SOCIAL RELATIONSHIP":
        return "Relaciones sociales";
      case "PERSONAL SECURITY":
        return "Seguridad personal";
      case "GOOD HEALTH":
        return "Buena Salud";
      case "COSMOGONY AND TRADITION":
        return "Cosmogonía y tradición";
      case "ENVIRONMENTAL SECURITY":
        return "Seguridad Ambiental";
      case "ACCESS TO MATERIAL ASSETS":
        return "Acceso a bienes materiales";
      case "ACCEPTANCE AND PARTICIPATION":
        return "Aceptación y participación";
      case "RELATIONSHIP WITH TOURIST":
        return "Relación con el turista";
      case "COMMUNITY SHOULD DEFINE":
        return "Los miembros de la comunidad deberian participar en definir";
      case "REST":
        return "Descanso";
      case "TRANSIT":
        return "Tránsito";
      case "CULTURAL RESPECT":
        return "Respeto Cultural";
      case "ACCULTURATION":
        return "Aculturación";
      case "DISPLACEMENT":
        return "Desplazamiento";
      case "SOCIAL RESPECT":
        return "Resentimiento Social";
      case "SECURITY":
        return "Seguridad";
      case "DRUG ADDICTION":
        return "Drogadicción";
      case "PROSTITUTION":
        return "Prostitución";
      case "BEGGING":
        return "Mendicidad";
      case "CULTURAL MODIFICATION":
        return "Modificación Cultural";
      case "SACRED RESPECT":
        return "Respeto Sagrado";
      case "REJECT MOCK":
        return "Burla o rechazo";
      case "TRADITIONAL USE":
        return "Usos Tradicionales";
      case "LINGUISTIC LOSS":
        return "Pérdida lingüística";
      case "COMMODIFICATION":
        return "Mercantilización";
      case "ACCEPTANCE":
        return "Aceptación";
      case "BENEFIT":
        return "Beneficio";
      case "PRICES":
        return "Precios";
      case "TOURIST CONDUCT":
        return "Conducta del turista";
      default:
        return "Impacto";
    }
  };
  if (factor.characteristicList.length < 2) {
    // alert("aaa")
    return "";
  }
  return (
    <Box sx={cardBoxSx}>
      <Title
        size="1.5rem"
        color="#B54815"
        textAlign="center"
        titleName={getName(factor.name)}
      ></Title>
      <br></br>

      <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        <Radar data={data} options={options} />
      </Box>
      <br></br>
      <Title
        size="1.5rem"
        color="#B54815"
        textAlign="center"
        titleName="Criterios"
      ></Title>
      <ol>
        {factor.characteristicList.map((characteristic, index) => {
          return (
            <li>
              <Paragraph content={characteristic.description}></Paragraph>
            </li>
          );
        })}
      </ol>
    </Box>
  );
};

export default RadarChart;
