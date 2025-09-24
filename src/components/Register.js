import React, { useState } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate,NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [contact, setContact] = useState("");
  const navigate=useNavigate()

  const handle = (e) => {
    e.preventDefault()
    if (
      name === "" ||
      mail === "" ||
      pass1 === "" ||
      pass2 === "" ||
      contact === ""
    ) {
      // alert("All the fields are required");
      toast.error('All the fields are required')
    }
    else{
      // alert('Registered successfully!')
      setTimeout(()=>{
        navigate('/login')
      },3000)
      toast.success('Registered successfully!')
  
      
      localStorage.setItem('name',name)
      localStorage.setItem('mail',mail)
      localStorage.setItem('contact',contact)
     
    }
    setName('')
    setMail('')
    setPass1('')
    setPass2('')
    setContact('')
  };


  return (
    <>
      <div className="container w-50 my-5 log-in">
        <form onSubmit={handle}>
          <div className="my-3 input-group">
            <input
              type="name"
              className="form-control border-0 border-bottom border-1 rounded-0 border-secondary"
             
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="my-3 input-group">
            <input
              type="email"
              className="form-control border-0 border-bottom border-1 border-secondary rounded-0"
              
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 input-group">
            <input
              type="password"
              className="form-control border-0 border-bottom border-1 border-secondary rounded-0"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3 input-group">
            <input
              type="password"
              className="form-control border-0 border-bottom border-1 border-secondary rounded-0"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
          <div className="mb-3 input-group">
            <input
              type="number"
             
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your contact"
              className="form-control border-0 border-bottom border-1 border-secondary rounded-0"
            />
          </div>
          <div className="form-check mb-3 d-flex justify-content-between ">
            <label className="form-check-label">
              <input
                className="form-check-input border-secondary"
                type="checkbox"
              />
              Show Password
            </label>
            <span className="forgot">Forgot password ?</span>
          </div>
          <button type="submit" className="btn btn-dark w-100 py-2 my-3">
            Submit
          </button>
        </form>
        <h5 className="text-center">OR</h5>
        <span>Already had an account? </span>
        <NavLink to='/login' onClick={()=>navigate('/login')} >Login</NavLink>
      </div>
    </>
  );
};

export default Register;
