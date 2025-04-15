import { useState } from "react";
import "../components/Header.css";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/FunctionContext";

const NewHeader = () => {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAppContext();

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <div className="fatherDivNewHeader">
        <div className="divNewHeader1">
          <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            LARA'S CLOSET
          </div>
        </div>

        <div className="divNewHeader2">
          <div>INTERNATIONAL</div>
        </div>

        <div className="divNewHeader3">
          <div style={{ cursor: "pointer" }}>NEW COLLECTION</div>
          <div style={{ cursor: "pointer" }}>SALE</div>
          <div style={{ cursor: "pointer" }}>ALL</div>
        </div>

        <div className="divNewHeader4">
          <div style={{ cursor: "pointer" }}>SEARCH</div>
          <div style={{ cursor: "pointer" }} onClick={handleClick}>
            ACCOUNT
          </div>

          <div style={{ cursor: "pointer" }}>BAG</div>
        </div>

        <Menu
          style={{ marginTop: 10 }}
          id="basic-menu"
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
          <MenuItem
            style={{
              margin: 3,
              fontFamily: "Manrope, sans-serif",
              backgroundColor: "#fff",
            }}
            onClick={handleClose}
          >
            Profile
          </MenuItem>
          <MenuItem
            style={{
              margin: 3,
              fontFamily: "Manrope, sans-serif",
              backgroundColor: "#fff",
            }}
            className="menuItem"
            onClick={() => {
              navigate("/closet");
              handleClose();
            }}
          >
            My Closet
          </MenuItem>
          <MenuItem
            style={{
              margin: 3,
              fontFamily: "Manrope, sans-serif",
              backgroundColor: "#fff",
            }}
            className="menuItem"
            onClick={() => {
              logout();
              handleClose();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
      <div style={{ height: "7vh", backgroundColor: "blueviolet" }}>hola</div>
    </>
  );
};
export default NewHeader;
