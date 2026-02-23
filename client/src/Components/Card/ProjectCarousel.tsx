import { useState } from "react";
import { Image } from "../../Constants/Projects";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

type ProjectImagesProps = {
    images: Image[];
}
interface ProjectCarouselProps extends ProjectImagesProps{
  height: string;
}

const ProjectCarousel = ({images,height}: ProjectCarouselProps) => {
      const [ currentIndex, setCurrentIndex] = useState(0);
      const width = 1200 + 16;

    return(

          <div className="w-[1200px] relative" >
              <div className="overflow-hidden h-full w-full ">
                <div className="flex gap-4" style={{transform: `translateX(-${currentIndex * width}px)`}}>
                  {
                    images.map((image)=> {
                      return (
                        <div className="flex items-center justify-center w-[1200px] shrink-0" >
                          <img className=" object-contain" style={{height: `${height}px`}} src={image.url} alt="" />
                        </div>
                      )
                    })
                  }

                </div>
              </div>
              <div className="flex justify-center mt-10">
                {
                  images.map((image,index)=> (
                    index === currentIndex ? <div className="h-[16px] w-[16px] rounded-full bg-red-400"></div> :
                    <div className="h-[16px] w-[16px] rounded-full bg-yellow-400">
                      <img src={image.url} alt="" />
                    </div>
                  ))
                }
              </div>

              <div className="absolute top-[50%] left-0 text-primary" onClick={()=> setCurrentIndex((i)=> Math.max(i-1,0))}>
                <div className="flex p-2 border-2 border-secondary rounded-full items-center">
                  <button className="text-[24px]"> <FaChevronLeft /></button>
                </div>
              </div>
              <div className="absolute top-[50%] right-0  text-primary" onClick= {()=> setCurrentIndex((i)=> Math.min(i+1,images.length-1))}>
                <div className="flex p-2 border-2 border-secondary rounded-full items-center">
                  <button className="text-[24px]"><FaChevronRight /></button>
                </div>
              </div>
          </div>
    )
}

export default ProjectCarousel;