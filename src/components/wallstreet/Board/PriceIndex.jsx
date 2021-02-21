import React from "react";
import "../../../style/wallstreet/priceIndicator.css";
import CurrentPriceIndicator from "./CurrentPriceIndicator";

const PriceIndex = (props) => {
  const pricePoints = [
    "750",
    "700",
    "650",
    "600",
    "550",
    "500",
    "450",
    "400",
    "350",
    "300",
    "250",
    "200",
    "150",
    "100",
    "50",
  ];

  const markets = [
    "international",
    "domestic",
    "emerging",
    "retirement",
    "mutual",
    "options",
  ];

  const drop = (event) => {
    const target = event.target;
    event.preventDefault();
    const cellId = event.dataTransfer.getData("cellId");
    const targetCell = document.getElementById(cellId);
    targetCell.style.display = "block";

    const [market, price] = target.id.split("-");
    props.updateCurrentPrices(market, Number(price));
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <table className="priceIndicator">
        <tbody>
          {pricePoints.map((pricePoint) => {
            return (
              <tr key={pricePoint}>
                <td>{pricePoint}</td>
                {markets.map((market) => {
                  const shouldRender =
                    props.currentPrices[market] === Number(pricePoint);
                  return (
                    <td
                      key={`${market}-${pricePoint}`}
                      id={`${market}-${pricePoint}`}
                      onDrop={drop}
                      onDragOver={dragOver}
                    >
                      {shouldRender ? (
                        <CurrentPriceIndicator market={market} />
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PriceIndex;
