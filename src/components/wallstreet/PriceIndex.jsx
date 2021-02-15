import React from "react";
import "../../style/wallstreet/priceIndicator.css";
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
    const cell = document.getElementById(cellId);
    cell.style.display = "block";
    target.appendChild(cell);

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
            console.log(props.currentPrices);
            return (
              <tr key={pricePoint}>
                <td>{pricePoint}</td>
                <td
                  id={`international-${pricePoint}`}
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  {250 === Number(pricePoint) ? (
                    <CurrentPriceIndicator
                      market="international"
                      pricePoint={pricePoint}
                    />
                  ) : null}
                </td>
                <td
                  id={`domestic-${pricePoint}`}
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  {250 === Number(pricePoint) ? (
                    <CurrentPriceIndicator
                      market="domestic"
                      pricePoint={pricePoint}
                    />
                  ) : null}
                </td>
                <td
                  id={`emerging-${pricePoint}`}
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  {250 === Number(pricePoint) ? (
                    <CurrentPriceIndicator
                      market="emerging"
                      pricePoint={pricePoint}
                    />
                  ) : null}
                </td>
                <td
                  id={`retirement-${pricePoint}`}
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  {250 === Number(pricePoint) ? (
                    <CurrentPriceIndicator
                      market="retirement"
                      pricePoint={pricePoint}
                    />
                  ) : null}
                </td>
                <td
                  id={`mutual-${pricePoint}`}
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  {250 === Number(pricePoint) ? (
                    <CurrentPriceIndicator
                      market="mutual"
                      pricePoint={pricePoint}
                    />
                  ) : null}
                </td>
                <td
                  id={`options-${pricePoint}`}
                  onDrop={drop}
                  onDragOver={dragOver}
                >
                  {250 === Number(pricePoint) ? (
                    <CurrentPriceIndicator
                      market="options"
                      pricePoint={pricePoint}
                    />
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PriceIndex;
