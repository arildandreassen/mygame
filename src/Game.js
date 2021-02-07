import { Component } from "react";
import Board from "./Board";
import Players from "./Players";
import Info from "./Info";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game">
        <div className="players">
          <Players />
        </div>
        <div>
          <Board />
        </div>
        <div>
          <Info />
        </div>
      </div>
    );
  }
}

export default Game;
