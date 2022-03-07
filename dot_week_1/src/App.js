import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import {Routes ,Route} from 'react-router'
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetails';
function App() {

  return (
    <Router>
      <div>
        Permenant
      </div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      
      
      
      

      </Routes>
    </Router>

  );
}

export default App;
