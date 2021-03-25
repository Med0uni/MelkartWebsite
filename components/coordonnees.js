import React from "react";
import './coordonnees.css';



 export default function Coord() {

	const contactUS = async event => {
        // event.preventDefault()
		const { API_URL } = process.env;

        const res = await fetch(`${API_URL}/messages`, {
            body: JSON.stringify({
                firstName: event.target.first_name.value,
                lastName: event.target.last_name.value,
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
		<div className="page-wrapper p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
            <div className="card card-5">
                <div className="card-heading">
                    <h2 className="title">Work with us</h2>
                </div>

                
                <div className="card-body">
                    <div className="row p-t-10">
                        <h2 className='information'>Get in touch</h2>
                    </div>
                    <div className="row m-b-55 p-t-20 m-l-25"> 
                        <div className="row row-space">
                            <div className="col-7">
                                <p>address</p>
                                <p>phone number</p>
                                <p>email</p>
                            </div>
                            <div className="col-5">
                                <ul>
                                    <li><a href="https://www.facebook.com/Enicarthage.Junior.Entreprise/" target="_blank"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.instagram.com/melkart_je/" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/melkart-je/about/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCB3dah_szpBGypXHMwuTveg/featured" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>



                    {/***** CONTACT FORM ****/}
                    <div className="row p-t-10">
                        <h2 className='contact-form m-b-35'>CONTACT FORM</h2>
                    </div>
                    <form onSubmit={contactUS}>
                        <div className="form-row m-b-55">
                            <div className="name">Name</div>
                            <div className="value">
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group-desc">
                                            <input id="first_name"  className="input--style-5" type="text" name="first_name" placeholder="First Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group-desc">
                                            <input id="lasst_name" className="input--style-5" type="text" name="last_name" placeholder="Last Name" required />    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="name">Email</div>
                            <div className="value">
                                <div className="input-group">
                                    <input id="email" className="input--style-5" type="email" name="email" placeholder="client@email.com" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Subject</div>
                            <div className="value">
                                <div className="input-group">
                                    <input id="subject" className="input--style-5" type="text" name="subject" placeholder="i want to work with you on ..." required />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="name">Message</div>
                            <div className="value">
                                <div className="input-group">
                                    <textarea name="message" id="message" cols="60" rows="5" className="input--style-5" required></textarea>
                                </div>
                            </div>
						</div>

                        <div>
                            <button class="btn btn--radius-2 btn--red" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );

	
 }