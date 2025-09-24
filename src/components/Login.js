import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState('');
  const [pass1, setPass1] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="container w-25 mb-5">
        <div className="my-3 input-group">
          <input
            type="email"
            placeholder="Enter your mail"
            className="form-control border-0 border-bottom border-1 border-secondary rounded-0"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="mb-3 input-group">
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control border-0 border-bottom border-1 border-secondary rounded-0"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          onClick={() => navigate("/home")}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
