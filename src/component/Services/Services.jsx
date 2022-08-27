import React from 'react';
import './Services.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";



var counters = document.getElementsByClassName("purecounter");

for (var i = 0; i < counters.length; i++) {
    handleCounter (counters[i]);
}

function handleCounter (counter) {
  var c = 0;
  var interval = setInterval(() => {
    if(c==counter.dataset.count) {
       clearInterval(interval);
    }
    counter.innerText = c;
    c++;
  }, 0.5);
}

function Services() {
  return (
    <div >
     <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2>Eum ipsam laborum deleniti velitena</h2>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
              <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
            </ul>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section id="counts" className="counts" onMouseEnter={handleCounter}>
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" data-count="232" class="purecounter">0</span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" data-count="521" class="purecounter">0</span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"  data-count="1463"class="purecounter">0</span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="1" data-purecounter-end="1900" data-purecounter-duration="1" data-count="1900" class="purecounter">0</span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
          
    </div>
  );
}
export default Services;