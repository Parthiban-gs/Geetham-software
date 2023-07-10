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

 
   
    const text =
      "Core java, Advance java, Python, Angular, React js, Node Js,Manual Testing, Backend developer,Our newly established  construction company requires investments for the project expansions Our newly established   construction   company    requires  investments for the project    expansion,  we  are  open  for   investors  and  Our one    established  construction  company requires  investments  for  the projection,  we  are open for investors  and  our   newly  established     construing    company    requires investment for the project expansion Our newly established  construction company requires investments for the project expansions Our newly established   construction   company    requires  investments for the project    expansion,  we  are  open  for   investors  and  Our one    established  construction  company requires  investments  for  the projection,  we  are open for investors  and  our   newly  established     construing    company    requires investment for the project expansion";



  return (
    <>
    {/* <Router >
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />

        <Route path="/fjob" component={Fjob} />
        <Route path="/blooddonors" component={Blooddonors} />
      </Router> */}
      <p>{text}</p>
      <Text2SpeechMulitLanguage text={text}/>
     
   
      
    </>
  );
}

export default App;
 