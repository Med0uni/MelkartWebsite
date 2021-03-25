import React from "react";
import "./about-us-JEconcept.css";

export default function AboutJE() {
    
    return (
      <div className="site-sectionje">
			<div className="container">
				<div className="col-md-12">
				<h2>ABOUT JUNIOR ENTERPRISE</h2>
				<p>Junior Entreprise est une organisation à but non lucratif,
				formée et gérée intégralement par des étudiants de son
				établissement. Agissant en tant que véritable cabinet de
				conseil, elle offre des services correspondant aux domaines
				de compétences de son école, pour des clients très variés:
				entrepreneurs, TPE, PME, associations , firmes ,etc...</p>
				</div>
				<div className="row">
					<div className="col-md-6">
						<img src="https://jetunisie.com/wp-content/uploads/2018/05/JETV0.png" width="250" height="300" alt="Image" className="img-responsive img-rounded"></img>
					</div>
					<div className="col-md-1"></div>
					<div className="col-md-5">
						<h2>The Confederation - Junior Enterprises Of Tunisia (JET)</h2>
						<p>La JET est la Confédération Tunisienne des Junior Entreprises.
							Il s’agit d’une structure d’accompagnement, venue
							chapeauter et guider les Junior Entreprises dans leur travail et
							formation. Junior Enterprises of Tunisia est fondée en 2012 par
							quatre Junior Entreprises. La JET s’est lancée dans le but
							d’étendre le mouvement des junior entrepreneurs en Tunisie
							et de les représenter dans le monde.
					 </p>
					</div>
				</div>
			</div>
		</div>
    );
  }