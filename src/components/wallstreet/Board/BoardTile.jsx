import React from "react";
import "../../../style/wallstreet/boardtile.css";

const BoardTile = (props) => {
  let classes = "boardtile";
  if (parseInt(props.tileId) == props.location) {
    classes += " playerLocation";
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
      {props.tileId}
    </div>
  );
};

export default BoardTile;
