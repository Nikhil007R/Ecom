import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/Index';
import CreateProduct from './components/CreateProduct';
import Shop from './components/Shop';
import Cart from './components/Cart';
import OwnerLogin from './components/OwnerLogin';
import Admin from './components/Admin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/shop" element={<Shop success={[]} products={[]} />} /> {/* Add your actual data here */}
        <Route path="/cart" element={<Cart user={{}} />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/admin" element={<Admin />} />


      </Routes>
    </Router>
  );
}

export default App;
