import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./style.css";

export default function TogglePriceType({ priceType, handleChangePriceType }) {
 
  return (
    <div className="toggle-price">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handleChangePriceType}
        sx={{
          "& .Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important ",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButtonGroup-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          PRICE
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          MKT CAP
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          VOLUME
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
