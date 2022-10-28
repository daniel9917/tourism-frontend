import React from "react";
import { ThemeProvider, createTheme, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import { Grid, Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(""),
  },
});

function getBackgroudOpacity(opacity, rgb) {
  var bg = "rgba(" + [rgb, opacity].join(",") + ")";
  // alert(bg,rgb);
  return bg;
}

const MultiValuedQuestion = (props) => {
  const mockedElement = {
    name: "socialRelationsips",
    question: "Relaciones Sociales",
    type: "dimensionCriteria",
    options: [
      {
        name: "sr1",
        value:
          "Los turistas faltan el respeto a la comunidad y a su cultura, no se portan bien.",
      },
      {
        name: "sr2",
        value: "Los visitantes usan palabras ofensivas o groseras.",
      },
      {
        name: "sr3",
        value:
          "Los visitantes son sucios en su persona o dejan basura a su alrededor",
      },
      {
        name: "sr4",
        value:
          "Los comportamientos anteriores los hacen habitantes aun sin impacto del turista",
      },
      {
        name: "sr5",
        value: "No se puede descansar por el ruido que hacen los turistas",
      },
    ],
    required: true,
    hex: "#e0dcdc",
    rgb: [224, 220, 220],
    color: "darkgreen",
  };

  const {register, getValues} = useForm([]);

  const question = props.question;

  const handleClick = (event,) => {
    // event.preventDefault();
    console.log(getValues());
    // props.onAddDimension(event.target.value)
    console.log(event.target.value);
  };

  return <ThemeProvider>
    <Grid container spacing={0} minWidth={"100%"} paddingTop={"2%"} >
        <Grid item xs={12} bgcolor={"#dcdcdc"} borderRadius = {"30px"} sx = {!props.opacity ? null : {background : getBackgroudOpacity(props.opacity, props.rgb)}} >
          <Box alignContent={"center"} paddingRight={"5%"} paddingLeft={"5%"} borderRadius = {"50%"}>
          <Grid container direction={"row"}>
              <Grid sx={{ paddingTop: "2%" }} item xs={12}>
                <Typography color={question.color} fontWeight={"bolder"}>
                  {" "}
                  {question.question}{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                {question.options.map(option => {
                    return (
                    <form onChange={handleClick}>

                    <Grid container paddingTop={"2%"} spacing={1} minWidth = "100%" alignItems={"center"}>
                        <Grid item xs={4}>
                            <Typography>{option.value}</Typography>
                        </Grid>
                        <Grid item xs = {8}>
                            <RadioGroup onChange={handleClick}  {...register(option.name, { required: true})} name={question.name}>
                              <Grid container justifyContent={"space-around"} alignContent="center">
                                {question.criteria.map((c, i) => {
                                  return (<FormControlLabel value={c} control = {<Radio value={i} color="success"/>}/>);
                                })}
                              
                              {/* <FormControlLabel value={c} control = {<Radio value={4}/>} />
                              <FormControlLabel value={c} control = {<Radio value={3}/>} />
                              <FormControlLabel value={c} control = {<Radio value={2}/>} />
                              <FormControlLabel value={c} control = {<Radio value={1}/>} /> */}
                              </Grid>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    </form>
                    );
                })}
                
                {/* <RadioGroup
                  name="radioTest"
                  {...register(question.name, { required: true })}
                >
                  {question.options.map((option) => {
                    return (
                      <FormControlLabel
                        value={option + ""}
                        control={<Radio color="success" />}
                        label={option}
                      />
                    );
                  })}
                </RadioGroup> */}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
  </ThemeProvider>;
};

export default MultiValuedQuestion;
