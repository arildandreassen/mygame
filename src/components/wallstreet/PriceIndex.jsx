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

  return (
    <div>
      <table className="priceIndicator">
        <tbody>
          {pricePoints.map((pricePoint) => {
            return (
              <tr key={pricePoint}>
                <td>{pricePoint}</td>
                <td>
                  {props.currentPrices.international === Number(pricePoint) ? (
                    <CurrentPriceIndicator />
                  ) : null}
                </td>
                <td>
                  {props.currentPrices.domestic === Number(pricePoint) ? (
                    <CurrentPriceIndicator />
                  ) : null}
                </td>
                <td>
                  {props.currentPrices.emerging === Number(pricePoint) ? (
                    <CurrentPriceIndicator />
                  ) : null}
                </td>
                <td>
                  {props.currentPrices.retirement === Number(pricePoint) ? (
                    <CurrentPriceIndicator />
                  ) : null}
                </td>
                <td>
                  {props.currentPrices.mutual === Number(pricePoint) ? (
                    <CurrentPriceIndicator />
                  ) : null}
                </td>
                <td>
                  {props.currentPrices.options === Number(pricePoint) ? (
                    <CurrentPriceIndicator />
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
