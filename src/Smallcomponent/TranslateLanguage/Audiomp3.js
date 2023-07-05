// import React, { useState, useRef } from 'react';
// import "../TranslateLanguage/Audiomp3.css"

// const Audiomp3 = () => {
//   const [currentTime, setCurrentTime] = useState(0);
//   const [totalTime, setTotalTime] = useState(0);
//   const [progressWidth, setProgressWidth] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const audioPlayerRef = useRef(null);

//   const togglePlay = () => {
//     const audioPlayer = audioPlayerRef.current;
//     if (audioPlayer.paused) {
//       audioPlayer.play();
//     } else {
//       audioPlayer.pause();
//     }
//   };

//   const updateProgress = () => {
//     const audioPlayer = audioPlayerRef.current;
//     const current = audioPlayer.currentTime;
//     const percent = (current / audioPlayer.duration) * 100;
//     setProgressWidth(percent);
//     setCurrentTime(current);
//   };

//   const updateVolume = () => {
//     const audioPlayer = audioPlayerRef.current;
//     setVolume(audioPlayer.volume);
//   };

//   const makePlay = () => {
//     // Handle play state changes
//   };

//   const handleRangeChange = (event, handler) => {
//     if (event.target.parentElement.parentElement === audioPlayerRef.current) {
//       handler(event);
//     }
//   };

//   const formatTime = (time) => {
//     const min = Math.floor(time / 60);
//     const sec = Math.floor(time % 60);
//     return min + ':' + (sec < 10 ? '0' + sec : sec);
//   };

//   return (
//     <div className="green-audio-player">
//       {/* HTML markup here */}
//       <audio
//         ref={audioPlayerRef}
//         onTimeUpdate={updateProgress}
//         onVolumeChange={updateVolume}
//         onLoadedMetadata={() => setTotalTime(audioPlayerRef.current.duration)}
//         onEnded={() => {
//           audioPlayerRef.current.currentTime = 0;
//         }}
//         crossOrigin="anonymous"
//       >
//         <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3" type="audio/mpeg" />
//       </audio>
//     </div>
//   );
// };

// export default Audiomp3;
