import React, { useState } from "react";
import "../../../style/wallstreet/playerindicator.css";

const PlayerIndicator = (props) => {
  const dragStart = (event) => {
    const target = event.target;
    event.dataTransfer.setData("sourceId", target.id);
    event.dataTransfer.setData("parentId", target.parentElement.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      id={`${props.id}`}
      className="playerindicator"
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
    ></div>
  );
};

export default PlayerIndicator;
