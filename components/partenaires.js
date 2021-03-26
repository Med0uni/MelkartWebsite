
import React from "react";
import "./temoignage.css";


import crafti from "../assets/img/partners/crafti.png";
import croco from "../assets/img/partners/CrocoCoder.png";
import study from "../assets/img/partners/transperent/study.png";
import RanuCupcacke from "../assets/img/partners/transperent/ranu.png";
import LeanPartners from "../assets/img/partners/transperent/lean.png";
import LeCadeau from "../assets/img/partners/transperent/lecadeau.png";
import MindFitness from "../assets/img/partners/transperent/mind.png";
import sheStarts from "../assets/img/partners/sheStarts.png";



export default function Temoignage() {
    
    return (
	<div className="partners-section">
		
		<div class="images-container container">
        <div class="mbr-section-head">
            <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Nos partenaires</strong></h2>
            <h3 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Ils nous ont fait confiance</h3>
            
        </div>
        <div class="row justify-content-center mt-4">
            <div class="col-md-3 card">
                <img src={crafti} width="250" height="250" alt="Image"/>
            </div>
            <div class="col-md-3 card">
                <img src={RanuCupcacke} width="250" height="300" alt="Image"/>
            </div>
            <div class="col-md-3 card">
                <img src={MindFitness} width="250" height="300" alt="Image"/>
            </div>
            <div class="col-md-3 card">
                <img src={RanuCupcacke} width="250" height="300" alt="Image"/>
            </div>
            <div class="col-md-3 card">
                <img src={LeanPartners} width="250" height="220" alt="Image"/>
            </div>
            <div class="col-md-3 card">
                <img src={LeCadeau} width="250" height="300" alt="Image"/>
            </div>
            <div class="col-md-3 card">
                <img src={study} width="250" height="300" alt="Image"/>
            </div>
            <div class="col-md-3 card">
                <img src={RanuCupcacke} width="250" height="300" alt="Image"/>
            </div>
        </div>
    </div>

	</div>
		);
  }