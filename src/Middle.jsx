import GameTile from "./GameTile";
import Stocks from "./Stocks";

const Middle = (props) => {
  return (
    <div className="middle">
      <div>
        <div className="vertical">
          <GameTile tileId="56" location={props.location} />
          <GameTile tileId="55" location={props.location} />
          <GameTile tileId="54" location={props.location} />
          <GameTile tileId="53" location={props.location} />
          <GameTile tileId="52" location={props.location} />
          <GameTile tileId="51" location={props.location} />
          <GameTile tileId="50" location={props.location} />
          <GameTile tileId="49" location={props.location} />
          <GameTile tileId="48" location={props.location} />
          <GameTile tileId="47" location={props.location} />
          <GameTile tileId="46" location={props.location} />
          <GameTile tileId="45" location={props.location} />
          <GameTile tileId="44" location={props.location} />
        </div>
        <div className="center">
          <Stocks />
        </div>
        <div className="vertical">
          <GameTile tileId="16" location={props.location} />
          <GameTile tileId="17" location={props.location} />
          <GameTile tileId="18" location={props.location} />
          <GameTile tileId="19" location={props.location} />
          <GameTile tileId="20" location={props.location} />
          <GameTile tileId="21" location={props.location} />
          <GameTile tileId="22" location={props.location} />
          <GameTile tileId="23" location={props.location} />
          <GameTile tileId="24" location={props.location} />
          <GameTile tileId="25" location={props.location} />
          <GameTile tileId="26" location={props.location} />
          <GameTile tileId="27" location={props.location} />
          <GameTile tileId="28" location={props.location} />
        </div>
      </div>
    </div>
  );
};

export default Middle;
