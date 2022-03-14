import './Home.css'
import avatar from './images/avatar.png'

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
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>
                </div>
            </div>                
        </div>

        <div className="carousel-item ">
            <div className="container testimonials">
                <div className="row ">
                    <div className="testimonials-card col mx-2 pb-4">
                        <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>
                </div>
            </div>                
        </div>

        <div className="carousel-item ">
            <div className="container testimonials">
                <div className="row ">
                    <div className="testimonials-card col mx-2 pb-4">
                        <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
                    </div>

                    <div className="testimonials-card col mx-2 pb-4">
                    <span className='quotaion'> <i class="fa-solid fa-quote-right"></i> </span>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia facere, dolor placeat nihil reiciendis facilis eos earum cum sed quisquam molestias nulla iure debitis est deleniti voluptate, esse nesciunt.</p>
                        <img src={avatar} alt="" />
                        <span className="d-block"> Fullname </span>
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
