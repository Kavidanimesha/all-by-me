import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import { Button, Grid, TextField, Typography } from '@mui/material'
import * as yup from 'yup'
import { Formik , Form } from 'formik'
import React from 'react'
import { Butterfly_Kids } from '@next/font/google'

function Advertisements() {

  const formData = {
    headline:'',
    description: '',
    image: ''
  }

  const validateionSchema = yup.object().shape({
    headline: yup.string().required("Required"),
    description: yup.string().required("Required")
  })

  return (
    <Grid container>
      <Grid item xs={12} align='center'>
        <Typography variant='h4'> Create New Advertisements </Typography>
      </Grid>

      <Grid container>
        <Formik
          initialValues={{...formData}}
          validationSchema={validateionSchema}
          onSubmit= {(values , reset)=> {
              console.log(values);
              reset.resetForm();
              alert("Saved Successfully");
          }}
        >
          <Grid item xs={12}>
            <Form>
              <Grid item xs={12} sx={{marginBottom:3}}> 
                <TextFieldWrapper name='headline' label='Headline' /> 
              </Grid>
              <Grid item xs={12} sx={{marginBottom:3}}> 
                <TextFieldWrapper name='description' label='Short Description' />
              </Grid>
              <Grid item xs={12} sx={{marginBottom:3}}> 
                <TextField type='submit' name='image' />
              </Grid>            
            <Grid item xs={12} align='center'>
              <Button type='submit' variant='contained' color='success'> Save </Button>
            </Grid> 
            </Form>
          </Grid>
        </Formik>
        <Grid container sx={{marginTop:3}}>
          <Grid item xs={12} align='center'>
            <Typography variant='h5'> Preview: </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Advertisements
