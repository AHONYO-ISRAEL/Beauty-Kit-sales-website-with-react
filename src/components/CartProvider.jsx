import { createContext, useState } from "react" 
export  const CartContext = createContext() 
import PropTypes from 'prop-types';
const CartProvider = ({children}) => {
    const [cartIndex, setCartIndex] = useState(0)
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


