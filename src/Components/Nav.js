import React from "react"
import { Link } from "react-router-dom";

import { useSelector , useDispatch } from "react-redux";
import { logout } from "../store/actions/auth";

const Nav = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Breakfast
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Lunch{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dinner
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Shopping List
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          {currentUser ? (
            <>
            <li class="nav-item">
              <Link to={"/profile"} class="nav-link">{currentUser.username}</Link>
            </li>
            <li class="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>LogOut</a>
            </li>
            </>
          ) : (
            <>
            <li class="nav-item">
              <Link to="/login" class="nav-link">Login</Link>
            </li>
            <li class="nav-item">
              <Link to="/register" class="nav-link">Register</Link>
            </li>
            </>
          )}
          </ul>

        </div>
      </div>
    </nav>
    </>
  );
};

export default Nav;
