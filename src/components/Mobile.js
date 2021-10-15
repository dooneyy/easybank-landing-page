import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import Mockup from '../assets/images/image-mockups.png';
import Close from '../assets/images/icon-close.svg';
import Open from '../assets/images/icon-hamburger.svg';

const Mobile = () => {
    const [openNav, setOpenNav] = useState(false);
    const showNav = () => {
        setOpenNav(!openNav); 
    }

    return (
     <div>
            <nav className='nav py-6 shadow-lg'>
                <img src={Logo} alt="Logo" />
                {
                openNav ? <button className="nav-icon" onClick={showNav}>
                                <img src={Close} alt="icon-open" />
                            </button> :
                            <button className="nav-icon" onClick={showNav}>
                                <img src={Open} alt="icon-open" />
                            </button>
                }
            </nav>
            {
                    openNav ? <div className="nav-popup">
                    <ul>
                        <li>
                           <a href="/">Home</a>
                        </li>
                        <li>
                           <a href="/">About</a>
                        </li>
                        <li>
                           <a href="/">Contact</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Careers</a> 
                        </li>
                    </ul>
                </div> : ''
                }

            <header className='mobile-header flex flex-col'>
                <div className="">
                    <img src={Mockup} alt="mockup img" className='mobile-header-img h-auto'/>
                </div>
            
               <div className="mobile-header-hero">
                   <p className='mobile-header-title text-3xl lg:text-5xl tracking-wide leading-tight'>
                   Next generation digital banking
                   </p>
                    <p className='mobile-header-text my-8 '>
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                   </p>

                   <button className='btn'>
                        Request Invite
                    </button>

               </div>
                   
            </header>
        </div>
    )
}

export default Mobile