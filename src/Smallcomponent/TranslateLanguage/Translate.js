// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// // import Translation from "../src/Component/Translation";
// import TranslateBackend from '../TranslateLanguage/TranslateBackend'
// // import "../src/App.css"
  




// const languages = [
//   { value: '', text: "Options" },
//   { value: 'en', text: "English" },
//   { value: 'en', text: "English" },
//   { value: 'hi', text: "Hindi" },
//   { value: 'ml', text: "Malayalam" },
//   { value: 'hi', text: "Hindi" },
//   { value: 'hi', text: "Hindi" },
//   { value: 'bn', text: "Bengali" }
// ];



// function Translate() {
//   const { t } = useTranslation();
//   const [lang, setLang] = useState('en');

//   const handleChange = e => {
//       setLang(e.target.value);
//       let loc = "http://localhost:3000/";
//       window.location.replace(loc + "?lng=" + e.target.value);
//   };

//   return (
//       <div className="App">
//           <div className='Translate-lang'>{t('')}</div>
//           {/* <label className='choos'>{t('choose')}</label> */}

//           <select value={lang} onChange={handleChange}>
//               {languages.map(item => (
//                   <option key={item.value} value={item.value}>
//                       {item.text}
//                   </option>
//               ))}
//           </select>
//       </div>
//   );
// }


// export default Translate