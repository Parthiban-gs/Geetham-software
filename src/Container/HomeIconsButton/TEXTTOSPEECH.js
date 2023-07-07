// import React, { useEffect } from 'react';

// const TextToSpeech = () => {

//   const handleOnClick =()=>{ 
//     // const text ="HI welcome to gettham soft pvt ltd";
//     const text ="Core java, Advance java, Python, Angular, React js, Node Js,Manual Testing, Backend developer,Data base admin, ruby on rails, AIML, Big Data, Algorithm, Wire frame, Cloud computing, DevOpsSales force CRM, Scrum, IoT, Embedded, Robotics, Micro servic Core java, Advance java, PythonAngular, React js, Node Js, Manual Testing, Backend developer, Data base admin, ruby rails, AIMLBig Data, Algorithm, Wire frame, Cloud computing, DevOps, Sales force CRM, Scrum, Embedded, Robotics, Micro service..";
    
    
//     const value = new  SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(value);
   
// }







//   useEffect(() => {
//     const initializeTextToSpeech = () => {
//       const $voicelist = window.$('#voices');
//       const text ="Core java, Advance java, Python, Angular, React js, Node Js,Manual Testing, Backend developer,Data base admin, ruby on rails, AIML, Big Data, Algorithm, Wire frame, Cloud computing, DevOpsSales force CRM, Scrum, IoT, Embedded, Robotics, Micro servic Core java, Advance java, PythonAngular, React js, Node Js, Manual Testing, Backend developer, Data base admin, ruby rails, AIMLBig Data, Algorithm, Wire frame, Cloud computing, DevOps, Sales force CRM, Scrum, Embedded, Robotics, Micro service..";
     
//     const value = new  SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(value);

      

//       if (!('speechSynthesis' in window)) {
//         const modal = window.$('#modal1');
//         modal.modal();
//         modal.modal('open');
//         return;
//       }

//       const synthesis = window.speechSynthesis;

//       const populateVoices = () => {
//         if ($voicelist.find('option').length === 0) {
//           synthesis.getVoices().forEach((voice, index) => {
//             const $option = window
//               .$
//               .parseHTML(`< value="${index}">${voice.name}${voice.default ? ' (default)' : ''}`);
//             $voicelist.append();
//           });

//           $voicelist.material_select();
//         }
//       };

//       populateVoices();

//       if (synthesis.onvoiceschanged !== undefined) {
//         synthesis.onvoiceschanged = populateVoices;
//       }

//       const speakButton = window.$('#speak');
//       speakButton.click(() => {
//         const text ="Core java, Advance java, Python, Angular, React js, Node Js,Manual Testing, Backend developer,Data base admin, ruby on rails, AIML, Big Data, Algorithm, Wire frame, Cloud computing, DevOpsSales force CRM, Scrum, IoT, Embedded, Robotics, Micro servic Core java, Advance java, PythonAngular, React js, Node Js, Manual Testing, Backend developer, Data base admin, ruby rails, AIMLBig Data, Algorithm, Wire frame, Cloud computing, DevOps, Sales force CRM, Scrum, Embedded, Robotics, Micro service..";
     
//         const value = new  SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(value);
    
//         const msg = new SpeechSynthesisUtterance();
//         const voices = synthesis.getVoices();
//         msg.voice = voices[window.$('#voices').val()];
 
//         msg.onend = (e) => {
//           console.log('Finished in ' + e.elapsedTime + ' seconds.');
//         };

//         synthesis.speak(msg);
//       });
//     };

//   //   initializeTextToSpeech();
//   // }, []);
                                                

//   return (
//     <div className="container">
//       <div className="row">
//         <nav>
//           <div className="nav-wrapper">
//             <div className="col s12">
//               <a href="#" className="brand-logo">Text to speech example</a>
//             </div>
//           </div>
//         </nav>
//       </div>
//       <form className="col s8 offset-s2">
       
      
        
//         <a href="#" id="speak" className="waves-effect waves-light btn">Speak</a>
//       </form>
//       <div id="modal1" className="modal">
//         <h4>Speech Synthesis not supported</h4>
//         <p>Your browser does not support speech synthesis.</p>
//         <p>We recommend you use Google Chrome.</p>
//         <div className="action-bar">
//           <a href="#" className="waves-effect waves-green btn-flat modal-action modal-close">Close</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextToSpeech;
