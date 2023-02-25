import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import { Button, Grid, Typography } from '@mui/material'
import { Formik , Form } from 'formik'
import * as yup from 'yup'
import React, { useState } from 'react'
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import CheckboxWrapper from '@/components/formsUI/checkbox/CheckBoxWrapper'

const medicalSpecialties = [
  "Allergy and Immunology",
  "Anesthesiology",
  "Cardiology",
  "Dermatology",
  "Emergency Medicine",
  "Endocrinology",
  "Family Medicine",
  "Gastroenterology",
  "Geriatrics",
  "Hematology",
  "Infectious Disease",
  "Internal Medicine",
  "Medical Genetics",
  "Neurology",
  "Nuclear Medicine",
  "Obstetrics and Gynecology",
  "Oncology",
  "Ophthalmology",
  "Orthopedic Surgery",
  "Otolaryngology",
  "Pathology",
  "Pediatrics",
  "Physical Medicine and Rehabilitation",
  "Plastic Surgery",
  "Preventive Medicine",
  "Psychiatry",
  "Pulmonology",
  "Radiology",
  "Rheumatology",
  "Sports Medicine",
  "Thoracic Surgery",
  "Urology"
];

const formData = {
    name: '',
    email: '',
    phone: '',
    licens: '',
    specializeTtreatments: '',
    educationQualifications: '',
    speciality: '',
    sinhala: false ,
    tamil: false,
    english: false, 
    bio: '',
    hospital: ''
}

const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Not Valid").required("Required"),
    phone: yup.number().required("Required"),
    licens: yup.string().required("Required"),
    speciality: yup.string().required("Required"),
    bio: yup.string().required("Required"),
    hospital: yup.string().required("Required"),
})

function Drugs() {

  const [ treatments, setTreatments ] = useState([1]);
	
	const handleOnClick = () => {
		
		setTreatments([  ...treatments, treatments.length + 1 ])
	} 

	const handleOnClose = (index) => {
		if(treatments !==1){
			const values=[...treatments]
			values.splice(index , 1)
			setTreatments(values)
		}
	}

  const [ education, setEducation ] = useState([1]);
	
	const handleOpenEducation = () => {
		
		setEducation([  ...education, education.length + 1 ])
	} 

	const handleCloseEducation = (index) => {
		if(education !==1){
			const values=[...education]
			values.splice(index , 1)
			setEducation(values)
		}
	}

  return (
    <Grid container>
      <Grid item xs={12} align='center' marginBottom={3}>
        <Typography variant='h4'> Add Doctor </Typography>
      </Grid>

      <Formik
        initialValues={{...formData}}
        validationSchema={validationSchema}
        onSubmit={(values , reset) => {
            console.log(values);
            reset.resetForm();
        }}
      >
        <Grid item xs={12}>
          <Form>
            <Grid container>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='name' label= 'Fill Name' />
              </Grid>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='email' label= 'E-Mail' />
              </Grid>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='phone' label= 'Contact No' />
              </Grid>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='licens' label= 'Licens Number' />
              </Grid>
              <Grid item xs={12} marginBottom={3}>
                <SelectWrapper name= 'speciality' label= 'Speciality' options={medicalSpecialties} />
              </Grid>

              <Grid container>
              <Grid item xs={12} marginBottom={3}>
                <Typography variant='h6'> Add Treatments </Typography>
              </Grid>
                {
                treatments.map((item ,index) => (
                  <Grid key={item.id} item xs={12} marginBottom={3}>
                  <TextFieldWrapper name={`specializeTtreatments ${index+1}`} label={`Treatment ${index+1}`}/>
                </Grid>
                ))
                }
              <Grid item xs={12} display={'flex'} flexDirection={'row'} marginBottom={3}>
                  <Grid item sx={{marginRight:2}}>
                    <Button onClick={handleOnClick} variant='contained' color='success'> Add + </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={handleOnClose} variant='contained' color='error'> Remove </Button>
                  </Grid>
              </Grid>
            </Grid> 

             <Grid container>
              <Grid item xs={12} marginBottom={3}>
                <Typography variant='h6'> Add Education </Typography>
              </Grid>
                {
                education.map((item ,index) => (
                  <Grid key={item.id} item xs={12} marginBottom={3}>
                  <TextFieldWrapper name={`educationQualifications ${index+1}`} label={`Education ${index+1}`}/>
                </Grid>
                ))
                }
              <Grid item xs={12} display={'flex'} flexDirection={'row'} marginBottom={3}>
                  <Grid item sx={{marginRight:2}}>
                    <Button onClick={handleOpenEducation} variant='contained' color='success'> Add + </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={handleCloseEducation} variant='contained' color='error'> Remove </Button>
                  </Grid>
              </Grid>
            </Grid>

              <Grid item xs={12} marginBottom={3}>
                <Typography variant='h6'> Counsulting Languages: </Typography>
              </Grid>
              <Grid item xs={12} display={'flex'} flexDirection={'column'}>
                <CheckboxWrapper name='sinhala' label='Sinhala' />
                <CheckboxWrapper name='tamil' label='Tamil' />
                <CheckboxWrapper name='english' label='English' />
              </Grid>

              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='bio' label= 'Professional Bio' />
              </Grid>
              <Grid item xs={12} marginBottom={3}> 
                <TextFieldWrapper name='hospital' label= 'Current Working Hospital' />
              </Grid>
            </Grid>

            <Grid item xs={12} align='center'>
              <Button variant='contained' color='success' type='submit'> Save </Button>
            </Grid>
          </Form>
        </Grid>
      </Formik>
    </Grid>
  )
}

export default Drugs
