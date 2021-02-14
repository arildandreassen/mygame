import BoardTile from "./BoardTile";

const BottomBoard = (props) => {
  const tileIds = [
    "43",
    "42",
    "41",
    "40",
    "39",
    "38",
    "37",
    "36",
    "35",
    "34",
    "33",
    "32",
    "31",
    "30",
    "29",
  ];
  const boardTiles = tileIds.map((tile) => {
    return (
      <BoardTile
        key={tile}
        tileId={tile}
        location={props.location}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      />
    );
  });
  return <div className="horizontal">{boardTiles}</div>;
};

export default BottomBoard;
