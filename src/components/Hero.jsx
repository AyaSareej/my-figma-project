import React from "react";
import backgroundImage from '../assets/images/hero-section-background.png'; 

const Hero = () => {
    return (
        <section className = "w-full  h-[777px] relative flex items-center justify-center text-white text-center"
        style= {{
            backgroundImage: `linear-gradient(180deg, rgba(10, 14, 63, 0.8) 0%, rgba(255, 255, 255, 0) 210.04%), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl px-4">
        <p className="text-[#1EE3CF] text-[18px] md:text-[22px] font-noor-regular leading-[22px] md:leading-[26.4px] inline-block px-2 py-1 ">
        Assistify
        </p>
        <p className="text-[#1EE3CF] text-[18px] md:text-[22px] font-noor-regular leading-[22px] md:leading-[33.4px] inline-block px-2 py-4 ">
        احصل على الإقامة التركية بكل سهولة مع
        </p> 
        <h1 className="text-[32px] md:text-[50px] font-noor-bold leading-[38px] md:leading-[60px] mt-4 py-4 ">
          استثمر من أي مكان في العالم واحصل 
          <br />
           على الإقامة التركية     
        </h1>
        <p className="text-[#1EE3CF] text-[18px] md:text-[22px] font-noor-regular leading-[22px] md:leading-[26.4px] mt-4 inline-block px-4 py-2 ">
          استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى<br /> دولار أمريكي من خلال منصتنا  <span>200,000</span> 
        </p>
      </div>
        </section>
    );
};

export default Hero;