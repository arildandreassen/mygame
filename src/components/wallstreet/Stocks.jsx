import "../../style/wallstreet/stocks.css";

import StockGraph from "./StockGraph";

const Stocks = () => {
  return (
    <div className="stocks">
      <div className="header">Wall Street Price Index</div>
      <div className="body">
        <StockGraph />
      </div>
      <div className="footer">
        <div className="markets">
          <table>
            <tr>
              <td></td>
              <td>International Stocks</td>
              <td>Domestic Stocks</td>
              <td>Emerging Markets</td>
              <td>Retirement Funds</td>
              <td>Mutual Funds</td>
              <td>Options</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
