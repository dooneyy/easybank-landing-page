import React from 'react';
import Logo from '../assets/images/logo.svg';
import Mockup from '../assets/images/image-mockups.png';

const Header = () => {
    return (
        <div>
           
            <nav className='nav py-6 shadow-lg'>
                <img src={Logo} alt="Logo" />
                <ul >
                    <li className='mr-8'>
                       <a href="/">Home</a>
                    </li>
                    <li className='mr-8'>
                       <a href="/">About</a>
                    </li>
                    <li className='mr-8'>
                       <a href="/">Contact</a>
                    </li>
                    <li className='mr-8'>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Careers</a> 
                    </li>
                </ul>
                <button className='btns'>
                    Request Invite
                </button>
            </nav>

            <header className='header flex justify-between'>
               <div className="header-hero">
                   <p className='header-title text-3xl lg:text-5xl tracking-wide leading-tight'>
                   Next generation digital banking
                   </p>
                    <p className='header-text my-8 '>
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                   </p>

                   <button className='btn'>
                        Request Invite
                    </button>

               </div>
                    <img src={Mockup} alt="mockup img" className='header-img'/>
            </header>
        </div>
    )
}

export default Header