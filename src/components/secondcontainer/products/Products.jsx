import './Products.css'
import Aproduct from './aproduct/Aproduct'
import PropTypes from 'prop-types';
import { useState } from 'react'


const Products = () => {
  const  [productlist] = useState([

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

  const [cart, setCart] = useState([])

let add =  (id) =>{

let SearchProduct= productlist.find(product =>product.id === parseInt(id))
let SearchCart = cart.find(product =>product.id === parseInt(id))
if(SearchCart === undefined){
  setCart( previouscartproducts =>
    [ ...previouscartproducts,
    {
      id:SearchProduct.id,
      title: SearchProduct.title,
      description : SearchProduct.description,
      image: SearchProduct.image,
      price: SearchProduct.price,
      quantity: 1,
    }]
  )
}
SearchProduct.tocart= true,
console.log(cart)
}
  return (
    <div className='Products'>
      {
        productlist.map((aproduct) => 
            <Aproduct  key={aproduct.id} Product={aproduct}   add={add}/>
        )
      }
    </div>
  )
}

Products.propTypes = {
    productlist: PropTypes.array,
    add: PropTypes.func,
}

export default Products
