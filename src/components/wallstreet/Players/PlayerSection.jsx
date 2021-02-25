import Player from "./PlayerDetail";

const PlayerSection = (props) => {
  const players = props.players;

  return (
    <div>
      <div className="margin">
        {players.length < 4 ? (
          <button onClick={props.addPlayer}>Add Player</button>
        ) : null}
      </div>
      <div>
        {Object.keys(players).map((key) => {
          const player = props.players[key];
          return <Player key={key} player={player} />;
        })}
      </div>
      <div className="margin"></div>
    </div>
  );
};

export default PlayerSection;
