import React from "react";
import "./about.css";
import { Card } from "react-bootstrap";
export default function AboutUs() {
  return (
    <>
      <div className="container-fluid bg-img">
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
            <div class="row mx-auto my-auto justify-content-center">
              <div
                id="recipeCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={require("./imgs/estmar.jpg")} />
                        </div>
                        <div class="card-img-overlay">Slide 1</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={require("./imgs/gang.jpg")} />
                        </div>
                        <div class="card-img-overlay">Slide 2</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={require("./imgs/muftah.jpg")} />
                        </div>
                        <div class="card-img-overlay">Slide 3</div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col-md-3">
                      <div class="card">
                        <div class="card-img">
                          <img src={require("./imgs/sultan etwaghawsh.jpg")} />
                        </div>
                        <div class="card-img-overlay">Slide 4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  class="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
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

    <div className="row justify-content-center align-items-center mt-4">
      
    <div className="col-sm-12 col-md-3">
            <Card className="card-style" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Establishment</Card.Title>

                <Card.Text>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Proin facilisis, velit non
                  fringilla pharetra, elit odio
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3">
            <Card className="card-style" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>First Success</Card.Title>

                <Card.Text>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Proin facilisis, velit non
                  fringilla pharetra, elit odio
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3">
            <Card className="card-style" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>New Technologies</Card.Title>

                <Card.Text>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Proin facilisis, velit non
                  fringilla pharetra, elit odio
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
       </div>

        </div>
      </div>
    </>
  );
}
