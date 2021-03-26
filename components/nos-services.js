import React from "react";
import "./services.css"



export default function Services() {
  // #2F5B96
  return (
    <section className="services">
      <div className="container">
        <div>
          <h2 className="title1 text-center">NOS SERVICES</h2>
          <p className="text-center desc">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-md-4 icon-box">
            <div className="icon"><i className="fas fa-mobile-alt"></i></div>
            <h4 className="title"><a href="">Développement d'applications Mobiles</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="col-md-4 icon-box">
            <div className="icon"><i className="fas fa-desktop"></i></div>
            <h4 className="title"><a href="">Développement d'applications Desktop</a></h4>
            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div className="col-md-4 icon-box">
            <div className="icon"><i className="fas fa-globe"></i></div>
            <h4 className="title"><a href="">Développement de sites web</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
                
          
        </div>

      </div>
    </section>
  );
}