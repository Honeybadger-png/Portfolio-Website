import { useState, useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import { styles } from "../styles";
import Introduction from "../Components/Introduction/Introduction";





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
      <div className="text-text-light">
        {/* there will be background image for hero sections */}
        <div className={`${styles.marginHome}`}>
          <Hero/>
          <Introduction/>
        </div>
      </div> 
      
    </>
  )
}

export default Home;