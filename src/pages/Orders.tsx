import orders from '../db/orders';
import OrderComponent from '../components/Order';

  /**
   * OrdersPage is a component that renders all orders.
   * It displays them in a flex container with a gap of 15px.
   * Each order is rendered as an OrderComponent.
   * If there are no orders, it renders nothing.
   */
export default function OrdersPage() {
    return (
        <div className='orders'>
             {orders && orders.map((order) => {
        return (
          <OrderComponent key={order.id} order={order}/>
        )
      })}
        </div>
    )
}