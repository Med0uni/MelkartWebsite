import React from "react";
import './team.css';
import pres from "./pres.png";
import team2 from "./team2.png";
import team3 from "./team3.png";
import team4 from "./team4.png";
import team5 from "./team5.png";
import team6 from "./team6.png";
import team7 from "./team7.png";
import team8 from "./team8.png";


 
 
export default function Team() {
    
    return (
    <div>
      
     <section className="team">
	  <div className="container">
		 	
		 <h1>Our Team</h1>
        <div className="row">
            <div className="col-md-3 profile  text-center">
               <div className="img-box" >
                 <img src ={pres} className="img-responsive"></img>
                    <ul>
                      <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
                <h2>Chedly zouche</h2>
                <h3>President</h3>

		        </div>
       
      
      
            <div className="col-md-3 profile  text-center">
               <div className="img-box">
                 <img src ={team2} className="img-responsive"></img>
                    <ul>
                    <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
				<h2>Feres Nefzi</h2>
                <h3>Vice President</h3>


		        </div>
              <div className="col-md-3 profile text-center">
               <div className="img-box">
                 <img src ={team7} className="img-responsive"></img>
                    <ul>
                    <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
				<h2>Alia Chibani</h2>
                <h3>General Secretory</h3>
               </div>
			   
            <div className="col-md-3 profile text-center">
               <div className="img-box">
                 <img src ={team8} className="img-responsive"></img>
                    <ul>
                    <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
				<h2>Amani Mittichi</h2>
                <h3>Treasurer</h3>
               </div>
            
           

             
         </div>
         <div className="row">
         <div className="col-md-3 profile  text-center">
               <div className="img-box">
                 <img src ={team4} className="img-responsive"></img>
                    <ul>
                    <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
				<h2>Khalil Jendoubi</h2>
                <h3> Project and Prospecting Manager</h3>


		        </div>
              <div className="col-md-3 profile text-center">
               <div className="img-box">
                 <img src ={team5} className="img-responsive"></img>
                    <ul>
                    <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
				<h2>Rania Ourari</h2>
                <h3>Marketing Manager</h3>
               </div>

			   <div className="col-md-3 profile text-center">
               <div className="img-box">
                 <img src ={team6} className="img-responsive"></img>
                    <ul>
                    <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
				<h2>Eslem Chihaoui</h2>
                <h3>Business Development Manger</h3>
               </div>

			    
			   
               <div className="col-md-3  profile text-center">
               <div className="img-box" >
                 <img src ={team3} className="img-responsive"></img>
                    <ul>
                      <a href="#"> <li><i class="fab fa-facebook"></i></li> </a>
                       <a href="#"> <li><i class="fab fa-linkedin-in"></i></li> </a>
                
                    </ul>
                </div>
				<h2>Yasmine Mgarrech</h2>
                <h3>Human Ressources and training Manager</h3>
                 
		        </div>
            </div>
            </div>
		 </section>
	</div> 
    );
  }