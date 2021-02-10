import React from "react";
import "./style";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const Board = (props) => {
  return (
    <div className="board">
      <Top location={props.location} />
      <Middle location={props.location} />
      <Bottom location={props.location} />
    </div>
  );
};

export default Board;
