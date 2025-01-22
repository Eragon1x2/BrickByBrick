import { useEffect, useState } from "react";
import { useParams } from "react-router"
import orders from "../db/orders";
import OrderType from "../types/Order";



export default function OrderPage() {
    const {id} = useParams();
    const [order, setOrder] = useState<OrderType | null>(null);
    
    useEffect(() => {
        let currentOrder = orders.find((order) => order.id === parseInt(id!));
        setOrder(currentOrder? currentOrder : null);
    },[])

    return (
        <div>
        {order && <div>
            
            
        </div>}
        </div>
    )
}