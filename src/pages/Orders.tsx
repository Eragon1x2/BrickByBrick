import orders from '../db/orders';
import OrderComponent from '../components/Order';

export default function OrdersPage() {
    return (
        <div>
             {orders && orders.map((order) => {
        return (
          <OrderComponent key={order.id} order={order}/>
        )
      })}
        </div>
    )
}