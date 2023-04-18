import React, { useState } from 'react'
import { Grid , Button, Typography } from '@mui/material';
import TableComponent from '@/components/table';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import * as yup from 'yup'
import { Formik , Form } from 'formik';
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
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

export default function AllDoctors({doctors}) {

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

  const [ education, setEducation ] = React.useState([1]);
	
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


  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Full Name',
      flex: 1
    },
    {
      field: 'contact',
      headerName: 'Contact',
      flex: 1,
    },
    {
      field: 'licens',
      headerName: 'Licens No',
      flex: 1,
    },
    {
      field: 'speciality',
      headerName: 'Speciality',
      flex: 1,
    },
    {
      field: 'hospital',
      headerName: 'Hospital',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => {
        const handleClickOpen = (e) => {
          e.stopPropagation();
          setOpen(true);
        };
        return <>
         <Button onClick={handleClickOpen}> <EditTwoToneIcon /> </Button>
         <Button> <DeleteTwoToneIcon /> </Button>
        </>;
      },
      
    }
  ];

  return (
    <Grid container display={'flex'} justifyContent='center' sx={{ height: '70vh', width: '100%' }}>
       <Grid item xs={12} align='center' marginBottom={5}>
        <Typography variant='h4'> All Doctors </Typography>
      </Grid>

        <TableComponent rows={doctors}
          columns={columns}
          rowsPerPageOptions={[5 , 10 , 15]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            width: '70%'
          }}
        />

      <Dialog open={open} onClose={handleClose}>
        <Grid item xs={12} align='center'>
          <Typography variant='h5'> All Doctors </Typography>
        </Grid>
        <DialogContent>
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
            <Grid item xs={12} display={'flex'} flexDirection={'row'} justifyContent='flex-end' gap={2} marginRight={0} marginBottom={2}>
              <Button onClick={handleClose} color='error'>Cancel</Button>
              <Button type='submit' variant='contained' color='success'> Save </Button>
            </Grid>
              </Form>
            </Grid>
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}


export async function getStaticProps() {
  const res = await fetch("http://localhost:5050/doctor" , {
      method: "GET",
      options: {
          "Access-Control-Allow-Credentials": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
        
}})
  const doctors = await res.json()
  return {
    props: {
      doctors,
    },
  }
}