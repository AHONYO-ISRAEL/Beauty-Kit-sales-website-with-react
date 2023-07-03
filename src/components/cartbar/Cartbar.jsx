import PropTypes from 'prop-types';
import './Cartbar.css'
import { useContext } from 'react';
import { CartAmountContext } from '../CartAmountProvider';
import { CartProductContext } from '../CartProductProvider';
import Button from '../Button';

const Cartbar = () => {

const {cartProducts, setCartProducts} =  useContext(CartProductContext)
const {cartAmount, setCartAmount} = useContext(CartAmountContext)
setCartAmount(cartProducts?.map(product => product.price * product.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2))

let clear =() =>{
  alert('Clear all Product')
  setCartProducts([])
  localStorage.setItem('cart', JSON.stringify([]))
}

  return (
    <div className='Cartbar'>
          <div className="total"><h1>Total : <span className="totalprice"> {cartAmount} $</span> </h1>
    </div>
<div className="cartbuttons">   
  <Button message={'Clear all'} onButtonClick={clear} classname={'allclear'} />
  <Button message={'Purchase'}  classname={'cartpurchase'} />

</div>
    </div>
  )
}

Cartbar.propTypes ={
  InitialAmount: PropTypes.func,
}

export default Cartbar
