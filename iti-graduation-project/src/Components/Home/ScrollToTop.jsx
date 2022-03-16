import { useState } from "react";
import './Home.css'

const ScrollToTop = () => {


    const [visible, setVisible] = useState(false)

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500){
          setVisible(true)
        } 
        else if (scrolled <= 500){
          setVisible(false)
        }
      };

      window.addEventListener('scroll', toggleVisible);


    return ( 
            <button style={{display: visible ? 'inline' : 'none'}}  onClick={scrollToTop} className="to-top-button ">
              <i class="fa-solid fa-arrow-up"></i>
            </button>
     );
}
 
export default ScrollToTop;