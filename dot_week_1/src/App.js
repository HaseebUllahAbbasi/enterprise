import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetails';
import {  useDispatch } from 'react-redux';
import Header from './Header';
import About from './About';
import Cart from './Cart';
import Search from './Search';
import { useEffect } from 'react';
import { setAllProducts } from "./actions/productAction";
import Receipt from './Receipt';
import Counter from './Counter';
import CrudBasic from './CrudBasic';
import Categories from './Categories';
import Cat_1 from './categories_hard/Cat_1';
import Form_dot from './Components/Form_dot';
import Cat_2 from './categories_hard/Cat_2';

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
        <Route path='/category' element={ <Categories/>} >
                <Route index  element={<Cat_2></Cat_2>} />

                <Route path='cat' element={<Cat_1></Cat_1>} />
        {/* <Route path='*' element={ <> <div className='display-1 text-center'> 404 , Mazeed Free Mat Hojayen, mohia karda Categories ko hi use karen </div> </>} /> */}

        </Route>
        <Route path='/form' element={ <Form_dot/>} />
        
        <Route path='/receipt/' element={ <Receipt/>} />
        <Route path='/crud' element={ <CrudBasic/>} />
        <Route path='/dot_prc' element={ <Counter/>} />
        <Route path='*' element={ <> <div className='display-1 text-center'> 404  </div> </>} />
      </Routes>
    </Router>
  );
}
export default App;
