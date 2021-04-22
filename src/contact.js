import React from 'react';

function Contact() {
  return (
    <div className="container">
    <div className="col-lg-5">
       <label for="textfield">Name</label>
       <input className="form-control" type="text"/>
      </div>
      
      <div className="col-lg-10">
          <label for="textfield">Email</label>
          <input className="form-control" type="text"/>

          </div><br/>
          <div className="col-lg-10">
          <label for="textfield">Tell Us</label>
          <input className="form-control" type="text"/>

          </div>
          <div className="btn btn-success">Submit</div>
          
      </div>
  );
};

export default Contact;