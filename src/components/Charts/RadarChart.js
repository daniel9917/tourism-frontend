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
};


const getTotalScores = (factorTypeList) => {
  return factorTypeList.map((factorType) => {
    return (
      factorType.factorList
        .map((factor) => {
          return (
            factor.characteristicList
              .map((cl) => cl.averageCharacteristicScore)
              .reduce((partialSum, a) => partialSum + a, 0) /
            factor.characteristicList.length
          );
        })
        .filter((value) => {
          return !Number.isNaN(value);
        })
    )
    return "";
  }).flat(1);
};

const getLabels = (factorTypeList) => {
  return factorTypeList.map((ft) => ft.factorList.map( f => {
    return f.name;
  })).flat(1).filter(o => !((o === "COSMOGONY AND TRADITION") || (o === "ACCEPTANCE AND PARTICIPATION")));
};

const RadarChart = (props) => {
  if (props.cummulative) {
    let data = {
      labels: getLabels(props.data),
      datasets: [
        {
          label : "Impacto Acumulado",
          data: getTotalScores(props.data),
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
    return <Box sx = {cardBoxSx}>
      <Box sx={{ display: "block", width: "100%" }}>
        <PolarArea data={data}></PolarArea>
      </Box>
    </Box>;
  }

  const factor = props.data;

  let data = {
    labels: factor.characteristicList.map((characteristic, index) => {
      return "Caracteristica " + (index + 1);
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
        return "Cosmogon??a y tradici??n";
      case "ENVIRONMENTAL SECURITY":
        return "Seguridad Ambiental";
      case "ACCESS TO MATERIAL ASSETS":
        return "Acceso a bienes materiales";
      case "ACCEPTANCE AND PARTICIPATION":
        return "Aceptaci??n y participaci??n";
      case "RELATIONSHIP WITH TOURIST":
        return "Relaci??n con el turista";
      case "COMMUNITY SHOULD DEFINE":
        return "Los miembros de la comunidad deberian participar en definir";
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

      <Box sx={{ display: "block", width: "100%" }}>
        <Radar data={data} options={{}} />
      </Box>
      <br></br>
      <Title
        size="1.5rem"
        color="#B54815"
        textAlign="center"
        titleName="Caracteristicas"
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
