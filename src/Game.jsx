import React, { useState } from "react";
import Board from "./Board";
import Players from "./Players";
import Info from "./Info";

const Game = () => {
  const [location, setLocation] = useState(1);

  const rollDice = () => {
    const min = Math.ceil(1);
    const max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const updateLocation = () => {
    const roll = rollDice();
    const combined = location + roll;
    const newLocation = combined > 56 ? combined - 56 : combined;
    setLocation(newLocation);
    console.log(location);
  };
  return (
    <div className="game">
      <div className="players">
        <Players />
      </div>
      <div>
        <Board location={location} />
      </div>
      <div>
        <Info updateLocation={updateLocation} />
      </div>
    </div>
  );
};

export default Game;
