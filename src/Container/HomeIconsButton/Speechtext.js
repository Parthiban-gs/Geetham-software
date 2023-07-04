import React from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
import   "../HomeIconsButton/Speechtext.css"
// import { useState } from "react";

const Speechtext = () => {
	// const [text, setText] = useState('');
	// const { speak } = useSpeechSynthesis();

    const handleOnClick =()=>{ 
        const text ="HI welcome to gettham soft pvt ltd";
        
        
        
        
        const value = new  SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
       
    }

    
	return (
		<div>
          
				{/* <p >Text To Speech Converter Using React Js</p> */}
		
         
			 {/* <textarea	className="textAreaStyle"
          onChange={(e) =>{setText(e.target.value)}}></textarea>  */}
                				<button className="speechbuttonStye" onClick={handleOnClick}>play</button>

         
		</div>
	);
};
export default Speechtext;

