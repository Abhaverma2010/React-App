import React from "react";

const Contact = () => {
  return (
    <>
    <div class="container">
  <div class="row">
    <div class="col-md-6 mx-auto">
    
      <form className="text-center mb-5 d-block ">
    
        <div className="mb-3 mt-3   contact ">
          <input type="text" className="form-control" placeholder="Enter your full name" />
        </div>
        <div className="mb-3 mt-3  contact">
          <input type="email" className="form-control" placeholder="Enter your email address" />
        </div>
        <div className="mb-3 mt-3  contact">
          <input type="text" className="form-control" placeholder="Enter subject" />
        </div>
        <textarea
          className="form-control contact"
          placeholder="Enter your message"
          rows="5"
          id="comment"
          name="text"
        ></textarea>
        <button type="submit" className="btn bg-dark text-light mt-5 ">
          Submit
        </button>
      </form>
     </div>
     </div>
     </div>
    </>
  );
};

export default Contact;
