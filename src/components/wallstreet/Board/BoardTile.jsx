import React from "react";
import "../../../style/wallstreet/boardtile.css";
import tiles from "../tiles.json";

const BoardTile = (props) => {
  let tileText;
  let classes = "boardtile";
  let whoIsOnTile = [];
  const players = props.players;

  const tile = tiles.find((tile) => tile.location == props.tileId);
  tileText = tile.shortText;

  players.forEach((player) => {
    if (parseInt(props.tileId) == player.location) {
      whoIsOnTile.push({
        player: player.player,
        name: player.name,
        color: player.color,
      });
    }
  });

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
          return (
            <div
              className={`playercount${whoIsOnTile.length} ${who.player}`}
              style={{ backgroundColor: who.color }}
            ></div>
          );
        })}
      </div>
      <div className="tileInfo">
        <div>{tile.title}</div>
        <div>
          {tile.icon ? <img className="tileIcon" src={tile.icon} /> : null}
        </div>
        <div>{tile.shortText}</div>
      </div>
    </div>
  );
};

export default BoardTile;
