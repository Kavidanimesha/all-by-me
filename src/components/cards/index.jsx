import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function index({imageSrc, altName, name, description}) {
  return (
    <>
       <Grid container display={'flex'} flexDirection={'row'} spacing={2} justifyContent='center'>
          <Grid item>
            <Card  sx={{ maxWidth: 345 , border: '2px solid black' , borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={imageSrc}
                  alt={altName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {description}
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

export default index
