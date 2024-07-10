import {  ArrowDropDown } from "@mui/icons-material";
import React from "react";

function Filter(){
    return(<>
        <div className="filterA">
            <h6>Posts(368)</h6>
            <button className="btn btn-sm btn-light ">Filter: All <ArrowDropDown/></button>
        </div>
    </>)
}

export default Filter;