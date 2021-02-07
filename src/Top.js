import "./style/board.css";
import GameTile from "./GameTile";

const Top = () => {
  return (
    <div className="horizontal">
      <GameTile tileId="1" />
      <GameTile tileId="2" />
      <GameTile tileId="3" />
      <GameTile tileId="4" />
      <GameTile tileId="5" />
      <GameTile tileId="6" />
      <GameTile tileId="7" />
      <GameTile tileId="8" />
      <GameTile tileId="9" />
      <GameTile tileId="10" />
      <GameTile tileId="11" />
      <GameTile tileId="12" />
      <GameTile tileId="13" />
      <GameTile tileId="14" />
      <GameTile tileId="15" />
    </div>
  );
};

export default Top;
