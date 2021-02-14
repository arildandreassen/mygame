import React from "react";
import "../../style/wallstreet/priceMarker.css";

const PriceMarker = (props) => {
  let classes = "";
  if (props.initial) {
    classes += " initial";
  }
  return (
    <div className="priceMarker">
      <tr>
        <td className={classes}>{props.pricePoint}</td>
        <td className={classes}></td>
        <td className={classes}></td>
        <td className={classes}></td>
        <td className={classes}></td>
        <td className={classes}></td>
        <td className={classes}></td>
      </tr>
    </div>
  );
};

export default PriceMarker;
