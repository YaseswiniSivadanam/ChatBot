import React from 'react';
import './ContactUs.css';
import 'font-awesome/css/font-awesome.min.css';

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>What’s on your mind?</h2>
        <p>We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Address</h3>
              <p>Gayatri Vidya Parishad,<br />Madhurawada,<br />Visakhapatnam</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Phone</h3>
              <p>XXXXXXXXXX</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Email</h3>
              <p>XXXX@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="name" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="email" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;