import Hero from "../features/Hero/Hero";
import { styles } from "../styles";
import Introduction from "../features/Introduction/Introduction";
import ProjectsDisplay from "../features/Projects/ProjectsDisplay";
import Experience from "../features/Experience/Experience";
import Contact from "../features/Contact/Contact";





const Home = () => {

  return (
    <>
      <div className="text-text-light">
        {/* there will be background image for hero sections */}
        <div className={`${styles.marginHome}`}>
          <Hero/>
          <Introduction/>
          <Experience/>
          <ProjectsDisplay/>
          <Contact/>
        </div>
      </div> 
      
    </>
  )
}

export default Home;