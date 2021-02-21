import React from "react";
import "../../../style/wallstreet/investments.css";
import "../../../style/wallstreet/playerindicator.css";
import PlayerIndicator from "./PlayerIndicator";

const Investments = (props) => {
  const players = ["arild", "frode", "vidar", "sigmund"];
  const markets = [
    "International",
    "Domestic",
    "Emerging",
    "Retirement",
    "Mutual",
    "Options",
  ];

  const drop = (event) => {
    event.preventDefault();
    const target = event.target;
    const targetCell = document.getElementById(target.parentNode.id);
    targetCell.querySelector("div").classList.add("playerindicator");
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
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  <div className="investmentTileBack"></div>
                </div>
                <div
                  id={`${market}-2`}
                  className="investmentTile"
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  <div className="investmentTileBack"></div>
                </div>
                <div
                  id={`${market}-3`}
                  className="investmentTile"
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  <div className="investmentTileBack"></div>
                </div>
                <div
                  id={`${market}-4`}
                  className="investmentTile"
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  <div className="investmentTileBack"></div>
                </div>
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
                <div>
                  <PlayerIndicator player={player} number={1} />
                </div>
                <div>
                  <PlayerIndicator player={player} number={2} />
                </div>
                <div>
                  <PlayerIndicator player={player} number={3} />
                </div>
                <div>
                  <PlayerIndicator player={player} number={4} />
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
