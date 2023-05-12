import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid, Typography } from "@mui/material";
import TextFieldWrapper from "@/components/formsUI/textfieldValidation/TextFieldWrapper";

const formData = {
  name: "",
  nic: "",
  address: "",
  phone: "",
  image: '',
  bloodPresure: "",
  heartRate: 0,
  respiratoryRate: "",
  tempreture: ""
};

const validationScema = yup.object().shape({
  name: yup.string().required("Required"),
  nic: yup.string().required("Required"),
  address: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  // image: yup.string().required("Required"),
});

function AddPatient() {
  const [surguries, setSurguries] = useState([1]);

  const handleOnSurgery = () => {
    setSurguries([...surguries, surguries.length + 1]);
  };

  const handleCloseSurgery = (index) => {
    if (surguries !== 1) {
      const values = [...surguries];
      values.splice(index, 1);
      setSurguries(values);
    }
  };

  const [allergies, setAllergies] = useState([1]);

  const handleOnAllergies = () => {
    setAllergies([...allergies, allergies.length + 1]);
  };

  const handleCloseAllergies = (index) => {
    if (allergies !== 1) {
      const values = [...allergies];
      values.splice(index, 1);
      setAllergies(values);
    }
  };

  const [medicines, setMedicines] = useState([1]);

  const handleOnMedicines = () => {
    setMedicines([...medicines, medicines.length + 1]);
  };

  const handleCloseMedicines = (index) => {
    if (medicines !== 1) {
      const values = [...medicines];
      values.splice(index, 1);
      setMedicines(values);
    }
  };

  const [doses, setDoses] = useState([1]);

  const handleOnDoses = () => {
    setDoses([...doses, doses.length + 1]);
  };

  const handleCloseDoses = (index) => {
    if (doses !== 1) {
      const values = [...doses];
      values.splice(index, 1);
      setDoses(values);
    }
  };

  // const [ allergies, setAllergies ] = useState([1]);

  // const handleOnAllergies = () => {

  // 	setAllergies([  ...allergies, allergies.length + 1 ])
  // }

  // const handleCloseAllergies = (index) => {
  // 	if(allergies !==1){
  // 		const values=[...allergies]
  // 		values.splice(index , 1)
  // 		setAllergies(values)
  // 	}
  // }

  // const [ allergies, setAllergies ] = useState([1]);

  // const handleOnAllergies = () => {

  // 	setAllergies([  ...allergies, allergies.length + 1 ])
  // }

  // const handleCloseAllergies = (index) => {
  // 	if(allergies !==1){
  // 		const values=[...allergies]
  // 		values.splice(index , 1)
  // 		setAllergies(values)
  // 	}
  // }

  return (
    <Grid conatainer>
      <Grid item xs={12} align="center" marginBottom={2}>
        <Typography variant="h4"> Create Patient Record </Typography>
      </Grid>
      <Grid item xs={12} marginBottom={2}>
        <Typography variant="h6"> Personal Information </Typography>
      </Grid>

      <Formik
        initialValues={{ ...formData }}
        validationSchema={validationScema}
        onSubmit={async (values) => {
          console.log(values);
          alert("Successfully Saved");

          await fetch("http://localhost:3000/api/create-patient-record", {method: 'POST'})
        }}
      >
        <Form>
          {/* Personal Information */}
          <Grid container>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextFieldWrapper name="name" label="Full Name" />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="nic" label="NIC Number" />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextFieldWrapper name="phone" label="Contact Number" />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="address" label="Address" />
              </Grid>
            </Grid>
            <Grid item xs={12} marginTop={2} gap={1} display={'flex'}> 
                <p> Add Record Image: </p> 
                <input name='image' type='file' />
              </Grid>  
          </Grid>

          <Grid container display={"flex"} flexDirection={"row"} spacing={2}>
            {/* Special Medication History */}
            <Grid item xs={12} marginTop={2}>
              <Typography variant="h6"> Special Medication History </Typography>
            </Grid>
            
            <Grid item xs={6}>
              <TextFieldWrapper name='heartRate' label='Heart Rate' type='number' />
            </Grid>

            <Grid item xs={6}>
              <TextFieldWrapper name='tempreture' label='Tempreture' />
            </Grid>

            <Grid item xs={6}>
              <TextFieldWrapper name='bloodPresure' label='Blood Presure' />
            </Grid>

            <Grid item xs={6}>
              <TextFieldWrapper name='respiratoryRate' label='Respiratory Rate' />
            </Grid>

          </Grid>

          <Grid item xs={12} align="center" marginTop={2}>
            <Button variant="contained" color="success" type="submit">
              Create
            </Button>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
}

export default AddPatient;


