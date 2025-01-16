import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navigation/Navbar";
import { styles } from "../styles";


interface Props{

}

const Home = (props: Props) => {
  return (
    <>
      <div className="">
        <div>
          <Navbar/>
        </div>
        {/* there will be background image for hero sections */}
        <div className={`${styles.marginHome} bg-white`}>
          <Hero/>
        </div>
      </div>
    </>
  )
}

export default Home;