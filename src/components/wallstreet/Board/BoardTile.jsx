import React from "react";
import "../../../style/wallstreet/boardtile.css";

const BoardTile = (props) => {
  let tileText = props.tileId;
  let style;
  let classes = "boardtile";
  const players = props.players;
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
