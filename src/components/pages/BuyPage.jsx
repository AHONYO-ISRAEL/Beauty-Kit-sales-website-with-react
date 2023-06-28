import CartAmountProvider from "../CartAmountProvider"
import CartProductProvider from "../CartProductProvider"
import Cartbar from "../cartbar/Cartbar"
 import CartProducts from "../cartproducts/CartProducts"
import Header from "../header/Header"
import arrow from '/fontawesome-free-6.4.0-web/svgs/solid/arrow-left.svg'



const BuyPage = () => {




  return (
    <>
<Header  icon={arrow}  path={'/'}/>
<CartProductProvider>
<CartAmountProvider>
<Cartbar />
<CartProducts /> 
</CartAmountProvider>
</CartProductProvider>
    </>
  )
}


export default BuyPage