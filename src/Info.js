import Investments from "./Investments";
import Taxes from "./Taxes";
import Chance from "./Chance";

const Info = () => {
  return (
    <div>
      <Chance />
      <Investments />
      <Taxes />
    </div>
  );
};

export default Info;
