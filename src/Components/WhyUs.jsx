import React from 'react'

// Wrapper 1
import CALL from '../assets/Whyus section/Wrapper1/Call.svg';
import Illus from '../assets/Whyus section/Wrapper1/Illus.svg';
import box1 from '../assets/Whyus section/Wrapper1/2ndBox.svg';
import box2 from '../assets/Whyus section/Wrapper1/3rdBox.svg';

// Wrapper 2
import Leaf from "../assets/Whyus section/Wrapper2/Leaf.svg";
import W2_Box1 from '../assets/Whyus section/Wrapper2/Box_1.svg';
import W2_Box2 from '../assets/Whyus section/Wrapper2/Box_2.svg';

// Wrapper 3
import Steth from "../assets/Whyus section/Wrapper3/Steth.svg";
import W3_box1 from "../assets/Whyus section/Wrapper3/W3_box1.svg";
import W3_box2 from "../assets/Whyus section/Wrapper3/W3_box2.svg";

// Wrapper 4
import Wallet from "../assets/Whyus section/Wrapper4/Wallet.svg";
import W4_box1 from "../assets/Whyus section/Wrapper4/W4_box1.svg";
import W4_box2 from "../assets/Whyus section/Wrapper4/W4_box2.svg";

// Wrapper 5
import Bag from "../assets/Whyus section/Wrapper5/Bag.svg";
import W5_box1 from "../assets/Whyus section/Wrapper5/W5_box1.svg";
import W5_box2 from "../assets/Whyus section/Wrapper5/W5_box2.svg";

