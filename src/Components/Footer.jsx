import React from 'react'
import Logo from "../assets/Footer/logo.png"

import Facebook from '../assets/Footer/Social/Facebook.svg';
import Instagram from '../assets/Footer/Social/Instagram.svg';
import Youtube from '../assets/Footer/Social/YouTube.svg';
import Twitter from '../assets/Footer/Social/Twitter.svg';
import Linkedin from '../assets/Footer/Social/LinkedIn.svg';
import Pintrest from '../assets/Footer/Social/Pintrest.svg';

const Footer = () => {
    const Links = [
        {
            link: "About Us",
            path: ""
        },
        {
            link: "Terms and Conditions",
            path: ""
        },
        {
            link: "Privacy Policy",
            path: ""
        },
        {
            link: "Privacy Policy for Mobile App",
            path: ""
        },
        {
            link: "Shipping and Return Policy",
            path: ""
        },
        {
            link: "International Delivery",
            path: ""
        },
        {
            link: "For Business, Hotels and Resorts",
            path: ""
        },
    ]
    const SocialIcons = [
        {
            logo: Facebook,
            path: ""
        },
        {
            logo: Instagram,
            path: ""
        },
        {
            logo: Youtube,
            path: ""
        },
        {
            logo: Twitter,
            path: ""
        },
        {
            logo: Linkedin,
            path: ""
        },
        {
            logo: Pintrest,
            path: ""
        },
    ]
    return (
        <footer className="w-full h-auto lg:h-[441px] bg-[#DBDCC4] relative !px-4 md:!px-8 lg:!px-[100px] flex flex-col lg:flex-row justify-between py-8 lg:py-0">
            <div className="w-full lg:w-[371px] h-auto lg:h-[303px] !mt-0 lg:!mt-[76px] text-center lg:text-left mb-8 lg:mb-0">
                <img src={Logo} alt="" className="w-[180px] md:w-[200px] lg:w-[210px] h-[40px] md:h-[44px] lg:h-[47px] mx-auto lg:mx-0 object-contain" />
                <div className="!pl-0 lg:!pl-[16px] !mt-[20px] lg:!mt-[41px]">
                    <h1 className="font-dm-sans font-semibold text-[22px] md:text-[24px] lg:text-[26px] text-[#33643F]">Get in touch</h1>
                    <p className="!mt-[16px] lg:!mt-[24px] font-dm-sans font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#4C4C4C]">support@amrutam.global</p>
                    <p className="!mt-[10px] lg:!mt-[14px] font-dm-sans font-medium text-[14px] md:text-[16px] lg:text-[20px] text-[#4C4C4C] leading-relaxed">Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                    <p className="!mt-[10px] lg:!mt-[14px] font-dm-sans font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#4C4C4C]">+91 9713171999</p>
                </div>
            </div>

            <div className="w-full lg:w-[314.56px] h-auto lg:h-[315px] !mt-0 lg:!mt-[76px] text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="font-dm-sans text-[#33643F] text-[24px] md:text-[26px] lg:text-[28px] font-semibold">Information</h1>

                <div className="w-full lg:w-[314.56px] h-auto lg:h-[254px] !mt-[16px] lg:!mt-[24px]">
                    {Links.map((link, idx) => (
                        <p className="font-dm-sans font-medium text-[#4C4C4C] text-[16px] md:text-[18px] lg:text-20px !mt-[8px] lg:!mt-[12px] leading-relaxed cursor-pointer hover:text-[#33643F] transition-colors" key={idx}>{link.link}</p>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-[296px] h-auto lg:h-[101px] !mt-0 lg:!mt-[76px] text-center lg:text-left">
                <h1 className="font-dm-sans text-[#33643F] text-[24px] md:text-[26px] lg:text-[28px] font-semibold">Follow us</h1>
                <div className="w-full lg:w-[296px] h-auto lg:h-[36px] flex flex-row justify-center lg:justify-between !mt-[20px] lg:!mt-[28px] gap-4 lg:gap-0">
                    {
                        SocialIcons.map((icon, idx) => (
                            <img src={icon.logo} alt="" className="w-[32px] h-[32px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px] cursor-pointer hover:scale-110 transition-transform" key={idx} />
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
