import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik , Form } from 'formik'
import { Button, Grid, Typography } from '@mui/material'
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'

const formData = {
    personalInformation: {
                  name: '',
                  nic: '',
                  address: '',
                  phone: '',
                  image: ''
    },
    specialMedicalHistory: {
                  specialSurguries: '',
                  specialAllergies: ''
    },
    specialMedications: {
                  specialMedicines: '',
                  specialDoses: ''
    },
    vitalSigns: {
                  bloodPresure: '',
                  heartRate: '',
                  respiratoryRate: '',
                  tempreture: ''
    },
    labReports: {
                  labTests: '',
    },
    physicalObservations: {
                  specialObservations: ''
    },
    immunizations: {
                  specialVaccines: ''
    },
    consentForms: {
                  specialTreatments: ''
    }
  
}

const validationScema = yup.object().shape({
  name: yup.string().required("Required"),
  nic: yup.string().required("Required"),
  address: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  image: yup.string().required("Required"),
})

function AddPatient() {

  const [ surguries, setSurguries ] = useState([1]);
	
	const handleOnSurgery = () => {
		
		setSurguries([  ...surguries, surguries.length + 1 ])
	} 

	const handleCloseSurgery = (index) => {
		if(surguries !==1){
			const values=[...surguries]
			values.splice(index , 1)
			setSurguries(values)
		}
	}

  const [ allergies, setAllergies ] = useState([1]);
	
	const handleOnAllergies = () => {
		
		setAllergies([  ...allergies, allergies.length + 1 ])
	} 

	const handleCloseAllergies = (index) => {
		if(allergies !==1){
			const values=[...allergies]
			values.splice(index , 1)
			setAllergies(values)
		}
	}

  const [ medicines, setMedicines ] = useState([1]);
	
	const handleOnMedicines = () => {
		
		setMedicines([  ...medicines, medicines.length + 1 ])
	} 

	const handleCloseMedicines = (index) => {
		if(medicines !==1){
			const values=[...medicines]
			values.splice(index , 1)
			setMedicines(values)
		}
	}

    const [ doses, setDoses ] = useState([1]);
	
	const handleOnDoses = () => {
		
		setDoses([  ...doses, doses.length + 1 ])
	} 

	const handleCloseDoses = (index) => {
		if(doses !==1){
			const values=[...doses]
			values.splice(index , 1)
			setDoses(values)
		}
	}

    // const [ allergies, setAllergies ] = useState([1]);
	
	// const handleOnAllergies = () => {
		
	// 	setAllergies([  ...allergies, allergies.length + 1 ])
	// } 

	// const handleCloseAllergies = (index) => {
	// 	if(allergies !==1){
	// 		const values=[...allergies]
	// 		values.splice(index , 1)
	// 		setAllergies(values)
	// 	}
	// }

    // const [ allergies, setAllergies ] = useState([1]);
	
	// const handleOnAllergies = () => {
		
	// 	setAllergies([  ...allergies, allergies.length + 1 ])
	// } 

	// const handleCloseAllergies = (index) => {
	// 	if(allergies !==1){
	// 		const values=[...allergies]
	// 		values.splice(index , 1)
	// 		setAllergies(values)
	// 	}
	// }

  return (
    <Grid conatainer>
      <Grid item xs={12} align='center'>
        <Typography variant='h4'> Create Patient Record </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'> Personal Information </Typography>
      </Grid>

      <Formik
        initialValues={{...formData}}
        validationSchema={validationScema}
        onSubmit={(values)=> {
            console.log(values);
            alert("Successfully Saved")
        }}
      >
        <Form>
          {/* Personal Information */}
          <Grid container>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextFieldWrapper name='name' label='Full Name' />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name='nic' label='NIC Number' />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextFieldWrapper name='phone' label='Contact Number' />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name='address' label='Address' />
              </Grid>
            </Grid>
              <Grid item={12}>
                <TextFieldWrapper name='image' label= 'Add Record Images' /> 
              </Grid>
          </Grid>

          <Grid container display={'flex'} flexDirection={'row'} spacing={2}>
          {/* Special Medication History */}
          <Grid item xs={12}>
            <Typography variant='h6'> Special Medication History </Typography>
          </Grid>
            <Grid container display={'flex'} flexDirection={'row'} spacing={2}>
            {/* Special Surguries */}
              <Grid item xs={6}>
                <Grid item xs={12} marginBottom={3}>
                    <Typography variant='body1'> Add Surgery </Typography>
                  </Grid>
                    {
                    surguries.map((item ,index) => (
                      <Grid key={item.id} item xs={12} marginBottom={3}>
                      <TextFieldWrapper variant='contained' name={`specialSurguries ${index+1}`} label={`Surgery ${index+1}`}/>
                    </Grid>
                    ))
                    }
                  <Grid item xs={12} display={'flex'} flexDirection={'row'} marginBottom={3}>
                      <Grid item sx={{marginRight:2}}>
                        <Button onClick={handleOnSurgery} variant='contained' color='success'> Add + </Button>
                      </Grid>
                      <Grid item>
                        <Button onClick={handleCloseSurgery} variant='contained' color='error'> Remove </Button>
                      </Grid>
                  </Grid>
              </Grid>
            {/* Special Allergies */}
              <Grid item xs={6}>
                <Grid item xs={12} marginBottom={3}>
                  <Typography variant='body1'> Add Surgery </Typography>
                </Grid>
                    {
                    allergies.map((item ,index) => (
                      <Grid key={item.id} item xs={12} marginBottom={3}>
                      <TextFieldWrapper variant='contained' name={`specialAllergies ${index+1}`} label={`Allergy ${index+1}`}/>
                    </Grid>
                    ))
                    }
                  <Grid item xs={12} display={'flex'} flexDirection={'row'} marginBottom={3}>
                      <Grid item sx={{marginRight:2}}>
                        <Button onClick={handleOnAllergies} variant='contained' color='success'> Add + </Button>
                      </Grid>
                      <Grid item>
                        <Button onClick={handleCloseAllergies} variant='contained' color='error'> Remove </Button>
                      </Grid>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container display={'flex'} flexDirection={'row'} spacing={2}>
          {/* Special Medications*/}
          <Grid item xs={12}>
            <Typography variant='h6'> Special Medication History </Typography>
          </Grid>
            <Grid container display={'flex'} flexDirection={'row'} spacing={2}>
            {/* Special Medicines */}
              <Grid item xs={6}>
                <Grid item xs={12} marginBottom={3}>
                    <Typography variant='body1'> Add Surgery </Typography>
                  </Grid>
                    {
                    medicines.map((item ,index) => (
                      <Grid key={item.id} item xs={12} marginBottom={3}>
                      <TextFieldWrapper variant='contained' name={`specialMedicines ${index+1}`} label={`Medicine ${index+1}`}/>
                    </Grid>
                    ))
                    }
                  <Grid item xs={12} display={'flex'} flexDirection={'row'} marginBottom={3}>
                      <Grid item sx={{marginRight:2}}>
                        <Button onClick={handleOnMedicines} variant='contained' color='success'> Add + </Button>
                      </Grid>
                      <Grid item>
                        <Button onClick={handleCloseMedicines} variant='contained' color='error'> Remove </Button>
                      </Grid>
                  </Grid>
              </Grid>
            {/* Special Doses */}
              <Grid item xs={6}>
                <Grid item xs={12} marginBottom={3}>
                  <Typography variant='body1'> Add Surgery </Typography>
                </Grid>
                    {
                    doses.map((item ,index) => (
                      <Grid key={item.id} item xs={12} marginBottom={3}>
                      <TextFieldWrapper variant='contained' name={`specialDoses ${index+1}`} label={`Dose ${index+1}`}/>
                    </Grid>
                    ))
                    }
                  <Grid item xs={12} display={'flex'} flexDirection={'row'} marginBottom={3}>
                      <Grid item sx={{marginRight:2}}>
                        <Button onClick={handleOnDoses} variant='contained' color='success'> Add + </Button>
                      </Grid>
                      <Grid item>
                        <Button onClick={handleCloseDoses} variant='contained' color='error'> Remove </Button>
                      </Grid>
                  </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} align='center'>
              <Button variant='contained' color='success' type='submit'> Create </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  )
}

export default AddPatient
