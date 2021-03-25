import { Grid } from "@material-ui/core";
import React from "react";
import './coordonnees.css';
import phone from "../assets/img/ph.png";
import email from "../assets/img/envelope.png";
import loc from "../assets/img/local.png";


 export default function Coord() {
     return(
        <div className="container-contact100">
		<div className="wrap-contact100">
		{/*--------------------------- RIGHT --------------------------------------------*/}
			<form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Send Us A Message
				</span>

				<label className="label-input100" for="first-name">Tell us your name *</label>
				<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
					<input id="first-name" className="input100" type="text" name="first-name" placeholder="First name"/>
					<span className="focus-input100"></span>
				</div>
				<div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
					<input className="input100" type="text" name="last-name" placeholder="Last name"/>
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100" for="email">Enter your email *</label>
				<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com"/>
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100" for="phone">Enter phone number</label>
				<div className="wrap-input100">
					<input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +1 800 000000"/>
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100" for="message">Message *</label>
				<div className="wrap-input100 validate-input" data-validate = "Message is required">
					<textarea id="message" className="input100" name="message" placeholder="Write us a message"></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
					<button className="contact100-form-btn">
						Send Message
					</button>
				</div>
			</form>
		
			<div className="contact100-more ">
				<div className="size1">
					<div className="txt1 p-r-25">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  						<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  						<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
					</svg>
					</div>

					<div className="size2">
						<span className="txt1 p-b-20">
							Address
						</span>

						<span className="txt2">
							Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
						</span>
					</div>
				</div>

				<div className="size1">
					<div className="txt1 p-r-25">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  						<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
					</svg>
					</div>

					<div className="size2">
						<span className="txt1 p-b-20">
							Lets Talk
						</span>

						<span className="txt3">
							+1 800 1236879
						</span>
					</div>
				</div>

				<div className="size1">
					<div className="txt1 p-r-25">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  						<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
					</svg>
					</div>

					<div className="size2">
						<span className="txt1 p-b-20">
							General Support
						</span>

						<span className="txt3">
							contact@example.com
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
   
     );
 }