import React from "react";
import "../../../style/wallstreet/index";
import BoardTile from "./BoardTile";

const TopBoard = (props) => {
  const tileIds = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];
  const boardTiles = tileIds.map((tile) => {
    return (
      <BoardTile
        key={tile}
        tileId={tile}
        players={props.players}
        whosTurn={props.whosTurn}
        rollMarker={props.rollMarker}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      />
    );
  });

  return <div className="horizontal">{boardTiles}</div>;
};

export default TopBoard;
