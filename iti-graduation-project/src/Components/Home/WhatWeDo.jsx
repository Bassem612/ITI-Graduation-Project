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
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolorem saepe minus culpa nemo rerum perferendis harum atque. Perferendis officia quisquam quasi doloremque sunt voluptatem corrupti voluptas, eius illum perspiciatis! </p>
            </div>
            <div className="meals col-8 text-center">
                <div className='row'>
                    <div className='meal col'>
                        <img src={breakfast} alt="" />
                        <h4 className='meal-name'>Breakfast</h4>
                        <span className='meal-description  d-block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea neque porro facere, vero suscipit, exercitationem, corporis recusandae beatae fugit deserunt fuga. Perferendis ea quam laudantium maxime numquam explicabo aliquam tempora.</span>
                    </div>
                    <div className='meal col'>
                        <img src={lunch} alt="" />
                        <h4 className='meal-name'>Lunch</h4>
                        <span className='meal-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perferendis totam, qui repellat incidunt aliquam voluptatem? Molestiae enim dolor, quisquam eveniet, velit amet placeat sunt fuga fugit, laboriosam culpa ipsum.</span>
                    </div>
                    <div className='meal col'>
                        <img src={dinner} alt="" />
                        <h4 className='meal-name'>Dinner</h4>
                        <span className='meal-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fuga explicabo alias vitae iste cupiditate velit, suscipit minus beatae quibusdam earum eveniet, eos obcaecati, in sit nisi blanditiis ducimus quaerat.</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default WhatWeDo;