import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Navigation from "../component/Navigation";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

import Footer from "../Component/footer";

import SignpageleftSlide1 from "../asset/signpageimg/signpageleftSlide1.svg"
import SigninpageBusinessNetwork from "../asset/signpageimg/signinpageBusinessNetwork.svg"
import Centerverticalline from "../asset/centerverticalline.svg"
import Dreamfoucelogo from "../asset/signpageimg/dreamfoucelogo.svg"
import KEY from "../asset/Loginpageicon/keyicon.svg"
import GoogleLOGO from "../asset/Loginpageicon/googleLOGO.svg"
import FacebookLogo from "../asset/Loginpageicon/facebookLogo.svg"
import "../Pagenation/Signin.css"



function Signin() {

	
	// const navigation = useHistory();
	// const [user, setUser] =useState({
		
	// 	email: "",
	// 	password: "",
	// });

	// const handlechange = ({ target: { name, value } }) => {
	// 	setUser({ ...user, [name]: value })
	// }

	// const handlesubmit = async (e) => {
	// 	e.preventDefault();
	

	// 	try {
	// 		const res = await axios.post("", user);
	//         localStorage.setItem("auth",JSON.stringify(res.data));
	// 		navigation.push("/home")
	// 	} catch (error) {
	// 		console.log(error);

	// 	}

	// }




	  // read more..

	  const [isShowMore, setIsShowMore] = useState(false);

	  const toggleReadMoreLess = () => {
		setIsShowMore(!isShowMore);
	  };
	

	return (
		<>
		
		{/* <div className="login-bg">
			<div className="login-full">
				<section className="my-4 mx-5 cl">
					<div className="container login-container " >
						<div className="row login-row ">
							<div className="col-lg-5">

							</div>
							<div className="col-lg-7 login-form">
								<h1 className="login-name">Admin Login</h1>

								<form >
									<div className="from-row">
										<div className="col-lg-7">
											<input type="Email"
											name="email"
										
											 placeholder="Email-Address" 
											 className="log-form-control" />

										</div>

									</div>
									<div className="from-row">
										<div className="col-lg-7">
											<input type="password" 
											name="password"
										
											placeholder="******"
											 className="log-form-control" />

										</div>

									</div>
									<div className="from-row">
										<div className="col-lg-7">
											<button type="submit" 
											className="login-btn1">SIGN IN</button>
										</div>
									</div>

									<p className="log-do-not-acc">Don't have an account? </p>
									<Link to="/Register" className="log-rigister"> Create account</Link>
									<br />



								</form>
							
							</div>

						</div>
					</div>
				</section>
			</div>
			</div> */}
     {/* ////////////////////////////////////////////////////////// */}
   <div className="loginpage-leftfull">

		 <div style={{ fontFamily: 'Alumni Sans'}} class="d-flex bd-highlight">
  {/* <h4 class="p-2 flex-fill bd-highlight"><img src={SigninpageBusinessNetwork} alt="image" />I   B U S I N E S S  N E T W O R K </h4> */}
  <h4 class="p-2 flex-fill bd-highlight"><img src={Dreamfoucelogo} alt="image" />Dreams focus</h4>
  {/* <h4 class="p-2 flex-fill bd-highlight">11:47   Thursday - 06, july</h4> */}
</div>
</div>



<div>
<div class="container">
  <div class="row row-cols-2">
    <div class="col">
		<div  className="signpage-leftside-all"> 
		<div style={{ fontFamily: 'Alumni Sans', }}>
		<h4 className="signin-left-cont-heading1"  >NEVER LIMIT FOR DREAMS </h4>
		<div style={{width:"500px"}}>
		<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={SignpageleftSlide1} class="d-block w-100" alt="img"/>
    </div>
    <div class="carousel-item">
      <img src={SignpageleftSlide1} class="d-block w-100" alt="img"/>
    </div>
    <div class="carousel-item">
      <img src={SignpageleftSlide1} class="d-block w-100" alt="img"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
		</div>
		

		<h6 className="signleftpage-cont-3" style={{ fontFamily: 'Alumni Sans' }}>Dreams focus is Artificial intelligence AI solution, which connects people one to one in a 
 </h6>
		<h6 className="signleftpage-cont-4" style={{ fontFamily: 'Alumni Sans' }}> 
globalized way to fulfil their requirements and services </h6>
  
   <div className="signleftpage-cont-learnmore">
      {isShowMore && (
        <p  className="signleftpage-cont-5" style={{ fontFamily: 'Alumni Sans'}}>
         Dreams focus is Artificial intelligence AI solution, which connects people one to one in a
globalized way to fulfil their requirements and services
        </p>
      )}

		<a  style={{color:"#4285F4",fontFamily: 'Alumni Sans'}} onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Learn more " }
		about Dreams Focus
      </a>
	  </div>

		</div>
		</div>
		
		</div>

 


{/* Rightsidecontent */}

    <div class="col">
	{/* <div><img src={Centerverticalline} alt="image"  ></img></div> */}

		<form className="signin-form">
									<div className="from-row">
										
										<div className="col-lg-10">
											<input style={{height:"40px", width:"100%",}} type="User name"
											name="Enter user name or e-mail "
										
											 placeholder="Enter user name or e-mail " 
											 className="log-form-control" />

										</div>

									</div>
									<div className="from-row">
										<div className="col-lg-10">
											<input style={{height:"40px", width:"100%",}} type="password" 
											name="password"
										
											placeholder="Enter password "
											 className="log-form-control" />

										</div>
										
									</div >
									
								
									<div >
                                     <div style={{display:"flex", paddingTop:"9px"}}>                                    
									<div><button  className='signin-forgetpas' ><span style={{fontSize:'1rem', fontWeight:"500",fontFamily: 'Alumni Sans'}} >
                          <img style={{height:"13px",width:"13px",fontWeight:"bold"}} src={KEY} alt="image"/>
						  Forgot password  </span></button></div>
									<div style={{paddingLeft:"130px", paddingtop:"0px"}}>
									<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
								<label class="form-check-label" for="exampleCheck1"><h6 style={{fontSize:'1rem', fontWeight:"500",fontFamily: 'Alumni Sans' }}>Remember me</h6></label>
									</div>
									</div> 
								   </div>	

								  
								   <div className="log-botton"> <button className="login-botton">Login</button></div>

							<div style={{paddingTop:"10px",paddingLeft:"70px"}}>   <p style={{fontSize:'1rem', fontWeight:"500",fontFamily: 'Alumni Sans'}}>If you don’t have an account?<a style={{fontSize:'1rem', fontWeight:"bloder",fontFamily: 'Alumni Sans',color:"#4285F4"}}>Create </a>  </p></div>

							<div className="log-or-line"><hr></hr></div><span className="log-or-desine" >or</span>	
							                         

							<div className="google-fb-botton">
								<button style={{width:"350px",backgroundColor:"transparent", borderRadius:"8px"}}> <img src={GoogleLOGO} alt="img"/>Login with Google</button>
								                <br/>
								                <br/>
								                
								               
								<button style={{width:"350px",backgroundColor:"transparent", borderRadius:"8px"}}> <img src={FacebookLogo} alt="img"/>Login with Facebook</button>
							</div>

                                    <a style={{ paddingLeft:"90px", fontSize:'1rem', fontWeight:"bloder",fontFamily: 'Alumni Sans',color:"#4285F4"}}>Learn more? <span style={{fontFamily: 'Alumni Sans',color:'black'}}>about Dreams Focus</span></a>
                                                                                          <br/>
                                                                                        

                                   <h6 ><img style={{ paddingLeft:"30px",}} src={SigninpageBusinessNetwork} alt="img"/> I   B U S I N E S S    N E T W O R K </h6>



								</form></div>




	</div>


</div>

<Footer/>
</div>




		</>
	)
}

export default Signin