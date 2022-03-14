import { Fragment } from "react";
import Nav from './Nav';
import Slider from './Slider';
import WhatWeDo from './WhatWeDo';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';
import Footer from './Footer';
import ScrollToTop from "../ScrollToTop";


const Home = () => {
    return ( 
        <Fragment>
            <Nav/>
            <Slider/>
            <WhatWeDo/>
            <Subscribe/>
            <Testimonials/>
            <Footer/>
            <ScrollToTop/>
        </Fragment>
     );
}
 
export default Home;