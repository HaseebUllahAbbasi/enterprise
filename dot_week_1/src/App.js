import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetails';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import About from './About';
import Cart from './Cart';
import Search from './Search';
import { useEffect } from 'react';
import { setAllProducts } from "./actions/productAction";
import Receipt from './Receipt';

function App() 
{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProducts());
  }, [dispatch]);

  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={ <Cart/>} />
        <Route path='/search/:term' element={ <Search/>} />
        <Route path='/search/' element={ <Search/>} />
        <Route path='/receipt/' element={ <Receipt/>} />

      </Routes>
    </Router>
  );
}
export default App;
