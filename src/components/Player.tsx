import PlayerType from "../types/Player";
import {useSelector} from "react-redux";
import materials from "../db/materials";

export default function PlayerComponent() {
    const player = useSelector((state: {player: PlayerType}) => state.player);

    // Create a map of material names to their icons
    const materialIcons = materials.reduce((acc, material) => {
        acc[material.name] = material.icon;
        return acc;
    }, {} as Record<string, string>);

    return (
        <div className="player">
            <div className="player-header">
                <h1>Building Game</h1>
                <h2>Company: {player.name}</h2>
            </div>
            <div className="player-money">
                <h2>Money: ${player.money}k</h2>
            </div>
            <div className="player-materials">
                <h2>Materials:</h2>
                <ul>
                    {Object.keys(player.materials).map((material, index) => {
                        // Only show materials with a quantity > 0
                        if (player.materials[material] > 0) {
                            return (
                                <li key={index}>
                                    <div className="player-material-item">
                                        <div className="player-material-icon">
                                            <img 
                                                src={materialIcons[material]} 
                                                alt={`${material} icon`} 
                                            />
                                        </div>
                                        <span className="player-material-name">{material}: </span>
                                        <span className="player-material-amount">{player.materials[material]}</span>
                                    </div>
                                </li>
                            )
                        }
                        return null;
                    })}
                </ul> 
            </div>
        </div>
    )
}
