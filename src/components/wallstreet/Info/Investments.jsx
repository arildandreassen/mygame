import React from "react";
import "../../../style/wallstreet/investments.css";
import PlayerIndicator from "./PlayerIndicator";

const Investments = (props) => {
  const players = ["one", "two", "three", "four"];
  const markets = [
    "International",
    "Domestic",
    "Emerging",
    "Retirement",
    "Mutual",
    "Options",
  ];
  return (
    <div className="investments infoCard">
      <div className="investmentMarkets">
        {markets.map((market) => {
          return (
            <div className="investmentMarket">
              <div className="investmentHeader">{market}</div>
              <div className="investmentTiles">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="playerInvestments">
        {players.map((player) => {
          return (
            <div className="playerInvestment">
              <div>{player}</div>
              <div className="playerTiles">
                <div>
                  <PlayerIndicator />
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Investments;
