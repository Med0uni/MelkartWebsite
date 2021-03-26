import React from "react";
import "./recentposts.css";


import picture from "../assets/img/team/pp.png";

export default function posts() {

    return (
    <div className="recentposts-section">  
    <div className="container">
    <div className="mbr-section-head">
        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Melkart JE Blog</strong></h4>
        <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Apprenez-en plus sur l’actualité de Junior CentraleSupélec.</h5>
    </div>
    <div className="row mt-4">
        <div className="item features-image сol-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
                <div className="item-img">
                    <img src={picture} alt="" title=""/>
                </div>
                <div className="item-content">
                    <h5 className="item-title mbr-fonts-style display-4"><em>Jan 10, 2025</em></h5>
                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Easy and Simple</strong></h6>
                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Mobirise Page Maker is a free and simple
                        website builder - just drop site blocks to your page, add content and style it!</p>
                </div>
                <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-primary-outline display-7" target="_blank">Read More &gt;</a></div>
            </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
                <div className="item-img">
                    <img src={picture} alt="" title=""/>
                </div>
                <div className="item-content">
                    <h5 className="item-title mbr-fonts-style display-4"><em>Jan 09, 2025</em></h5>
                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Automagically Mobile</strong>
                    </h6>
                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Mobirise Site Creator offers a huge
                        collection of 3500+ site blocks, templates and themes with thousands flexible options. <br></br>
                    </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-primary-outline display-7" target="_blank">Read More &gt;</a></div>
            </div>
        </div>
        <div className="item features-image сol-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
                <div className="item-img">
                    <img src={picture} alt="" title=""/>
                </div>
                <div className="item-content">
                    <h5 className="item-title mbr-fonts-style display-4"><em>Jan 08, 2025</em></h5>
                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Boost Your Ranking</strong></h6>
                    <p className="mbr-text mbr-fonts-style mt-3 display-7">Mobirise Page Maker is a free and simple
                        website builder - just drop site blocks to your page, add content and style it!</p>
                </div>
                <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-primary-outline display-7" target="_blank">Read More &gt;</a></div>
            </div>
        </div>

    </div>
</div>
</div>
    );
}