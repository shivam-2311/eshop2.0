import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Happy from './pages/Happy';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useContext } from 'react';


function App() {
  const user = useSelector(state => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
        <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Happy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
