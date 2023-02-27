import * as React from 'react';
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
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper';
import SelectWrapper from '@/components/formsUI/select/SelectWrapper';
import DatePIckerWrapper from '@/components/formsUI/date/time pickers/DatePIckerWrapper';
import TimePickerWraper from '@/components/formsUI/date/time pickers/TimePickerWraper';

const rows = [
  { id: 1, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 2, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 3, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 4, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 5, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
];

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

const DOCTOR_ARRAY = [ 'Dr. Nimal Perera', 'Dr. Kamal Silva', 'Dr. Chaminda Galappaththi' ]

const statusArray = ['Approved' , 'Declined']

const formData = {
  name: '',
  phone: '',
  age: '',
  specialization: '',
  doctor: '',
  date: '',
  time: '',
  status: ''
}

const valiidationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  phone: yup.number().required("Required"),
  age: yup.number().required("Required"),
  specialization: yup.string().required("Required"),
  doctor: yup.string().required("Required"),
  date: yup.string().required("Required"),
  time: yup.string().required("Required"),
  status: yup.string().required("Required")
})

export default function AllReservations() {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'doctorId',
      headerName: 'Doctor Name',
      width: 150,
    },
    {
      field: 'patientId',
      headerName: 'Patient Name',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 150,
    },
    {
      field: 'reason',
      headerName: 'Reason',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
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
      <Grid item xs={12} align='center' marginBottom={5}>
        <Typography variant='h4'> All Reservations </Typography>
      </Grid>

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
          <Typography variant='h5'> All Reservations </Typography>
        </Grid>
        <DialogContent style={{width: 500}}>
          <Formik
            initialValues={{...formData}}
            validationSchema={valiidationSchema}
            onSubmit={(values)=> {
              console.log(values)
            }}
          >
            <Grid item xs={12}>
              <Form>
                <Grid item xs={12}>
                  <TextFieldWrapper name='name' label='Full Name' />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper name='phone' label='Contact Number' />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper name='age' label='Age' />
                </Grid>

                <Grid container display={'flex'} flexDirection={'row'} spacing={2} marginTop={2}>
                  <Grid item xs={6}>
                    <SelectWrapper name='specialization' label='Specialization' options={medicalSpecialties} />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectWrapper name='doctor' label='Doctor Name' options={DOCTOR_ARRAY} />
                  </Grid>
                </Grid>

                <Grid container display={'flex'} flexDirection={'row'} spacing={2} marginTop={2}>
                  <Grid item xs={6}>
                    <DatePIckerWrapper name='date' label='Pick Date' />
                  </Grid>
                  <Grid item xs={6}>
                    <TimePickerWraper name='time' label='Pick Time' />
                  </Grid>
                </Grid>
                <Grid item xs={12} marginTop={2}>
                  <SelectWrapper name='status' label='Status' options={statusArray} />
                </Grid>
                <Grid item xs={12} display={'flex'} flexDirection={'row'} justifyContent='flex-end' gap={2} marginRight={0} marginTop={2}>
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