 import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import UserDashBoard from './UserDashHook/UserDashBoard';
import Cart from './Cart';
import {CartProvider} from 'react-use-cart';


;

function App() {
  return (
    <>
    <CartProvider>
        <Home/>
        <Cart/>
      </CartProvider>
    </>

  );
  
}

export default App;
