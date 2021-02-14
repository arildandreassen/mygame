import React, { useState } from "react";
import BoardSection from "./BoardSection";
import PlayerSection from "./PlayerSection";
import InfoSection from "./InfoSection";
import "../../style/wallstreet/game.css";

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
        <PlayerSection />
      </div>
      <div>
        <BoardSection location={location} />
      </div>
      <div>
        <InfoSection updateLocation={updateLocation} />
      </div>
    </div>
  );
};

export default Game;
