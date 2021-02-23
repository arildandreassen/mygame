import React, { useState } from "react";
import "../../../style/wallstreet/investments.css";
import "../../../style/wallstreet/playerindicator.css";
import PlayerIndicator from "./PlayerIndicator";

const Investments = (props) => {
  const [render, setRender] = useState({
    "international-1": {
      shouldRender: false,
    },
    "international-2": {
      shouldRender: false,
    },
    "international-3": {
      shouldRender: false,
    },
    "international-4": {
      shouldRender: false,
    },
    "domestic-1": {
      shouldRender: false,
    },
    "domestic-2": {
      shouldRender: false,
    },
    "domestic-3": {
      shouldRender: false,
    },
    "domestic-4": {
      shouldRender: false,
    },
    "emerging-1": {
      shouldRender: false,
    },
    "emerging-2": {
      shouldRender: false,
    },
    "emerging-3": {
      shouldRender: false,
    },
    "emerging-4": {
      shouldRender: false,
    },
    "retirement-1": {
      shouldRender: false,
    },
    "retirement-2": {
      shouldRender: false,
    },
    "retirement-3": {
      shouldRender: false,
    },
    "retirement-4": {
      shouldRender: false,
    },
    "mutual-1": {
      shouldRender: false,
    },
    "mutual-2": {
      shouldRender: false,
    },
    "mutual-3": {
      shouldRender: false,
    },
    "mutual-4": {
      shouldRender: false,
    },
    "options-1": {
      shouldRender: false,
    },
    "options-2": {
      shouldRender: false,
    },
    "options-3": {
      shouldRender: false,
    },
    "options-4": {
      shouldRender: false,
    },
  });
  const players = ["arild", "frode", "vidar", "sigmund"];
  const markets = [
    "international",
    "domestic",
    "emerging",
    "retirement",
    "mutual",
    "options",
  ];

  // const dragStart = (event) => {
  //   const target = event.target;
  //   // event.dataTransfer.setData("playerIndicator", target.id);
  //   // setTimeout(() => {
  //   //   target.style.display = "none";
  //   // }, 0);
  //   setTimeout(() => {
  //     target.remove();
  //   }, 0);
  // };

  const purchase = (event) => {
    event.preventDefault();
    const target = event.target;
    const targetCell = document.getElementById(target.id);
    const targetId = target.id;
    const sourceId = event.dataTransfer.getData("sourceId");
    const [owner, string, number] = sourceId.split("-");
    updateRender(targetId, owner, number);
    const [market, marker] = targetCell.id.split("-");
    const currentMarketPrice = props.currentPrices[market];
    props.updateCurrentPrices(market, currentMarketPrice + 50);
  };

  const sell = (event) => {
    event.preventDefault();
    const target = event.target;
    const div = target.querySelector("div");
    div.style.display = "flex";
    console.log(div);
    //   const targetCell = target.querySelector("div");
    //   console.log(targetCell);
    //   // console.log(target);
    //   // const targetCell = document.querySelector("div");
    //   // console.log(targetCell);
    //   // targetCell.remove();
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const updateRender = (id, owner, number) => {
    setRender({ ...render, [id]: { shouldRender: true, owner, number } });
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
                  onDrop={purchase}
                  onDragOver={dragOver}
                >
                  {render[`${market}-1`].shouldRender ? (
                    <PlayerIndicator
                      player={render[`${market}-1`].owner}
                      number={render[`${market}-1`].number}
                    />
                  ) : null}
                </div>
                <div
                  id={`${market}-2`}
                  className="investmentTile"
                  onDrop={purchase}
                  onDragOver={dragOver}
                >
                  {render[`${market}-2`].shouldRender ? (
                    <PlayerIndicator
                      player={render[`${market}-2`].owner}
                      number={render[`${market}-2`].number}
                    />
                  ) : null}
                </div>
                <div
                  id={`${market}-3`}
                  className="investmentTile"
                  onDrop={purchase}
                  onDragOver={dragOver}
                >
                  {render[`${market}-3`].shouldRender ? (
                    <PlayerIndicator
                      player={render[`${market}-3`].owner}
                      number={render[`${market}-3`].number}
                    />
                  ) : null}
                </div>
                <div
                  id={`${market}-4`}
                  className="investmentTile"
                  onDrop={purchase}
                  onDragOver={dragOver}
                >
                  {render[`${market}-4`].shouldRender ? (
                    <PlayerIndicator
                      player={render[`${market}-4`].owner}
                      number={render[`${market}-4`].number}
                    />
                  ) : null}
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
                <div onDrop={sell} onDragOver={dragOver}>
                  <PlayerIndicator player={player} number={1} />
                </div>
                <div onDrop={sell} onDragOver={dragOver}>
                  <PlayerIndicator player={player} number={2} />
                </div>
                <div onDrop={sell} onDragOver={dragOver}>
                  <PlayerIndicator player={player} number={3} />
                </div>
                <div onDrop={sell} onDragOver={dragOver}>
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
