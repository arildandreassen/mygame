import Investments from "./Investments";
import Taxes from "./Taxes";
import Chance from "./Chance";
import Dice from "./Dice";

const Info = () => {
  return (
    <div className="info">
      <div className="margin"></div>
      <div className="body">
        <Chance />
        <Investments />
        <Taxes />
        <Dice />
      </div>
      <div className="margin"></div>
    </div>
  );
};

export default Info;
