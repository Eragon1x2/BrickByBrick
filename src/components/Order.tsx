import {useState} from 'react'
import PlayerType from '../types/Player';
import OrderType from '../types/Order';
import {useDispatch, useSelector} from 'react-redux';
import { updateMoney, updateMaterials} from '../store/PlayerSlice';
export default function OrderComponent({order}: {order: OrderType}) {
    const [timeToDone, setTimeToDone] = useState(0);
    const player = useSelector((state: {player: PlayerType}) => state.player);
    const dispatch = useDispatch();
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
          for (const material in materialsNeeded) {
            dispatch(updateMaterials({name: material, amount: -materialsNeeded[material]}));
          }
        let a = setInterval(() => {
          setTimeToDone(time/1000);
          if(time <= 0) {
          clearInterval(a);
          console.log("Order completed");
          dispatch(updateMoney(order.payment));
          };
          time -= 1000;
        }, 1000);
        
  
    }
    return (
    <div className='order'>
     <p>Time to done: {timeToDone}s</p>
      <button onClick={takeOrder}>Take a order</button>
      <div className="order">
        <h2>{order.name}</h2>
        <ul>
          {Object.keys(order.materials_needed).map((material, index) => {
            return <li key={index}>{material}: {order.materials_needed[material]}</li>
          })}
        </ul>
      </div>  
    </div>
  )
}
