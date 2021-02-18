import { Grid } from "@material-ui/core";
import React from "react";
import './coordonnees.css';
import phone from "A:/MelkartWebsite/assets/img/ph.png";
import email from "A:/MelkartWebsite/assets/img/envelope.png";
import loc from "A:/MelkartWebsite/assets/img/local.png";


 export default function Coord() {
     return(
        <div>
            <h2 className="ge">Get In Touch With Us!</h2>
        <div className="cards">
            <div className="card">
                <img className="fe" src={phone}/>
                <div>+216 102 163</div>

            </div>
            <div className="card">
                <img className="fe" src={email}/>
                <div>enicarthage.junior.entreprise@gmail.com</div>
            </div>
            <div  className="card">
                <img className="fe" src={loc}/>
                <div>45 Rue des Entrepreneurs 2035 Charguia II Tunis- Carthage-Tunisie</div>
            </div> 
        </div>
        </div>
     );
 }