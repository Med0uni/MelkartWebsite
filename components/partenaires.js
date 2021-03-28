
import React from "react";
import "./temoignage.css";


import crafti from "../assets/img/partners/crafti.png";
import MindFitness from "../assets/img/partners/MindFitness.png";
import sheStarts from "../assets/img/partners/sheStarts.png";
import RanuCupcacke from "../assets/img/partners/RanuCupcacke.png";
import STC from "../assets/img/partners/STC.jpg"

import croco from "../assets/img/partners/CrocoCoder.png";
import StudyTN from "../assets/img/partners/StudyTN.png";
import LeanPartners from "../assets/img/partners/LeanPartners.jpg";
import LeCadeau from "../assets/img/partners/lecadeau.jpg";
import Vika from "../assets/img/partners/Vika.png";






export default function Temoignage() {
    
    return (
	<div className="partners-section">
		
		<div className="images-container containerlogos">
        <div className="mbr-section-head">
            <h2 className="mbr-section-title mbr-fonts-style align-center mb-0 title1">
                <strong>Nos partenaires</strong></h2>
            <h3 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 title3">Ils nous ont fait confiance</h3>
            
        </div>
        <div className="justify-content-center mt-4">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-sm-2 col-md-2 card">
                    <img className="imagepartner1" src={crafti}  alt="Image"/>
                </div>
                <div className="col-sm-2 col-md-2 card">
                    <img className="imagepartner1" src={sheStarts}   alt="Image"/>
                </div>
                <div className="col-sm-2 col-md-2 card">
                    <img className="imagepartner1" src={MindFitness}   alt="Image"/>
                </div>
                <div className="col-sm-2 col-md-2 card">
                    <img className="imagepartner1" src={RanuCupcacke}   alt="Image"/>
                </div>
                <div className="col-sm-2 col-md-2 card">
                    <img className="imagepartner1" src={STC}   alt="Image"/>
                </div>             
                <div className="col-md-1"></div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2 card">
                    <img className="imagepartner2" src={LeanPartners}  height="220" alt="Image"/>
                </div>
                <div className="col-md-2 card">
                    <img className="imagepartner2" src={LeCadeau}   alt="Image"/>
                </div>
                <div className="col-md-2 card">
                    <img className="imagepartner2" src={StudyTN}   alt="Image"/>
                </div>
                <div className="col-md-2 card">
                    <img className="imagepartner2" src={Vika}   alt="Image"/>
                </div>
                <div className="col-md-2 card">
                    <img className="imagepartner" src={croco}   alt="Image"/>
                </div>            
                <div className="col-md-1"></div>
            </div>
        </div>
    </div>

	</div>
		);
  }