import React from 'react'; 
import Logo from '../assets/images/footer-logo.svg';
import Facebook from '../assets/images/icon-facebook.svg';
import Instagram from '../assets/images/icon-instagram.svg';
import Pinterest from '../assets/images/icon-pinterest.svg';
import Twitter from '../assets/images/icon-twitter.svg';
import Youtube from '../assets/images/icon-youtube.svg';

const Footer = () => {
    return (
        <footer className='py-8 px-14 lg:px-24 footer'>
            <div className="flex flex-col md:flex-row justify-between my-12">
                <div className="flex flex-col items-center md:items-start justify-between mb-8 md:mb-0">
                    <img src={Logo} alt="logo" className='mb-8 md:mb-0' />
                    <ul className='flex items-center'>
                        <li className='mr-4 footer-icon'><a href="/"><img src={Facebook} alt="icon" /></a></li>
                        <li className='mr-4 footer-icon'><a href="/"><img src={Youtube} alt="icon" /></a></li>
                        <li className='mr-4 footer-icon'><a href="/"><img src={Twitter} alt="icon" /></a></li>
                        <li className='mr-4 footer-icon'><a href="/"><img src={Pinterest} alt="icon" /></a></li>
                        <li className='footer-icon'><a href="/"><img src={Instagram} alt="icon" /></a></li>
                    </ul>
                </div>
                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-start  mb-8 md:mb-0">
                    <ul className='text-center md:text-left'>
                        <li className='footer-nav'><a href="/">About Us</a></li>
                        <li className='footer-nav'><a href="/">Contact</a></li>
                        <li className='footer-nav'><a href="/">Blog</a></li>
                    </ul>
                    <ul className='text-center md:text-left'>
                        <li className='footer-nav'><a href="/">Careers</a></li>
                        <li className='footer-nav'><a href="/">Support</a></li>
                        <li className='footer-nav'><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-end justify-between">
                    <button className='footer-btn  mb-4 md:mb-0'>Request Invite</button>
                    <p className='text2'>© Easybank. All Rights Reserved</p>
                   


                </div>
            </div>

  
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                Coded by <a href="#">Dooneyy</a>.
            </div>
        </footer>
    )
}

export default Footer
