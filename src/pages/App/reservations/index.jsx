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

const rows = [
  { id: 1, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 2, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 3, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 4, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
  { id: 5, doctorId: 'Sithum Dashantha', patientId: 'Kavinda Nimesha', date: '2023-02-23', time: '04.00 p.m', reason: 'Heart Ache', createdAt: '2023-02-23 12.00 p.m' },
];

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
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}