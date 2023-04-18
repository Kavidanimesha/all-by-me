import HospitalCards from "@/components/cards/HospitalCards";
import PharmacyCard from "@/components/cards/PharmacyCards";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button, Grid, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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

function Landing({ cards, channels }) {
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
      <Grid
        container
        sx={{ margin: 5 }}
        display={"flex"}
        flexDirection={"row"}
        spacing={2}
      >
        {cards?.map((card) => (
          <PharmacyCard
            key={card._id}
            name={card.name}
            description={card.description}
            image={card.image}
          />
        ))}
      </Grid>

      <Grid item xs={12} align="center" marginBottom={3} marginTop={3}>
        <Typography variant="h5" color="primary">
          Visit Our Channel Centre's
        </Typography>
      </Grid>

      {/* Hospital Cards */}
      <Grid
        container
        sx={{ margin: 5 }}
        display={"flex"}
        flexDirection={"row"}
        spacing={2}
      >
        {channels?.map((card) => (
          <HospitalCards
            key={card._id}
            name={card.name}
            description={card.description}
            image={card.image}
          />
        ))}
      </Grid>
    </>
  );
}

export default Landing;

export async function getStaticProps() {
  const cardsResponse = await fetch("http://localhost:5050/pharmacy_card", {
    method: "GET",
    options: {
      "Access-Control-Allow-Credentials": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    },
  });
  const pharmacy_cards = await cardsResponse.json();

  const channelsResponse = await fetch("http://localhost:5050/channel", {
    method: "GET",
    options: {
      "Access-Control-Allow-Credentials": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    },
  });

  const channels = await channelsResponse.json();
  return {
    props: {
      cards: pharmacy_cards,
      channels,
    },
  };
}
