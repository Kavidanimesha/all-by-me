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
  { id: 1, fullName: 'Sithum Dashantha', contact: '0762065142', licens: 'NC123', speciality: 'Medical Genetics', hospital: 'Badulle' },
  { id: 2, fullName: 'Sithum Dashantha', contact: '0762065142', licens: 'NC123', speciality: 'Medical Genetics', hospital: 'Badulle' },
  { id: 3, fullName: 'Sithum Dashantha', contact: '0762065142', licens: 'NC123', speciality: 'Medical Genetics', hospital: 'Badulle' },
  { id: 4, fullName: 'Sithum Dashantha', contact: '0762065142', licens: 'NC123', speciality: 'Medical Genetics', hospital: 'Badulle' },
  { id: 5, fullName: 'Sithum Dashantha', contact: '0762065142', licens: 'NC123', speciality: 'Medical Genetics', hospital: 'Badulle' },
];

export default function AllDoctors() {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullName',
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