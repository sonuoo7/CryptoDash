import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";

export default function SelectDay({ days, handleChangeDays, noPtag }) {
  return (
    <div className="select-days">
      {!noPtag && <p className="ppricetag">Price Change in</p>}
      {/* <InputLabel id="demo-simple-select-label">Days</InputLabel> */}
      <Select
        className="select"
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a88c9",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleChangeDays}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
