import React, { useState } from "react";
import img1 from "../Assets/Images/1.png";
import img2 from "../Assets/Images/2.png";
import img3 from "../Assets/Images/3.png";

const Carousel = () => {
  const images = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },
  ];
  const [ind, setInd] = useState(0);
  const prevSlide = () => {
    const firstSlide = ind === 0;
    const newInd = firstSlide ? images.length - 1 : ind - 1;
    setInd(newInd);
  };
  const nextSlide = () => {
    const lastSlide = ind === images.length - 1;
    const newInd = lastSlide ? 0 : ind + 1;
    setInd(newInd);
  };
  // const goToSlide = (slideInd) => {
  //   setInd(slideInd);
  // };
  return (
    <>
      <div className="   sm:mt-12  py-12 px-4 relative group transition-all duration-1000 ease-in-out animation-pulse  ">
        <img
          src={images[ind].url}
          className="w-full h-full bg-center bg-cover duration-1000 "
        />

        {/* </div> */}

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-2xl rounded-full bg-black/20 p-2 text-white cursor-pointer">
          <ion-icon
            name="chevron-back-outline"
            size="small"
            onClick={prevSlide}
          ></ion-icon>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 p-2 text-white cursor-pointer">
          <ion-icon
            name="chevron-forward-outline"
            size="small"
            onClick={nextSlide}
          ></ion-icon>
        </div>
        {/* <div className='flex top-4 justify-center py-2'>
    {images.map((slide,ind)=>(
       <div key={ind} onClick={()=> goToSlide(ind) } className="text 2xl cusrosor-pointer">
        <ion-icon name="ellipse"></ion-icon>
        </div>
            
    ))}
</div> */}
      </div>
    </>
  );
};

export default Carousel;
