import './App.css'
import { useState } from 'react'
import Home from './components/pages/Home'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import BuyPage from './components/pages/BuyPage';



function App() {
  const [Product] = useState([

    {
      id: 1,
      title: "Beauty Brush",
      description: "Lorem ipsum shits and stuff",
      image: "./images/im8.png",
      price: 7.5,
      tocart: false
    },
    {
      id: 2,
      title: "Random Product 1",
      description: "Lorem ipsum dolor sit amet",
      image: "./images/im7.png",
      price: 9.99,
      tocart: false
    },
    {
      id: 3,
      title: "Random Product 2",
      description: "Consectetur adipiscing elit",
      image: "./images/im6.png",
      price: 12.5,
      tocart: false
    },
    {
      id: 4,
      title: "Random Product 3",
      description: "Sed do eiusmod tempor incididunt",
      image: "./images/im5.png",
      price: 6.99,
      tocart: false
    },
    {
      id: 5,
      title: "Random Product 4",
      description: "Ut labore et dolore magna aliqua",
      image: "./images/im4.png",
      price: 15.99,
      tocart: false
    },
    {
      id: 6,
      title: "Random Product 5",
      description: "Ut enim ad minim veniam",
      image: "./images/im3.png",
      price: 10.99,
      tocart: false
    },
    {
      id: 7,
      title: "Random Product 6",
      description: "Quis nostrud exercitation ullamco",
      image: "./images/im2.png",
      price: 8.75,
      tocart: false
    },
    {
      id: 8,
      title: "Random Product 7",
      description: "Duis aute irure dolor in reprehenderit",
      image: "./images/im1.png",
      price: 14.5,
      tocart: false
    }

  ]);
  return (
    <div>
      <Router> 
      <Routes> 



<Route   path='/' 
element ={
  <>
            <Home Product={Product}/>
  </>
}
/>
<Route path='/cart'  Component={BuyPage} /> 
 </Routes> 

      </Router> 
    </div>
  )
}

export default App
