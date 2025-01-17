import { useState } from 'react'
import './App.css'
import OrderComponent from './components/Order';
import OrderType from './types/Order';
import PlayerType from './types/Player';
import Material from './components/Material';
/*oncrete
Wood – For walls, floors, and roofs.
Stone – For strong walls and foundations.
Clay – To make bricks or tiles.
Metal – For tools, nails, or structural support.
Glass – For windows.
Sand – To mix with other materials like cement.
Water – For mixing concrete or bricks.
Roofing – Like shingles or thatch.
Paint – To decorate.
Pipes – For water systems.
Wires – For electricity.
 */

const materials = {
  "Wood": 20,
  "Stone": 20,
  "Clay": 20,
  "Metal": 20,
  "Glass": 20,
  "Sand": 20,
  "Water": 20,
  "Roofing": 20,
  "Paint": 20,
  "Pipes": 20,
  "Wires": 20
}

const Player : PlayerType = {
  name: "Builder",
  money: 1000,
  materials
}
const Order : OrderType = {
  payment: 100,
  time_to_complete: 1,
  materials_needed: {
    "Wood": 10,
    "Stone": 5,
    "Clay": 0,
    "Metal": 0,
    "Glass": 0,
    "Sand": 0,
    "Water": 0,
    "Roofing": 0,
    "Paint": 0,
    "Pipes": 0,
    "Wires": 0
  }
}

function App() {
  const [player, setPlayer] = useState(Player);
  const [order, setOrder] = useState(Order);
  // const [timeToDone, setTimeToDone] = useState(0);
  // const [isOrderTaken, setIsOrderTaken] = useState(false);

  function handlePlayerChange(newPlayer: PlayerType) {
    setPlayer(prevState => ({...prevState, ...newPlayer}));
  } 
  return (
    <>
      <header className="App-header">
      <a href="">Home</a>
      <a href="">Orders</a>
      <a href="">Shop</a>
      </header>

      <div className="App">
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
      <OrderComponent player={player} order={order} setPlayer={handlePlayerChange}/>
    
      <Material name="Wood" player={player} setPlayer={handlePlayerChange}/>
      <Material name="Stone" player={player} setPlayer={handlePlayerChange}/>
      <Material name="Clay" player={player} setPlayer={handlePlayerChange}/>
    </>
  )
}

export default App
