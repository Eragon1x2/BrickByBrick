import PlayerType from '../types/Player';
import OrderType from '../types/Order';
import {useSelector} from 'react-redux';
import { Link } from 'react-router';

export default function OrderComponent({order}: {order: OrderType}) {
    // const [timeToDone, setTimeToDone] = useState(0);
    const player = useSelector((state: {player: PlayerType}) => state.player);

    // const dispatch = useDispatch();
    
    // const materialsNeededs = order.materials_needed;
    // const playerMaterials = player.materials;
    // const materialsNeeded = materialsNeededs.find((material) => {
    //   return material.amount > playerMaterials[material.name];
    // });
    // const canTakeOrder = !materialsNeeded || materialsNeeded.amount <= playerMaterials[materialsNeeded.name];
    // const isTimerActive = timeToDone > 0;

    // function takeOrder() {

    //     if(materialsNeeded && materialsNeeded.amount > playerMaterials[materialsNeeded.name]) {
    //       console.log('not enough materials');
    //       return;
    //     }
    
    //     let time: number = order.time_to_complete * 60 * 1000;
    //       materialsNeededs.forEach((material) => {
    //         dispatch(updateMaterials({name: material.name, amount: -material.amount}));
    //       })
    //     let a = setInterval(() => {
    //       setTimeToDone(time/1000);
    //       if(time <= 0) {
    //       clearInterval(a);clearInterval(a);
    //       console.log("Order completed");
    //       dispatch(updateMoney(order.payment));
    //       };
    //       time -= 1000;
    //     }, 1000);
        
  
    // }
    return (
    <div className='order-card'>
        <div className='order-header'>
            <h2>{order.name}</h2>
            <div className='order-payment'>
                <span>💰</span>
                <span>${order.payment}k</span>
            </div>
        </div>
        
        <div className='order-time'>
            <span>⏱️ Time to Complete: {order.time_to_complete} mins</span>
        </div>
        
        <div className='order-materials'>
            <h3>Materials Required:</h3>
            <ul>
                {order.materials_needed.map((material) => {
                    const playerMaterial = player.materials[material.name] || 0;
                    const isEnough = playerMaterial >= material.amount;
                    
                    return (
                        <li key={material.name} className={isEnough ? 'material-sufficient' : 'material-insufficient'}>
                            <div className='material-icon-small'>
                                <img src={material.icon} alt={material.name} />
                            </div>
                            <span className='material-name'>{material.name}</span>
                            <span className='material-quantity'>
                                {playerMaterial}/{material.amount}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
        
        <Link to={'/orders/' + order.id} className='order-button'>Take a order</Link>
    </div>
  )
}
