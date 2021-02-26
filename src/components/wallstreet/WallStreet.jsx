import React, { useState } from "react";
import BoardSection from "./Board/BoardSection";
import PlayerSection from "./Players/PlayerSection";
import InfoSection from "./Info/InfoSection";
import "../../style/wallstreet/game.css";

const Game = () => {
  // const [players, updatePlayer] = useState([]);
  const [players, updatePlayer] = useState([
    { name: "Arild", funds: 1000 },
    { name: "frode", funds: 1000 },
  ]);
  const [location, setLocation] = useState(1);

  // const p = [{ name: "Arild" }];
  const addPlayer = () => {
    const id = Math.floor(Math.random() * 1000);
    const name = prompt("what is your name?");

    updatePlayer([...players, { name, funds: 1000 }]);
  };

  const [currentPrices, setCurrentPrices] = useState({
    international: 250,
    domestic: 250,
    emerging: 250,
    retirement: 250,
    mutual: 250,
    options: 250,
  });

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
  };

  const updateCurrentPrices = (market, price) => {
    const currently = currentPrices[market];
    setCurrentPrices({ ...currentPrices, [market]: currently + price });
  };

  return (
    <div className="game">
      <div className="players">
        <PlayerSection players={players} addPlayer={addPlayer} />
      </div>
      <div>
        <BoardSection
          location={location}
          updateCurrentPrices={updateCurrentPrices}
          currentPrices={currentPrices}
        />
      </div>
      <div>
        <InfoSection
          updateLocation={updateLocation}
          updateCurrentPrices={updateCurrentPrices}
          currentPrices={currentPrices}
          players={players}
        />
      </div>
    </div>
  );
};

export default Game;
