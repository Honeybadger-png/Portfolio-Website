import { useEffect, useState } from "react";
import { styles } from "../../styles";
import DeskCanvas from "../Canvas/Desk";

const Hero = () =>{
  const Titles = [
    {title:"Fullstack Developer", color:"#333"},
    {title: "3D Artist", color:"#555"},
  ]
 
  const [change, setChange] = useState(0);

  useEffect(()=>{
    const text = setInterval(()=>{
      if(change === Titles.length - 1){
        setChange(0);
      }else {
        setChange(change + 1)
      }
    },4000);
    return () =>{
      clearInterval(text);
    }
  },[change]);

  return(
    <section className="h-[80vh]" >
      <div className={`${styles.paddinX}${styles.paddingY} `}>
        <div className="h-full justify-center">
          <h1 className={`${styles.heroHeadText} text-center`}>
            Hi, I am<span className="text-primary">Mert</span>
          </h1>
          <div className="h-[50vh]">
            <DeskCanvas/>
          </div>
          <div className={`${styles.heroSubText} justify-center mt-2 text-cyber-orange flex flex-row`}>
           {`{${Titles[change].title}}`}
            {/* {change ? <motion.p animate={{opacity:1,scale:1}} transition={{duration:"0.5"}} initial={{opacity:0,scale:0.5}}>Full Stack Developer</motion.p> : 
            <motion.p animate={{x:50,scale:[1,1,1,1,1.5]}} transition={{ease:"easeOut",duration:1.5}} >3D Artist</motion.p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;