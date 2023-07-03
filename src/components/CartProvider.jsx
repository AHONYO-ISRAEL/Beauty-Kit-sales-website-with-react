import { createContext, useContext, useState } from "react" 
export  const CartContext = createContext() 
import PropTypes from 'prop-types';
import { CartProductContext } from "./CartProductProvider";
const CartProvider = ({children}) => {
  const {cartProducts} = useContext(CartProductContext)
    const [cartIndex, setCartIndex] = useState(cartProducts?.length)

  return (
    <CartContext.Provider  value={{cartIndex, setCartIndex}}>
        {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes ={
    children: PropTypes.node
}

export default CartProvider


