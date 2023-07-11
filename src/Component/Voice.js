// import {useEffect, useState} from 'react'
// import {useSpeechSynthesis} from 'react-speech-kit'
// // import {BiVolumeFull, BiSolidVolumeMute} from 'npm i react-icons'
// import Texttospeaker from "../asset/texttospeaker.svg"
// import Stop from "../asset/stop.svg"

// import '../Component/Voice.css'

// const Voice = () => {
//   const {speak, cancel} = useSpeechSynthesis()
//   const [isSpeaking, setIsSpeaking] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const text = 'Our newly established  construction company requires investments for the project expansions Our newly established   construction   company    requires  investments for the project    expansion,  we  are  open  for   investors  and  Our one    established  construction  company requires  investments  for  the projection,  we  are open for investors  and  our   newly  established     construing    company    requires investment for the project expansion Our newly established  construction company requires investmentsfor the project expansions Our newly established   construction   company    requires  investments for the project    expansion,  we  are  open  for   investors  and  Our one    established  construction  company requires  investments  for  the projection,  we  are open for investors  and  our   newly  established     construing    company    requires investment for the project expansion'

//   const handleSpeak = () => {
//     setIsSpeaking(true)
//   }

//   const handleStop = () => {
//     setIsSpeaking(false)
//     cancel()
//   }

//   useEffect(() => {
//     if (isSpeaking) {
//       const startTime = Date.now()

//       speak({
//         text,
//         onEnd: () => {
//           const endTime = Date.now()
//           const duration = (endTime - startTime) / 1000
//           setCurrentTime(duration)
//           setIsSpeaking(false)
//         },
//       })
//     } else {
//       cancel()
//     }
//   }, [isSpeaking, text, cancel])

//   console.log(currentTime)

//   useEffect(() => {
//     if (isSpeaking) {
//       const timer = setInterval(() => {
//         setCurrentTime(prevTime => prevTime + 1)
//       }, 1000)

//       if (timer === 17) {
//         clearInterval(timer)
//         cancel()
//       }

//       return () => {
//         clearInterval(timer)
//       }
//     }
//     return () => {}
//   }, [isSpeaking])

//   const formatDuration = duration => {
//     const minutes = Math.floor(duration / 60)
//     const seconds = Math.floor(duration % 60)
//     const formattedMinutes = minutes.toString().padStart(2, '0')
//     const formattedSeconds = seconds.toString().padStart(2, '0')
//     return `${formattedMinutes}:${formattedSeconds}`
//   }

//   return (
//     <div className="Texttospeak-bg-conter">
//       <p className="Texttospeak-heading"   style={{ fontFamily: 'Alumni Sans'}}>{text}</p>
//       <div className="Texttospeak-icons-btton">
//         <button className="texttospechstart-btton" type="button" onClick={handleSpeak}>
//           <img src={Texttospeaker} alt="img"/>
//         </button>
//         <button className="texttospechstop-btton" type="button" onClick={handleStop}>
//           <img src={Stop} alt="img"/>
//         </button>
//         </div>
//         <p className="Texttospeak-time"   style={{ fontFamily: 'Alumni Sans'}}>{formatDuration(currentTime)} / 00:17 sec listen...</p>
     
       
//     </div>
//   )
// }

// export default Voice