import React from "react";
import "../../../style/wallstreet/boardtile.css";
import tiles from "../tiles.json";

const BoardTile = (props) => {
  let style;
  let tileText;
  let classes = "boardtile";
  const players = props.players;

  const tile = tiles.find((tile) => tile.location == props.tileId);
  tileText = tile.shortText;

  players.forEach((player) => {
    if (parseInt(props.tileId) == player.location) {
      style = {
        backgroundColor: player.color,
      };
      tileText = player.name;
    }
  });

  return (
    <div
      className={classes}
      style={style}
      onMouseEnter={() => {
        props.onMouseEnter(props);
      }}
      onMouseLeave={() => {
        props.onMouseLeave(props);
      }}
    >
      {tileText}
    </div>
  );
};

export default BoardTile;
