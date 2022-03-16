import { Fragment } from "react";
import Nav from '../Nav/Nav';
import Slider from './Slider';
import WhatWeDo from './WhatWeDo';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';
import Footer from '../Footer/Footer';
import ScrollToTop from "./ScrollToTop";


const Home = () => {
    return ( 
        <Fragment>
            <Slider/>
            <WhatWeDo/>
            <Subscribe/>
            <Testimonials/>
            <ScrollToTop/>
        </Fragment>
     );
}
 
export default Home;