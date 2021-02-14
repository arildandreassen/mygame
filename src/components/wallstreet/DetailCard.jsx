import React from "react";
import "../../style/wallstreet/index";
import {
  calculateHorizontalPixels,
  calculateVerticalPixels,
} from "../../util/calculatePixels";

const DetailCard = (props) => {
  const horizontalPixels = calculateHorizontalPixels(props.hoveringTile);
  const verticalPixels = calculateVerticalPixels(props.hoveringTile);

  return (
    <div
      style={{
        position: "relative",
        left: horizontalPixels,
        top: verticalPixels,
        visibility: props.hoveringTile ? "visible" : "hidden",
      }}
    >
      <div className="detailCard">{props.hoveringTile}</div>
    </div>
  );
};

export default DetailCard;
