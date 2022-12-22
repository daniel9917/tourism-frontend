import React, { useRef } from "react";
import { Box, ThemeProvider, createTheme, Button, Grid } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import Header from "../Header/Header";
import Paragraph from "../../components/Fonts/Paragraph";
import Title from "../../components/Fonts/Title";
import { Container } from "@mui/system";
import Carousel from "nuka-carousel/lib/carousel";
import culturalAsset from "../../test/CulturalAsset.json";
import CharacteristicGroup from "../../components/CharactheristicGroup/CharectiristicGroup";
import axios from "axios";
import urls from "../../urls.json";
import RadarChart from "../../components/Charts/RadarChart";
import ImpactTab from "../../components/Tab/ImpactTab";

// const culturalAsset = {
//   name: "Nombre del activo cultural",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed egestas. Nulla facilisi cras fermentum odio eu feugiat. Nunc sed velit dignissim sodales ut eu sem integer. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Fermentum et sollicitudin ac orci phasellus egestas. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Eget dolor morbi non arcu risus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. e.",
// };

const getAssetDetail = axios.get(
  `${urls.baseAssetURL}/aad5e6d3-bfee-441c-8bf3-c4c1c18dd0cd`
);
const assetDetail = await getAssetDetail;

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
  const ref = useRef(null);
  const onClickScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const dataDTOList = assetDetail.data.dataDTOList;
  const maturityDTO = assetDetail.data.maturityDTO.values[0];
  // console.log(dataDTOList);

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
            titleName={culturalAsset.name}
          ></Title>
          <Box sx={{ paddingTop: "5%" }}>
            <Paragraph
              size="normal"
              color="#194A47"
              content={culturalAsset.description}
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
              {culturalAsset.imageList.map((img) => {
                return (
                  <img
                    alt={img.assetId + " " + img.id}
                    style={carouselImgSx}
                    src={img.imageBlob}
                  />
                );
              })}
              <img
                style={carouselImgSx}
                alt=""
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <img
                style={carouselImgSx}
                alt=""
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <img
                style={carouselImgSx}
                alt=""
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
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
};

export default CulturalAssetDetail;
