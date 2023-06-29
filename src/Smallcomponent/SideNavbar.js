// import React, { useState } from 'react';
// import "../Component/sideNavbar.css";


// function SideNavbar() {
//   const [sideNavWidth, setSideNavWidth] = useState('0px');

//   const openNav = () => {
//     setSideNavWidth('250px');
//   };
//   const closeNav = () => {
//   setSideNavWidth('0px');
//   };
//   return (
//     <div>
//     <div id="mySidenav" className="sidenav" style={{  fontFamily: 'Alumni Sans' }}>
//       <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
//         &times;
//       </a>
//       <a href="#" >Find jobs</a>
//       <a href="#">Blood donors</a>
//       <a href="#">Volunteers</a>
//       <a href="#">Social workers</a>
//       <a href="#"> Foods & Funds donors</a>
//       <a href="#"> Nearby helpers</a>
//     </div>

    
//     <span
//       style={{ fontSize: '30px', cursor: 'pointer' }}
//       onClick={openNav}
      
//       >
//       &#9776;
//     </span>
//   </div>
// );
// }

// export default SideNavbar;












   

import React from 'react';

const SideNavbar = () => {

  return (
    <div>
    <div class="dropdown">
  <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    i
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Find jobs</a></li>
    <li><a class="dropdown-item" href="#">Blood donors</a></li>
    <li><a class="dropdown-item" href="#">Volunteers</a></li>
    <li><a class="dropdown-item" href="#">Social workers</a></li>
    <li><a class="dropdown-item" href="#">Foods & Funds donors</a></li>
    <li><a class="dropdown-item" href="#"> Nearby helpers</a></li>
  </ul>
</div>
</div>
  );
};

export default SideNavbar;
