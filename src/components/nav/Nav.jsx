

const Nav = () => {
  let cartindex = document.querySelector('.navbar ');
  console.log( cartindex)

  return (
    <nav className = "navbar">
    <div className = "iconsmedia cart-user">
      <a href="../index.html">      <img src="/fontawesome-free-6.4.0-web/svgs/solid/arrow-left.svg" className = "icon arrow" alt=""/>
      </a>
      <br/>

        <img src="/fontawesome-free-6.4.0-web/svgs/regular/user.svg" className = "icon" alt=""/>
       <div className = "carts">
              
 
    <img src="/fontawesome-free-6.4.0-web/svgs/solid/cart-shopping.svg" className = "icon icart"   alt=""/>

        <p className = "cart-index">0 </p>

       </div>
      <img src="../assets/fontawesome-free-6.4.0-web/svgs/solid/magnifying-glass.svg" className = "icon" alt=""/>

    </div>
</nav>
  )
}

export default Nav
