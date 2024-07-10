import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Example from "./signupform";


function Signup() {
  const [data, setData] = useState({
    email: "",
    avtar: "",
    fname: "",
    lname: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [login, setlogin] = useState(false);
  const handleLogin =()=> setlogin(true);
  const handleData = (data) => setData({
    email: data.email,
    fname: data.fname,
    avtar: data.avtar,
    lname: data.lname,
  })
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  console.log(data);
  return ( 
    <div className="Signup">
      {login ? (
        <><div className="profileLogin"> <img src={data.avtar} />
          <p>{data.fname+" "+data.lname }</p></div>
         
        </>
      ) : (
        <>
          <p onClick={handleShowModal} style={{ margin: 0 }}>
            Create account <span className="blue">It's free</span>
           
          </p>

          <Example show={showModal} onHide={handleCloseModal} onLogin= {handleLogin} getData = {handleData}/> 
        </>
      )} <ArrowDropDownIcon />
    </div>
  );
}

export default Signup;
