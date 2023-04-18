import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid, MenuItem, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextFieldWrapper from "@/components/formsUI/textfieldValidation/TextFieldWrapper";
import { Formik , Form } from 'formik'
import PharmacyCards from "@/components/cards/PharmacyCards";
import HospitalCards from "@/components/cards/HospitalCards";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "auto",
  height: "400px",
};
const channelCentre = [
  {
    url: "/images/hospital/hospital1.png",
  },
  {
    url: "/images/hospital/hospital2.png",
  },
  {
    url: "/images/hospital/hospital3.png",
  },
];

const pharmacy = [
  {
    url: "/images/pharmacy/pharmacy1.png",
  },
  {
    url: "/images/pharmacy/pharmacy2.png",
  },
  {
    url: "/images/pharmacy/pharmacy3.png",
  },
];


function Landing() {

  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true
  });
 
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <>
      <Grid sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <MenuItem>
                <Typography variant="h4"> All-By-Me </Typography>
              </MenuItem>
            </Typography>
            <Button color="inherit">
              {" "}
              <AccountCircleIcon fontSize="large" />{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid sx={{ flexGrow: 1 }} marginBottom={3}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "white" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button style={{ color: "black" }}>Home</Button>
            <Button style={{ color: "black" }}>About</Button>
            <Button style={{ color: "black" }}>Contact</Button>
            <Button style={{ color: "black" }}>Blog</Button>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid item xs={12} align="center" marginBottom={3}>
        <Typography variant="h5"> Top Channel Centre's of the Week </Typography>
      </Grid>
      <Grid
        item
        border={2}
        borderColor="blue"
        marginLeft={2}
        marginRight={2}
        marginBottom={3}
      >
        <div className="slide-container">
          <Slide>
            {channelCentre.map((channelCentre, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${channelCentre.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </Grid>
      <Grid item xs={12} align="center" marginBottom={3}>
        <Typography variant="h5">
          {" "}
          Top Channel Pharmacies of the Week{" "}
        </Typography>
      </Grid>
      <Grid
        item
        border={2}
        borderColor="blue"
        marginLeft={2}
        marginRight={2}
        marginBottom={3}
      >
        <div className="slide-container">
          <Slide>
            {pharmacy.map((pharmacy, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${pharmacy.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </Grid>

      {/* <Grid item xs={12} align='center' marginBottom={3}>
        <Typography variant='h5' color='primary'> Visit Our Channel Centre's </Typography>
      </Grid> */}

      <Grid item xs={12} align="center" marginBottom={3} marginTop={3}>
        <Typography variant="h5" color="primary">
          Visit Our Pharmacies
        </Typography>
      </Grid>

      {/* pharmacy Cards */}
      <PharmacyCards />

      <Grid item xs={12} align="center" marginBottom={3} marginTop={3}>
        <Typography variant="h5" color="primary">
          Visit Our Channel Centre's
        </Typography>
      </Grid>

      {/* Hospital Cards */}
      <HospitalCards />

      <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>

    </>
  );
}

export default Landing;
