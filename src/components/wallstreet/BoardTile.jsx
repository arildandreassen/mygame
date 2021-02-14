import React from "react";

const BoardTile = (props) => {
  let classes = "gametile";
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
