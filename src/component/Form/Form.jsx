import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Form.css';



function Form(){

    return(
 <div>
   <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="info">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>miantalhapaf@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info w-100 mt-4">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+92 3091153533</p>
                </div>
              </div>
            </div>

            <form action="" method="post" role="form" className="php-email-form mt-4">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </section>
        </div>
    );
}
 export default Form;















