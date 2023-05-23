import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <>
      <form id="contactForm" data-sb-form-api-token="API_TOKEN" className="mb-3">

        <div className="form-floating mb-3">
          <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
          <label htmlFor="name">Full name</label>
          <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
          <label htmlFor="email">Email address</label>
          <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
          <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
          <label htmlFor="phone">Phone number</label>
          <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={ { height: "10rem" } } data-sb-validations="required"></textarea>
          <label htmlFor="message">Message</label>
          <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
        </div>
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center mb-3">
            <div className="fw-bolder">Form submission successful!</div>To activate this form, sign up at<br /><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
          </div>
        </div>
        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <button className="btn btn-primary btn-xl disabled mb-5" id="submitButton" type="submit">Send</button>
      </form>
    </>
  );
};

export default Form;