import './Aproduct.css'

const Aproduct = ({Product}) => {
  return (
<div className="Aproduct" id={Product.id}>
<h1>{Product.title}</h1>
      <img src={Product.image} alt='' />
      <div className="purchase">
        <button type="button" >Add to Cart</button>
        <button type="button" className="but"  onClick={e => console.log(e.target.value)}  value={Product.id}  >Buy Now</button>
        <p>${Product.price}$</p>
      </div>
</div>
    )
}



export default Aproduct