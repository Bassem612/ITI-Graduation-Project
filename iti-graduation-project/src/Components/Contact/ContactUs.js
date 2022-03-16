import React from "react";
import "./contact-us.css";
import Inputemail from "./InputEmail";
export default function ContactUs() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className=" section ">
          <div>
            <h2>CONTACT US</h2>
          </div>

          <div>
            {/* <a>Home</a>
            <span> &gt; </span> */}
            <span>Don't Hesitate to Contact us</span>
          </div>
        </div>
      </div>
      <div className="container xx">
        <h3 className="my-4  text-center "> Contact Information</h3>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <input className="" type="text" placeholder="Name" />
          </div>
          <div className="col-md-6 col-sm-12">
          <Inputemail />
            {/* <input className="" type="email" placeholder="Email" /> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <input className=" " type="number" placeholder="Phone" />
          </div>
          <div className="col-md-6 col-sm-12">
            <input className="" type="text" placeholder="Subject" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <textarea
              className=""
              cols="40"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <button className="btn-submit mb-3 " type="submit">
            
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
