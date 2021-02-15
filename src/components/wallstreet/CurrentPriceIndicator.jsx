import React from "react";
import "../../style/wallstreet/currentpriceindicator.css";

const CurrentPriceIndicator = (props) => {
  const dragStart = (event) => {
    const target = event.target;
    event.dataTransfer.setData("cellId", target.id);
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  const dragOver = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      id={`${props.market}-indicator`}
      className="currentPrice"
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
    ></div>
  );
};

export default CurrentPriceIndicator;
