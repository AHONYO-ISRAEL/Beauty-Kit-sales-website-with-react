import Products from "./products/Products"
import './SecondContainer.css'
import PropTypes from 'prop-types';

const SecondContainer = ({products}) => {
  return (
    <div className="SecondContainer">
                   <h1 className="second-container-title">OUR PRODUCTS</h1>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto ea necessitatibus
            optio iste rem adipisci odit sed quo vel labore,
        </p>
        <Products product={products}/>
    </div>
  )
}

SecondContainer.propTypes = {
    products:PropTypes.array,
}

export default SecondContainer