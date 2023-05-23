import React from 'react';
import './Contact.css';
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me<div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <Form />
            </div>
          </div>
        </h2>
      </div>

    </>
  );
};

export default Contact;