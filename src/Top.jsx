import "./style/board.css";
import GameTile from "./GameTile";

const Top = (props) => {
  return (
    <div className="horizontal">
      <GameTile tileId="1" location={props.location} />
      <GameTile tileId="2" location={props.location} />
      <GameTile tileId="3" location={props.location} />
      <GameTile tileId="4" location={props.location} />
      <GameTile tileId="5" location={props.location} />
      <GameTile tileId="6" location={props.location} />
      <GameTile tileId="7" location={props.location} />
      <GameTile tileId="8" location={props.location} />
      <GameTile tileId="9" location={props.location} />
      <GameTile tileId="10" location={props.location} />
      <GameTile tileId="11" location={props.location} />
      <GameTile tileId="12" location={props.location} />
      <GameTile tileId="13" location={props.location} />
      <GameTile tileId="14" location={props.location} />
      <GameTile tileId="15" location={props.location} />
    </div>
  );
};

export default Top;
