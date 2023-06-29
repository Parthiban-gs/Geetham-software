// import React, { useEffect } from 'react';
// import { useHistory } from "react-router-dom";


function Fjob() {

 

  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={{display:'flex',justifyContent:'center', backgroundColor:'black', color:'white', marginTop:'300px'}}>
      <button onClick={goBack} >Go Back</button>

    </div>

  );
}

export default Fjob;
