import React from "react";
import { Link } from "react-router-dom";
import "../Component/navbar.css"
import logo from "../asset/logo.svg"
import home from "../asset/home.svg"
import build from "../asset/build.png"
import star from "../asset/Vectorlogo.svg"
import traingle from "../asset/Group 1791traingle logo.svg"
import radio from "../asset/audio.svg"
import edit from "../asset/Vector 273pen.svg"
import bell from "../asset/bell.png"
import person from "../asset/Mapsicle Mapvijay.svg"
import Home from "../asset/naviconNames/Home.svg"



function Navbar() {
    return (
        <>




<div className="over-all-navbar">

<div class="container">
  <div class="row">
    <div  class="col">
     
  <div className="nav-1-coloum-all">
  
    <img className="nav-1-logo" src={logo} 
             />   
     {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
      <div className="list-inline-item">
      <div className="nav-1-dreamfocus" 
    //   style={{

    //         fontfamily: 'Alumni Sans',
    //         fontStyle: 'normal',
    //         fontWeight: '700',
    //         fontSize: '30px',
    //         lineHeight: '30px',
    //         letterSpacing: '0.1em',
    //         color: '#1B291F',
    //         marginLeft: '4px',
    //         marginTop: '18px'
    //     }}
    >
            Dreamsfocus
          </div>
          </div>

          </div>





    </div>
    <div class="col">
     
    <div className="nav-2nd-content">
        <Link to="/fjob">    <li  className="list-inline-item" >
            <img className="nav-busi-spot-icon" src={home} alt="home" />
            <h6 className='navba1-name' style={{ fontFamily: 'Alumni Sans', height:'28px',
    width: '25px',
    padding:'0px 0px 0px 25px',
    textalign:'center',
fontsize:'25px',
fontfamily:'Alumni Sans',
letterspacing:'2.5px',
color: '#4285F4',
fontWeight:'bold' 

    }} >Home</h6>
        </li> </Link>
        <Link   to="/fjob"  >   <li  className="list-inline-item">
            <img className="nav-busi-spot-icon" src={build} alt="build" 
                  /> 
            <h6 className='navba1-name' style={{ fontFamily: 'Alumni Sans',fontWeight:'bold' }} >Business spot</h6>

            </li> </Link>
            <Link to="/fjob">  <li className="list-inline-item" >
            <img className="nav-busi-spot-icon" src={star} alt="star"  style={{margin:'0px 0px 0px 18px'}}/> <span class="badgeone">9+</span>
            <h6 className='navba1-name'style={{ fontFamily: 'Alumni Sans',fontWeight:'bold'  }}>Nearby you</h6>

            </li> </Link>
           
            <Link to="/fjob">  <li className="list-inline-item" >
            <img className="nav-busi-spot-icon" src={traingle} alt="traingle" style={{margin:'0px 0px 0px 5px'}} /><span class="badgethree">New</span>
            <h6 className='navba1-name' style={{ fontFamily: 'Alumni Sans',fontWeight:'bold'  }}>I B N</h6>


            </li> </Link>
            <Link to="/fjob"><li className="list-inline-item" >
            <img className="nav-busi-spot-icon" src={radio} style={{marginLeft:'30px'}} /><span class="badgeone">9+</span>
            <h6 className='navba1-name' style={{ fontFamily: 'Alumni Sans' ,fontWeight:'bold'  }}>Announcements</h6>

            </li> </Link>
   
        </div>     

    </div>







    <div class="col">
      
      <div className="navba1-3row-compo">

<Link to="/signin"><li className="list-inline-item" 

>
    <span className="nav-signin">SignIn</span>

</li> </Link>

{/* <Link to="/fjob"> <li className="list-inline-item" style={{ paddingLeft: '6px', fontFamily: 'Alumni Sans', fontSize: '20px' }}>
    <button className='badge rounded-pill btn-lg bg-dark'>Create an account</button>
    </li> </Link> */}
<span>
<Link to="/fjob"><li className="list-inline-item" style={{ paddingLeft: '6px' ,color: 'black'  }}>
    <img src={edit} alt="" style={{
       height: '30px',
       width: '30px'
    }} />
    <span className='name' style={{ fontFamily: 'Alumni Sans' }}>MyPost</span>
</li></Link> </span>
<Link to="/fjob">  <li className="list-inline-item" style={{ paddingLeft: '6px', marginTop: '2px' }}>
    <img src={bell} alt="" style={{
        height: '25px',
        width: '22px'
    }} /><span class="badgetwo">9+</span>
</li></Link>
<Link to="/fjob">   <li className="list-inline-item" style={{ padding: '6px 0px 0px 8px' ,color: 'black'  }}>
    <img src={person} alt="" style={{
        height: '40px',
        width: '40px',
     
    //  position:'absolute',
        margin:'-10px -2px 0px 0px '
    }} /><span class="badgetwo">9+</span>

</li></Link> 
</div>



   

     
    </div>
  </div>
</div>
</div>










        </>

    )
};

export default Navbar;
