import './FirstContainer.css'
import beautykitimg from './../../../public/images/beauty-kit-img.png'

const FirstContainer = () => {
  return (
    <div className='FirstContainer'>
        <div className="beauty-kit">
            <h1>Beauty <br/> Kit</h1>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, perspiciatis ad itaque
                cupiLorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, perspiciatis ad itaque cupi</p>
            <button>Buy Now</button>
        </div>
        <div className="kit-img">
            <img src={beautykitimg}alt=""/>
        </div>
    </div>
  )
}

export default FirstContainer