import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuyPage from './components/pages/BuyPage';
import CartProvider from './components/CartProvider';
import CartAmountProvider from './components/CartAmountProvider';
import CartProductProvider from './components/CartProductProvider';





function App() {


  return (
    <div>
      <CartProductProvider>
      <CartAmountProvider>
      <CartProvider>
      <Router>
        <Routes>
          <Route path='/'
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path='/cart'
            element={
              <>

                <BuyPage />

              </>
            }
          />
        </Routes>
   </Router>
   </CartProvider>
   </CartAmountProvider>
   </CartProductProvider>
    </div>
  )
}

export default App
