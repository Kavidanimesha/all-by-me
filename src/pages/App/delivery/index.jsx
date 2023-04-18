import TableComponent from '@/components/table';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { Button, Grid, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import * as yup from 'yup'
import { Formik , Form } from 'formik';
import * as React from 'react';
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper';
import SelectWrapper from '@/components/formsUI/select/SelectWrapper';

const rows = [
  { id: 1, deliveryId: '1234', orderId: '5896', date: '2023-02-03', address: '123 Main St, Anytown, USA 12345', customer: 'John', phone: '0712478935', status: 'Delivered' },
  { id: 2, deliveryId: '1235', orderId: '5862', date: '2023-02-03', address: '456 Maple Ave, Anywhere, USA 67890', customer: 'Mike', phone: '0761895136', status: 'Cancelled' },
  { id: 3, deliveryId: '1236', orderId: '1248', date: '2023-02-03', address: '789 Oak St, Somewhere, USA 45678', customer: 'Peter', phone: '0709751846', status: 'On Hold' },
  { id: 4, deliveryId: '1237', orderId: '0482', date: '2023-02-03', address: '1010 Elm St, Anyplace, USA 23456', customer: 'Smith', phone: '0776528777', status: 'Shipped' },
  { id: 5, deliveryId: '1238', orderId: '1473', date: '2023-02-03', address: '1212 Pine St, Nowhere, USA 34567', customer: 'Kevin', phone: '0710153756', status: 'Delivered' },

];

const formData = {
  name: '',
  address: '',
  phone: '',
  image: '',
  status: ''
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  address: yup.string().required("Required"),
  phone: yup.number("Phone number Should be a Number").required("Required"),
  status: yup.string().required("Required")
})

const statusArray = ['Accepted' , "Declined" , 'Shipped']


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
      flex: 0.5,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
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
        <Grid item xs={12} display={'flex'} flexDirection={'row' }>
          <Button onClick={handleClickOpen}> <EditTwoToneIcon /> </Button>
          <Button> <DeleteTwoToneIcon /> </Button>
         </Grid>
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
        <Grid item xs={12} align='center' marginTop={2}>
          <Typography variant='h5'> All Delivery Details </Typography>
        </Grid>
        <DialogContent style={{width:500}}>
          <Grid container >
            <Formik 
              initialValues={{...formData}}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values)
                alert("Saved Successfully")
              }}
            >
              <Grid item xs={12}>
                <Form>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='name' label='Full Name' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='address' label='Address' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='phone' label='Contact Number' />
                  </Grid>
                  <Grid item xs={12} marginTop={2}>
                    <label> Add Image: </label>
                    <input type='submit'></input>
                  </Grid>
                  <Grid item xs={12} marginTop={2}>
                    <SelectWrapper name='status' label='Status' options={statusArray} />
                  </Grid>
                  <Grid item xs={12} display={'flex'} flexDirection={'row'} justifyContent='flex-end' gap={2} marginBottom={2} marginRight={1}>
                    <Button onClick={handleClose} variant='outlined' color='error'> Cancel </Button>
                    <Button type='submit' variant='contained' color='success'> Save </Button>
                  </Grid >
                </Form>
              </Grid>
            </Formik>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}