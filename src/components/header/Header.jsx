import  cartplus from  '/fontawesome-free-6.4.0-web/svgs/solid/cart-plus.svg'
import user from  '/fontawesome-free-6.4.0-web/svgs/regular/user.svg'
import glass from  '/fontawesome-free-6.4.0-web/svgs/solid/magnifying-glass.svg'
import bars from  '/fontawesome-free-6.4.0-web/svgs/solid/bars-staggered.svg'


import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
    <div className="hamburger icon " >
  <img src={bars}className="burger" alt=""/>
</div>
<div className="logo">
  <h1>BEAUTIFLIE</h1>
</div>
<div className="icons cart-user">
  <img src={user} className="icon" alt=""/>
 <div className="cart">
  <a href="/cart">
  <img src= {cartplus} className="icon icart"   alt=""  />

  </a>
  <p className="cart-index1">0 </p>

 </div>
<img  className="icon" alt="" src={glass} />
</div>
</div>
  )
}

export default Header