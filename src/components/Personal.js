import React from 'react';

const Personal = (props) => {
  return (
    <div>
      <p>me llamo {props.personal[0]}</p>
      <p>naci el {props.personal[1]}</p>
      <p>mi email es {props.personal[2]}</p>
      <p>mi telefono es {props.personal[3]}</p>
    </div>
  );
};

export default Personal;
