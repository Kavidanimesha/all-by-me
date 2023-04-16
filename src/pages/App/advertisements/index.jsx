import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import { Button, Grid, TextField, Typography } from '@mui/material'
import * as yup from 'yup'
import { Formik , Form } from 'formik'
import React, { useState } from 'react'
import Image from 'next/image'
import { isImage, validateSize } from 'utils/fileValidation'

function Advertisements() {

  const [imageError , setImageError] = useState ()
  const [imageSrc , setImageSrc] = useState ()
  const [image , setImage] = useState ()

  const handleImageChange = (e) => {
    setImageError('');
    const img = e.target.files[0];
    // if no image selected
    if (!img) {
      return;
    }

    // check if image
    const result = isImage(img.name);
    if (!result) {
      const error = 'File type should be a image';
      // toast(error, { type: 'error' });
      setImageError(error);
      return;
    }
    const isImageLarge = validateSize(img);
    if (isImageLarge) {
      const error = 'File must be less or equal to 5MB';
      toast(error, { type: 'error' });
      setImageError(error);
      return;
    }
    const reader = new FileReader();
    // converts to BASE 64
    reader.readAsDataURL(img);
    reader.addEventListener('load', () => {
      setImageSrc(reader.result);
      setImage(img);
    });
  };

  const formData = {
    headline:'',
    description: '',
    image: ''
  }

  const validateionSchema = yup.object().shape({
    headline: yup.string().required("Required"),
    description: yup.string().required("Required")
  })

  const submit =async (values , reset) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('headline', values.headline);
    formData.append('description', values.description);
    
    const res = await fetch('/api/create-advertiesment', {
      method: 'POST',
      body: formData,
    });
    const { error } = await res.json();
    if (error) {
      return;
    }
  }

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
                <input type='file' onChange={handleImageChange} />
                <p>{imageError}</p>
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
            <Image src={imageSrc} width={1000} height={400} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Advertisements
