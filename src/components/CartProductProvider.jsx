import { createContext, useState } from "react"
export  const  CartProductContext= createContext()
import PropTypes from 'prop-types';
const CartProductProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart'))) || []
  return (
    <CartProductContext.Provider value={{cartProducts, setCartProducts}}>
        {children}
    </CartProductContext.Provider>
  )
}

CartProductProvider.propTypes = {
    children:PropTypes.node
}
export default CartProductProvider
