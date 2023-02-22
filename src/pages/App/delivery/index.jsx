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
  { id: 1, deliveryId: '1234', orderId: '5896', date: '2023-02-03', address: '123 Main St, Anytown, USA 12345', customer: 'John', phone: '0712478935', status: 'Delivered' },
  { id: 2, deliveryId: '1235', orderId: '5862', date: '2023-02-03', address: '456 Maple Ave, Anywhere, USA 67890', customer: 'Mike', phone: '0761895136', status: 'Cancelled' },
  { id: 3, deliveryId: '1236', orderId: '1248', date: '2023-02-03', address: '789 Oak St, Somewhere, USA 45678', customer: 'Peter', phone: '0709751846', status: 'On Hold' },
  { id: 4, deliveryId: '1237', orderId: '0482', date: '2023-02-03', address: '1010 Elm St, Anyplace, USA 23456', customer: 'Smith', phone: '0776528777', status: 'Shipped' },
  { id: 5, deliveryId: '1238', orderId: '1473', date: '2023-02-03', address: '1212 Pine St, Nowhere, USA 34567', customer: 'Kevin', phone: '0710153756', status: 'Delivered' },

];

export default function Delivery() {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'deliveryId',
      headerName: 'Delivery ID',
      flex: 1,
    },
    {
      field: 'orderId',
      headerName: 'Order ID',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 2,
    },
    {
      field: 'customer',
      headerName: 'Customer',
      flex: 1,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
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
        <Typography variant='h4'> All Delivery </Typography>
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