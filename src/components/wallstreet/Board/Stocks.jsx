import "../../../style/wallstreet/stocks.css";

import PriceIndex from "./PriceIndex";

const Stocks = (props) => {
  return (
    <div className="stocks">
      <div className="header">Wall Street Price Index</div>
      <div className="body">
        <PriceIndex
          updateCurrentPrices={props.updateCurrentPrices}
          currentPrices={props.currentPrices}
        />
      </div>
      <div className="footer">
        <div className="markets">
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>International Stocks</td>
                <td>Domestic Stocks</td>
                <td>Emerging Markets</td>
                <td>Retirement Funds</td>
                <td>Mutual Funds</td>
                <td>Options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
