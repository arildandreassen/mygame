import React from "react";
import Investments from "./Investments";
import Taxes from "./Taxes";
import Chance from "./Chance";
import Dice from "./Dice";

const InfoSection = (props) => {
  return (
    <div className="info">
      <div className="margin"></div>
      <div className="body">
        <Chance />
        <Investments />
        <Taxes />
        <Dice updateLocation={props.updateLocation} />
      </div>
      <div className="margin"></div>
    </div>
  );
};

export default InfoSection;
