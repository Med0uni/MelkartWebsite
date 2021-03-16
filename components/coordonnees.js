import React from "react";
import './coordonnees.css';
import phone from "A:/MelkartWebsite/assets/img/ph.png";
import email from "A:/MelkartWebsite/assets/img/envelope.png";
import loc from "A:/MelkartWebsite/assets/img/local.png";
import youtube from "A:/MelkartWebsite/assets/img/youtube.png";
import facebook from "A:/MelkartWebsite/assets/img/facebook.png";
import insta from "A:/MelkartWebsite/assets/img/instagram.svg";




export default function Coord() {
    return (

        <div className=" col-xl-6 col-lg-6  col-md-12   col-sm-12" >
            <div className="container bord">
                <h2 className="ge">Restons en contact</h2>
                <div >


                    <div> <img src={phone} /> <span className="he"> +216 102 163</span></div>
                    <br></br>

                    <div><img src={email} /><span className="he">enicarthage.junior.entreprise@gmail.com</span></div>
                    <br></br>
                    <div><img src={loc} /><span className="he">45 Rue des Entrepreneurs 2035 Charguia II Tunis- Carthage-Tunisie</span></div>

                </div>
                <br />
                <h2 className="ge">Suivez nous</h2>
                <div >

                    <a href="https://www.facebook.com/Enicarthage.Junior.Entreprise"  target="popup">
                        <img className="fe" src={facebook} />
                    </a>

                    <a href="https://www.youtube.com/channel/UCB3dah_szpBGypXHMwuTveg"  target="popup">
                        <img className="fe" src={youtube} />
                    </a>
                    <a href="https://www.instagram.com/melkart_je/"  target="popup">
                        <img className="fe" src={insta} />
                    </a>

                </div>
            </div>
        </div>
    );
}