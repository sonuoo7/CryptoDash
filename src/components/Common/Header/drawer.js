import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";


function TemporaryDrawer() {
const [open,setOpen]=useState(false) 
      
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drewar--div">
          <Link to="/">
            <p className="link">Home</p>
          </Link>

          <Link to="/Compare">
            <p className="link">Compare</p>
          </Link>

          {/* <Link to="/WahtchList">
          <p className="link">WahtchList</p>
        </Link> */}
          <Link to="/DashBoard">
            <p className="link">DashBoard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
export default TemporaryDrawer;