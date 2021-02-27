import React from "react";
import Investments from "./Investments";
import Taxes from "./Taxes";
import Chance from "./Chance";
import Dice from "./Dice";
import "../../../style/wallstreet/info.css";

const InfoSection = (props) => {
  return (
    <div className="info">
      <div className="margin"></div>
      <div className="body">
        <Chance />
        <Investments
          updateCurrentPrices={props.updateCurrentPrices}
          currentPrices={props.currentPrices}
          players={props.players}
        />
        <Taxes />
        <Dice
          updatePlayerLocation={props.updatePlayerLocation}
          players={props.players}
          whosTurn={props.whosTurn}
        />
      </div>
      <div className="margin"></div>
    </div>
  );
};

export default InfoSection;
