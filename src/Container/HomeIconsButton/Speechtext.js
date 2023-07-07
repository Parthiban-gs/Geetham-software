import React from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
import   "../HomeIconsButton/Speechtext.css"
// import { useState } from "react";
// import SpeakerIcon from '../asset/SpeakerIcon.svg';




const Speechtext = () => {
	// const [text, setText] = useState('');
	// const { speak } = useSpeechSynthesis();

    const handleOnClick =()=>{ 
        // const text ="HI welcome to gettham soft pvt ltd";
        const text ="Core java, Advance java, Python, Angular, React js, Node Js,Manual Testing, Backend developer,Data base admin, ruby on rails, AIML, Big Data, Algorithm, Wire frame, Cloud computing, DevOpsSales force CRM, Scrum, IoT, Embedded, Robotics, Micro servic Core java, Advance java, PythonAngular, React js, Node Js, Manual Testing, Backend developer, Data base admin, ruby rails, AIMLBig Data, Algorithm, Wire frame, Cloud computing, DevOps, Sales force CRM, Scrum, Embedded, Robotics, Micro service..";
        
        
        const value = new  SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
       
    }
  



	return (
		<div className="">
          
				{/* <p >Text To Speech Converter Using React Js</p> */}
		
         
			 {/* <textarea	className="textAreaStyle"
          onChange={(e) =>{setText(e.target.value)}}></textarea>  */}



          <div >
        <a className="speechbuttonStye" onClick={handleOnClick}>play</a>
        {/* <img src={SpeakerIcon} alt='img' /> */}
        </div>

      



    <audio className="audo-demo"
        controls
        onClick={handleOnClick}>
     <a className="speechbuttonStye" onClick={handleOnClick}>play</a>

    </audio>

<br/>

<br/>


								

         
		</div>
	);
};
export default Speechtext;

