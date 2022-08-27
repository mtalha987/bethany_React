import React from 'react';
import './main.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/hero.jpg"



function Main() {
  return (
    <div >
    <section id="hero"  className="d-flex align-items-center">
    <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
      <h1>Your New Online Presence with Bethany</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
    </div>
  </section>

          
    </div>
  );
}
export default Main;
