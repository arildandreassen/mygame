import React from "react";
import "../../style/wallstreet/priceMarker.css";

const PriceMarker = (props) => {
  const markets = [
    "international",
    "domestic",
    "emerging",
    "retirement",
    "mutual",
    "options",
  ];

  let classes = "";
  let indicator = "";
  if (props.initial) {
    classes += " initial";
  }

  const handleClick = (event) => {
    const getPrice = () => {
      return Number(event.target.id.split("-")[1]);
    };
    const getMarket = () => {
      return event.target.id.split("-")[0];
    };
    const market = getMarket();
    props.updateCurrentPrice(market, getPrice());
  };

  return (
    <tr className="priceMarker">
      <td className={classes}>{props.pricePoint}</td>
      {markets.map((market) => {
        return (
          <td
            key={`${market}-${props.pricePoint}`}
            id={`${market}-${props.pricePoint}`}
            className={indicator}
            onClick={handleClick}
          ></td>
        );
      })}
    </tr>
  );
};

export default PriceMarker;
