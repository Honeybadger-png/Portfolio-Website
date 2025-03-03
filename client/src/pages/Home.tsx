import { useState, useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import { styles } from "../styles";
import Introduction from "../Components/Introduction/Introduction";
import Projects from "../Components/Projects/Projects";
import Experience from "../Components/Experience/Experience";
import Contact from "../Components/Contact/Contact";





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
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
      </div> 
      
    </>
  )
}

export default Home;