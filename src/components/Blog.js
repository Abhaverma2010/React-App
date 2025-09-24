import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbPackages } from "react-icons/tb";
import { PiMedalBold } from "react-icons/pi";

const Blog=()=>{
    return(
        <>
        <h1 className="text-center mt-5"> Why Shop With Us </h1>
              <div className="container">
                <div className="row">
                  <div className="col-md-4  ">
                    <div className="card mycard">
                      <div className="card-body">
                        <TbTruckDelivery className="truck" />
                        <h3>Fast Delivery</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="card mycard">
                      <div className="card-body">
                        <TbPackages className="truck" />
                        <h3>Free Shipping</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-4 ">
                    <div className="card mycard">
                      <div className="card-body">
                        <PiMedalBold className="truck" />
                        <h3>Best Quality</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Blog