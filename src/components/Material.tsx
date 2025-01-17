import PlayerType from "../types/Player";

type Material = {
    name: string,
    player: PlayerType,
    setPlayer: Function
}

export default function Material({name, player, setPlayer}: Material) {
  
    function buyMaterial() {
        console.log(`Buying ${name}`);
        const updatedMaterials = { ...player.materials };
        updatedMaterials[name] += 1;
        setPlayer({materials: updatedMaterials, money: player.money - 10});
    }
    return (
    <>
    <p>Name: {name}</p>      
    <button onClick={buyMaterial}>Buy</button>
    </>
  )
}
