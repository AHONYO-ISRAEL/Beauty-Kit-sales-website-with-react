import CartProduct from '../cartproduct/CartProduct';
import './CartProducts.css'
import { useState } from 'react'
const CartProducts = () => {
  const [cartproducts] = useState([

    {
      id: 1,
      title: "Beauty Brush",
      description: "Lorem ipsum shits and stuff",
      image: "./images/im8.png",
      price: 7.5,
      quantity:1,
      tocart: false
    },
    {
      id: 2,
      title: "Random Product 1",
      description: "Lorem ipsum dolor sit amet",
      image: "./images/im7.png",
      price: 9.99,
      quantity:1,
      tocart: false
    },
    {
      id: 3,
      title: "Random Product 2",
      description: "Consectetur adipiscing elit",
      image: "./images/im6.png",
      price: 12.5,
      quantity:1,
      tocart: false
    },




  ]);


  return (

  
    <div className='CartProducts'>
      {
        cartproducts.map((x) =>
        <CartProduct  cartproduct={cartproducts} key={x.id}/>
        )
      }
    </div>
  )
}


export default CartProducts
