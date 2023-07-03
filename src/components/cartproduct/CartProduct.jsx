import Button from '../Button';
import { useContext, useState } from 'react'
import './CartProduct.css'
import PropTypes from 'prop-types';
import { CartAmountContext } from '../CartAmountProvider';
import { CartProductContext } from '../CartProductProvider';
import { CartContext } from '../CartProvider';

const CartProduct = ({ cartproduct, id }) => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  let SearchCart = cart.find(product => product.id === parseInt(id))
  const [quantity, setQuantity] = useState(SearchCart.quantity)
  const { cartProducts, setCartProducts } = useContext(CartProductContext)
  const {  setCartAmount } = useContext(CartAmountContext)
  const {setCartIndex} = useContext(CartContext)


  let HandlePlusButtonClick = (e) => {
    setQuantity(quantity + 1)
    cartproduct.quantity = quantity + 1
    let id = e.target.value
    let SearchCart = cart.find(product => product.id === parseInt(id))
    SearchCart.quantity = cartproduct.quantity
    localStorage.setItem('cart', JSON.stringify(cart))
    setCartProducts(cart)

    console.log(cartProducts)
    setCartAmount(cartProducts?.map(product => product.price * product.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2))

  }
  let HandleMinusButtonClick = (e) => {
    if (cartproduct.quantity > 1) {
      setQuantity(quantity - 1)
      cartproduct.quantity = quantity - 1
      let id = e.target.value
      let SearchCart = cart.find(product => product.id === parseInt(id))
      SearchCart.quantity = cartproduct.quantity
      localStorage.setItem('cart', JSON.stringify(cart))
      setCartProducts(cart)
  
      setCartAmount(cartProducts?.map(product => product.price * product.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2))
      
  
    }
    let id = e.target.value
    let SearchCart = cart.find(product => product.id === parseInt(id))
    SearchCart.quantity = cartproduct.quantity
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  let HandleProductRemoval = () => {
    alert("Removing  " + cartproduct.title)
    cart = cart.filter((x) => x.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart))
    setCartProducts(cart)
    if(cartProducts?.length >0){
      setCartAmount(cartProducts?.map(product => product.price * product.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0))
      }
      else{
      setCartAmount(0)
      }
    setCartIndex(cartProducts?.length)
  }
  setCartIndex(cartProducts?.length)

  return (
    <div className='CartProduct'>
      <div className="product-head">
        <h1>{cartproduct.title}</h1>
        <p>{cartproduct.description}</p>
      </div>
      <div className="product-body">
        <img src={cartproduct.image} alt='' />
        <div className="purchase">
          <div className="quantity">
            <Button message={"-"} value={cartproduct.id} onButtonClick={HandleMinusButtonClick} classname={'remove'} />
            <h1 id={cartproduct.id} className="qty">{quantity}</h1>
            <Button message={"+"} value={cartproduct.id} onButtonClick={HandlePlusButtonClick} classname={'add'} />

          </div>
          <p>{cartproduct.price}</p>
          <button className="removeproduct" onClick={HandleProductRemoval}  >Remove from cart</button>
        </div>
      </div>
    </div>
  )
}

CartProduct.propTypes = {
  cartproduct: PropTypes.object,
  id: PropTypes.number,
  Updater: PropTypes.func
}
export default CartProduct
