import React, { useState } from "react";
import { Box } from "@mui/material";
import RadarChart from "../Charts/RadarChart";
import "./ImpactTab.css";

const ImpactTab = (props) => {
    
  const tabss = props.data.map((ft, index) => {
    return {
      id: index,
      tabTitle: ft.name,
      content:<Box sx = {{display : "flex", justifyContent : "center"}}>{ (
        
          ft.factorList.map((factor) => {
            {
              return <RadarChart data={factor}></RadarChart>;
            }
          })
      )
        }</Box>
    };
  });


  const tass = [
    ...tabss,
    {
      id: tabss.length,
      tabTitle: "ACUMULATIVO",
      title: "Impacto General",
      content: (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {<RadarChart cummulative data={props.data}></RadarChart>}
        </Box>
      ),
    },
  ];



  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content: "Contenido de tab 4.",
    },
  ];

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
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p className="title">{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactTab;
