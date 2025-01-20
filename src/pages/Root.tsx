import { NavLink, Outlet } from "react-router";



export default function RootPage() {
    return (
        <div>
              <header className="App-header">
     <NavLink to="/">Home</NavLink>
     <NavLink to="/orders">Orders</NavLink>
     <NavLink to="/shop">Shop</NavLink>
      </header>
        <Outlet></Outlet>
        </div>
    )
}