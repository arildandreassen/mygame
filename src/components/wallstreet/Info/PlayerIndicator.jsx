import React, { useState } from "react";
import "../../../style/wallstreet/playerindicator.css";

const PlayerIndicator = (props) => {
  const dragStart = (event) => {
    const source = event.target;
    event.dataTransfer.setData("sourceId", source.id);
    setTimeout(() => {
      source.style.display = "none";
    }, 0);
  };

  const dragOver = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      id={`${props.player}-investment-${props.number}`}
      className="playerindicator"
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
    ></div>
  );
};

export default PlayerIndicator;
