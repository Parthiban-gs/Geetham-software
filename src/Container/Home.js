import React from "react";
import Navbar from "../Component/navbar"
import Navbar2 from "../Component/navbar2";
import MapRightside from "../Component/MapRightside";
// import Slider from "../Component/slider";
import Footer from "../Component/footer";
import "../Container/Home.css"
import Fjob from "../Container/HomeIconsButton/Fjob"
import Audiomp3 from "../Smallcomponent/TranslateLanguage/Audiomp3"
import TextToSpeech from "./HomeIconsButton/TEXTTOSPEECH";



function Home() {
  // const[user,setUser]=useState('Tamil')
  return (
    <>
    <div className="nav-fixed-sticky">
  <Navbar/>
  <hr style={{marginTop:'-4px'}}></hr>
  <Navbar2/>
  </div>
  <div className="homethird-component">
  <MapRightside/>
  </div>
  <div className="footer-overall">
  <Footer/>
  </div>
    
  {/* <TextToSpeech/> */}
    </>
  );
}

export default Home;
 