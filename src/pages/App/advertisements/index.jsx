import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import { Button, Grid, TextField, Typography } from '@mui/material'
import * as yup from 'yup'
import { Formik , Form } from 'formik'
import React, { useState } from 'react'
import Image from 'next/image'
import { isImage, validateSize } from 'utils/fileValidation'
import AdvertisementServices from '../../../services/AdvertisementService'

function Advertisements() {

  const categoryArray = [ 'Channel Centre' , 'Pharmacy']

  const formData = {
    headline:'',
    description: '',
    image: '',
    category: ''
  }

  const validateionSchema = yup.object().shape({
    headline: yup.string().required("Required"),
    description: yup.string().required("Required"),
    category: yup.string().required("Required")
  })

  const submit = async (values , reset) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('headline', values.headline);
    formData.append('description', values.description);
    formData.append('category', values.category);
    await AdvertisementServices.upload(image).then((res)=> res.json()).then(async (response)=> {
      const res = await fetch('/api/create-advertiesment', {
        method: 'POST',
        body: JSON.stringify({...values , image: response.url}),
      });
      const { error } = await res.json();
      if (error) {
        return;
      }
    })
  }
 const [ image , setImage] = useState()


  const handleFileChange = (event) => {
    const element = event.currentTarget;
    const fileList= element.files;
    if (fileList) {
      setImage(fileList[0]);
    }
  };

  return (

    <Grid container>
      <Grid item xs={12} align='center'>
        <Typography variant='h4'> Create New Advertisement </Typography>
      </Grid>

      <Grid container>
        <Formik
          initialValues={{...formData}}
          validationSchema={validateionSchema}
          onSubmit= {(values , reset)=> {
              submit(values,reset)
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
                <SelectWrapper name='category' label='Organization' options={categoryArray} />
              </Grid>
              <Grid item xs={12} sx={{marginBottom:3}}> 
                <input type='file' onChange={handleFileChange} />
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
            <Image src={image} width={1000} height={400} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Advertisements
