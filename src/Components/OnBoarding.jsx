import React, { useState } from 'react';
import Illus from '../assets/OnBoarding/Illus.svg';
import Example from '../assets/OnBoarding/example.svg';

// I phones for cunsultaion;
import Iphone1 from '../assets/OnBoarding/CounsultingIphones/Iphone_1_1.svg'
import Iphone2 from '../assets/OnBoarding/CounsultingIphones/Iphone_1_2.svg'
import Iphone3 from '../assets/OnBoarding/CounsultingIphones/Iphone_1_3.svg'

// Iphone for Payment
import PaymentIphone1 from '../assets/OnBoarding/PaymentIphone/Payment_Iphone_1.png'
import PaymentIphone2 from '../assets/OnBoarding/PaymentIphone/Payment_Iphone_2.png'
import PaymentIphone3 from '../assets/OnBoarding/PaymentIphone/Payment_Iphone_3.png'

//Iphone for Schedule
import ScheIphone1 from '../assets/OnBoarding/Sche_Iphones/Sche_Iphone_1.png'
import ScheIphone2 from '../assets/OnBoarding/Sche_Iphones/Sche_Iphone_2.png'
import ScheIphone3 from '../assets/OnBoarding/Sche_Iphones/Sche_Iphone_3.png'

import { motion, AnimatePresence } from "framer-motion";


