import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import React from "react";

function SideBar({primaryIcon , primaryTitle , secondaryItems=[] }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return(
  <div>
    <ListItemButton onClick={handleOpen}>
      <ListItemIcon>
        {primaryIcon}
      </ListItemIcon>
      <ListItemText primary={primaryTitle} />

      {isOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {
                secondaryItems.map((item) =>(
                    <ListItemButton key={item.id} sx={{ pl: 4 }}>
                        <ListItemIcon>
                            {item.secondaryIcon}
                        </ListItemIcon>
                        <Link style={{textDecoration:'none' , color:'black' }} href={item.path}> <ListItemText primary= {item.secondaryTitle} /> </Link>
                    </ListItemButton>
                ))}
        </List>
    </Collapse>
  </div>
  );
}

export default SideBar;
