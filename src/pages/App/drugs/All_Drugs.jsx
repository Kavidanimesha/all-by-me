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
  { id: 1, drugName: 'Acetaminophen ', category: 'Analgesics ', description: 'Pain and fever reducer ', dosage: '325-1000mg', manufacture: 'Johnson & Johnson', mfd: '2022-02-01', expire: '2024-02-01'},
  { id: 2, drugName: 'Acetaminophen ', category: 'Analgesics ', description: 'Pain and fever reducer ', dosage: '325-1000mg', manufacture: 'Johnson & Johnson', mfd: '2022-02-01', expire: '2024-02-01'},
  { id: 3, drugName: 'Acetaminophen ', category: 'Analgesics ', description: 'Pain and fever reducer ', dosage: '325-1000mg', manufacture: 'Johnson & Johnson', mfd: '2022-02-01', expire: '2024-02-01'},
  { id: 4, drugName: 'Acetaminophen ', category: 'Analgesics ', description: 'Pain and fever reducer ', dosage: '325-1000mg', manufacture: 'Johnson & Johnson', mfd: '2022-02-01', expire: '2024-02-01'},
  { id: 5, drugName: 'Acetaminophen ', category: 'Analgesics ', description: 'Pain and fever reducer ', dosage: '325-1000mg', manufacture: 'Johnson & Johnson', mfd: '2022-02-01', expire: '2024-02-01'},
];

export default function AllDrugs() {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'drugName',
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
      flex: 2,
    },
    {
      field: 'dosage',
      headerName: 'Dosage',
      flex: 1,
    },
    {
      field: 'manufacture',
      headerName: 'Manufacture',
     flex: 1,
    },
    {
      field: 'mfd',
      headerName: 'MFD',
      flex: 1,
    },
    {
      field: 'expire',
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
         <Button onClick={handleClickOpen}> <EditTwoToneIcon /> </Button>
         <Button> <DeleteTwoToneIcon /> </Button>
        </>;
      },
      
    }
  ];

  return (
    <Grid container display={'flex'} justifyContent='center' sx={{ height: '70vh', width: '100%' }}>
        <Grid item xs={12} align='center' marginBottom={5}>
          <Typography variant='h4'> All Drugs </Typography>
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