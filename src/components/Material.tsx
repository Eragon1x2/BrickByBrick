import {updateMoney, updateMaterials} from "../store/PlayerSlice";
import { useDispatch } from "react-redux";
type Material = {
    name: string,
    price: number,
    icon: string
}

export default function Material({name, price, icon}: Material) {
    const dispatch = useDispatch();
    function buyMaterial() {
        dispatch(updateMaterials({name: name, amount: 1}));
        dispatch(updateMoney(-price))

    }
    return (
    <div className="material">
    <h2><span><img src={icon} alt={name} /></span>Name: {name}</h2>
    <p>Price: {price}</p>      
    <button onClick={buyMaterial}>Buy</button>
    </div>
  )
}
