import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import { Button, Grid, Typography } from '@mui/material'
import * as yup from 'yup'
import { Formik , Form } from 'formik'
import React from 'react'
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'

function NewPrescription() {

  const drugArray = [
    "Acetaminophen",
    "Ibuprofen",
    "Aspirin",
    "Amoxicillin",
    "Ciprofloxacin",
    "Fluoxetine",
    "Sertraline",
    "Lisinopril",
    "Losartan",
    "Metformin",
    "Lansoprazole",
    "Omeprazole",
    "Atorvastatin",
    "Simvastatin",
    "Furosemide",
    "Levothyroxine",
    "Albuterol",
    "Montelukast",
    "Ranitidine",
    "Promethazine"
  ]

  const brandArray = [
    "Pfizer",
    "Novartis",
    "Roche",
    "Merck & Co.",
    "Johnson & Johnson",
    "Bayer",
    "Sanofi",
    "GlaxoSmithKline",
    "AstraZeneca",
    "Eli Lilly"
  ]

  const dosageArray = [
      "2.5 mg",
      "5 mg",
      "10 mg",
      "20 mg",
      "25 mg",
      "50 mg",
      "75 mg",
      "100 mg",
      "125 mg",
      "150 mg",
      "200 mg",
      "250 mg",
      "300 mg",
      "400 mg",
      "500 mg",
      "600 mg",
      "800 mg",
      "1 g",
      "2 g"
]

  const frequencyArray = [
    'Exampl 1',
    'Exampl 2',
    'Exampl 3',
    'Exampl 4',
    'Exampl 5'

  ]

  const formData = {
    regNum: '',
    name: '',
    age: '',
    address: '',
    nic: '',
    drugName: '',
    brandName: '',
    dosage: '',
    frequency: ''
  }

  const vaidationSchema = yup.object().shape({
    regNum: yup.string().required('Required'), 
    name: yup.string().required('Required'),
    age: yup.string().required('Required'),
    address: yup.string().required('Required'),
    nic: yup.string().required('Required'),
    drugName: yup.string().required('Required'),
    brandName: yup.string().required('Required'),
    dosage: yup.string().required('Required'),
    frequency: yup.string().required('Required')
  })
  return (
    <Grid container>
      <Grid item xs={12} align='center'>
        <Typography variant='h4'> Create New Prescription </Typography>
      </Grid>

      <Grid item xs={12}>
        <Formik
          initialValues={{...formData}}
          validationSchema={vaidationSchema}
          onSubmit={(values , reset) => {
              console.log(values);
              reset.resetForm();
          }}
        >
          <Form>
            <Grid item xs={12} marginBottom={5}>
              <TextFieldWrapper name='regNum' label='Register Number' />
            </Grid>

            <Grid container border={1} borderColor='blue' spacing={2} padding={2} marginBottom={5}>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='name' label='Patient Name' />
              </Grid>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='age' label='Patiemt Age' />
              </Grid>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='address' label='Address' />
              </Grid>
              <Grid item xs={12} marginBottom={3}>
                <TextFieldWrapper name='nic' label='NIC Number' />
              </Grid>
            </Grid>

            <Grid container border={1} borderColor='blue' spacing={2} padding={2} marginBottom={5}>
              <Grid item xs={12} md={3}>
                <SelectWrapper name='drugName' label='Drug' options={drugArray} />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectWrapper name='brandName' label='Brand' options={brandArray} />          
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectWrapper name='dosage' label='Dose' options={dosageArray} />          
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectWrapper name='frequency' label='Frequency' options={frequencyArray} />          
              </Grid>
            </Grid>

            <Grid item xs={12} align='center'>
              <Button type='submit' variant='contained' color='success'> Create </Button>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  )
}

export default NewPrescription
