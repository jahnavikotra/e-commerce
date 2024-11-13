import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shopcategory from './pages/Shopcategory';
import Loginsignup from './pages/Loginsignup';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory category="mens"/>}/>
        <Route path='/womens' element={<Shopcategory category="women"/>}/>
        <Route path='/kids' element={<Shopcategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;