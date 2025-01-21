import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navigation/Navbar";
import { styles } from "../styles";



const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <Navbar/>
        </div>
        {/* there will be background image for hero sections */}
        <div className={`${styles.marginHome}`}>
          <Hero/>
        </div>
      </div>
    </>
  )
}

export default Home;