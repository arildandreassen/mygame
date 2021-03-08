import React from "react";
import "../../../style/wallstreet/boardtile.css";
import tiles from "../tiles.json";

const BoardTile = (props) => {
  let classes = "boardtile";
  let roll = "";
  let tileId = parseInt(props.tileId);
  let tileText;
  let whoIsOnTile = [];
  const players = props.players;

  const tile = tiles.find((tile) => tile.location === tileId);
  tileText = tile.adjustment;

  players.forEach((player) => {
    if (tileId == player.location) {
      whoIsOnTile.push({
        player: player.player,
        name: player.name,
        color: player.color,
      });
    }
  });

  const marker = props.rollMarker ? props.rollMarker : [];
  const isFound = marker.find((tile) => tile === tileId);
  if (isFound) {
    console.log(isFound);
    roll += "playerRoll";
  }

  return (
    <div
      className={classes}
      onMouseEnter={() => {
        props.onMouseEnter(props);
      }}
      onMouseLeave={() => {
        props.onMouseLeave(props);
      }}
    >
      <div className={"playerLocations"}>
        {whoIsOnTile.map((who) => {
          const color = roll ? "white" : who.color;
          return (
            <div
              key={who.player}
              className={`playercount${whoIsOnTile.length} ${who.player}`}
              style={{ backgroundColor: color }}
            ></div>
          );
        })}
      </div>
      <div className={`tileInfo ${roll}`}>
        <div>{tile.title}</div>
        <div>
          {tile.icon ? <img className="tileIcon" src={tile.icon} /> : null}
        </div>
        <div>
          {tile.adjustment > 0 ? `+${tile.adjustment}` : tile.adjustment}
        </div>
      </div>
    </div>
  );
};

export default BoardTile;
