import "./style/";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const Board = () => {
  return (
    <div className="board">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Board;
