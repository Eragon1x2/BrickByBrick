import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import OrdersPage from './pages/Orders'
import RootPage from './pages/Root'
import ShopPage from './pages/ShopPage'

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


function App() {

  return (
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<RootPage />}>
    <Route index element={<HomePage />} />
    <Route path='/orders' element={<OrdersPage />} />
    <Route path='/shop' element={<ShopPage />} />
    </Route>
    </Routes>
   </BrowserRouter> 
  )
}

export default App
