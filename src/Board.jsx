import React, { useState } from "react";
import "./style";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const Board = (props) => {
  const [hoveringState, setHoveringState] = useState({
    isHovering: false,
    tile: null,
  });

  const onMouseEnter = (props) => {
    setHoveringState({ isHovering: true, tile: props.tileId });
  };

  const onMouseLeave = () => {
    console.log("leaving the tile now");
    setHoveringState({ isHovering: false, tile: null });
  };

  return (
    <div className="board">
      <Top
        location={props.location}
        hoveringTile={hoveringState.tile}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Middle
        location={props.location}
        hoveringTile={hoveringState.tile}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Bottom
        location={props.location}
        hoveringTile={hoveringState.tile}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default Board;
