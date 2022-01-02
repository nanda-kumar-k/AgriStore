import Home from './Pages/Home'
import Address from './Pages/Address'
import CartsPage from './Pages/CartsPage'
import OrderList from './Pages/OrderList'
import Products from './Pages/Products'
import SpecialProduct from './Pages/SpecialProduct'
import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import Success from './Pages/Success'
import {useSelector} from "react-redux"
const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} exact></Route>
                <Route path='/Products/:category' element={<Products/>} exact></Route>
                <Route path='/Address' element={<Address/>} exact></Route>
                <Route path='/cart' element={<CartsPage/>} exact></Route>
                <Route path='/OrderList' element={<OrderList/>} exact></Route>
                <Route path='/SpecialProduct/:id' element={<SpecialProduct/>} exact></Route>
                <Route path='/success' element={<Success/>} exact></Route>
            </Routes>
        
     </Router>
    )
}

export default App