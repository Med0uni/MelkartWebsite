import React from "react";


export default function Temoignage() {
    
    return (
      <div id="ftco-testimonial" className="ftco-bg-section">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-6 col-md-offset-3 text-center ftco-heading">
					<h2>What are the clients says</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="row animate-box">
						<div className="owl-carousel owl-carousel-fullwidth">
							<div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<img src="images/user-1.jpg" alt="user"></img>
									</figure>
									<span>Carl Smith</span>
									<blockquote>
										<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
									</blockquote>
								</div>
							</div>
							<div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<img src="images/user-2.jpg" alt="user"></img>
									</figure>
									<span>John Lockwood</span>
									<blockquote>
										<p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
									</blockquote>
								</div>
							</div>
							<div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<img src="images/user-3.jpg" alt="user"></img>
									</figure>
									<span>Joyce Kroell</span>
									<blockquote>
										<p>&ldquo;Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }