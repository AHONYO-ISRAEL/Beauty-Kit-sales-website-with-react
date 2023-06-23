import './Products.css'
import Aproduct from './aproduct/Aproduct'

const Products = ({product}) => {
  return (
    <div className='Products'>
      {
        product.map((aproduct) => (
            <Aproduct  key={aproduct.id} Product={aproduct} />
        ))
      }
    </div>
  )
}

export default Products
