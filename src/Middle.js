import GameTile from "./GameTile";

const Middle = () => {
  return (
    <div className="middle">
      <div>
        <div className="vertical">
          <GameTile tileId="56" />
          <GameTile tileId="55" />
          <GameTile tileId="54" />
          <GameTile tileId="53" />
          <GameTile tileId="52" />
          <GameTile tileId="51" />
          <GameTile tileId="50" />
          <GameTile tileId="49" />
          <GameTile tileId="48" />
          <GameTile tileId="47" />
          <GameTile tileId="46" />
          <GameTile tileId="45" />
          <GameTile tileId="44" />
        </div>
        <div className="center"></div>
        <div className="vertical">
          <GameTile tileId="16" />
          <GameTile tileId="17" />
          <GameTile tileId="18" />
          <GameTile tileId="19" />
          <GameTile tileId="20" />
          <GameTile tileId="21" />
          <GameTile tileId="22" />
          <GameTile tileId="23" />
          <GameTile tileId="24" />
          <GameTile tileId="25" />
          <GameTile tileId="26" />
          <GameTile tileId="27" />
          <GameTile tileId="28" />
        </div>
      </div>
    </div>
  );
};

export default Middle;
