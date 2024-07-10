import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";

function Location() {
  const [closeIcon, setIcon] = useState(false);
  const changeIcon = () => {
    setIcon(true);
  };
  const [location, setlocation] = useState("Noida,India");
  function changelocation(event) {
    setlocation(event.target.value);
  }

  return (
    <>
      <div className="loc">
        <LocationOnOutlinedIcon />
        <input
          onClickCapture={changeIcon}
          onChange={changelocation}
          className="place"
          type="text"
          placeholder="Enter your location"
          value={location}
        />
        {closeIcon ? <CloseIcon /> : <EditIcon/>}
      </div>
      <div className="locationinfo">
        <InfoOutlinedIcon sx={{ fontSize: 16 }} />
        <p>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </>
  );
}
export default Location;
