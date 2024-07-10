import React from "react";
import Search from "./search";
import Signup from "./singup";
function Header(){
    return(<>
        <div className="navbar1">
            <img className="logo" src="logo.png" alt="logo"/>
            <Search/>
            <Signup/>
        </div>
        </>
    )
}

export default Header;