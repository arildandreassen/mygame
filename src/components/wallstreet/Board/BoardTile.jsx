import React from "react";
import "../../../style/wallstreet/boardtile.css";
import tiles from "../tiles.json";

const BoardTile = (props) => {
  let style;
  let tileText;
  let classes = "boardtile";
  let whoIsOnTile = [];
  const players = props.players;

  const tile = tiles.find((tile) => tile.location == props.tileId);
  tileText = tile.shortText;

  players.forEach((player) => {
    if (parseInt(props.tileId) == player.location) {
      whoIsOnTile.push({ name: player.name, color: player.color });
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
      <div>{tileText}</div>
      <div className={"playerLocation"}>
        {whoIsOnTile.map((who) => {
          return <div style={{ backgroundColor: who.color }}></div>;
        })}
      </div>
    </div>
  );
};

export default BoardTile;
