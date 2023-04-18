import React, { useEffect, useState } from 'react'
import TableComponent from '@/components/table';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { Button, Grid, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import { Formik , Form } from 'formik'
import DatePIckerWrapper from '@/components/formsUI/date/time pickers/DatePIckerWrapper'
import * as yup from 'yup'


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


export default function AllDrugs({drugs}) {

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

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Drug',
      flex: 1,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'manufacturer',
      headerName: 'Manufacture',
     flex: 1,
    },
    {
      field: 'manufactureDate',
      headerName: 'MFD',
      flex: 1,
    },
    {
      field: 'expireDate',
      headerName: 'Expire',
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
         <Grid item marginRight={2}>
          <Button onClick={handleClickOpen}> <EditTwoToneIcon /> </Button>
         <Button> <DeleteTwoToneIcon /> </Button>
         </Grid>
        </>;
      },
      
    }
  ];
// FEtch All Drugs

  return (
    <Grid container display={'flex'} justifyContent='center' sx={{ height: '70vh', width: '100%' }}>
        <Grid item xs={12} align='center' marginBottom={5}>
          <Typography variant='h4'> All Drugs </Typography>
        </Grid>

        <TableComponent rows={drugs}
          columns={columns}
          rowsPerPageOptions={[5 , 10 , 15]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            width: '70%'
          }}
        />

      <Dialog open={open} onClose={handleClose}>
        <Grid item xs={12} align='center' marginTop={2}>
          <Typography variant='h5'> View All Drugs </Typography>
        </Grid>
        <DialogContent>
            <Formik
            initialValues={{...formData}}
            validationSchema={validationSchema}
            onSubmit={(values , reset) => {
                console.log(values);
                alert("Saved Successfully")
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

                <Grid container sx={{backgroundImage: new URL ('https://images.app.goo.gl/ceKxyLcqKVXr9kwf8')}}>
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
                <Grid item xs={12} display={'flex'} flexDirection={'row'} justifyContent='flex-end' gap={2} marginRight={0} marginBottom={2}>
                  <Button onClick={handleClose} color='error'>Cancel</Button>
                  <Button type="submit" variant='contained' color='success'>Save</Button>
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
  const res = await fetch("http://localhost:5050/drug" , {
      method: "GET",
      options: {
          "Access-Control-Allow-Credentials": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
        
}})
  const drugs = await res.json()
  return {
    props: {
      drugs,
    },
  }
}

