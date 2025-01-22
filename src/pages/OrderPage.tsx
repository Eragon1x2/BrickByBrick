import { useEffect, useState } from "react";
import { useParams } from "react-router"
import orders from "../db/orders";
import OrderType from "../types/Order";
import MiniGame from "../components/MiniGame";
import { 
    ClockIcon, 
    CurrencyDollarIcon, 
    BuildingOffice2Icon 
} from '@heroicons/react/24/solid';

export default function OrderPage() {
    const {id} = useParams();
    const [order, setOrder] = useState<OrderType | null>(null);
    
    useEffect(() => {
        let currentOrder = orders.find((order) => order.id === parseInt(id!));
        setOrder(currentOrder? currentOrder : null);
    },[])

    return (
        <div className="order-page">
        {order && (
            <>
                <div className="order-page-header">
                    <h1>{order.name}</h1>
                    <h2>{order.description}</h2>
                </div>
                <div className="order-page-details">
                    <div className="order-page-detail">
                        <ClockIcon width={24} />
                        <span>Time to Complete:</span>
                        <span className="order-page-detail-value">{order.time_to_complete} mins</span>
                    </div>
                    <div className="order-page-detail">
                        <CurrencyDollarIcon width={24} />
                        <span>Payment:</span>
                        <span className="order-page-detail-value">${order.payment}k</span>
                    </div>
                    <div className="order-page-detail">
                    {
                        order.materials_needed.map((material) => {
                            return (
                                <div className="order-page-detail" key={material.name}>
                                   <span><img src={material.icon} alt="" /></span>
                                    <span>{material.name}:</span>
                                    <span className="order-page-detail-value">{material.amount}</span>
                                </div>
                            )
                        }) 
                    }
                    </div>  
            </div>
            <MiniGame order={order}></MiniGame>
            </>
        )}
        </div>
    )
}