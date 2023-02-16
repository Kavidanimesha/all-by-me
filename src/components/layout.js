import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorder from "@mui/icons-material/StarBorder";
import { Grid } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import ElectricMopedOutlinedIcon from '@mui/icons-material/ElectricMopedOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import Link from "next/link";
import React from "react";
// SideBar
export default function Layout({ children }) {
  const [openAdvertisements, setOpenAdvertisements] = React.useState(true);

  const handleClickAdvertisements = () => {
    setOpenAdvertisements(!openAdvertisements);
  };

  const [openDelivery, setOpenDelivery] = React.useState(true);

  const handleClickDelivery = () => {
    setOpenDelivery(!openDelivery);
  };

  const [openDoctor, setOpenDoctor] = React.useState(true);

  const handleClickDoctor = () => {
    setOpenDoctor(!openDoctor);
  };

  const [openDrugs, setOpenDrugs] = React.useState(true);

  const handleClickDrugs = () => {
    setOpenDrugs(!openDrugs);
  };

  const [openPatient, setOpenPatient] = React.useState(true);

  const handleClickPatient = () => {
    setOpenPatient(!openPatient);
  };

  const [openPrescription, setOpenPrescription] = React.useState(true);

  const handleClickPrescription = () => {
    setOpenPrescription(!openPrescription);
  };

  const [openReservation, setOpenReservation] = React.useState(true);

  const handleClickReservation = () => {
    setOpenReservation(!openReservation);
  };


  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={2}>
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
          <ListItemButton onClick={handleClickAdvertisements}>
            <ListItemIcon>
              <BookmarksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Advertisements" />
            {openAdvertisements ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

              <Collapse in={openAdvertisements} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <BookmarkOutlinedIcon />
                      </ListItemIcon> 
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/advertisements'}> <ListItemText primary="New Advertisements" /> </Link>                    
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <BookmarkOutlinedIcon />
                      </ListItemIcon>                    
                      <Link style={{textDecoration:'none' , color:'black' }} href={'/app/advertisements/My_Advertisement'}> <ListItemText primary="My Advertisements" /> </Link> 
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <BookmarkOutlinedIcon />
                      </ListItemIcon>                    
                      <Link style={{textDecoration:'none' , color:'black' }} href='/app/advertisements/All_Advertisements'> <ListItemText primary="All Advertisements" /> </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClickDelivery}>
            <ListItemIcon>
              <MopedOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Delivery" />
            {openDelivery ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

              <Collapse in={openDelivery} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <ElectricMopedOutlinedIcon />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/delivery'}> <ListItemText primary="All Delivery" /> </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClickDoctor}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Doctor" />
            {openDoctor ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

              <Collapse in={openDoctor} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <GroupAddOutlinedIcon />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/doctor'}> <ListItemText primary="Add Doctor" /> </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <PeopleOutlineOutlinedIcon />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/doctor/All_Drs'}> <ListItemText primary="All Doctors" /> </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClickDrugs}>
            <ListItemIcon>
              <MedicationOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Drugs" />
            {openDrugs ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

              <Collapse in={openDrugs} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <VaccinesOutlinedIcon />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/drugs'}> <ListItemText primary="Add Drugs" /> </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <VaccinesOutlinedIcon />
                      </ListItemIcon>                    
                      <Link style={{textDecoration:'none' , color:'black' }} href={'/app/drugs/All_Drugs'}> <ListItemText primary="All Advertisements" /> </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClickPatient}>
            <ListItemIcon>
              <BackupTableOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Patient Records" />
            {openPatient ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

              <Collapse in={openPatient} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <BackupTableOutlinedIcon />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/patient'}> <ListItemText primary="Add Records" /> </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <BackupTableOutlinedIcon />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/patient/All_Records'}> <ListItemText primary="All Records" /> </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClickPrescription}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="E-Prescription" />
            {openPrescription ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

              <Collapse in={openPrescription} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/prescription'}> <ListItemText primary="Create Prescription" /> </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>                    
                    <Link style={{textDecoration:'none' , color:'black' }} href={'/app/prescription/All_Prescriptions'}> <ListItemText primary="All Advertisements" /> </Link>
                  </ListItemButton>
                </List>
              </Collapse>


              <ListItemButton onClick={handleClickReservation}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Reservation" />
            {openReservation ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

              <Collapse in={openReservation} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>                    
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>                    
                      <Link style={{textDecoration:'none' , color:'black' }} href={'/app/reservations'}> <ListItemText primary="All Reservations" /> </Link>
                  </ListItemButton>
                </List>
              </Collapse>
        </List>
      </Grid>
      
      <Grid item xs={10} sx={{ backgroundColor: "#BDCDD6" }}>
        <Grid item style={{Width:50 , height:70 , backgroundColor:'green' }}>

        </Grid>
          {children}
      </Grid>
    </Grid>
  );
}
