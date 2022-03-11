import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetails';
// import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import About from './About';
function App() {

  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
    </Router>

  );
}

export default App;
