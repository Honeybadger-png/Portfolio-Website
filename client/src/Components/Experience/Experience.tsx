import FlipText from "../flipText";
import { experiences } from "../../Constants/Constants";




const Experience = ()=>{

    const listLength = experiences.length;

    return (
        <div className="my-6">
            <div className="justify-items-center mb-6">
                <h1>WORK EXPERIENCE</h1>
            </div>
            {
                experiences.map((value,key)=>{
                    return(
                    <>
                        <FlipText experience={value}  key={key} current={key} length={listLength} >

                        </FlipText>
                    </>
                    )
                })
            }
        </div>
    )
}

export default Experience


// <div className="h-full grid grid-cols-3 gap-4">
//                     {
//                         props.skills.map((skill)=> (
//                             skill.title !== "Language" ? (
//                                 <div>
//                                     <motion.div className='border-2 border-cyber-orange justify-items-center cursor-pointer' onClick={()=> !isClicked ? setIsClicked(skill.title) : setIsClicked("")}>
//                                         <h2>{skill.title}</h2>
//                                     </motion.div>
//                                     {
//                                         isClicked === skill.title && (
//                                             <AnimatePresence>
//                                                 <motion.div className=' h-full justify-items-center content-center' initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}>
//                                                     <div className=' flex gap-2 w-full border-2 border-t-0 border-cyber-orange'>
//                                                         {
//                                                             skill.logos?.map((logo)=> (
//                                                                 <div className=' h-20 w-20 p-2   justify-items-center content-center'>
//                                                                     <img className=''  src={logo.url} alt="" />
//                                                                 </div>
//                                                             ))
//                                                         }
//                                                     </div>
//                                                 </motion.div>
//                                             </AnimatePresence>
//                                         )
//                                     }
//                                 </div>
//                             ) : <div>
//                                     <motion.div className='border-2 border-cyber-orange justify-items-center cursor-pointer' onClick={()=> !isClicked ? setIsClicked(skill.title): setIsClicked("")}>
//                                         <h2>{skill.title}</h2>
//                                     </motion.div>
//                                     {
//                                         isClicked === skill.title && (
//                                             <AnimatePresence>
//                                                 <motion.div className=' h-full justify-items-center content-center' initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}>
//                                                     <div className=' flex gap-2 w-full border-2 border-t-0 border-cyber-orange'>
//                                                         {
//                                                             skill.languages?.map((language)=> (
//                                                                 <div className=' h-20 w-20 p-2   justify-items-center content-center'>
//                                                                     <h2>{language}</h2>
//                                                                 </div>
//                                                             ))
//                                                         }
//                                                     </div>
//                                                 </motion.div>
//                                             </AnimatePresence>
//                                         )
//                                     }
//                             </div>
//                         ))
//                     }
//                 </div>


// const skills = [
//     {
//         title: skillTypes.Web,
//         logos: [
//             {
//                 url: "logo/skills_logo/html.png"
//             },
//             {
//                 url: "logo/skills_logo/css.png"
//             },
//             {
//                 url: "logo/skills_logo/tailwind.png"
//             },
//             {
//                 url: "logo/skills_logo/react.png"
//             },
//             {
//                 url: "logo/skills_logo/next.png"
//             },
//             {
//                 url: "logo/skills_logo/figma.png"
//             },
//         ]
//     },
//     {
//         title: skillTypes.Game,
//         logos: [
//             {
//                 url: "logo/skills_logo/blender.png"
//             },
//             {
//                 url: "logo/skills_logo/unity.png"
//             },
//         ]
//     },
//     {
//         title: skillTypes.Language,
//         languages: ["English","Japanese"]

//     }
// ]