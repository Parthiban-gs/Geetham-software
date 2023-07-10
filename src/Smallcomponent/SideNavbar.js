 

// import React, { useState } from 'react';
import "../Smallcomponent/SideNavbar.css";
import Dropdown from "../asset/nav-secon-icons-name/dropdown.svg"


const SideNavbar = () => {  


  return (
    <div >
    <div className="dropdown-icon-d">
  <button className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    <img src={Dropdown} alt="image" /> 
       
      </button>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Find jobs</a></li>
    <li><a className="dropdown-item" href="#">Blood donors</a></li>
    <li><a className="dropdown-item" href="#">Volunteers</a></li>
    <li><a className="dropdown-item" href="#">Social workers</a></li>
    <li><a className="dropdown-item" href="#">Foods & Funds donors</a></li>
    <li><a className="dropdown-item" href="#"> Nearby helpers</a></li>
  </ul>
  <span
      style={{ fontSize: '0px', cursor: 'pointer' }}>
 
    </span>
</div>
</div>
  );
};

export default SideNavbar;
