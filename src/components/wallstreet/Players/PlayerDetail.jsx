import "../../../style/wallstreet/playerdetail.css";

const PlayerDetail = (props) => {
  const player = props.player;
  return (
    <div className="player">
      <h3>{player.name}</h3>
      <h5>{player.funds}</h5>
    </div>
  );
};

export default PlayerDetail;
