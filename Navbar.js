import React from "react";
import '../Style/Navbar.css';
import Items from "../Navfolder/Items";
import Logo from "../Navfolder/Logo";
import Pages from '../Navfolder/Pages';
// import '../Style/Navbar.css';
// import { Button } from 'react-bootstrap';


function Navbar() {
    return (
        <>
        {/* <Button /> */}
        <div className= "navbar-all-content"> 
       <Items />
       <Logo />
       <Pages />
       
       </div>
        </>
    )
}

export default Navbar;