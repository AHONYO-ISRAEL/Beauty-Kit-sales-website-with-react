import './CartProduct.css'
import PropTypes from 'prop-types';

const CartProduct = ({cartproduct}) => {
  return (
    <div className = 'CartProduct'>
    <div className = "product-head">
<h1>{cartproduct.title}</h1>
<p>{cartproduct.description}</p>
</div>
<div className = "product-body">
<img src={cartproduct.image}   alt ='' />
<div className = "purchase">
<div className = "quantity">

<button className = "remove" >-</button>
<h1 id= {cartproduct.id}className = "qty">{cartproduct.quantity}</h1>
<button className = "add" >+</button>

</div>
<p>{cartproduct.price}</p>
<button className = "removeproduct">Remove from cart</button>
</div>
</div>
</div>
  )
}

CartProduct.propTypes = {
  cartproduct:PropTypes.array,
}
export default CartProduct
