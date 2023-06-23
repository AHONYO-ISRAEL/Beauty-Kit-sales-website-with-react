import CartProduct from '../cartproduct/CartProduct';
import './CartProducts.css'
import PropTypes from 'prop-types';
const CartProducts = ({cartproducts}) => {
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

CartProducts.propTypes = {
cartproducts: PropTypes.array,
}
export default CartProducts
