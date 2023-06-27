import Header from "../header/Header"
import FirstContainer from "../firstcontainer/FirstContainer"
import SecondContainer from "../secondcontainer/SecondContainer"
import PropTypes from 'prop-types';

const Home = () => {
  return (
    <>
        <Header />
<FirstContainer/>
<SecondContainer />
    </>
  )
}

Home.propTypes={
    add:PropTypes.func,
}


export default Home

