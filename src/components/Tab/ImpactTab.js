import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import RadarChart from "../Charts/RadarChart";
import "./ImpactTab.css";

const ImpactTab = (props) => {
    
  const tabss = props.data.map((ft, index) => {
    return {
      id: index,
      tabTitle: ft.name,
      content:<Box sx = {{display : "flex", justifyContent : "center", flexWrap : "wrap"  }}>{ (
        
          ft.factorList.map((factor, index) => {
            {
              return <RadarChart sx = {{padding : "5px"}} key = {index} data={factor}></RadarChart>;
            }
          })
      )
        }</Box>
    };
  });

  const labels = ["Relaciones Sociales","Seguridad Personal","Cosmogonía y tradición","Participación"];


  const tass = [
    ...tabss,
    {
      id: tabss.length,
      tabTitle: "ACUMULATIVO",
      title: "Impacto General",
      content: (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {<RadarChart cummulative data={props.data} labels = {labels}></RadarChart>}
        </Box>
      ),
    },
  ];



  const [currentTab, setCurrentTab] = useState("0");
  

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container">
      <div className="tabs">
        {tass.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            style = {{
                "font-size": "x-large",
                "font-weight": "bold",
                color: "#ffffff"
            }}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tass.map((tab, i) => (
          <Grid container>
            {currentTab === `${tab.id}` && (
              <Grid item key={i} xs = {12}>
                <p className="title">{tab.title}</p>
                {tab.content}
              </Grid>
            )}
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default ImpactTab;
