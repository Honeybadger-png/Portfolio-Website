import Navbar from "../Components/Navigation/navbar";
import Hero from "../Components/Hero/Hero";
import { styles } from "../styles";



const Home = () => {
  const {APP_STATUS} = process.env;

  return (
    <>
    {APP_STATUS === "development" ? <div className="">
        <div>
          <Navbar/>
        </div>
        {/* there will be background image for hero sections */}
        <div className={`${styles.marginHome}`}>
          <Hero/>
        </div>
      </div>: <div>
      <h1>Under Construction</h1>
    </div> }
      
    </>
  )
}

export default Home;