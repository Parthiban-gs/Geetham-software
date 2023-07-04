import React from 'react';
import { Link } from "react-router-dom";
import "../Component/navbar2.css"
import Candidate from "../asset/secondnav-icon/candidate.png"
import Bdoner from "../asset/secondnav-icon/bdoner.png"
import VectorSocial from "../asset/secondnav-icon/VectorSocial.png"
import Vector from "../asset/secondnav-icon/Vector.png"
import Foodfunds from "../asset/secondnav-icon/VectorFood.png"
import Heplers from "../asset/secondnav-icon/heplers.png"
import Navsearchicon from "../asset/nav-search-icon.svg"
// import NavDropdown from "../Smallcomponent/NavDropdown"
import SideNavbar from "../Smallcomponent/SideNavbar"


// import Fjob from "../Container/HomeIconsButton/Fjob"
// import { useNavigate } from "react-router-dom";



const Navbar2 = () => {
  // const navigate = useNavigate();
  // const sendSubmit = () => {
  //   navigate.push("/FindJob");
  // };
  return (
    <>



    <div className='navbar2-alll'>
      <nav class="navbar  navbar-light ">
        <div class="container-fluid">
         
   

        <div style={{paddingTop:"-50px"}}>
      <SideNavbar/>
    </div> 
           



 






{/* 
      <div>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </li>
      </div> */}



          <div className='nav-search-all'>
          <input type='search' style={{ fontFamily: 'Alumni Sans',height:'27px', width:'350px',  marginTop:'-6px',fontWeight:'280px'}} className='form-control' placeholder='Search jobs, business opportunities, investments, nearby services and profiles' /><span><a href=''> <img className='from-search-btn' src={Navsearchicon} alt="mapdes-blue"
          /></a></span>
          </div>


          <div className='nav2-rightside'>

            <div class="container">
              <div class="row">


                <div class="col">

                  <div className="nav2-icons-btn">
                    <ul className='list-inline'>
                  
         <Link to={"./fjob"}><li className='list-inline-item'>
                        <button  className='nav2right-btn' style={{height:"30px"}}><span className='n2-right-btn-name'>
                          <img src={Candidate} alt="image"/>
                           Findjob </span><span  class="badgefour"><span style={{color: '#4285F4',fontWeight:"bold"}}>(</span><span>99</span><span style={{color: '#4285F4'}}>)</span></span></button>
                      </li></Link>
          <Link to="/fjob">   <li className='list-inline-item'>
                        <button  className='nav2right-btn' style={{height:"30px"}}>  <span className='n2-right-btn-name'><img src={Bdoner} alt="image" style={{
                          height: '13px',
                          width: '13px'
                          ,fontWeight:"bold"
                        }} /> Blood donors </span><span  className="badgefour"><span style={{color: '#4285F4',fontWeight:"bold"}}>(</span><span>99</span><span style={{color: '#4285F4'}}>)</span></span></button>
                      </li></Link>
        <Link to="/fjob">  <li className='list-inline-item'>
                        <button to="" className='nav2right-btn'style={{height:"30px"}}> <span className='n2-right-btn-name'><img src={Vector} alt="image" style={{
                          height: '13px',
                          width: '13px'
                          ,fontWeight:"bold"
                        }} /> Volunteers</span><span  className="badgefour"><span style={{color: '#4285F4',fontWeight:"bold"}}>(</span><span>99</span><span style={{color: '#4285F4'}}>)</span></span></button>
                       </li></Link>
      <Link to="/fjob">     <li className='list-inline-item'>
                        <button to="" className='nav2right-btn' style={{height:"30px"}}> <span className='n2-right-btn-name'><img src={VectorSocial} alt="image" style={{
                          height: '13px',  
                          width: '13px'
                          ,fontWeight:"bold"
                        }} />Social workers</span><span  className="badgefour"><span style={{color: '#4285F4',fontWeight:"bold"}}>(</span><span>99</span><span style={{color: '#4285F4'}}>)</span></span></button>
                  </li></Link>
     <Link to="/fjob">    <li className='list-inline-item'>
                        <button to="/findjob" className='nav2right-btn'style={{height:"30px"}} > <span className='n2-right-btn-name'><img src={Foodfunds} alt="image" style={{
                          height: '13px',
                          width: '13px'
                          ,fontWeight:"bold"
                        }} /> Foods&Funds donors</span><span  className="badgefour"><span style={{color: '#4285F4',fontWeight:"bold"}}>(</span><span>99</span><span style={{color: '#4285F4'}}>)</span></span></button>
                 </li></Link>
     <Link to="/fjob">     <li className='list-inline-item'>
                        <button to="" className='nav2right-btn' style={{height:"30px"}}> <span className='n2-right-btn-name'><img src={Heplers} alt="image" style={{
                          height: '13px',
                          width: '13px'
                          ,fontWeight:"bold"
                        }} /> Nearby helpers</span><span className="badgefour"><span style={{color: '#4285F4',fontWeight:"bold"}}>(</span><span>99</span><span style={{color: '#4285F4'}}>)</span></span></button>
                     </li></Link>

                     <hr></hr>

                    </ul>

                  </div>


                  {/* <button
        className="button"
        variant="contained"
        color="primary"
        size="large"
        onClick={sendSubmit}
      ></button> */}



                </div>
              </div>
            </div>
          </div>





        </div>
      </nav>

      </div>


    </>


  )
}

export default Navbar2
