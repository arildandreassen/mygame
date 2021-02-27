import React, { useState } from "react";
import "../../../style/wallstreet/investments.css";
import "../../../style/wallstreet/playerindicator.css";
import PlayerIndicator from "./PlayerIndicator";

const Investments = (props) => {
  const players = props.players;
  const markets = [
    "international",
    "domestic",
    "emerging",
    "retirement",
    "mutual",
    "options",
  ];

  const onDrop = (event) => {
    event.preventDefault();
    const target = event.target;
    const sourceId = event.dataTransfer.getData("sourceId");
    const parentId = event.dataTransfer.getData("parentId");
    const indicator = document.getElementById(sourceId);
    const players = props.players;
    const whosTurn = props.whosTurn;
    const prices = props.currentPrices;
    const newPlayers = [...players];
    const currentFunds = newPlayers[whosTurn].funds;

    indicator.style.display = "block";
    target.appendChild(indicator);

    const [targetMarket, marker] = target.id.split("-");
    const [sourceMarket, sourceMarker] = parentId.split("-");

    if (targetMarket && !sourceMarket) {
      newPlayers[whosTurn].funds = currentFunds - prices[targetMarket];
      props.updatePlayer(newPlayers);
      props.updateCurrentPrices(targetMarket, +50);
    }
    if (sourceMarket && !targetMarket) {
      newPlayers[whosTurn].funds = currentFunds + prices[sourceMarket];
      props.updatePlayer(newPlayers);
      props.updateCurrentPrices(sourceMarket, -50);
    }
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="investments infoCard">
      <div className="investmentMarkets">
        {markets.map((market) => {
          return (
            <div key={market} className="investmentMarket">
              <div className="investmentHeader">{market}</div>
              <div className="investmentTiles">
                <div
                  id={`${market}-1`}
                  className="investmentTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                ></div>
                <div
                  id={`${market}-2`}
                  className="investmentTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                ></div>
                <div
                  id={`${market}-3`}
                  className="investmentTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                ></div>
                <div
                  id={`${market}-4`}
                  className="investmentTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="playerInvestments">
        {players.map((player) => {
          return (
            <div key={player.name} className="playerInvestment">
              <div>{player.name}</div>
              <div className="playerTiles">
                <div
                  className="playerTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                >
                  <PlayerIndicator
                    id={`${player.name}-1`}
                    updateCurrentPrices={props.updateCurrentPrices}
                    currentPrices={props.currentPrices}
                  />
                </div>
                <div
                  className="playerTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                >
                  <PlayerIndicator
                    id={`${player.name}-2`}
                    updateCurrentPrices={props.updateCurrentPrices}
                    currentPrices={props.currentPrices}
                  />
                </div>
                <div
                  className="playerTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                >
                  <PlayerIndicator
                    id={`${player.name}-3`}
                    updateCurrentPrices={props.updateCurrentPrices}
                    currentPrices={props.currentPrices}
                  />
                </div>
                <div
                  className="playerTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                >
                  <PlayerIndicator
                    id={`${player.name}-4`}
                    updateCurrentPrices={props.updateCurrentPrices}
                    currentPrices={props.currentPrices}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Investments;
