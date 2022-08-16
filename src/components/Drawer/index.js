import { useState, Fragment, default as React } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavMenu } from "../Navigation/data";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List sx={{ paddingRight: "30px", paddingTop: "20px" }}>
          <Link
            onClick={() => setOpenDrawer(false)}
            to={""}
            style={{ paddingLeft: "80px" }}
          >
            <CloseIcon sx={{ fontSize: "30px" }} />
          </Link>
          {NavMenu.map((item, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};

export default DrawerComp;
