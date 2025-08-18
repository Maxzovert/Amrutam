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
        <div className="w-full py-20 px-8 !mt-12 max-h-[1510px]:">

            <div className="text-center mb-16">
                <h1 className="text-[#33643F] text-[44px] font-bold font-dm-sans">
                    Join Our Circle of Care
                </h1>
                <p className="font-dm-sans text-[22px] text-[#4C4C4C] mt-2">
                    Becoming a part of Amrutam is simple
                </p>
            </div>

            <div className="w-full !mt-[52px] flex justify-around items-center">
                <div className="!mt-[32px]">
                    {
                        STEPS.map((step, idx) => (
                            <div key={idx} className="group w-[579px] h-[110px] border border-[#3A643C] rounded-[8px] flex justify-center flex-col !pl-8 !mb-[18px] hover:bg-[#33643F] transition-all duration-700 ease-in-out">

                                <h1 className="!mb-[10px] text-[#3A643C] font-dm-sans font-extrabold text-[20px] group-hover:text-white">{step.step}</h1>
                                <p className="font-dm-sans font-medium text-[#3A643C] text-[14px] group-hover:text-white">{step.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="relative w-full max-w-[645px] flex items-center justify-center">
                    {/* Illus background (shifted up so it's half visible) */}
                    <img
                        src={Illus}
                        alt="Illustration"
                        className="absolute -top-20 w-[110%] h-auto object-contain z-0"
                    />

                    {/* Example foreground (main image) */}
                    <img
                        src={Example}
                        alt="Example"
                        className="relative z-10 w-[95%] h-auto object-contain shadow-lg rounded-lg"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center !mt-[38px] relative">
                {/* Buttons */}
                <div className="flex justify-between items-center h-[48px] w-[562px]">
                    {ONBOARDING_BTNs.map((btn, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleClick(btn.btn)}
                            className={`h-[48px] border border-[#3A643C] rounded-[8px] !p-[12px] max-w-[219px] font-dm-sans text-[#3A643C] transition-all duration-700 ease-in-out
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
                <div className="relative w-[1240px] h-[560px] !mt-[28px] overflow-hidden">
                    <AnimatePresence custom={direction} mode="wait">
                        {selected === "Consultation" && (
                            <motion.div
                                key="consultation"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="flex flex-row w-full h-full justify-between items-center"
                            >
                                <div className="!mt-[79px] mr-[156px]">
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl">
                                        Value Your Practice
                                    </h1>
                                    <img
                                        src={Iphone1}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[22px] !mt-[16px]"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={Iphone2}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[48px]"
                                    />
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl !mt-4">
                                        Today's Healing Journey
                                    </h1>
                                </div>
                                <div className="!mt-[79px]">
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl">
                                        Consultation Details
                                    </h1>
                                    <img
                                        src={Iphone3}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[24px] !mt-[16px]"
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
                                className="flex flex-row w-full h-full justify-between items-center"
                            >
                                <div className="!mt-[79px] mr-[156px]">
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl">
                                        Your Earnings
                                    </h1>
                                    <img
                                        src={PaymentIphone1}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[22px] !mt-[16px]"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={PaymentIphone2}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[30px]"
                                    />
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl !mt-4">
                                        Trusted Transfers
                                    </h1>
                                </div>
                                <div className="!mt-[79px]">
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl">
                                        Smooth Settlement
                                    </h1>
                                    <img
                                        src={PaymentIphone3}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[24px] !mt-[16px]"
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
                                className="flex flex-row w-full h-full justify-between items-center"
                            >
                                <div className="!mt-[79px] mr-[156px]">
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl">
                                        Choose Your Perfect Date
                                    </h1>
                                    <img
                                        src={ScheIphone1}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[22px] !mt-[16px]"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={ScheIphone3}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[48px]"
                                    />
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl !mt-4">
                                        Time That Works For You
                                    </h1>
                                </div>
                                <div className="!mt-[79px]">
                                    <h1 className="text-center text-[#3A643C] font-dm-sans font-bold text-2xl">
                                        Effortless Overview
                                    </h1>
                                    <img
                                        src={ScheIphone2}
                                        alt=""
                                        className="w-[216px] h-[435px] !ml-[24px] !mt-[16px]"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex items-center justify-center !mt-[38px] w-full">
                <button className="bg-[#3A643C] text-white px-7 py-7 w-[161px] h-[56px] rounded-[12px] font-semibold shadow-lg hover:bg-green-800 transition !ml-[10px]">
                    Join Now
                </button>
            </div>
        </div>
    )
}

export default OnBoarding
