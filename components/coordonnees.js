import { Grid } from "@material-ui/core";
import React from "react";
import './coordonnees.css';
import phone from "../assets/img/ph.png";
import email from "../assets/img/envelope.png";
import loc from "../assets/img/local.png";


 export default function Coord() {
		const contactUS = async event => {
			// event.preventDefault()
			const { API_URL } = process.env;

			const res = await fetch(`${API_URL}/messages`, {
				body: JSON.stringify({
					firstName: event.target.firstname.value,
					lastName: event.target.lastname.value,
					email: event.target.email.value,
					subject: event.target.subject.value,
					message: event.target.message.value,
				}),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			})

			const data = await res.json()
		}

    return(
			<div className="container-contact100">
				<div className="wrap-contact100">
					<form className="contact100-form validate-form" onSubmit={contactUS}>
							<span className="contact100-form-title">
								Send Us A Message
							</span>

							<label className="label-input100" for="first-name">Tell us your name *</label>
							<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
								<input id="firstname" className="input100" type="text" name="firstname" placeholder="First Name"/>
								<span className="focus-input100"></span>
							</div>
							<div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
								<input id="lastname" className="input100" type="text" name="lastname" placeholder="Last Name"/>
								<span className="focus-input100"></span>
							</div>

							<label className="label-input100" for="email">Enter your email *</label>
							<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
								<input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com"/>
								<span className="focus-input100"></span>
							</div>

							<label className="label-input100" for="phone">Subject</label>
							<div className="wrap-input100">
								<input id="subject" className="input100" type="text" name="subject" placeholder="subject of your contact"/>
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
									<span className="lnr lnr-map-marker"></span>
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
									<span className="lnr lnr-phone-handset"></span>
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
									<span className="lnr lnr-envelope"></span>
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