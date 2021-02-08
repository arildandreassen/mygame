import React from "react";

const GameTile = (props) => {
  let classes = "gametile";
  if (parseInt(props.tileId) == props.location) {
    classes += " playerLocation";
  }
  return <div className={classes}>{props.tileId}</div>;
};

export default GameTile;
