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
    <div className={classes}>
      <div className="detailHeader">{tile.detailHeader}</div>
      <div className="detailBody">
        <div className="bottomBody"></div>
        <div className="bottomTile">
          {tile.icon ? <img src={tile.icon} /> : null}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
