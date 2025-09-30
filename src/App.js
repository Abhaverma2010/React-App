import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pages from "./components/Pages";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Productnew from "./components/Productnew";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <HashRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<Pages />}></Route>
          <Route path="/products" element={<Productnew />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        </main>
        <Footer/>
      </HashRouter>
     
    </>
  );
}

export default App;
