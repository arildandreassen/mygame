import React from "react";
import "../../../style/wallstreet/detailcard.css";

const DetailCard = (props) => {
  let classes = `detailCard`;
  if (props.hoveringTile) {
    classes += ` tile tile${props.hoveringTile}`;
  }

  return (
    <div>
      <div className={classes}>{props.hoveringTile}</div>
    </div>
  );
};

export default DetailCard;
