import React from "react";
import "../../../style/wallstreet/detailcard.css";
import tiles from "../tiles.json";

const DetailCard = (props) => {
  let tile = {
    detailText: "nothing",
  };
  let classes = `detailCard`;
  if (props.hoveringTile) {
    classes += ` tile tile${props.hoveringTile}`;
  }

  if (props.hoveringTile) {
    tile = tiles.find((tile) => tile.location == props.hoveringTile);
  }

  return (
    <div>
      <div className={classes}>{tile.detailText}</div>
    </div>
  );
};

export default DetailCard;
