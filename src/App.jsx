import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuyPage from './components/pages/BuyPage';
import CartProvider from './components/CartProvider';



function App() {



  return (
    <div>
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
    </div>
  )
}

export default App
