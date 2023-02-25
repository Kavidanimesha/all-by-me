import { Button, Grid, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'

const formData = {
  name: ''
}


function index() {
  return (
    <Grid container>
      <Formik
        // initialValues={{...formData}}
        // onSubmit={(values)=> {
        //   console.log(values)
        // }}
      >
        <Form>
        <TextField name='name' label='Name' required/> 
        <Button type='submit'> Save </Button>
        </Form>
      </Formik>
    </Grid>
  )
}

export default index
