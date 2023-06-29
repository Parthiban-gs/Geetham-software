import React, { useState } from 'react';

function Range() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input type="range" value={value} onChange={handleChange} />

      <div id="h4-container">
        <div id="h4-subcontainer">
          <h4>
            {value}
            <span></span>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Range;