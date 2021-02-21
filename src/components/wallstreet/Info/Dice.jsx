import React, { useState } from "react";

const Dice = (props) => {
  return (
    <div className="dice">
      <button onClick={props.updateLocation}>Roll Dice</button>
    </div>
  );
};

export default Dice;
