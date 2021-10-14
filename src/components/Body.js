import React from 'react';
import Api from '../assets/images/icon-api.svg';
import Budget from '../assets/images/icon-budgeting.svg';
import Onboard from '../assets/images/icon-onboarding.svg';
import Online from '../assets/images/icon-online.svg';
import Confetti from '../assets/images/image-confetti.jpg';
import Currency from '../assets/images/image-currency.jpg';
import Plane from '../assets/images/image-plane.jpg';
import Restaurant from '../assets/images/image-restaurant.jpg';

const Body = () => {
    return (
        <div className='body'>
            <div className="features px-14 lg:px-18 py-24 ">
                <div>
                <p className='text1 text-3xl lg:text-4xl tracking-wide leading-tight mb-6'>
                    Why choose Easybank?
               </p>
               <p className='text2'>
                    We leverage Open Banking to turn your bank account into your financial hub. <br /> Control your finances like never before.
                </p>
                </div>

                <div className="features-list grid grid-col sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="flex flex-col items-start justify-center">
                        <img src={Online} alt="image online" className='my-8' />
                        <p className='text1 text-2xl mb-6'>Online Banking</p>
                        <p className='text2'>
                        Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <img src={Budget} alt="image budget" className='my-8' />
                        <p className='text1 text-2xl mb-6'>Simple Budgeting</p>
                        <p className='text2'>
                        See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <img src={Onboard} alt="image onboard" className='my-8' />
                        <p className='text1 text-2xl mb-6'>Fast Onboarding</p>
                        <p className='text2'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <img src={Api} alt="image api" className='my-8' />
                        <p className='text1 text-2xl mb-6'>Open API</p>
                        <p className='text2'>
                        Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
               
            </div>
        
            <div className="articles px-14 lg:px-18 py-24 ">
                <p className="text1 text-3xl lg:text-4xl tracking-wide leading-tight mb-6">
                    Latest Articles
                </p>
                <div className="article grid grid-col sm:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="article-box flex flex-col items-start">
                        <img src={Currency} alt="currency" />
                        <div className="article-boxx">
                            <p className='text3 my-4'>By Claire Robinson</p>
                            <p className='article-boxx_title text1 text-2xl mb-6'>Receive money in any currency with no fees</p>
                            <p className='text2'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                        </div>
                    </div>

                    <div className="article-box flex flex-col items-start">
                        <img src={Restaurant} alt="restaurant" />
                        <div className="article-boxx">
                            <p className='text3 my-4'>By Wilson Hutton</p>
                            <p className='article-boxx_title text1 text-2xl mb-6'>Treat yourself without worrying about money</p>
                            <p className='text2'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                        </div>
                    </div>

                    <div className="article-box flex flex-col items-start">
                        <img src={Plane} alt="plane" />
                        <div className="article-boxx">
                            <p className='text3 my-4'>By Wilson Hutton</p>
                            <p className='article-boxx_title text1 text-2xl mb-6'>Take your Easybank card wherever you go</p>
                            <p className='text2'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                        </div>
                    </div>

                    <div className="article-box flex flex-col items-start">
                        <img src={Confetti} alt="confetti" />
                        <div className="article-boxx">
                            <p className='text3 my-4'>By Claire Robinson</p>
                            <p className='article-boxx_title text1 text-2xl mb-6'>Our invite-only Beta accounts are now live!</p>
                            <p className='text2'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Body
