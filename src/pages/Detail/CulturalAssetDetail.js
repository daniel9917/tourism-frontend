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

const carouselImgSx = {
  maxWidth: "100%",
  maxHeight: "100%",
};

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const imgUrl =
  "https://wallpapercrafter.com/sizes/1920x1080/142984-Colombia-mountains-clouds-sunlight-forest-landscape-trees.jpg";

const imgBox = {
  backgroundImage: "url(" + imgUrl + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const mainBoxSx = {
  //   background: "#ffffff",
  minHeight: "100vh ",
  backgroundImage: "url(" + imgUrl + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const contentBoxSx = {
  minHeight: "100vh ",
  width: "100%",
  background: "#ffffff",
};

const otherNamesBoxSx = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const CulturalAssetDetail = () => {
  const { assetId } = useParams();

  const [assetDetaill, setAssetDetaill] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  const ref = useRef(null);
    const onClickScroll = () => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };

  async function fetchData() {
    const response = await fetch(`${process.env.REACT_APP_BASE_ASSET_URL}/${assetId}`);
    // const response = await fetch(`${urls.baseAssetURL}/${assetId}`);
    response.json().then((response) => {
      setAssetDetaill(response);
      setIsFetched(true);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("dynamic detail");
  console.log(assetDetaill);

  if (isFetched) {
    
    const dataDTOList = assetDetaill.dataDTOList;
    const maturityDTO = assetDetaill.maturityDTO.values[0];

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
            <Box sx={{ paddingTop: "5%" }}>
              <Paragraph
                size="normal"
                color="#194A47"
                content={assetDetaill.description}
                textAlign="center"
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
        <Box ref={ref} sx={{ contentBoxSx }}>
          <Title
            padding="3%"
            size="extra"
            shadow="lighter-gray"
            color="#025928"
            textAlign="center"
            titleName="Descripcion del activo"
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
              content="Otros, Nombres, Diferentes"
            ></Paragraph>
          </Box>
          {/* Asset characteristics */}
          <Container sx={{ paddingTop: "2%" }}>
            <CharacteristicGroup data={dataDTOList}></CharacteristicGroup>
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
              titleName="Impactos sobre la comunidades"
            ></Title>
          </Box>

          <Box sx={{ background: "#B54815" }}>
            <ImpactTab data={maturityDTO.factorTypeList}></ImpactTab>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
};

export default CulturalAssetDetail;
