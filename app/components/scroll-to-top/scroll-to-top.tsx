'use client'

import { useState, useEffect } from "react";

export default function ScrollToTop({text} : {text: string}) {
    
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) { // You can adjust this value to control when the button appears
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scrolling effect
        });
      };

    return (
        <button className={`fixed bottom-4 right-4 2xl:right-[16%] bg-[#DF2B64] hover:bg-[#df2b64bd] text-white font-bold py-2 px-4 rounded transition-opacity cursor-pointer
        ${isVisible ? "opacity-60" : "opacity-0"}`} onClick={scrollToTop}>
            {text}
        </button>
    )
}