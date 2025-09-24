import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.js";
import Productnew from "./Productnew.js";
import Pages from "./Pages.js";

const Home = () => {
  return (
    <>
      <div className="container-fluid hero d-flex align-items-center">
        <div className="row ">
          <div className="col-md-5 text-center">
            <h1>
              <span>Sales 20% Off</span> <br /> On Everything
            </h1>
            <p >
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
            </p>
            <button >Shop Now</button>
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
     

      <Pages />
      <Productnew />
    </>
  );
};

export default Home;
