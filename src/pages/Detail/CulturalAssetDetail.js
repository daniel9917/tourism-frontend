import React, { useRef, useState } from "react";
import { Box, ThemeProvider, createTheme, Button, Grid } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import Header from "../Header/Header";
import Paragraph from "../../components/Fonts/Paragraph";
import Title from "../../components/Fonts/Title";
import { Container } from "@mui/system";
import Carousel from "nuka-carousel/lib/carousel";
import culturalAsset from "../../test/CulturalAsset.json";
import CharacteristicGroup from "../../components/CharactheristicGroup/CharectiristicGroup";
import urls from "../../urls.json";
import ImpactTab from "../../components/Tab/ImpactTab";
import { useParams } from "react-router";
import { useEffect } from "react";
import BarChart from "../../components/Charts/BarChart";

const carouselImgSx = {
  maxWidth: "100%",
  maxHeight: "100%",
};

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const barBoxSx = {
  background: "#D9D9D9",
  "border-radius": "20px",
  padding: "20px",
};

const imgUrl =
  "https://wallpapercrafter.com/sizes/1920x1080/142984-Colombia-mountains-clouds-sunlight-forest-landscape-trees.jpg";

const imgBox = {
  backgroundImage: "url(" + imgUrl + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const mainBoxSx = {
  background: "#a2e4f3",
  // backgroundImage: "url(" + imgUrl + ")",
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const contentBoxSx = {
  minHeight: "100vh ",
  width: "100%",
  background: "#CCF5AB",
};

const otherNamesBoxSx = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

function CulturalAssetDetail () {
  const { assetId } = useParams();

  const [assetDetaill, setAssetDetaill] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  const ref = useRef(null);
  const onClickScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function fetchData() {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_ASSET_URL}/${assetId}`
    );
    // const response = await fetch(`${urls.baseAssetURL}/${assetId}`);
    response.json().then((response) => {
      setAssetDetaill(response);
      setIsFetched(true);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isFetched) {
    console.log(assetDetaill);
    const dataDTOList = assetDetaill.dataDTOList;
    const maturityDTO = assetDetaill.maturityDTO.values[0];
    const typologyDTO = {
      objectName: "typology",
      values: assetDetaill.typologyDTO.values[0],
    };
    const assetCriteriaList = {
      objectName: "criteria",
      values: assetDetaill.assetCriteriaList.slice(
        0,
        assetDetaill.assetCriteriaList.length - 1
      ),
    };

    return (
      <ThemeProvider theme={theme}>
        <Box sx={mainBoxSx}>
          <Box paddingTop={"1%"}>
            <Header></Header>
          </Box>
          <Container sx={{ paddingTop: "5%" }}>
            <Title
              size="extra"
              shadow="lighter-gray"
              color="#025928"
              textAlign="center"
              titleName={assetDetaill.name}
            ></Title>
            <Box sx={otherNamesBoxSx}>
              <Paragraph
                bold
                color="#025928"
                size="1.3rem"
                content="Otros Nombres: "
              ></Paragraph>
              <Paragraph
                fontStyle="italic"
                shadow="2px 2px 6px black"
                color="#025928"
                size="1.3rem"
                content={
                  assetDetaill.alternateNames ? assetDetaill.alternateNames : ""
                }
              ></Paragraph>
            </Box>

            {/* Gallery Caroussel */}
            <Box sx={{ paddingTop: "5%" }} height="70%">
              <Carousel
                cellSpacing={10}
                wrapAround={true}
                slidesToShow={2}
                cellAlign="center"
              >
                {assetDetaill.imageList.map((img) => {
                  return (
                    <img
                      alt={img.assetId + " " + img.id}
                      style={carouselImgSx}
                      src={img.imageBlob}
                    />
                  );
                })}
              </Carousel>
            </Box>
            {/* Scroll button */}
            <Box
              sx={{ display: "flex", padding: "5%", justifyContent: "center" }}
            >
              <Button
                color="success"
                sx={{
                  background: "#08a45c",
                  minWidth: "50%",
                  borderRadius: "20px",
                }}
                onClick={onClickScroll}
              >
                <ExpandMoreRounded fontSize="large" sx={{ color: "#ffffff" }} />
              </Button>
            </Box>
          </Container>
        </Box>
        {/** Asset detail */}
        <Box ref={ref} sx={contentBoxSx}>
          <Title
            padding="3%"
            size="extra"
            shadow="lighter-gray"
            color="#025928"
            textAlign="center"
            titleName="Descripción del activo"
          ></Title>
          {/* Asset characteristics */}
          <Container sx={{ paddingTop: "2%" }}>
            <CharacteristicGroup data={dataDTOList}></CharacteristicGroup>
            <Container sx={barBoxSx}>
              <Title
                padding="3%"
                size="big"
                shadow="lighter-gray"
                color="#f9f9f9"
                textAlign="center"
                titleName="Tipolología del activo"
              ></Title>
              <BarChart data={typologyDTO}></BarChart>
            </Container>
            <br></br>
            <br></br>
            <Container sx={barBoxSx}>
              <Title
                padding="3%"
                size="big"
                shadow="lighter-gray"
                color="#f9f9f9"
                textAlign="center"
                titleName="Criterios de calidad"
              ></Title>
              <BarChart data={assetCriteriaList}></BarChart>
            </Container>
          </Container>
          <br></br>
          <br></br>
          {/* Asset Impact  */}
          <Box>
            <Title
              padding="3%"
              size="extra"
              shadow="2px 5px 7px grey"
              color="#e35934"
              textAlign="center"
              titleName="Impactos sobre la comunidad del destino"
            ></Title>
          </Box>

          <Box sx={{ background: "#B54815" }}>
            <ImpactTab data={maturityDTO.factorTypeList.filter(ft => !(ft.name === "BEHAVIOUR LIKE HOST"))}></ImpactTab>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
};

export default React.memo(CulturalAssetDetail);
