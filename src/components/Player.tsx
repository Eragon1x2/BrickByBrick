import PlayerType from "../types/Player";
import {useSelector} from "react-redux";

export default function PlayerComponent() {
    const player = useSelector((state: {player: PlayerType}) => state.player);
    return (
        <div className="player">
            <h1>Building Game</h1>
        <h2>Player: {player.name}</h2>
        <h2>Money: {player.money}</h2>
        <h2>Materials</h2>
        <ul>
          {Object.keys(player.materials).map((material, index) => {
            return <li key={index}>{material}: {player.materials[material]}</li>
          })}
        </ul> 
        </div>
    )
}
