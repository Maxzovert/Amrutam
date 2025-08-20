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
            link:"About Us",
            path:""
        },
        {
            link:"Terms and Conditions",
            path:""
        },
        {
            link:"Privacy Policy",
            path:""
        },
        {
            link:"Privacy Policy for Mobile App",
            path:""
        },
        {
            link:"Shipping and Return Policy",
            path:""
        },
        {
            link:"International Delivery",
            path:""
        },
        {
            link:"For Business, Hotels and Resorts",
            path:""
        },
    ]
    const SocialIcons = [
        {
            logo: Facebook,
            path : ""
        },
        {
            logo: Instagram,
            path : ""
        },
        {
            logo: Youtube,
            path : ""
        },
        {
            logo: Twitter,
            path : ""
        },
        {
            logo: Linkedin,
            path : ""
        },
        {
            logo: Pintrest,
            path : ""
        },
    ]
    return (
        <footer className="w-full h-[441px] bg-[#DBDCC4] relative !px-[100px] flex flex-row justify-between">
            <div className="w-[371px] h-[303px] !mt-[76px]">
                <img src={Logo} alt="" className="w-[210px] h-[47px]" />
                <div className="!pl-[16px] !mt-[41px]">
                    <h1 className="font-dm-sans font-semibold text-[26px] text-[#33643F] ">Get in touch</h1>
                    <p className="!mt-[24px] font-dm-sans font-medium text-[20px] text-[#4C4C4C]">support@amrutam.global</p>
                    <p className="!mt-[14px] font-dm-sans font-medium text-[20px] text-[#4C4C4C]">Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                    <p className="!mt-[14px] font-dm-sans font-medium text-[20px] text-[#4C4C4C]">+91 9713171999</p>
                </div>
            </div>

            <div className="w-[314.56px] h-[315px] !mt-[76px]">
                <h1 className="font-dm-sans text-[#33643F] text-[28px] font-semibold">Information</h1>

                <div className="w-[314.56px] h-[254px] !mt-[24px]">
                    {Links.map((link , idx)=> (
                        <p className="font-dm-sans font-medium text-[#4C4C4C] text-20px !mt-[12px]" key={idx}>{link.link}</p>
                    ))}
                </div>
            </div>

            <div className="w-[296px] h-[101px] !mt-[76px]">
                <h1 className="font-dm-sans text-[#33643F] text-[28px] font-semibold">Follow us</h1>
                <div className="w-[296px] h-[36px] flex flex-row justify-between !mt-[28px]">
                    {
                        SocialIcons.map((icon , idx)=> (
                            <img src={icon.logo} alt="" className="w-[36px] h-[36px]" />
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
