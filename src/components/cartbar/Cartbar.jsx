import './Cartbar.css'

const Cartbar = () => {
  return (
    <div className='Cartbar'>
          <div className="total"><h1>Total : <span className="totalprice">0</span> </h1>
    </div>
<div className="cartbuttons">
    <button className = "allclear" >Clear All</button>
<button className="cartpurchase">Purchase</button>
</div>
    </div>
  )
}

export default Cartbar
