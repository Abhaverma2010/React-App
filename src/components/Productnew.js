import React, { useEffect, useState } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import { NavLink, useNavigate } from "react-router-dom";

const Productnew = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      console.log(res);
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-center mt-3"> Our products </h1>
      <div className="container-fluid  my-5">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-md-3 mb-3 ">
                <div className="card text-center product-card border-0">
                  <div className="card-header">{value.category}</div>
                  <div className="card-body">
                    <img src={value.image} height='80px'  />
                  </div>
                  <div className="card-footer">
                    <p className="product-price">${value.price}</p>
                    <button
                      className="btn btn-dark product-btn"
                      onClick={() => navigate(`/product/${value.id}`)}
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Productnew;
