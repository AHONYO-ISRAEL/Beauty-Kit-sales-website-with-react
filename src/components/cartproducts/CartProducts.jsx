import CartProduct from '../cartproduct/CartProduct';
import './CartProducts.css'
import { useContext} from 'react'
import PropTypes from 'prop-types';
import { CartProductContext } from '../CartProductProvider';


const CartProducts = ({Updater}) => {

  const  {cartProducts} = useContext(CartProductContext)



  return (

  
    <div className='CartProducts'>
      {
        cartProducts.length>0?
        cartProducts.map((x) =>
        <CartProduct  cartproduct={x} key={x.id}  id={x.id} Updater={Updater}  />
        ): <h1 className='noProducts'>No Products to display</h1>
      }
    </div>
  )
}

CartProducts.propTypes={
  Updater: PropTypes.func,
}


export default CartProducts
