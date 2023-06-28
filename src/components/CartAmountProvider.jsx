import { createContext, useContext, useState } from "react"
export  const CartAmountContext = createContext()
import PropTypes from 'prop-types';
import { CartProductContext } from "./CartProductProvider";
const CartAmountProvider = ({children}) => {

    const {cartProducts} = useContext(CartProductContext)




    const [cartAmount, setCartAmount] = useState(cartProducts.map(product => product.price * product.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2))
  return (
    <div>
      <CartAmountContext.Provider  value={{cartAmount, setCartAmount}} >
        {children}
      </CartAmountContext.Provider>
    </div>
  )
}
CartAmountProvider.propTypes = {
    children: PropTypes.node
}



export default CartAmountProvider
