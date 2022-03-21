import './Home.css'
import breakfast from './images/breakfast.jpg'
import lunch from './images/lunch.jpg'
import dinner from './images/dinner.jpeg'

const WhatWeDo = () => {
    return ( 
        <div className='container-fluid'>
        <div className='whatweDoSection row'>
            <div className="whatweDoSection-info col-4">
                <h2 className='mb-5'>What We Do?</h2>
                <p>We are cocking the best meals ever for your health, We're serveing all kinds of meals such as Breakfast, Lunch and Dinner, We provide fastest delivery and easy pick up.</p>
            </div>
            <div className="meals col-8 text-center">
                <div className='row'>
                    <div className='meal col'>
                        <img src={breakfast} alt="" />
                        <h4 className='meal-name'>Breakfast</h4>
                    </div>
                    <div className='meal col'>
                        <img src={lunch} alt="" />
                        <h4 className='meal-name'>Lunch</h4>
                    </div>
                    <div className='meal col'>
                        <img src={dinner} alt="" />
                        <h4 className='meal-name'>Dinner</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default WhatWeDo;