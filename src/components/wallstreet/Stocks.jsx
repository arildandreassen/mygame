import StockGraph from "./StockGraph";

const Stocks = () => {
  return (
    <div className="stocks">
      <div className="header"></div>
      <div className="body">
        <StockGraph />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Stocks;
