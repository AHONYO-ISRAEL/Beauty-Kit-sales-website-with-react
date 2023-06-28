import Header from "../header/Header"
import FirstContainer from "../firstcontainer/FirstContainer"
import SecondContainer from "../secondcontainer/SecondContainer"
import PropTypes from 'prop-types';
import Nav from "../nav/Nav";
import  cartplus from  '/fontawesome-free-6.4.0-web/svgs/solid/cart-plus.svg'


const Home = () => {

  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  
  let release = () =>{
            // burger.classList.contains("active")?burger.classList.remove("active"):burger.classList.add("active");
            // nav.classList.contains("active")?nav.classList.remove("active"):nav.classList.toggle("active");
            console.log(burger)
            console.log(nav)
  }

  return (
    <>
    <Nav/>
        <Header release={release} icon={cartplus} path={'/cart'} />
<FirstContainer/>
<SecondContainer />
    </>
  )
}

Home.propTypes={
    add:PropTypes.func,
}


export default Home