const WhyUs = () => {
    return (
        <div className="w-full py-20 px-8 !mt-8">
            {/* Section Title */}
            <div className="text-center mb-16">
                <h1 className="text-[#33643F] text-[44px] font-bold font-dm-sans">
                    Why Doctors Choose Us?
                </h1>
                <p className="font-dm-sans text-[22px] text-[#4C4C4C] mt-2">
                    Unlock the Benefits of Smarter Healthcare Management and Patient Care
                </p>
            </div>

            <div>
                {/* Content Wrapper 1  */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full mx-auto !mt-[129px]">

                    {/* LEFT SIDE */}
                    <div className="relative flex items-center justify-center w-full h-[420px]">
                        {/* Background Shape */}
                        <img
                            src={Illus}
                            alt="illustration"
                            className="w-[520px] h-[400px]"
                        />

                        {/* Foreground Images */}
                        <div className="absolute inset-0">
                            {/* Call Icon */}
                            <div className="absolute top-8 left-10 w-20 h-20 bg-[#E8F7E9] rounded-full flex items-center justify-center shadow-lg !ml-[200px]">
                                <img src={CALL} alt="call" className="w-9 h-9 " />
                            </div>

                            {/* Doctor Card */}
                            <div className="absolute top-16 right-10">
                                <img
                                    src={box2}
                                    alt="Doctor"
                                    className="w-[340px] rounded-2xl shadow-xl"
                                />
                            </div>

                            {/* Connecting Card */}
                            <div className="absolute bottom-8 left-14">
                                <img
                                    src={box1}
                                    alt="Connecting"
                                    className="w-[280px] rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-[545px] h-[144px] !mb-[128px] !ml-[180px]">
                        <h2 className="font-dm-sans font-medium text-[28px] text-[#3A643C]">
                            Instant FREE 5–Mins Call
                        </h2>
                        <p className="font-dm-sans font-medium text-[18px] text-[#666666] leading-relaxed !mt-3">
                            We understand the importance of building trust with your patients.
                            That’s why Amrutam offers a{" "}
                            <span className="font-semibold">free 5-minute call</span>, helping you
                            connect instantly and foster lasting patient relationships with ease.
                        </p>
                    </div>
                </div>


                {/* Content Wrapper 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full mx-auto !mt-[129px]">

                    {/* LEFT SIDE */}
                    <div className="w-[545px] h-[144px] !mb-[128px] !ml-[180px]">
                        <h2 className="font-dm-sans font-medium text-[28px] text-[#3A643C]">
                            Forum for Meaningful Connections
                        </h2>
                        <p className="font-dm-sans font-medium text-[18px] text-[#666666] leading-relaxed !mt-3">
                            We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.
                        </p>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="relative flex items-center justify-center w-full h-[420px]">
                        {/* Background Shape */}
                        <img
                            src={Illus}
                            alt="illustration"
                            className="w-[520px] h-[400px]"
                        />

                        {/* Foreground Images */}
                        <div className="absolute inset-0">
                            {/* Call Icon */}
                            <div className="absolute top-8 left-10 w-20 h-20 bg-[#E8F7E9] rounded-full flex items-center justify-center shadow-lg !ml-[200px]">
                                <img src={Leaf} alt="call" className="w-9 h-9 " />
                            </div>

                            {/* Doctor Card */}
                            <div className="absolute top-16 right-10">
                                <img
                                    src={W2_Box2}
                                    alt="Doctor"
                                    className="w-[340px] rounded-2xl shadow-xl "
                                />
                            </div>

                            {/* Connecting Card */}
                            <div className="absolute bottom-8 !ml-[200px] w-[152px] h-[244px]">
                                <img
                                    src={W2_Box1}
                                    alt="Connecting"
                                    className="w-[280px] rounded-2xl shadow-xl  !mt-[100px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Content Wrapper 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full mx-auto !mt-[129px]">

                    {/* LEFT SIDE */}
                    <div className="relative flex items-center justify-center w-full h-[420px]">
                        {/* Background Shape */}
                        <img
                            src={Illus}
                            alt="illustration"
                            className="w-[520px] h-[400px]"
                        />

                        {/* Foreground Images */}
                        <div className="absolute inset-0">
                            {/* Call Icon */}
                            <div className="absolute top-8 left-10 w-20 h-20 bg-[#E8F7E9] rounded-full flex items-center justify-center shadow-lg !ml-[200px]">
                                <img src={Steth} alt="call" className="w-9 h-9 " />
                            </div>

                            {/* Doctor Card */}
                            <div className="absolute top-16 right-10">
                                <img
                                    src={W3_box1}
                                    alt="Doctor"
                                    className="w-[340px] rounded-2xl shadow-xl"
                                />
                            </div>

                            {/* Connecting Card */}
                            <div className="absolute bottom-8 left-14">
                                <img
                                    src={W3_box2}
                                    alt="Connecting"
                                    className="w-[280px] rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-[545px] h-[144px] !mb-[128px] !ml-[180px]">
                        <h2 className="font-dm-sans font-medium text-[28px] text-[#3A643C]">
                            Choose Your Session Mode
                        </h2>
                        <p className="font-dm-sans font-medium text-[18px] text-[#666666] leading-relaxed !mt-3">
                            Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.
                        </p>
                    </div>
                </div>


                {/* Content Wrapper 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full mx-auto !mt-[129px]">


                    {/* LEFT SIDE */}
                    <div className="w-[545px] h-[144px] !mb-[128px] !ml-[180px]">
                        <h2 className="font-dm-sans font-medium text-[28px] text-[#3A643C]">
                            Smart Wallet
                        </h2>
                        <p className="font-dm-sans font-medium text-[18px] text-[#666666] leading-relaxed !mt-3">
                            We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex items-center justify-center w-full h-[420px]">
                        {/* Background Shape */}
                        <img
                            src={Illus}
                            alt="illustration"
                            className="w-[520px] h-[400px]"
                        />

                        {/* Foreground Images */}
                        <div className="absolute inset-0">
                            {/* Call Icon */}
                            <div className="absolute top-8 left-10 w-20 h-20 bg-[#E8F7E9] rounded-full flex items-center justify-center shadow-lg !ml-[200px]">
                                <img src={Wallet} alt="call" className="w-9 h-9 " />
                            </div>

                            {/* Doctor Card */}
                            <div className="absolute top-16 right-10">
                                <img
                                    src={W4_box2}
                                    alt="Doctor"
                                    className="w-[340px] rounded-2xl shadow-xl"
                                />
                            </div>

                            {/* Connecting Card */}
                            <div className="absolute bottom-8 left-14">
                                <img
                                    src={W4_box1}
                                    alt="Connecting"
                                    className="w-[280px] rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Content Wrapper 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full mx-auto !mt-[129px]">

                    {/* LEFT SIDE */}
                    <div className="relative flex items-center justify-center w-full h-[420px]">
                        {/* Background Shape */}
                        <img
                            src={Illus}
                            alt="illustration"
                            className="w-[520px] h-[400px]"
                        />

                        {/* Foreground Images */}
                        <div className="absolute inset-0">
                            {/* Call Icon */}
                            <div className="absolute top-8 left-10 w-20 h-20 bg-[#E8F7E9] rounded-full flex items-center justify-center shadow-lg !ml-[200px]">
                                <img src={Bag} alt="call" className="w-9 h-9 " />
                            </div>

                            {/* Doctor Card */}
                            <div className="absolute top-16 right-10">
                                <img
                                    src={W5_box2}
                                    alt="Doctor"
                                    className="w-[340px] rounded-2xl shadow-xl"
                                />
                            </div>

                            {/* Connecting Card */}
                            <div className="absolute bottom-8 left-14">
                                <img
                                    src={W5_box1}
                                    alt="Connecting"
                                    className="w-[280px] rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-[545px] h-[144px] !mb-[128px] !ml-[180px]">
                        <h2 className="font-dm-sans font-medium text-[28px] text-[#3A643C]">
                            Flexible Work Timing
                        </h2>
                        <p className="font-dm-sans font-medium text-[18px] text-[#666666] leading-relaxed !mt-3">
                            We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
