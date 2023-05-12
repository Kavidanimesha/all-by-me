import SelectWrapper from "@/components/formsUI/select/SelectWrapper";
import TextFieldWrapper from "@/components/formsUI/textfieldValidation/TextFieldWrapper";
import TableComponent from "@/components/table";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { Button, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import * as React from "react";
import * as yup from "yup";

const rows = [
  { _id: 1, headline: "Snow", description: "Jon", image: 35 },
  { _id: 2, headline: "Lannister", description: "Cersei", image: 42 },
  { _id: 3, headline: "Lannister", description: "Jaime", image: 45 },
  { _id: 4, headline: "Stark", description: "Arya", image: 16 },
  { _id: 5, headline: "Targaryen", description: "Daenerys", image: 44 },
  { _id: 6, headline: "Melisandre", description: null, image: 150 },
  { _id: 7, headline: "Clifford", description: "Ferrara", image: 44 },
];

export default function All_Advertisements() {
  const statusArray = ["Accepted", "Declined"];

  const formData = {
    status: "",
  };

  const validateionSchema = yup.object().shape({
    status: yup.string().required("Required"),
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "headline",
      headerName: "Headline",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        const handleClickOpen = (e) => {
          e.stopPropagation();
          setOpen(true);
        };
        return (
          <>
            <Button onClick={handleClickOpen}>
              {" "}
              <EditTwoToneIcon />{" "}
            </Button>
            <Button>
              {" "}
              <DeleteTwoToneIcon />{" "}
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Grid
      container
      display={"flex"}
      justifyContent="center"
      sx={{ height: "70vh", width: "100%" }}
    >
      <Grid item xs={12} align="center" marginBottom={5}>
        <Typography variant="h4"> All Advertisements </Typography>
      </Grid>

      <TableComponent
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          width: "70%",
        }}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} align="center">
              <Typography variant="h4"> Create New Advertisement </Typography>
            </Grid>

            <Grid container>
              <Formik
                initialValues={{ ...formData }}
                validationSchema={validateionSchema}
                onSubmit={(values, reset) => {
                  console.log(values);
                  reset.resetForm();
                  alert("Saved Successfully");
                }}
              >
                <Grid item xs={12}>
                  <Form>
                    <Grid item xs={12} sx={{ marginBottom: 3 }}>
                      <TextFieldWrapper
                        name="headline"
                        label="Headline"
                        value="Take Care about your Health"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: 3 }}>
                      <TextFieldWrapper
                        name="description"
                        label="Short Description"
                        value="YOUR HEALTH IS OUR FIRST PRIORITY."
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: 3 }}>
                      <TextField type="submit" name="image" />
                    </Grid>
                    <Grid item xs={12}>
                      <SelectWrapper
                        name="status"
                        label="Status"
                        options={statusArray}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      display={"flex"}
                      justifyContent="flex-end"
                      align="center"
                      gap={2}
                    >
                      <Button
                        onClick={handleClose}
                        variant="text"
                        color="error"
                      >
                        {" "}
                        Cancel{" "}
                      </Button>
                      <Button type="submit" variant="contained" color="success">
                        {" "}
                        Save{" "}
                      </Button>
                    </Grid>
                  </Form>
                </Grid>
              </Formik>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
