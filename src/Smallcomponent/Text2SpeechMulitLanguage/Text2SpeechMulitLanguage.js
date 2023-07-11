


import React, { useState, useEffect } from "react";
import {useSpeechSynthesis} from 'react-speech-kit'

import STOP from "../../asset/stop.svg"
import PAUSE from "../../asset/TexttoSpeechIcons/pause.svg"
import "../../Smallcomponent/Text2SpeechMulitLanguage/Text2SpeechMulitLanguage.css"
import PLAY from "../../asset/TexttoSpeechIcons/play.svg"
import TEXTLAUNGUAGETRANSULATE from "../../asset/TexttoSpeechIcons/textreadlaungu.svg"




const Text2SpeechMulitLanguage = ({ text }) => {

  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false)
  const { speak,cancel} = useSpeechSynthesis()


  const [rate, setRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0)



  

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);

    synth.addEventListener("voiceschanged", () => {
      const voices = synth.getVoices();
      setVoice(voices[0]);

    });

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", () => {
        setVoice(null);
      });
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      utterance.rate = rate;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    setIsPaused(true);
    synth.pause();
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    setIsPaused(false);
    synth.cancel();
  };

  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value));
  };

 

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };





  

  useEffect(() => {
    if (isSpeaking) {
      const startTime = Date.now()

      speak({
        text,
        onEnd: () => {
          const endTime = Date.now()
          const duration = (endTime - startTime) / 1000
          setCurrentTime(duration)
          setIsSpeaking(false)
        },
      })
    } else {
      cancel()
    }
  }, [isSpeaking, text, cancel])

  console.log(currentTime)
  useEffect(() => {
    if (isSpeaking) {
      const timer = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1)
      }, 1000)

      if (timer === 17) {
        clearInterval(timer)
        cancel()
      }

      return () => {
        clearInterval(timer)
      }
    }
    return () => {}
  }, [isSpeaking])


  const formatDuration = duration => {
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')
    return `${formattedMinutes}:${formattedSeconds}`
  }


  return (
    <div>
      

      <br />


      <br />

 

<div className="texttospeech-all-buttons">

      <button className="TTSB_btttn1" onClick={handlePlay}><img style={{height:"20",width:"20"}} src={PLAY} alt="img"/></button>
      <button className="TTSB_btttn2" onClick={handlePause}><img style={{height:"10px",width:"10"}} src={PAUSE} alt="img"/></button>
      <button className="TTSB_btttn3" onClick={handleStop}> <img style={{height:"20",width:"20"}} src={STOP} alt="img"/></button>
      <button className="TTSB_btttn4" onChange={handleRateChange} style={{fontSize:"20px" ,marginTop:"-50px 0px 0px 0px"}}> 1x</button>
      <p className="Texttospeak-time"   style={{ fontFamily: 'Alumni Sans',margin:'-22px 0px 0px 90px ' , position:'absolute'}}>{formatDuration(currentTime)} / 00:17 sec listen...</p>

       
      </div>
     
    
      


<br />
      <label>
      <img src={TEXTLAUNGUAGETRANSULATE} alt="img"/>
        <select  style={{width:"200px"}} value={voice?.name} onChange={handleVoiceChange}>
          {window.speechSynthesis.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </label>
 <br/>
    
      <br />
     


    </div>
  )
  
};


export default  Text2SpeechMulitLanguage
