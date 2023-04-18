import { Button, Grid, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'

const formData = {
    name: '',
    description: '',
    image: ''
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required")
})


function AddCentreCard() {
  return (
    <>
    <Grid item xs={12} align='center'>
        <Typography variant='h4'> Add Channel Centre Details </Typography>
    </Grid>

    <Formik
        initialValues={{...formData}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values)
            alert("Saved Successfully")
        }}
    >
        <Form>
            <Grid container display={'flex'} flexDirection={'column'} spacing={2}>
                <Grid item xs={12}>
                    <TextFieldWrapper name='name' label='Channel Centre Name' />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldWrapper name='description' label='Description' />
                </Grid>
                <Grid item xs={12}>
                    Add Image : 
                    <input type='submit' name='image' /> 
                </Grid>
                <Grid item xs={12} align='center'>
                    <Button type='submit' variant='contained' color='success' > Save </Button>
                </Grid>
            </Grid>
        </Form>
    </Formik>
</>
  )
}

export default AddCentreCard
