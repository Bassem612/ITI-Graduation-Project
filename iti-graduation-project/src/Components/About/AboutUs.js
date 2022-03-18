import React from "react";
import "./about.css";
import { Card } from "react-bootstrap";
export default function AboutUs() {
  return (
    <div className="About-us-section">
      <div className="container-fluid bg-img mb-4">
        <div className="row justify-content-center align-items-center fw-bold text-center ">
          <div className="col-sm-12 col-md-6 mt-5 m-0 p-0">
            <h1 className="text-light about-H  ">ABOUT US</h1>
            <p className="text-light">
              We are industry-leading organic farm delivering the best products
              that boost your daily life energy and potential.
            </p>
          </div>
        </div>
      </div>

      <div className="container marg">
        <div className="row ">
          <div className="col-sm-12 col-md-6">
            <h4 className="secnd-H mb-3">
              <i aria-hidden="true" className="fas fa-quote-left quot"></i> NEW
              GENERATION OF FARMERS
            </h4>

            <div className="col-sm-12 col-md-6">
              <div className="row">
                <ul className="frst-ul ">
                  <li> About</li>
                  <li> OUR MISSION</li>
                  <li> OUR VISION</li>
                </ul>
              </div>

              <p>
                Since its foundation, Orange offers best organic fruits for
                local residents, fruit markets, and guests of our city. We are
                dedicated to improving your healthy food standards.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 p-0 m-0">
            <div className="row mx-auto my-auto justify-content-center">
              <div
                id="recipeCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="col-sm-3   col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/estmar.jpg")} />
                        </div>
                        <div className="card-img-overlay">Slide 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/gang.jpg")} />
                        </div>
                        <div className="card-img-overlay">Slide 2</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-sm-3   col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/muftah.jpg")} />
                        </div>
                        <div className="card-img-overlay">Slide 3</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className=" col-sm-3  col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/sultan etwaghawsh.jpg")} />
                        </div>
                        <div className="card-img-overlay">Slide 4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid marg bg-img2  ">
        <div className="row justify-content-center align-items-center ">
          <div className="col-12 mb-4 text-center">
            <h2 className="p-4 m-3"> OUR HISTORY </h2>
          </div>

          <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center ">
            <div className="col ">
              <div className="card card-style">
                <div className="card-body">
                  <h5 className="card-title">Establishment</h5>
                  <p className="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Proin facilisis, velit non
                    fringilla pharetra, elit odio
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-style">
                <div className="card-body">
                  <h5 className="card-title">First Success</h5>
                  <p className="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Proin facilisis, velit non
                    fringilla pharetra, elit odio
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  card-style">
                <div className="card-body">
                  <h5 className="card-title">New Technologies</h5>
                  <p className="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Proin facilisis, velit non
                    fringilla pharetra, elit odio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
