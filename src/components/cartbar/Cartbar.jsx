import PropTypes from 'prop-types';
import './Cartbar.css'
import { useContext } from 'react';
import { CartAmountContext } from '../CartAmountProvider';
import { CartProductContext } from '../CartProductProvider';

const Cartbar = () => {

const {cartProducts} =  useContext(CartProductContext)
const {cartAmount, setCartAmount} = useContext(CartAmountContext)
setCartAmount(cartProducts.map(product => product.price * product.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2))

  return (
    <div className='Cartbar'>
          <div className="total"><h1>Total : <span className="totalprice"> {cartAmount} $</span> </h1>
    </div>
<div className="cartbuttons">
    <button className = "allclear" >Clear All</button>
<button className="cartpurchase">Purchase</button>
</div>
    </div>
  )
}

Cartbar.propTypes ={
  InitialAmount: PropTypes.func,
}

export default Cartbar
