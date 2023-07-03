import Header from "../header/Header"
import FirstContainer from "../firstcontainer/FirstContainer"
import SecondContainer from "../secondcontainer/SecondContainer"
import PropTypes from 'prop-types';
import  cartplus from  '/fontawesome-free-6.4.0-web/svgs/solid/cart-plus.svg'


const Home = () => {


  


  return (
    <>
        <Header icon={cartplus} path={'/cart'} />
<FirstContainer/>
<SecondContainer />
    </>
  )
}

Home.propTypes={
    add:PropTypes.func,
}


export default Home

