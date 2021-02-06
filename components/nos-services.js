import React from "react";
import "./services.css"



export default function Services() {
  // #2F5B96
  return (
    <section class="services">
      <div class="container">
        <div>
          <h2 class="title text-center">SERVICES</h2>
          <p className="text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon"><i class="fas fa-mobile-alt"></i></div>
            <h4 class="title"><a href="">Développement d'applications Mobiles</a></h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon"><i class="fas fa-desktop"></i></div>
            <h4 class="title"><a href="">Développement d'applications Desktop</a></h4>
            <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon"><i class="fas fa-globe"></i></div>
            <h4 class="title"><a href="">Développement de sites web</a></h4>
            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
                
          
        </div>

      </div>
    </section>
  );
}