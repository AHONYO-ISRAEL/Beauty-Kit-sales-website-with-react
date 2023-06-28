import Button from '../../../Button';
import './Aproduct.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
const Aproduct = ({Product, add}) => {

const [message1,setMessage1] = useState('Add to Cart')

const [message2] = useState('Buy Now')


let HandleFirstButtonClick = (e) =>{
  setMessage1('Product Added');
  add(e.target.value)
}


  return (
<div className="Aproduct" id={Product.id}>
<h1>{Product.title}</h1>
      <img src={Product.image} alt='' />
      <div className="purchase">
        {
          Product.toCart ?  <Button  onButtonClick={HandleFirstButtonClick}   message={"Product Added"}value={Product.id} />:  <Button  onButtonClick={HandleFirstButtonClick}   message={message1}  value={Product.id} />
        }
          <Button  message={message2}/>
        <p>${Product.price}$</p>
      </div>
</div>
    )
}

Aproduct.propTypes  =  {
    Product: PropTypes.object,
    add:PropTypes.func,
}



export default Aproduct