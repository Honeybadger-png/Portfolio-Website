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
        <div className={`${styles.heroSubText} z-10 top-[20%] text-secondary absolute  justify-center cursor-pointer`}>
          {`{MERHABA}`}
        </div>
        <div className={`${styles.heroSubText} z-10 right-[10%] top-[50%] text-neon-pink absolute  justify-center cursor-pointer`}>
          {`{こんにちは}`}
        </div>
        <div className={`${styles.heroSubText} z-10 left-[10%] bottom-[20%] text-neon-pink absolute  justify-center cursor-pointer`}>
          {`{HELLO}`}
        </div>
        <div className="h-full justify-center">
          <h1 className={`${styles.heroHeadText} mb-2 text-center`}>
            <span className="text-primary">MERT GUL</span>
          </h1>
          <div className="h-[60vh] bg-[auto_80vh] bg-center bg-no-repeat bg-[url(/logo/Background_Image.svg)]">
            <DeskCanvas/>
          </div>
          <div className={`${styles.heroSubText} justify-center mt-4 text-cyber-orange flex flex-row cursor-pointer`}>
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