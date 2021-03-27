import React from "react";
import Link from "next/link";
import './Footer.css'
import { Button} from 'react-bootstrap';

import YouTubeIcon from '@material-ui/icons/YouTube';


function Footer() {
  return (
    <div className='footer-container container-fluid'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Melkart newsletter to receive our best blogs
          {/* https://dev.to/itnext/setting-up-a-news-letter-with-react-and-mailchimp-2f6p */}
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className='btn--outline'>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='container-fluid footer-links'>
          <div className='side-col'></div>
          <div className='col-md-3 footer-link-items '>
            <h2>About Us</h2>
            <Link href='/sign-up'>Enicar</Link>
            <Link href='/'>JET</Link>
            <Link href='/'>Melkart</Link>
            <Link href='/'>Our team</Link>
          </div>
          <div className='col-md-3 footer-link-items'>
            <h2>Contact Us</h2>
            <Link href='/contact'>Contact</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Projects</Link>
            <Link href='/'>Sponsorships</Link>
          </div>    
          <div className='col-md-3 footer-link-items '>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/melkart_je' target='_blank'>Instagram</a>
            <a href='https://www.facebook.com/Enicarthage.Junior.Entreprise/' target='_blank'>Facebook</a>
            <a href='https://www.youtube.com/channel/UCB3dah_szpBGypXHMwuTveg/featured' target='_blank'>Youtube</a>
            <a href='https://www.linkedin.com/company/melkart-je/' target='_blank'>Linkedin</a>
          </div>
        </div>
          <div className='side-col'></div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Melkart JE © 2021</small>
          <div className='social-icons'>
            <div>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/Enicarthage.Junior.Entreprise'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a> </div>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/melkart_je'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            
      
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCB3dah_szpBGypXHMwuTveg/featured'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/company/melkart-je/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;