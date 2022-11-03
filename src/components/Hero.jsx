import { useEffect, useState } from "react";
import image from  "../images/hero_pic.webp";
import scrolldowngif from  "../images/scroll_down.gif";

function Hero() {
  let [navbarHeight,setNavbarHeight] = useState('96px');
  useEffect(()=>{
    setNavbarHeight(document.getElementById('navigation').offsetHeight+'px');
  },[])
  
  return (
    <div className="container mx-auto relative flex md:block flex-col justify-center mb-8" style={{
        minHeight:`calc(100vh - ${navbarHeight} - 24px)`
    }}>
       <div className="flex justify-center items-center">
            <div className="flex md:justify-start justify-center items-center h-full">
                <div className="p-4 md:p-0">
                    <h6 className="text-6xl text-green-400 md:text-8xl mb-4 md:mb-0">Hello...</h6>
                    <h6 className="text-4xl text-green-400 md:mb-4 md:text-8xl mb-8">I'm Aung Chan Oo.</h6>
                    <p className="text-xl mb-4 leading-10"> 
                        I'm a software developer. I develop Web Applications, Front-end Web Development, Back-end Development & API development for Mobile Development.
                    </p>
                    <a href="mailto:aungchanoo.dev@gmail.com" className="bg-green-400 p-4 text-xl text-white hover:bg-white border-green-400 hover:text-green-400 border-2 font-medium">
                        Contact Me Now 
                    </a>
                </div>
            </div>
            <div className="w-3/4 pt-8 md:block hidden">
                <img src={image} alt="hero_image" className="max-w-full h-auto"/>
            </div>
            <img src={scrolldowngif} alt="" width="100" height="100" className="absolute bottom-3 mx-auto -z-10 md:w-24 w-10"/>
       </div>
    </div>
  );
}

export default Hero;
