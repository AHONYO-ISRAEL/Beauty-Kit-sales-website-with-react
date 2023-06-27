import Products from "./products/Products"
import './SecondContainer.css'

const SecondContainer = () => {
  return (
    <div className="SecondContainer">
                   <h1 className="second-container-title">OUR PRODUCTS</h1>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto ea necessitatibus
            optio iste rem adipisci odit sed quo vel labore,
        </p>
        <Products />
    </div>
  )
}



export default SecondContainer