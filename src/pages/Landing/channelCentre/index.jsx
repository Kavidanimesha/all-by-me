import { Grid, Typography } from '@mui/material'
import React from 'react'
import DrProfileCards from '@/components/cards/DrProfileCards'

function index() {
  return (
    <>
    <Grid item xs={12} align='center'>
      <Typography variant='h4'> Doctor Profiles </Typography>
    </Grid>

    {/* Doctor Cards */}
    <Grid container sx={{margin: 5}} display={'flex'} flexDirection={'row'} spacing={2}>
      <DrProfileCards />
      <DrProfileCards />
      <DrProfileCards />
    </Grid>
    </>
  )
}

export default index
