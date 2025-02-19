import { useState, useEffect } from "react";
import Navbar from "../Components/Navigation/navbar";
import Hero from "../Components/Hero/Hero";
import { styles } from "../styles";
import Loading from "../Components/Loading/Loading";




const Home = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const removeLoader = () => setLoading(false);
    console.log(window.addEventListener)
    window.addEventListener("load",removeLoader);
    return window.removeEventListener("load",removeLoader);
  },[])

  return (
    <>
    {!loading ? <Loading/> : <div className="">
        <div>
          <Navbar/>
        </div>
        {/* there will be background image for hero sections */}
        <div className={`${styles.marginHome}`}>
          <Hero/>
        </div>
      </div> }
      
    </>
  )
}

export default Home;