import CartProduct from '../cartproduct/CartProduct';
import './CartProducts.css'
import { useState } from 'react'
const CartProducts = () => {

  let products =  JSON.parse(localStorage.getItem('cart')) || []

const [cartproducts] = useState(products)


  return (

  
    <div className='CartProducts'>
      {
        cartproducts.map((x) =>
        <CartProduct  cartproduct={x} key={x.id}  id={x.id} />
        )
      }
    </div>
  )
}


export default CartProducts
