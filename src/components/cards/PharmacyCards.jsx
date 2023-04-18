import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextFieldWrapper from "@/components/formsUI/textfieldValidation/TextFieldWrapper";
import { Formik, Form } from "formik";

const deliveryFormData = {
  drug: "",
  dose: "",
  name: "",
  phone: "",
  address: "",
};

function PharmacyCard({ name, description, image }) {
  const [openPharmacy, setOpenPharmacy] = React.useState(false);

  const handleClickOpenPharmacy = () => {
    setOpenPharmacy(true);
  };

  const handleClosePharmacy = () => {
    setOpenPharmacy(false);
  };

  return (
    <>
      <Grid item gap={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  width: "300px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4,
                }}
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Grid container>
            <Grid item xs={12} align="center" marginTop={2} marginBottom={2}>
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOpenPharmacy}
              >
                Deliver
              </Button>
            </Grid>
            <Dialog open={openPharmacy} onClose={handleClosePharmacy}>
              <Grid container style={{ padding: 10 }}>
                <DialogContent>
                  <Typography variant="h4">Delivery Request Form</Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: 2, marginBottom: 2 }}
                    color="#7b1fa2"
                  >
                    Delivery Details
                  </Typography>
                  <Formik
                    initialValues={{ ...deliveryFormData }}
                    onSubmit={(values) => {
                      console.log(values);
                      alert("Saved Successfully");
                    }}
                  >
                    <Form>
                      <Grid
                        container
                        marginTop={1}
                        display={"flex"}
                        flexDirection={"row"}
                        spacing={2}
                        border={1}
                        borderColor="blue"
                        padding={2}
                      >
                        <Grid item xs={6}>
                          <TextFieldWrapper name="drug" label="Drug Name" />
                        </Grid>
                        <Grid item xs={6}>
                          <TextFieldWrapper name="dose" label="Dose" />
                        </Grid>
                        <Grid
                          item
                          display={"flex"}
                          flexDirection={"row"}
                          gap={2}
                        >
                          <Button variant="contained" color="success">
                            {" "}
                            Add+{" "}
                          </Button>
                          <Button variant="contained" color="error">
                            {" "}
                            Remove{" "}
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Typography
                          variant="h6"
                          color="#7b1fa2"
                          sx={{ marginTop: 2, marginBottom: 2 }}
                        >
                          Personal Details
                        </Typography>
                        <Grid
                          item
                          xs={12}
                          display={"flex"}
                          flexDirection={"column"}
                          gap={1}
                        >
                          <TextFieldWrapper name="name" label="Name" />
                          <TextFieldWrapper name="phone" label="Phone" />
                          <TextFieldWrapper name="address" label="Address" />
                        </Grid>
                      </Grid>

                      <DialogActions>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={handleClosePharmacy}
                        >
                          {" "}
                          Close{" "}
                        </Button>
                        <Button
                          variant="outlined"
                          color="success"
                          type="submit"
                        >
                          {" "}
                          Send{" "}
                        </Button>
                      </DialogActions>
                    </Form>
                  </Formik>
                </DialogContent>
              </Grid>
            </Dialog>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

export default PharmacyCard;
