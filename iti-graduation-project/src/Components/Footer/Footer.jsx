import "../Home/Home.css";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className = "mb-4" >Healthy</h2>
            <div className="copyRight text-white">&copy;2021 - 2022 Healthy.</div>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>contact</li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <li>Login</li>
              <li>Register</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <li className="text-white"> <i class="fa-solid fa-location-dot"></i> New Cairo, 15 May City</li>
              <li className="text-white"><i class="fa-solid fa-phone"></i> 01017498405</li>
            </ul>
          
            <div className="social-icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
