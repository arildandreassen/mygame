import React, { useState } from "react";
import BoardSection from "./Board/BoardSection";
import PlayerSection from "./Players/PlayerSection";
import InfoSection from "./Info/InfoSection";
import "../../style/wallstreet/game.css";

const Game = () => {
  // const [players, updatePlayer] = useState([]);
  const [players, updatePlayer] = useState([
    {
      player: "player1",
      name: "Arild",
      funds: 1000,
      location: 1,
      color: "yellow",
    },
    {
      player: "player2",
      name: "Frode",
      funds: 1000,
      location: 1,
      color: "red",
    },
  ]);

  const [whosTurn, updateWhosTurn] = useState(0);

  const [currentPrices, setCurrentPrices] = useState({
    international: 250,
    domestic: 250,
    emerging: 250,
    retirement: 250,
    mutual: 250,
    options: 250,
  });

  const [rollMarker, setRollMarker] = useState([]);

  const addPlayer = () => {
    const id = Math.floor(Math.random() * 100000);
    const name = prompt("what is your name?");
    const player = `player${players.length + 1}`;
    updatePlayer([
      ...players,
      { player, name, funds: 1000, location: 1, color: "green" },
    ]);
  };

  const showRollMarker = async (previousLocation, acutalLocation) => {
    return new Promise((resolve, reject) => {
      const rollMarker = [];
      for (let i = previousLocation + 1; i <= acutalLocation; i++) {
        rollMarker.push(i);
      }
      setRollMarker(rollMarker);
      setTimeout(() => {
        resolve();
        setRollMarker([]);
      }, 1000);
    });
  };

  const updatePlayerLocation = async (roll) => {
    const playerCount = players.length;
    const newPlayers = [...players];
    const previousLocation = newPlayers[whosTurn].location;
    const newLocation = previousLocation + roll;
    const actualLocation = newLocation > 56 ? newLocation - 56 : newLocation;

    await showRollMarker(previousLocation, actualLocation);

    newPlayers[whosTurn].location = actualLocation;
    updatePlayer(newPlayers);

    const newWhosTurn = whosTurn !== playerCount - 1 ? whosTurn + 1 : 0;
    updateWhosTurn(newWhosTurn);
  };

  const updateCurrentPrices = (market, price) => {
    const currently = currentPrices[market];
    setCurrentPrices({ ...currentPrices, [market]: price });
  };

  return (
    <div className="game">
      <div className="players">
        <PlayerSection players={players} addPlayer={addPlayer} />
      </div>
      <div>
        <BoardSection
          updateCurrentPrices={updateCurrentPrices}
          currentPrices={currentPrices}
          players={players}
          whosTurn={whosTurn}
          rollMarker={rollMarker}
        />
      </div>
      <div>
        <InfoSection
          updatePlayer={updatePlayer}
          updatePlayerLocation={updatePlayerLocation}
          updateCurrentPrices={updateCurrentPrices}
          currentPrices={currentPrices}
          players={players}
          whosTurn={whosTurn}
        />
      </div>
    </div>
  );
};

export default Game;
