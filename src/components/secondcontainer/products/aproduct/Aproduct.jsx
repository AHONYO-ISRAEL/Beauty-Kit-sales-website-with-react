import './Aproduct.css'
import PropTypes from 'prop-types';
const Aproduct = ({Product}) => {

    let add = (id) =>{
        console.log(id);
    }
  return (
<div className="Aproduct" id={Product.id}>
<h1>{Product.title}</h1>
      <img src={Product.image} alt='' />
      <div className="purchase">
        <button type="button" >Add to Cart</button>
        <button type="button" className="but"  onClick={add(Product.id)}  value={Product.id}  >Buy Now</button>
        <p>${Product.price}$</p>
      </div>
</div>
    )
}

Aproduct.propTypes  =  {
    Product: PropTypes.array,
}



export default Aproduct