import React from 'react'
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function HospitalCards() {

    const [openHospital, setOpenHospital] = React.useState(false);

    const handleClickOpenHospital = () => {
      setOpenHospital(true);
    };
  
    const handleCloseHospital = () => {
      setOpenHospital(false);
    };
  

  return (
    <>
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
    </>
  )
}

export default HospitalCards
