import React from "react";
import "../../style/wallstreet/index";

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
