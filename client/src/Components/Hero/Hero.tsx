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
    <section className="h-[90vh] bg-[auto_100vh] bg-center bg-no-repeat bg-[url(/logo/Background_Image.svg)]" >
      <div className={`${styles.paddinX}${styles.paddingY} `}>
        {/* <div className={`${styles.heroSubText} z-10 top-[20%] text-secondary absolute  justify-center cursor-pointer`}>
          {`{MERHABA}`}
        </div>
        <div className={`${styles.heroSubText} z-10 right-[10%] top-[50%] text-neon-pink absolute  justify-center cursor-pointer`}>
          {`{こんにちは}`}
        </div>
        <div className={`${styles.heroSubText} z-10 left-[10%] bottom-[20%] text-neon-pink absolute  justify-center cursor-pointer`}>
          {`{HELLO}`}
        </div> */}
        <div className="h-full justify-center">
          <div className="h-[70vh]">
            <DeskCanvas/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;