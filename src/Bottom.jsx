import GameTile from "./GameTile";

const Bottom = (props) => {
  return (
    <div className="horizontal">
      <GameTile tileId="43" location={props.location} />
      <GameTile tileId="42" location={props.location} />
      <GameTile tileId="41" location={props.location} />
      <GameTile tileId="40" location={props.location} />
      <GameTile tileId="39" location={props.location} />
      <GameTile tileId="38" location={props.location} />
      <GameTile tileId="37" location={props.location} />
      <GameTile tileId="36" location={props.location} />
      <GameTile tileId="35" location={props.location} />
      <GameTile tileId="34" location={props.location} />
      <GameTile tileId="33" location={props.location} />
      <GameTile tileId="32" location={props.location} />
      <GameTile tileId="31" location={props.location} />
      <GameTile tileId="30" location={props.location} />
      <GameTile tileId="29" location={props.location} />
    </div>
  );
};

export default Bottom;
