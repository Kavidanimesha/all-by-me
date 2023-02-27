import * as React from 'react';
import { Grid , Button , Typography } from '@mui/material';
import TableComponent from '@/components/table';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import * as yup from 'yup'
import { Formik , Form } from 'formik'

const rows = [
  { id: 1, headline: 'Snow', description: 'Jon', image: 35 },
  { id: 2, headline: 'Lannister', description: 'Cersei', image: 42 },
  { id: 3, headline: 'Lannister', description: 'Jaime', image: 45 },
  { id: 4, headline: 'Stark', description: 'Arya', image: 16 },
  { id: 5, headline: 'Targaryen', description: 'Daenerys', image: 44 },
  { id: 6, headline: 'Melisandre', description: null, image: 150 },
  { id: 7, headline: 'Clifford', description: 'Ferrara', image: 44 },
];

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

export default function AllPrescriptions() {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'headline',
      headerName: 'Headline',
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
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
        <TableComponent rows={rows}
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
          <Typography variant='h5'> All Prescriptions </Typography>
        </Grid>
        <DialogContent>
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
              <Grid item xs={12} display={'flex'} flexDirection={'row'} justifyContent='flex-end' gap={2} marginRight={0} marginBottom={2}>
                  <Button onClick={handleClose} color='error'>Cancel</Button>
                  <Button type="submit" variant='contained' color='success'>Save</Button>
                </Grid>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}