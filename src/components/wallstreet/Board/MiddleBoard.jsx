import BoardTile from "./BoardTile";
import Stocks from "./Stocks";
import DetailCard from "./DetailCard";
import tiles from "../tiles.json";

const MiddleBoard = (props) => {
  const leftTileIds = [
    "56",
    "55",
    "54",
    "53",
    "52",
    "51",
    "50",
    "49",
    "48",
    "47",
    "46",
    "45",
    "44",
  ];

  const rightTileIds = [
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
  ];
  const leftTiles = leftTileIds.map((tile) => {
    return (
      <BoardTile
        key={tile}
        tileId={tile}
        players={props.players}
        whosTurn={props.whosTurn}
        rollMarker={props.rollMarker}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      />
    );
  });

  const rightTiles = rightTileIds.map((tile) => {
    return (
      <BoardTile
        key={tile}
        tileId={tile}
        players={props.players}
        whosTurn={props.whosTurn}
        rollMarker={props.rollMarker}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      />
    );
  });
  return (
    <div className="middle">
      <div>
        <div className="vertical">{leftTiles}</div>
        <div className="center">
          <div className="centertop">
            <DetailCard hoveringTile={props.hoveringTile} />
          </div>
          <div>
            <Stocks
              updateCurrentPrices={props.updateCurrentPrices}
              currentPrices={props.currentPrices}
            />
          </div>
        </div>
        <div className="vertical">{rightTiles}</div>
      </div>
    </div>
  );
};

export default MiddleBoard;
