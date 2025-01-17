import React, {useState} from 'react'
import PlayerType from '../types/Player';
import OrderType from '../types/Order';

export default function OrderComponent({player, order, setPlayer}: {player: PlayerType, order: OrderType, setPlayer: Function}) {
    const [timeToDone, setTimeToDone] = useState(0);

    function takeOrder() {
        const materialsNeeded = order.materials_needed;
        const playerMaterials = player.materials;
        
        for (const material in materialsNeeded) {
          if (materialsNeeded[material] > playerMaterials[material]) {
          console.log(`Not enough ${material}`);
          return;
          }
        }
    
    
        let time: number = order.time_to_complete * 60 * 1000;
        let a = setInterval(() => {
          console.log(`Time left: ${time / 1000} seconds`);
          setTimeToDone(time/1000);
          if(time <= 0) {
          clearInterval(a);
          console.log("Order completed");
          const updatedMaterials = { ...playerMaterials };
          for (const material in materialsNeeded) {
            updatedMaterials[material] -= materialsNeeded[material];
          }
          setPlayer({materials: updatedMaterials, money: player.money + order.payment});
        //   setPlayer(prevState => ({
        //     ...prevState,
        //     money: prevState.money + order.payment,
        //     materials: updatedMaterials
        //   }));
          console.log(player.materials);
          };
          time -= 1000;
        }, 1000);
        
    
        // Deduct materials and add payment
    }
    return (
    <>
     <p>Time to done: {timeToDone}s</p>
      <button onClick={takeOrder}>Take a order</button>
      <div className="order">

      </div> 
    </>
  )
}
