import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.js";
import logo from "../images/famms.png";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext.js";

const Navbar = () => {
  const [data, setData] = useState([]);
  const {cart} = useContext(CartContext)

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
      <nav className="navbar navbar-expand-md / ">
        <div className="container-fluid py-3 ">
          <NavLink to="/home">
            <img src={logo} height="50px" />
          </NavLink>
          <div className="mx-auto d-lg-none">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
          </div>
          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <NavLink to="/home">HOME</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/about">ABOUT</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/products">PRODUCTS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register">REGISTER</NavLink>
              </li>
              <li className="nav-cart">
                <NavLink
                  to="/"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#demo"
                >
                  <FaShoppingCart className=" text-dark"  />
                  <sup className="text-dark">{cart.length}</sup>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Your Cart</h1>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length === 0 ?(
            <p>Your cart is empty</p>
          )
          :(
            cart.map((item,index)=>(
              <div className="d-flex align-items-center mb-3">
                <img src={item.image} height='50' width='50'/>
                <div className="ms-3">
                  <h6>{item.title}</h6>
                  <p>${item.price}</p>
                </div>
              </div>
            ))
          )}
          {/* {data.map((value) => {
            return (
              <>
                <div className="container">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <img src={value.image} height="80px" />
                    </div>
                    <div className="col-md-8">
                      <p>Category: {value.category}</p>
                      <p className="text-success">Price: ${value.price}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}
        </div>
        <button className="btn btn-dark">Checkout</button>
      </div>
    </>
  );
};

export default Navbar;
