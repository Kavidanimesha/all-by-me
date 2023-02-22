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
  { id: 1, headline: 'Snow', description: 'Jon', image: 35 },
  { id: 2, headline: 'Lannister', description: 'Cersei', image: 42 },
  { id: 3, headline: 'Lannister', description: 'Jaime', image: 45 },
  { id: 4, headline: 'Stark', description: 'Arya', image: 16 },
  { id: 5, headline: 'Targaryen', description: 'Daenerys', image: 44 },
  { id: 6, headline: 'Melisandre', description: null, image: 150 },
  { id: 7, headline: 'Clifford', description: 'Ferrara', image: 44 },
];

export default function All_Advertisements() {

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
      <Grid item xs={12} align='center' marginBottom={5}>
        <Typography variant='h4'> All Advertisements </Typography>
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