import React, { useState } from "react";

const Dice = (props) => {
  const [roll, updateRoll] = useState({});

  const rollDice = () => {
    const min = Math.ceil(1);
    const max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
  };
  return (
    <div className="dice">
      <button
        onClick={() => {
          const newRoll = rollDice();
          const whoRolls = props.players[props.whosTurn].name;
          updateRoll({ roll: newRoll, name: whoRolls });
          props.updatePlayerLocation(newRoll);
        }}
      >
        Roll Dice
      </button>
      <h4>{roll.name ? `${roll.name} rolled ${roll.roll}` : null} </h4>
    </div>
  );
};

export default Dice;
