import React, { useState } from "react";
import "../../../style/wallstreet/investments.css";
import "../../../style/wallstreet/playerindicator.css";
import PlayerIndicator from "./PlayerIndicator";

const Investments = (props) => {
  const players = ["arild", "frode", "vidar", "sigmund"];
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
    indicator.style.display = "block";
    target.appendChild(indicator);

    const [targetMarket, marker] = target.id.split("-");
    const [sourceMarket, sourceMarker] = parentId.split("-");

    if (targetMarket && !sourceMarket) {
      console.log("first");

      props.updateCurrentPrices(targetMarket, +50);
    }
    if (sourceMarket && !targetMarket) {
      console.log("third");

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
            <div key={player} className="playerInvestment">
              <div>{player}</div>
              <div className="playerTiles">
                <div
                  className="playerTile"
                  onDrop={onDrop}
                  onDragOver={dragOver}
                >
                  <PlayerIndicator
                    id={`${player}-1`}
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
                    id={`${player}-2`}
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
                    id={`${player}-3`}
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
                    id={`${player}-4`}
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
