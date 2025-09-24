import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const {addToCart} = useContext(CartContext)

  const getData = async () => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();
      console.log(res);
      setProduct(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <div className="container w-75 my-5">
        <div className="row">
          <div className="card">
            <div className="card-body d-flex ">
              <img src={product.image} height="200px" />
              <div className=" ms-4">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h3>category: {product.category}</h3>
                <h4>price:$ {product.price}</h4>
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-warning ms-3" onClick={()=> addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
