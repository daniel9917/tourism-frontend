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
import { PolarArea, Radar, Bar } from "react-chartjs-2";
import Title from "../../components/Fonts/Title";
import Paragraph from "../Fonts/Paragraph";
import axios from "axios";
import "chart.js/auto";

const formBuilderAPI__URL =
  process.env.REACT_APP_BASE_ASSET_URL + "/form-builder";

const getCriteria = axios.get(`${formBuilderAPI__URL}/Criteria`);
const criterias = await getCriteria;

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  ArcElement,
  Legend
);

const getTypologyData = (obj) => {
  return obj.map((ob) =>
    ob.values
      .map((o) => o.values[0])
      .reduce((partialSum, a) => partialSum + a, 0)
  );
};

const getLabels = (obj) => {
  return obj.map((o) => getActualLabel(o.objectName));
};

const getActualLabel = (str) => {
  switch (str) {
    case "Nature" :
      return "Total Naturaleza";
    case "DEPORTES ACUÁTICOS":
      return "Total Deportes Acuáticos";
    case "DEPORTES AVENTURA" :
      return "Total Deportes Aventura";      
    case "recorridos_turisticos" :
      return "Total Oferta Recorridos Turísticos";  
    case "folklore" :
      return "Total Oferta Folklore";
    case "otros_servicios" :
      return "Total Otros Servicios";
    default :
      return "Criterio";
  }
}

const getCriteriaData = (obj) => {
  //   return obj.map((ob) =>
  //     critList.filter((c) => c.id === ob.criteriaId).map((c) => c.name)
  //   );
  return obj.map((o) => o.score);
};

const getCriteriaLabels = (obj, critList) => {
  return obj
    .map((ob) => ob.criteriaId)
    .map((id) => critList.filter((c) => c.id === id))
    .map((r) => r[0].name);
};

const getData = (type, data) => {
  switch (type) {
    case "typology":
      return getTypologyData(data);
    case "criteria":
      return getCriteriaData(data);
    default:
      return getTypologyData(data);
  }
};

const getLabel = (type, data, critList) => {
  switch (type) {
    case "typology":
      return getLabels(data);
    case "criteria":
      return getCriteriaLabels(data, critList);
    default:
      return getLabels(data);
  }
};

const BarChart = (props) => {
  console.log(props.data);

  const critList = criterias.data.values.map((value) => {
    return {
      name: `${value.name}`,
      value: `${value.id}`,
      id: `${value.id}`,
    };
  });

  const labels = getLabel(props.data.objectName, props.data.values, critList);

  const numbers = getData(props.data.objectName, props.data.values);

  console.log(labels);
  console.log(numbers);

  const data = {
    labels: labels,
    datasets: [
      {
        label: props.data.objectName,
        data: numbers,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <Bar data={data}></Bar>
    </Box>
  );
};

export default BarChart;
