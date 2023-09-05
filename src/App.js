import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/signup';
import PrivateComponent from './components/PrivateComponent';
import Addproduct from './components/AddProduct';
import Login from './components/Login';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Apps from './components/meta';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path='/products' element={<ProductList/>} />
            <Route path='/add' element={<Addproduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>outtt</h1>} />
            <Route path='/metamask' element={<Apps/>} />
          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
