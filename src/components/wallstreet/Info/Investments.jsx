import React from "react";
import "../../../style/wallstreet/investments.css";
import PlayerIndicator from "./PlayerIndicator";

const Investments = (props) => {
  return (
    <div className="investments infoCard">
      <table className="investment">
        <thead>
          <tr>
            <th>International</th>
            <th>Domestic</th>
            <th>Emerging</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </td>
            <td>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
            </td>
            <td>
              <div>3</div>
              <div>3</div>
              <div>3</div>
              <div>3</div>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="investment">
        <thead>
          <tr>
            <th>Retirement</th>
            <th>Mutual</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </td>
            <td>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
            </td>
            <td>
              <div>3</div>
              <div>3</div>
              <div>3</div>
              <div>3</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="playerTiles">
        <div>Players</div>
        <table className="investment">
          <tbody>
            <tr>
              <td>
                <div>
                  <PlayerIndicator />
                </div>
                <div>
                  <PlayerIndicator />
                </div>
                <div>
                  <PlayerIndicator />
                </div>
                <div>
                  <PlayerIndicator />
                </div>
              </td>
              <td>
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
              </td>
              <td>
                <div>3</div>
                <div>3</div>
                <div>3</div>
                <div>3</div>
              </td>
              <td>
                <div>4</div>
                <div>4</div>
                <div>4</div>
                <div>4</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Investments;
