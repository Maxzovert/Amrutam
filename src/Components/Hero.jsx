import React from 'react'
import docLogo from '../assets/docLogo.svg'
import docHead from '../assets/docHead.svg'
import mainLogo from "../assets/mainLogo.svg"
import FullImg from "../assets/Hero Section/Full.svg"
import Rectangle from "../assets/Hero Section/rectangle.svg"

const Hero = () => {
    const NAVLINKS = [
        {
            nav: "About us",
            link: "/about-us"
        },
        {
            nav: "Onboarding",
            link: "/onboarding"
        },
        {
            nav: "FAQ",
            link: "/faq"
        },
        {
            nav: "Testimonials",
            link: "/testimonials"
        },
    ]
    return (
        <div>
            <div className="bg-[#373636] h-[67px] flex items-center justify-center w-full gap-4 md:gap-8 px-4">
                {/* Title */}
                <h1 className="text-[#D9D9D9] font-dm-sans text-[16px] md:text-[20px] font-medium text-center">
                    Register Yourself As An Amrutam Doctor
                </h1>

                {/* Button */}
                <div className="bg-[#3A643B] rounded-xl w-[280px] md:w-[355px] h-[51px] flex justify-center items-center gap-3">
                    <div className="flex flex-col justify-center items-center">
                        <img src={docHead} alt="Doctor Head" className="mb-1" />
                        <img src={docLogo} alt="Doctor Logo" />
                    </div>
                    <h2 className="text-white font-medium">Join Now</h2>
                </div>
            </div>

            <nav className="w-full h-auto md:h-[112px] flex flex-col justify-around items-center py-4 md:py-6 bg-[#FFF8E1] shadow-amber-200 px-4">
                {/* Logo */}
                <img src={mainLogo} alt="Main Logo" className="mb-4 mt-[8px]" />

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-8 md:mt-16">
                    {NAVLINKS.map((links, index) => (
                        <h1
                            key={index}
                            className="text-[#474747] font-poppins font-normal text-[18px] md:text-[20px] cursor-pointer hover:underline transition-all text-center"
                        >
                            {links.nav}
                        </h1>
                    ))}
                </div>
            </nav>

            <section className="w-full bg-gradient-to-r from-[#FFE6A5] to-[#FFF6DD]">
                <div className="w-full min-h-[700px] pt-6 pb-6 flex flex-col md:flex-row items-center justify-around px-4 md:px-0">

                    {/* Left Content */}
                    <div className="flex flex-col px-0 md:px-0 md:ml-0 max-w-[600px] h-auto md:h-[400px] justify-between mt-8 md:mt-0">
                        <div>
                        <p className="text-[14px] md:text-[16px] font-medium uppercase tracking-wide text-gray-600 font-dm-sans text-center md:text-left">
                            Namaste, Welcome to Amrutam
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black text-center md:text-left mt-4 md:mt-0">
                            Join Amrutam – <span className="text-green-700">Grow Your Practice</span>
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left mt-4">
                            Connect with more patients, set your own schedule,<br className="hidden md:block"/> and grow your Ayurvedic practice effortlessly.
                        </p>
                        </div>
                        <button className="bg-[#3A643C] text-white px-7 py-7 w-full md:w-[262px] h-[56px] rounded-lg font-semibold shadow-lg hover:bg-green-800 transition mt-[44px]">
                            Join Now
                        </button>

                        <div className="mt-20 flex flex-row max-w-[280px] justify-around mx-auto md:mx-0">
                            <div className="font-dm-sans flex flex-col justify-center items-center">
                                <h1 className="font-bold text-[20px] md:text-[24px]">500+</h1>
                                <h2 className="text-[12px] md:text-[14px] font-medium text-center">Average Active <br/>Users</h2>
                            </div >
                            <img src={Rectangle} alt="" />
                            <div className="font-dm-sans flex flex-col justify-center items-center">
                                <h1 className="font-bold text-[20px] md:text-[24px]">40+</h1>
                                <h2 className="text-[12px] md:text-[14px] font-medium text-center">Average Daily <br/> Free Calls</h2>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end mt-8 md:mt-0 w-full md:w-auto">
                        <img
                            src={FullImg}
                            alt="Doctors"
                            className="object-contain drop-shadow-lg max-h-[400px] md:max-h-[600px] w-full max-w-[500px] md:max-w-none"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
