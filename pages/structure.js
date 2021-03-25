import React from "react";
import Aboutus from "../components/about-us";
import Aboutje from "../components/about-us-JEconcept";
import Collaborate from "../components/work-with-us";
import Team from "../components/team";
import Infoecole from "../components/info-ecole";

export default function Components(props) {
    
    return (
      <div>
     <br></br><br></br>
        <Aboutje />
     
        <Aboutus />
        
        <Infoecole />
        <br></br>
        <Team />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  }