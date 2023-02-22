import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import { Button, Grid, Typography } from '@mui/material'
import { Formik , Form } from 'formik'
import * as yup from 'yup'
import React from 'react'
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import DatePIckerWrapper from '@/components/formsUI/date/time pickers/DatePIckerWrapper'
import { Butterfly_Kids } from '@next/font/google'

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

const doses = [
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
    dosage: yup.string().required("Required"),
    manufacturer: yup.string().required("Required"),
    manufactureDate: yup.string().required("Required"),
    expireDate: yup.string().required("Required"),
})

function Drugs() {
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
            <Grid item xs={12} marginBottom={3}>
              <SelectWrapper name='dosage' label='Dosage'  options={doses} />
            </Grid>
            <Grid item xs={12} marginBottom={3}>
              <TextFieldWrapper name='manufacturer' label='Manufacturer' />
            </Grid>
            <Grid item xs={12} marginBottom={3}>
              <DatePIckerWrapper name='manufactureDate' label='Manufacture Date' />
            </Grid>
            <Grid item xs={12} marginBottom={3}>
              <DatePIckerWrapper name='expireDate' label='Expire Date' />
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
