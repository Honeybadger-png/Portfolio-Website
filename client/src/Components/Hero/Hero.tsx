import { useEffect, useState } from "react";
import { styles } from "../../styles";

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
    <section className="relative h-screen " >
      <div className={`${styles.paddinX}${styles.paddingY} `}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am<span className="text-dark-secondary">Mert</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100 flex flex-row`}>
           I am a {Titles[change].title}
            {/* {change ? <motion.p animate={{opacity:1,scale:1}} transition={{duration:"0.5"}} initial={{opacity:0,scale:0.5}}>Full Stack Developer</motion.p> : 
            <motion.p animate={{x:50,scale:[1,1,1,1,1.5]}} transition={{ease:"easeOut",duration:1.5}} >3D Artist</motion.p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;