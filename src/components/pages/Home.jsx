import Header from "../header/Header"
import FirstContainer from "../firstcontainer/FirstContainer"
import SecondContainer from "../secondcontainer/SecondContainer"
const Home = ({Product}) => {
  return (
    <>
        <Header />
<FirstContainer/>
<SecondContainer  products={Product} />
    </>
  )
}

export default Home