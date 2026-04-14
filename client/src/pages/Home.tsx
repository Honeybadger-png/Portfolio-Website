import Hero from "../features/hero/Hero";
import { styles } from "../styles";
import Introduction from "../features/introduction/Introduction";
import ProjectsDisplay from "../features/projects/ProjectsDisplay";
import Experience from "../features/experience/Experience";





const Home = () => {

  return (
    <>
      <div className="text-text-light">
        {/* there will be background image for hero sections */}
        <div className={`${styles.marginHome} mb-96 font-audiowide`}>
          <Hero/>
          <Introduction/>
          <Experience/>
          <div id="projects">
            <ProjectsDisplay/>
          </div>
        </div>
      </div> 
      
    </>
  )
}

export default Home;