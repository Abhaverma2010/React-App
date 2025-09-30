import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbPackages } from "react-icons/tb";
import { PiMedalBold } from "react-icons/pi";
import Blog from "./Blog";

const Pages = () => {
  return (
    <>
      <Blog />
      <div className="container-fluid ">
        <div className="row">
        
          <div className="col-md-12 arrival d-flex justify-content-end align-items-center">
            <div className="col-md-6 ">
            <h1>#New Arrivals</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
