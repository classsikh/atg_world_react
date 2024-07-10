import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Example from "./signupform";
import { useState } from 'react';
function Editbutton(){
    const [showModalM, toggleModalM] = useState(false);
    const handleToggleM = () => toggleModalM(!showModalM);
    return(
        <div onClick = {handleToggleM} className="editbtn">
            <EditOutlinedIcon/>
           <Example showM={showModalM} onHideM={handleToggleM}  /> 
        </div>
    ) 
}

export default Editbutton;