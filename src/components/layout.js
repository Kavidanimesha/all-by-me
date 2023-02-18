import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import React from "react";
import SideBar from './sideBar';
// SideBar
export default function Layout({ children }) {
  
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item lg={2} md={3}>
        {/* Side Bar Content Goes Here */}
        <List
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              LOGO
            </ListSubheader>
          }
        >

        <SideBar primaryIcon={<AccountCircleOutlinedIcon />} primaryTitle={'Advertisements'} secondaryItems={[
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'New Advertisements' , path:"/app/advertisements" },
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'My Advertisements' , path:"/app/advertisements/My_Advertisement" },
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'All Advertisements' , path:"/app/advertisements/All_Advertisements" },
          
        ]} />
         <SideBar primaryIcon={<AccountCircleOutlinedIcon />} primaryTitle={'Delivery'} secondaryItems={[
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'All Delivery' , path:"/app/delivery" }
        ]} />
         <SideBar primaryIcon={<AccountCircleOutlinedIcon />} primaryTitle={'Doctor'} secondaryItems={[
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'Add Doctor' , path:"/app/doctor" },
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'All Doctors' , path:"/app/doctor/All_Drs" }
        ]} />
         <SideBar primaryIcon={<AccountCircleOutlinedIcon />} primaryTitle={'Drugs'} secondaryItems={[
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'Add Drugs' , path:"/app/drugs" },
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'All Drugs' , path:"/app/drugs/All_Drugs" }
        ]} />
         <SideBar primaryIcon={<AccountCircleOutlinedIcon />} primaryTitle={'Patient Records'} secondaryItems={[
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'Add Record' , path:"/app/patient" },
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'All Records' , path:"/app/patient/All_Records" }
        ]} />
         <SideBar primaryIcon={<AccountCircleOutlinedIcon />} primaryTitle={'E-Prescription'} secondaryItems={[
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'New Prescription' , path:"/app/prescription" },
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'All Prescriptions' , path:"/app/prescription/All_Prescriptions" }
        ]} />
         <SideBar primaryIcon={<AccountCircleOutlinedIcon />} primaryTitle={'Reservations'} secondaryItems={[
          {secondaryIcon:<AccountCircleOutlinedIcon /> , secondaryTitle:'All Reservations' , path:"/app/reservations" }
        ]} />

        </List>
      </Grid>
      
      <Grid item lg={10} md={9} sx={{ backgroundColor: "#BDCDD6" }}>
        <Grid item style={{Width:50 , height:50 , backgroundColor:'#91C788' }}>
          <Grid item>
            <p> Kavinda Nimesha </p>
            <AccountCircleOutlinedIcon fontSize="large" />
          </Grid>
        </Grid>
          {children}
      </Grid>
    </Grid>
  );
}
