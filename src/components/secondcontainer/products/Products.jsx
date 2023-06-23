import './Products.css'
import Aproduct from './aproduct/Aproduct'
import PropTypes from 'prop-types';

const Products = ({product}) => {
  return (
    <div className='Products'>
      {
        product.map((aproduct) => 
            <Aproduct  key={aproduct.id} Product={aproduct} />
        )
      }
    </div>
  )
}

Products.propTypes = {
    product: PropTypes.array,
}

export default Products
