import Header from "../header/Header"
import FirstContainer from "../firstcontainer/FirstContainer"
import SecondContainer from "../secondcontainer/SecondContainer"
import PropTypes from 'prop-types';

const Home = ({Product}) => {
  return (
    <>
        <Header />
<FirstContainer/>
<SecondContainer  products={Product} />
    </>
  )
}

Home.propTypes={
    Product : PropTypes.array,
}


export default Home

