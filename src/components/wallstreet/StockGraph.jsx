import { useState } from "react";
import PriceMarker from "./PriceMarker";

const StockGraph = () => {
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

  const [currentPrice, setCurrentPrice] = useState({
    international: 250,
    domestic: 250,
    emerging: 250,
    retirement: 250,
    mutual: 250,
    options: 250,
  });

  const updateCurrentPrice = (type, price) => {
    setCurrentPrice({ ...currentPrice, [type]: price });
  };

  return (
    <div>
      <table>
        <tbody>
          {pricePoints.map((pricePoint) => {
            return (
              <PriceMarker
                key={pricePoint}
                pricePoint={pricePoint}
                currentPrice={currentPrice}
                updateCurrentPrice={updateCurrentPrice}
              ></PriceMarker>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockGraph;
