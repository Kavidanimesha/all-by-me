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

const deliveryFormData = {
  drug: '',
  dose: '',
  name:'',
  phone: '',
  address: ''
}


function Landing() {

  const [openPharmacy, setOpenPharmacy] = React.useState(false);

  const handleClickOpenPharmacy = () => {
    setOpenPharmacy(true);
  };

  const handleClosePharmacy = () => {
    setOpenPharmacy(false);
  };

  const [openHospital, setOpenHospital] = React.useState(false);

  const handleClickOpenHospital = () => {
    setOpenHospital(true);
  };

  const handleCloseHospital = () => {
    setOpenHospital(false);
  };

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
      <Grid container>
        <Grid item>
          <Card sx={{ maxWidth: 345 , border: 2 , borderColor: 'blue' }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/pharmacy/pharmacy1.png"
                  alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>           
              <Grid container>
                <Grid item xs={12} align='center' marginTop={2} marginBottom={2}>
                  <Button variant="contained" color = 'success' onClick={handleClickOpenPharmacy}>
                    Deliver
                  </Button>
                </Grid>
                <Dialog open={openPharmacy} onClose={handleClosePharmacy}>
                  <Grid container style={{padding: 10}}>
                    <DialogContent>
                      <Typography variant="h4">
                        Delivery Request Form
                      </Typography>
                      <Typography variant="h6" sx={{marginTop: 2 , marginBottom: 2}} color='#7b1fa2'>
                        Delivery Details
                      </Typography>
                      <Formik
                        initialValues={{...deliveryFormData}}
                        onSubmit={(values) => {
                          console.log(values)
                          alert("Saved Successfully")
                        }}
                      >
                        <Form>
                          <Grid container marginTop={1} display={'flex'} flexDirection={'row'} spacing={2} border={1} borderColor='blue' padding={2}>
                            <Grid item xs={6}>
                              <TextFieldWrapper name='drug' label='Drug Name' />
                            </Grid>
                            <Grid item xs={6}>
                              <TextFieldWrapper name='dose' label='Dose' />
                            </Grid>
                            <Grid item display={'flex'} flexDirection={'row'} gap={2}>
                              <Button variant='contained' color='success' > Add+ </Button>
                              <Button variant='contained' color='error'> Remove </Button>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Typography variant="h6" color='#7b1fa2' sx={{marginTop: 2 , marginBottom: 2}}>
                              Personal Details
                            </Typography>
                            <Grid item xs={12} display={'flex'} flexDirection={'column'} gap={1} > 
                              <TextFieldWrapper name='name' label='Name' />
                              <TextFieldWrapper name='phone' label='Phone' />
                              <TextFieldWrapper name='address' label='Address' />
                            </Grid>
                          </Grid>

                          <DialogActions>
                            <Button variant="outlined" color = 'error' onClick={handleClosePharmacy}> Close </Button>
                            <Button variant='outlined' color='success' type="submit" > Send </Button>
                          </DialogActions>
                        </Form>
                      </Formik>
                    </DialogContent>
                  </Grid>
                </Dialog>
              </Grid>           
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} align="center" marginBottom={3} marginTop={3}>
        <Typography variant="h5" color="primary">
          Visit Our Channel Centre's
        </Typography>
      </Grid>

      {/* Hospital Cards */}
      <Grid container>
        <Grid item>
          <Card sx={{ maxWidth: 345 , border: 2 , borderColor: 'blue' }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/hospital/Hospital1.png"
                  alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>           
              <Grid container>
                <Grid item xs={12} align='center' marginTop={2} marginBottom={2}>
                  <Button variant="contained" color = 'success' onClick={handleClickOpenHospital}>
                    Deliver
                  </Button>
                </Grid>
                <Dialog open={openHospital} onClose={handleCloseHospital}>
                  <Grid container style={{padding: 10}}>
                    <DialogContent>
                      <DialogActions>
                        <Button variant="outlined" color = 'error' onClick={handleCloseHospital}> Close </Button>
                        <Button variant='outlined' color='success' type="submit" > Send </Button>
                      </DialogActions>
                    </DialogContent>
                  </Grid>
                </Dialog>
              </Grid>           
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Landing;
