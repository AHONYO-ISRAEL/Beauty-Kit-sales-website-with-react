import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import BuyPage from './components/pages/BuyPage';



function App() {



  return (
    <div>
      <Router> 
      <Routes> 



<Route   path='/' 
element ={
  <>
            <Home  />
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
    </div>
  )
}

export default App
