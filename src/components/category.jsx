import React, { useState } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function Category() {
  const [togle,setTogle]=useState(true);
  const changeBtn = () =>{
    setTogle(!togle);
  }
  return (
    <category>
      <div className="cont  border-bottom">
        <nav className="nav nav-underline ">
          <a className="nav-item nav-link link-body-emphasis active" href="#">
            All Posts (32)
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            Article
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            Event
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            Education
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="#">
            Job
          </a>
          </nav>
          <div className="d-flex gap-3 pb-2 " >
            <button className="btn-custom btn btn-sm btn-secondary  ">
              Write a Post <ArrowDropDownIcon />
            </button>
            {togle?(<button onClick={changeBtn} className="btn btn-sm btn-primary ">
            <GroupAddIcon /> Join Group
            
            </button>):(<button onClick={changeBtn} className="btn btn-sm btn-outline-secondary ">
            <ExitToAppIcon /> Leave Group
            
            </button>)}
            
          </div>
        
      </div>
    </category>
  );
}

export default Category;