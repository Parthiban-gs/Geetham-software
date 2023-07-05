import React from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
import   "../HomeIconsButton/Speechtext.css"
// import { useState } from "react";

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
		<div className="audio-all-ui-a">
          
				{/* <p >Text To Speech Converter Using React Js</p> */}
		
         
			 {/* <textarea	className="textAreaStyle"
          onChange={(e) =>{setText(e.target.value)}}></textarea>  */}



          <div >
        <button className="speechbuttonStye" onClick={handleOnClick}>play</button>

        </div>



	<div> <audio controls  >
    <source src="http://physical-authority.surge.sh/music/2.mp3"/>
    </audio>
	</div>


{/* 
    <audio
        controls
        src="" onClick={handleOnClick}>
            <a href="">
                Download audio
            </a>
    </audio> */}


								

         
		</div>
	);
};
export default Speechtext;

