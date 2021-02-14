import PriceMarker from "./PriceMarker";

const StockGraph = () => {
  return (
    <div>
      <table>
        <PriceMarker pricePoint="750"></PriceMarker>
        <PriceMarker pricePoint="700"></PriceMarker>
        <PriceMarker pricePoint="650"></PriceMarker>
        <PriceMarker pricePoint="600"></PriceMarker>
        <PriceMarker pricePoint="550"></PriceMarker>
        <PriceMarker pricePoint="500"></PriceMarker>
        <PriceMarker pricePoint="450"></PriceMarker>
        <PriceMarker pricePoint="400"></PriceMarker>
        <PriceMarker pricePoint="350"></PriceMarker>
        <PriceMarker pricePoint="300"></PriceMarker>
        <PriceMarker pricePoint="250" initial={true}></PriceMarker>
        <PriceMarker pricePoint="200"></PriceMarker>
        <PriceMarker pricePoint="150"></PriceMarker>
        <PriceMarker pricePoint="100"></PriceMarker>
        <PriceMarker pricePoint="50"></PriceMarker>
      </table>
    </div>
  );
};

export default StockGraph;
