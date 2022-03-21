import './Home.css'
import avatar from './images/avatar.png'
import people1 from './images/people1.jpg'
import people2 from './images/people2.jpg'
import people3 from './images/people3.jpg'
import people4 from './images/people4.jpg'
import people5 from './images/people5.png'
import people6 from './images/people6.jpg'

const Testimonials = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousal-testimonials"
      data-bs-ride="carousel"
    >
      <div className='overlay' ></div>
      
      <div style={{zIndex : '1'}}  className="carousel-inner">
      <h2 className='text-center text-white mt-5'>What our clients say about us?</h2>
        <div className="carousel-item active">
            <div className="container testimonials">
                <div className="row ">
                    <div className="testimonials-card col mx-2 pb-4">
                        <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'> Best website for serving healthy food ever! </p>
                        <img src={people1} alt="" />
                        <span className="d-block"> Patrick </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'> Yummy as always, Thank you so much. </p>
                        <img src={people5} alt="" />
                        <span className="d-block"> Sarah </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'> Amazing, Those guys know exactly what they cock!!! </p>
                        <img src={people3} alt="" />
                        <span className="d-block"> John </span>
                    </div>
                </div>
            </div>                
        </div>

        <div className="carousel-item ">
            <div className="container testimonials">
                <div className="row ">
                    <div className="testimonials-card col mx-2 pb-4">
                        <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'> Great experience, Their meals are really good and delicious.</p>
                        <img src={people4} alt="" />
                        <span className="d-block"> Isabella </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Fastest delivery ever!, And thanks for the delcious meal</p>
                        <img src={people2} alt="" />
                        <span className="d-block"> David </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'> I highly recommmend them for their healthy food.</p>
                        <img src={people6} alt="" />
                        <span className="d-block"> Emma </span>
                    </div>
                </div>
            </div>                
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Testimonials;
