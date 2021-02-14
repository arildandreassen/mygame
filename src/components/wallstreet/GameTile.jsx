import React from "react";

const GameTile = (props) => {
  let classes = "gametile";
  if (parseInt(props.tileId) == props.location) {
    classes += " playerLocation";
  }

  return (
    <div
      key={props.key}
      className={classes}
      onMouseEnter={() => {
        props.onMouseEnter(props);
      }}
      onMouseLeave={() => {
        props.onMouseLeave(props);
      }}
    >
      {props.tileId}
    </div>
  );
};

export default GameTile;
