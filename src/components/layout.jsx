import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import DifferenceIcon from '@mui/icons-material/Difference';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Box, Grid, MenuItem, Typography } from "@mui/material";
import List from "@mui/material/List";
import React from "react";
import SideBar from "./sideBar";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { display } from '@mui/system';

export default function Layout({ children }) {

  const router = useRouter();

 

  const dummyMenuItems = [
    {
      title: "Profile"
    },
    {
      title: "Log Out"
    }
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const DASHBOARD_LIST = [
    {
      id: 1,
      primaryIcon: <VideoCameraBackIcon />,
      primaryTitle: "Advertisements",
      secondaryItems: [
        {
          id: 1,
          secondaryIcon: <VideoCallIcon />,
          secondaryTitle: "New Advertisements",
          path: "/app/advertisements",
        },
        {
          id: 2,
          secondaryIcon: <VideoCameraFrontIcon />,
          secondaryTitle: "My Advertisements",
          path: "/app/advertisements/My_Advertisement",
        },
        {
          id: 3,
          secondaryIcon: <VideoChatIcon />,
          secondaryTitle: "All Advertisements",
          path: "/app/advertisements/All_Advertisements",
        },
      ],
    },
    {
      id: 2,
      primaryIcon: <BookmarkAddedIcon />,
      primaryTitle: "Display Cards",
      secondaryItems: [
        {
          id: 1,
          secondaryIcon: <FileOpenIcon />,
          secondaryTitle: "Pharmacy Cards",
          path: "/app/displayCards/AddPharmacyCard",
        },
        {
          id: 2,
          secondaryIcon: <FileOpenIcon />,
          secondaryTitle: "Channel Centre Cards",
          path: "/app/displayCards/AddCentreCard",
        },
      ],
    },














    {
      id: 3,
      primaryIcon: <DeliveryDiningIcon />,
      primaryTitle: "Delivery",
      secondaryItems: [
        {
          id: 1,
          secondaryIcon: <DeliveryDiningIcon />,
          secondaryTitle: "All Delivery",
          path: "/app/delivery"
        },
      ],
    },
    {
      id: 4,
      primaryIcon: <PersonIcon />,
      primaryTitle: "Doctor",
      secondaryItems: [
        {
          id: 2,
          secondaryIcon: <PersonAddIcon />,
          secondaryTitle: "Add Doctor",
          path: "/app/doctor"
        },
        {
          id: 1,
          secondaryIcon: <SupervisorAccountIcon />,
          secondaryTitle: "All Doctor",
          path:"/app/doctor/All_Drs"
        }
      ]
    },
    {
      id: 5,
      primaryIcon: <MedicalServicesIcon />,
      primaryTitle: "Drugs",
      secondaryItems: [
        {
          id: 1,
          secondaryIcon: <MedicalInformationIcon />,
          secondaryTitle: "Add Drugs",
          path: "/app/drugs",
        },
        {
          id: 2,
          secondaryIcon: <VaccinesIcon />,
          secondaryTitle: "All Drugs",
          path: "/app/drugs/All_Drugs",
        },
      ],
    },
    {
      id: 6,
      primaryIcon: <FileCopyIcon />,
      primaryTitle: "Patient Records",
      secondaryItems: [
        {
          id: 1,
          secondaryIcon: <DifferenceIcon />,
          secondaryTitle: "Add Record",
          path: "/app/patient",
        },
        {
          id: 2,
          secondaryIcon: <SnippetFolderIcon />,
          secondaryTitle: "All Record",
          path: "/app/patient/All_Records",
        },
      ],
    },
    {
      id: 7,
      primaryIcon: <InsertDriveFileIcon />,
      primaryTitle: "E-Prescription",
      secondaryItems: [
        {
          id: 1,
          secondaryIcon: <FileOpenIcon />,
          secondaryTitle: "New Prescription",
          path: "/app/prescription",
        },
        {
          id: 2,
          secondaryIcon: <FileCopyIcon />,
          secondaryTitle: "All Prescription",
          path: "/app/prescription/All_Prescriptions",
        },
      ],
    },
    {
      id: 8,
      primaryIcon: <BookmarkIcon />,
      primaryTitle: "Reservations",
      secondaryItems: [
        {
          id: 1,
          secondaryIcon: <BookmarkAddedIcon />,
          secondaryTitle: "All Reservations",
          path: "/app/reservations",
        },
      ],
    },
  ];

   if (router.pathname.split("/").at(1) === "app") {
    // We are in app structure, so we show the sidebar

    return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item lg={2} md={3} style={{ backgroundColor: "#1f2a40" }}>
        {/* Side Bar Content Goes Here */}
        <List
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 360,
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Grid item xs={12} align='center'>
              <Image style={{borderRadius: '100%'}} src='/images/Logo.jpg' width={100} height={100} />
          </Grid>
          {DASHBOARD_LIST.map((item) => (
            <SideBar
              key={item.id}
              primaryIcon={item.primaryIcon}
              primaryTitle={item.primaryTitle}
              secondaryItems={item.secondaryItems}
            />
          ))}
        </List>
      </Grid>

      <Grid item lg={10} md={9}>
        <Grid
          item
          style={{ Width: 50, height: 70, backgroundColor: "#1f2a40" }}
        >
          <Grid
            container
            display={"flex"}
            flexDirection={"row"}
            spacing={2}
            justifyContent= 'center'
          >
           <Grid container display={'flex'} flexDirection={'row'} justifyContent='flex-end' alignItems='center' spacing={2} marginTop={0}>
           

               <Grid item> 
              <Typography style={{color:'white'}}> Kavinda Nimesha </Typography>
            </Grid>
            <Grid item>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"
        style={{color:'white'}}
        marginTop={2}
        >
        <AccountCircleOutlinedIcon fontSize='large'/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        {dummyMenuItems.map(item => (
          <MenuItem onClick={handleClose} key={item.title} value={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
            </Grid>
            
           </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ padding: 5 }}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
  } else {
    // We are not in app structure, so we hide the sidebar
    return (
      <Box sx={{ height: "100%", width: "100%" }}>
      {children}
      </Box>
    );
  }
}
