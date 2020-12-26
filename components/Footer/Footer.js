
import React from "react";
import Link from "next/link";
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Melkart newsletter to receive our best blogs
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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link href='/sign-up'>Enicar</Link>
            <Link href='/'>JET</Link>
            <Link href='/'>Melkart</Link>
            <Link href='/'>Our team</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link href='/'>Contact</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Projects</Link>
            <Link href='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link href='https://www.instagram.com/melkart_je'>Instagram</Link>
            <Link href='https://www.facebook.com/Enicarthage.Junior.Entreprise/'>Facebook</Link>
            <Link href='https://www.youtube.com/channel/UCB3dah_szpBGypXHMwuTveg/featured'>Youtube</Link>
            <Link href='https://www.linkedin.com/company/melkart-je/'>Linkedin</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Melkart JE © 2020</small>
          <div class='social-icons'>
            <div>
            <Link
              class='social-icon-link facebook'
              href='https://www.facebook.com/Enicarthage.Junior.Entreprise'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> </div>
            <Link
              class='social-icon-link instagram'
              href='https://www.instagram.com/melkart_je'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCB3dah_szpBGypXHMwuTveg/featured'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              href='https://www.linkedin.com/company/melkart-je/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;