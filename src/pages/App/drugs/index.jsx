import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import { Button, Grid, Typography } from '@mui/material'
import { Formik , Form } from 'formik'
import * as yup from 'yup'
import React, { useState } from 'react'
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import DatePIckerWrapper from '@/components/formsUI/date/time pickers/DatePIckerWrapper'

const medicineCategories = [
  "Analgesics",
  "Antibiotics",
  "Antidepressants",
  "Antihistamines",
  "Cardiovascular medications",
  "Endocrine medications",
  "Respiratory medications",
  "Muscle relaxants",
  "Anti-inflammatory drugs",
  "Immunosuppressants",
  "Anesthetics",
  "Antacids",
  "Anticoagulants",
  "Anticonvulsants",
  "Antiemetics",
  "Antifungal medications",
  "Antimalarial drugs",
  "Antipsychotics",
  "Antiviral medications",
  "Chemotherapy drugs"
];

const formData = {
    name: '',
    category: '',
    description: '',
    dosage: '',
    manufacturer: '',
    manufactureDate: '',
    expireDate: '' 
}

const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    category: yup.string().required("Required"),
    description: yup.string().required("Required"),
    manufacturer: yup.string().required("Required"),
    manufactureDate: yup.string().required("Required"),
    expireDate: yup.string().required("Required"),
})

function Drugs() {

  const [ dose, setDose ] = useState([1]);
	
	const handleOnClick = () => {
		
		setDose([  ...dose, dose.length + 1 ])
	} 

	const handleOnClose = (index) => {
		if(dose !==1){
			const values=[...dose]
			values.splice(index , 1)
			setDose(values)
		}
	}

  return (
    <Grid container>
      <Grid item xs={12} align='center' marginBottom={3}>
        <Typography variant='h4'> Add Drugs </Typography>
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
            <Grid item xs={12} marginBottom={3}>
              <TextFieldWrapper name='name' label='Drug Name' />
            </Grid>
            <Grid item xs={12} marginBottom={3}>
              <SelectWrapper name='category' label='Select Category' options={medicineCategories} />
            </Grid>
            <Grid item xs={12} marginBottom={3}>
              <TextFieldWrapper name='description' label='Description' />
            </Grid>

            <Grid container>
              <Grid item xs={12} marginBottom={3}>
                <Typography variant='h6'> Add Dose </Typography>
              </Grid>
                {
                dose.map((item ,index) => (
                  <Grid key={item.id} item xs={12} marginBottom={3}>
                  <TextFieldWrapper name={`dosage ${index+1}`} label={`Dose ${index+1}`}/>
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
            
            <Grid item xs={12} marginBottom={3}>
              <TextFieldWrapper name='manufacturer' label='Manufacturer' />
            </Grid>

            <Grid container display={'flex'} flexDirection={'row'} spacing={2}>
                <Grid item xs={6} marginBottom={3}>
                  <DatePIckerWrapper name='manufactureDate' label='Manufacture Date' />
                </Grid>
                <Grid item xs={6} marginBottom={3}>
                  <DatePIckerWrapper name='expireDate' label='Expire Date' />
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
