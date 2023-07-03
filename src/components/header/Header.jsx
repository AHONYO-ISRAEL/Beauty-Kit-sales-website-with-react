import user from  '/fontawesome-free-6.4.0-web/svgs/regular/user.svg'
import glass from  '/fontawesome-free-6.4.0-web/svgs/solid/magnifying-glass.svg'
import bars from  '/fontawesome-free-6.4.0-web/svgs/solid/bars-staggered.svg'
import PropTypes from 'prop-types';
import './Header.css'
import { useContext } from 'react'
import { CartContext } from '../CartProvider'
import { CartProductContext } from '../CartProductProvider';


const Header = ({release, icon, path}) => {
  const {cartIndex, setCartIndex} = useContext(CartContext)
const {cartProducts} = useContext(CartProductContext)
setCartIndex(cartProducts.length)
  return (


    <div className='Header'>
    <div className="hamburger icon " >
  <img src={bars}className="burger" alt="" onClick={release} />
</div>
<div className="logo">
  <h1>BEAUTIFLIE</h1>
</div>
<div className="icons cart-user">
  <img src={user} className="icon user" alt=""/>
 <div className="cart">
  <a href={path}>
  <img src= {icon} className="icon icart"   alt=""  />

  </a>
  <p className="cart-index1"> {cartIndex} </p>

 </div>
<img  className="icon glass" alt="" src={glass} />
</div>
</div>
  )
}

Header.propTypes = {
  release:PropTypes.func,
  icon: PropTypes.any,
  path: PropTypes.string,
}

export default Header