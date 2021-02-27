import React, { useState } from "react";
import "../../../style/wallstreet/boardsection.css";
import TopBoard from "./TopBoard";
import MiddleBoard from "./MiddleBoard";
import BottomBoard from "./BottomBoard";

const BoardSection = (props) => {
  const [hoveringState, setHoveringState] = useState({
    isHovering: false,
    tile: null,
  });

  const onMouseEnter = (props) => {
    setHoveringState({ isHovering: true, tile: props.tileId });
  };

  const onMouseLeave = () => {
    setHoveringState({ isHovering: false, tile: null });
  };

  return (
    <div className="board">
      <TopBoard
        players={props.players}
        whosTurn={props.whosTurn}
        hoveringTile={hoveringState.tile}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <MiddleBoard
        players={props.players}
        whosTurn={props.whosTurn}
        hoveringTile={hoveringState.tile}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        updateCurrentPrices={props.updateCurrentPrices}
        currentPrices={props.currentPrices}
      />
      <BottomBoard
        players={props.players}
        whosTurn={props.whosTurn}
        hoveringTile={hoveringState.tile}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default BoardSection;
