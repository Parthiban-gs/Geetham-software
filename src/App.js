// import Home from "./Container/Home"
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Fjob from "./Container/HomeIconsButton/Fjob";
import Blooddonors from "./Container/HomeIconsButton/Blooddonors";
import Home from "./Container/Home";
import Signin from "./Pagenation/Signin";
import Text2SpeechMulitLanguage from "./Smallcomponent/Text2SpeechMulitLanguage/Text2SpeechMulitLanguage";
// import Voice from "./Component/Voice";



function App() {

 
  



  return (
    <>
    <Router >
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />

        <Route path="/fjob" component={Fjob} />
        <Route path="/blooddonors" component={Blooddonors} />
      </Router>
    
     
   
      
    </>
  );
}

export default App;
 