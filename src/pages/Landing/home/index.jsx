import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid, MenuItem } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from "next/image"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { NoEncryption } from "@mui/icons-material";


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'auto',
  height: '400px'
}
const channelCentre = [
  {
    url: '/images/hospital/hospital1.png'
  },
  {
    url: '/images/hospital/hospital2.png'
  },
  {
    url: '/images/hospital/hospital3.png'
  },
];

const pharmacy = [
  {
    url: '/images/pharmacy/pharmacy1.png'
  },
  {
    url: '/images/pharmacy/pharmacy2.png'
  },
  {
    url: '/images/pharmacy/pharmacy3.png'
  },
];

function Landing() {
  return (
    <>
    <Grid sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <MenuItem>
              <Typography variant="h4" > All-By-Me </Typography>
            </MenuItem>
          </Typography>
          <Button color="inherit"> <AccountCircleIcon fontSize='large' /> </Button>
        </Toolbar>
      </AppBar>
    </Grid>

    <Grid sx={{ flexGrow: 1 }} marginBottom={3}>
    <AppBar position="static">
      <Toolbar style={{backgroundColor: 'white'}}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button style={{color:'black'}}>Home</Button>
        <Button style={{color:'black'}}>About</Button>
        <Button style={{color:'black'}}>Contact</Button>
        <Button style={{color:'black'}}>Blog</Button>
      </Toolbar>
    </AppBar>
    </Grid>

    <Grid item xs={12} align='center' marginBottom={3}>
      <Typography variant="h5"> Top Channel Centre's of the Week </Typography>
    </Grid>
    <Grid item border={2} borderColor='blue' marginLeft={2} marginRight={2} marginBottom={3}>
      <div className="slide-container" >
        <Slide>
         {channelCentre.map((channelCentre, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${channelCentre.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </Grid>     
      <Grid item xs={12} align='center' marginBottom={3}>
      <Typography variant="h5"> Top Channel Pharmacies of the Week </Typography>
    </Grid>
    <Grid item border={2} borderColor='blue' marginLeft={2} marginRight={2} marginBottom={3}>
      <div className="slide-container">
        <Slide>
         {pharmacy.map((pharmacy, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${pharmacy.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </Grid>

      <Grid item xs={12} align='center' marginBottom={3}>
        <Typography variant='h5' color='primary'> Visit Our Channel Centre's </Typography>
      </Grid>

      <Grid container display={'flex'} flexDirection={'row'} spacing={2} justifyContent='center'>
          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.insider.com/5cf9850c11e20502f21b6ba4?width=1136&format=jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hopkins Hospital
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained">
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://hcdemo.mysmartjobboard.com/files/userfiles/University%20of%20Kansas%20Hospital.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Royal Hospital
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained" marginBottom={2}>
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://patch.com/img/cdn20/users/23367618/20200121/085423/styles/patch_image/public/cardiac-gci-right-side-view-229-hdr___21085150006.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Child Care Hospital
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained">
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://metlspan.com/wp-content/uploads/2022/11/swedish_hospital_1-1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Liberty Hospital
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained">
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      
          <Grid item xs={12} align='center' marginBottom={3} marginTop={3}>
            <Typography variant='h5' color='primary'> Visit Our Channel Pharmacies </Typography>
          </Grid>

          <Grid container display={'flex'} flexDirection={'row'} spacing={2} justifyContent='center'>
          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://toplist.info/images/800px/boots-pharmacy-784736.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Beauty Pharmacy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained">
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/ebe/ebe9aae17e1734cc4d26e2fa200b758d.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Care Pharmacy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained" marginBottom={2}>
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://content.jdmagicbox.com/comp/mumbai/e5/022pxx22.xx22.181126203515.r6e5/catalogue/unicare-pharmacy-and-general-stores-mumbai-087pbqnmsk.jpg?clr="
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    UniCare Pharmacy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained">
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image=" https://content.jdmagicbox.com/comp/mumbai/g1/022pxx22.xx22.140823143515.p4g1/catalogue/mohan-medicos-mumbai-1nfkudapyq.jpg?clr="
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mohan Pharmacy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  US News compiles a list of the top 20 hospitals in the country.
                  The hospitals are ranked based on their performance in certain specialties and procedures. 
                  Top hospitals include the Mayo Clinic, Massachusetts General Hospital, and Duke University Hospital. You can see the full list below.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid item xs={12} align='center' marginBottom={2}>
                <Button size="small" color="primary" variant="contained">
                  View
                </Button>
              </Grid>
            </Card>
          </Grid>
        </Grid>

          
      
</>  
    
  )
}

export default Landing