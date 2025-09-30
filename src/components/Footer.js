import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer pb-5 ">
        <div className="row">
          <div className="col-md-4 ms-5 mt-5">
            <h4 className="mb-5">Reach at...</h4>
            <div >
              <p>
                <FaLocationDot /> Location
              </p>
              <p>
                <IoCall /> Call at +10 1234567890
              </p>
              <p>
                <IoMdMail /> demo@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h1>Famms</h1>
            <p>
              Necessary, making this the first true <br />
              generator on the Internet. It uses a <br />
              dictionary of over 200 Latin words,
              <br /> combined with
            </p>
            <div >
              <FaFacebook className="faicons"/>
              <AiFillTwitterCircle className="faicons"/>
              <FaLinkedin className="faicons" />
              <FaInstagramSquare className="faicons" />
              <FaPinterest className="faicons"/>
            </div>
            <hr/>
            <p>
              Designed by <Link to="https://github.com/Abhaverma2010" className="foot">Abha Verma</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
