import React from "react";
import Blue from "./Blue.png";

export default function About() {

  return (
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h2>The MELKART Junior Enterprise ENICarthage</h2>
            <p>The MELKART Junior Enterprise was founded in 2012. It is a student organization located at the ENICarthage (National Engineering School of Carthage) through which students take their first steps towards professional life. Its objective is the development of the entrepreneurial spirit, leadership, communication, launching and management of projects by improving the skills of its members through training offered by the different branches of study (lT, industrial and mechatronics). They will then be able to respond to customer demand, provide them with good quality services and will thus be ready to confront the professional world and start their careers on a good basis.
				 </p>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-4">
            <img src={Blue} width="250" height="300" alt="Image" class="img-responsive img-rounded "></img>
          </div>


        </div>
      </div>
    </div>
  );
}