import React from "react";
import './team.css';
import pres from "assets/img/team/pres.png";
import vp from "assets/img/team/vp.png";
import hr from "assets/img/team/hr.png";
import pp from "assets/img/team/pp.png";
import m from "assets/img/team/m.png";
import dev from "assets/img/team/dev.png";
import sec from "assets/img/team/sec.png";
import tres from "assets/img/team/tres.png";


 
 
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
                 <img src ={vp} className="img-responsive"></img>
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
                 <img src ={sec} className="img-responsive"></img>
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
                 <img src ={tres} className="img-responsive"></img>
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
                 <img src ={pp} className="img-responsive"></img>
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
                 <img src ={m} className="img-responsive"></img>
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
                 <img src ={dev} className="img-responsive"></img>
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
                 <img src ={hr} className="img-responsive"></img>
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