const OnBoarding = () => {
    const [selected, setSelected] = useState("Consultation");
    const STEPS = [
        {
            step: "Step 1: Get your referral code",
            desc: "Contact us to receive your unique referral code."
        },
        {
            step: "Step 2: Register on Amrutam",
            desc: "Sign up on the Amrutam Doctors app or website to join our specialist network."
        },
        {
            step: "Step 3: Complete KYC",
            desc: "Fill in your details and upload the required documents for verification."
        },
        {
            step: "Step 4: Start consulting",
            desc: "Once verified, begin offering consultations and helping patients."
        },
    ]

    const ONBOARDING_BTNs = [
        { btn: "Consultation" },
        { btn: "Payment widthdrwal" },
        { btn: "Schedule" },
    ]

    const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward

    const handleClick = (btn) => {
        const currentIndex = ONBOARDING_BTNs.findIndex((b) => b.btn === selected);
        const newIndex = ONBOARDING_BTNs.findIndex((b) => b.btn === btn);
        setDirection(newIndex > currentIndex ? 1 : -1);
        setSelected(btn);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            position: "absolute",
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "relative",
            transition: { duration: 0.6, ease: "easeInOut" },
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            position: "absolute",
            transition: { duration: 0.6, ease: "easeInOut" },
        }),
    };
    return (
        <div className="w-full py-12 md:py-20 px-4 md:px-8 !mt-6 md:!mt-12">

            <div className="text-center mb-12 md:mb-16 flex justify-center flex-col items-center">
                <h1 className="text-[#33643F] text-[32px] md:text-[40px] lg:text-[44px] font-bold font-dm-sans leading-tight">
                    Join Our Circle of Care
                </h1>
                <p className="font-dm-sans text-[18px] md:text-[20px] lg:text-[22px] text-[#4C4C4C] mt-3 max-w-[600px] mx-auto">
                    Becoming a part of Amrutam is simple
                </p>
            </div>

            <div className="w-full !mt-8 md:!mt-[52px] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
                <div className="w-full max-w-[500px] lg:max-w-none lg:w-[579px]">
                    {
                        STEPS.map((step, idx) => (
                            <div key={idx} className="group w-full border border-[#3A643C] rounded-[8px] flex justify-center flex-col !pl-6 md:!pl-8 !py-5 md:!py-6 !mb-4 md:!mb-[18px] hover:bg-[#33643F] transition-all duration-700 ease-in-out">
                                <h1 className="!mb-2 md:!mb-[10px] text-[#3A643C] font-dm-sans font-extrabold text-[18px] md:text-[20px] group-hover:text-white text-center lg:text-left">{step.step}</h1>
                                <p className="font-dm-sans font-medium text-[#3A643C] text-[14px] md:text-[14px] group-hover:text-white text-center lg:text-left leading-relaxed">{step.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="relative w-full max-w-[350px] md:max-w-[500px] lg:max-w-[645px] flex items-center justify-center">
                    {/* Illus background (shifted up so it's half visible) */}
                    <img
                        src={Illus}
                        alt="Illustration"
                        className="absolute -top-8 md:-top-16 lg:-top-20 w-[110%] h-auto object-contain z-0"
                    />

                    {/* Example foreground (main image) */}
                    <img
                        src={Example}
                        alt="Example"
                        className="relative z-10 w-[95%] h-auto object-contain shadow-lg rounded-lg"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center !mt-12 md:!mt-[38px] relative">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-[600px]">
                    {ONBOARDING_BTNs.map((btn, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleClick(btn.btn)}
                            className={`h-[48px] border border-[#3A643C] rounded-[8px] !px-6 md:!px-[12px] !py-3 md:!py-[12px] w-full sm:w-auto min-w-[200px] font-dm-sans text-[#3A643C] transition-all duration-700 ease-in-out
                                    ${selected === btn.btn
                                    ? "bg-[#33643F] text-white"
                                    : "text-[#3A643C] bg-transparent"
                                }`}
                        >
                            {btn.btn}
                        </button>
                    ))}
                </div>
                {/* Animated Sections */}
                <div className="relative w-full max-w-[1200px] h-[600px] md:h-[560px] !mt-8 md:!mt-[28px] overflow-hidden">
                    <AnimatePresence custom={direction} mode="wait">
                        {selected === "Consultation" && (
                            <motion.div
                                key="consultation"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="flex flex-col lg:flex-row w-full h-full justify-center lg:justify-between items-center gap-8 lg:gap-4"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl mb-4">
                                        Value Your Practice
                                    </h1>
                                    <img
                                        src={Iphone1}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain"
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src={Iphone2}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain mb-4"
                                    />
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl">
                                        Today's Healing Journey
                                    </h1>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl mb-4">
                                        Consultation Details
                                    </h1>
                                    <img
                                        src={Iphone3}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain"
                                    />
                                </div>
                            </motion.div>
                        )}

                        {selected === "Payment widthdrwal" && (
                            <motion.div
                                key="payment"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="flex flex-col lg:flex-row w-full h-full justify-center lg:justify-between items-center gap-8 lg:gap-4"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl mb-4">
                                        Your Earnings
                                    </h1>
                                    <img
                                        src={PaymentIphone1}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain"
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src={PaymentIphone2}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain mb-4"
                                    />
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl">
                                        Trusted Transfers
                                    </h1>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl mb-4">
                                        Smooth Settlement
                                    </h1>
                                    <img
                                        src={PaymentIphone3}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain"
                                    />
                                </div>
                            </motion.div>
                        )}

                        {selected === "Schedule" && (
                            <motion.div
                                key="schedule"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="flex flex-col lg:flex-row w-full h-full justify-center lg:justify-between items-center gap-8 lg:gap-4"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl mb-4">
                                        Choose Your Perfect Date
                                    </h1>
                                    <img
                                        src={ScheIphone1}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain"
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src={ScheIphone3}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain mb-4"
                                    />
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl">
                                        Time That Works For You
                                    </h1>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-[#3A643C] font-dm-sans font-bold text-xl md:text-2xl mb-4">
                                        Effortless Overview
                                    </h1>
                                    <img
                                        src={ScheIphone2}
                                        alt=""
                                        className="w-[180px] md:w-[200px] lg:w-[216px] h-[350px] md:h-[400px] lg:h-[435px] object-contain"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex items-center justify-center !mt-12 md:!mt-[38px] w-full">
                <button className="bg-[#3A643C] text-white px-8 md:px-7 py-4 md:py-7 w-full max-w-[300px] md:w-[161px] h-[56px] rounded-[12px] font-semibold shadow-lg hover:bg-green-800 transition">
                    Join Now
                </button>
            </div>
        </div>
    )
}

export default OnBoarding
