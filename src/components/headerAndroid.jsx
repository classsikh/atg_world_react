import React from "react";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function HeaderAndroid() {
  return (
    <>
      <div className="headerAndroid">
        <SquareIcon htmlColor="#868E96" sx={{ fontSize: 13 }} />

        <CircleIcon htmlColor="#868E96" sx={{ fontSize: 13 }} />

        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z"
            fill="#868E96"
          />
        </svg>
      </div>
    </>
  );
}
export default HeaderAndroid;
