import React from 'react'

import Leaf from '../assets/GetStarted/Leaf.svg';
import Coin from '../assets/GetStarted/Coin.svg';
import Call from '../assets/GetStarted/Call.svg';
import Wallet from '../assets/GetStarted/Wallet.svg';

import PlayStore from '../assets/GetStarted/PlayStore.svg';
import AppStore from '../assets/GetStarted/AppStore.svg';

import Doc1 from '../assets/GetStarted/Doc-1.svg'
import Doc2 from '../assets/GetStarted/Doc-2.svg'
import Doc3 from '../assets/GetStarted/Doc-3.svg'
import Doc4 from '../assets/GetStarted/Doc-4.svg'

import Iphone from '../assets/GetStarted/Iphone.svg'
import IphoneTop from '../assets/GetStarted/IphoneTop.svg'

const GetStarted = () => {
    return (
        <section className="w-full max-h-none lg:max-h-[840px] relative flex flex-col lg:flex-row px-4 lg:px-0">
            <div className="absolute z-20 left-[50%] !mt-[45px] top-0 flex justify-center hidden lg:flex">
                <img src={Iphone} alt="" className="w-[354px] h-[716px]" />
                <img src={IphoneTop} alt="" className="absolute z-20 !mt-[175px]" />
            </div>
            <div className="bg-[#FFEDBF] h-auto lg:h-[637px] w-full !mt-[40px] lg:!mt-[113px] !mb-[40px] lg:!mb-[92px] flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/3 items-center justify-around !mt-[20px] lg:!mt-[47px] !mr-0 lg:!mr-[40px] px-4 lg:px-0">
                    <div className="w-full lg:w-[555px] h-auto lg:h-[195.89px] !ml-0 lg:!ml-[84px] flex flex-col justify-between text-center lg:text-left mb-6 lg:mb-0">
                        <h1 className="text-[#3A643C] font-dm-sans font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-tight mb-3 lg:mb-0">Get Started Today – Download the App Now!</h1>
                        <p className="font-dm-sans text-[#666666] text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed">Simplify consultations, manage patients, and grow your practice—all in one place.</p>
                    </div>
                    <div className="!ml-0 lg:!ml-[84px] !mt-[20px] lg:!mt-[32.11px] w-full lg:w-[580px]">
                        <div className="flex flex-col lg:flex-row w-full lg:w-[580px] justify-between gap-4 lg:gap-0 mb-4 lg:mb-0">
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-auto lg:h-[58px] w-full lg:w-[279.35px] min-h-[58px]">
                                <img src={Leaf} alt="" className="w-[40px] h-[30px] lg:w-[46.35px] lg:h-[34.57px] mx-[8px] lg:mx-[11.71px] my-[8px] !mr-[16px] lg:!mr-[32px] object-contain flex-shrink-0" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[14px] lg:text-[16px] leading-relaxed">Build Trust and Community with Forum</h2>
                            </div>
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-auto lg:h-[58px] w-full lg:w-[279.35px] min-h-[58px]">
                                <img src={Coin} alt="" className="w-[40px] h-[30px] lg:w-[46.35px] lg:h-[34.57px] mx-[8px] lg:mx-[11.71px] my-[8px] !mr-[16px] lg:!mr-[32px] object-contain flex-shrink-0" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[14px] lg:text-[16px] leading-relaxed">Earn More with Pay Per Conversation</h2>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row w-full lg:w-[580px] justify-between gap-4 lg:gap-0 !mt-[20px] lg:!mt-[40px]">
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-auto lg:h-[58px] w-full lg:w-[279.35px] min-h-[58px]">
                                <img src={Call} alt="" className="w-[40px] h-[30px] lg:w-[46.35px] lg:h-[34.57px] mx-[8px] lg:mx-[11.71px] my-[8px] !mr-[16px] lg:!mr-[32px] object-contain flex-shrink-0" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[14px] lg:text-[16px] leading-relaxed">Attract Patients with 5-Minute Free Call</h2>
                            </div>
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-auto lg:h-[58px] w-full lg:w-[279.35px] min-h-[58px]">
                                <img src={Wallet} alt="" className="w-[40px] h-[30px] lg:w-[46.35px] lg:h-[34.57px] mx-[8px] lg:mx-[11.71px] my-[8px] !mr-[16px] lg:!mr-[32px] object-contain flex-shrink-0" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[14px] lg:text-[16px] leading-relaxed">Instant Access to Your Earnings with Wallet</h2>
                            </div>
                        </div>
                    </div>

                    <div className="h-auto lg:h-[75.07px] w-full lg:w-[528px] flex flex-col lg:flex-row !mt-[30px] lg:!mt-[73.64px] !ml-0 lg:!ml-[84px] justify-center lg:justify-between gap-4 lg:gap-0">
                        <img src={PlayStore} alt="" className="w-[200px] md:w-[220px] lg:w-[250.27px] h-[60px] md:h-[67px] lg:h-[73.9px] object-contain" />
                        <img src={AppStore} alt="" className="w-[200px] md:w-[220px] lg:w-[250.27px] h-[60px] md:h-[67px] lg:h-[73.9px] object-contain" />
                    </div>
                </div>

                <div className="w-full lg:w-[671.57px] h-auto lg:h-[715.14px] flex justify-center lg:justify-between !mr-0 lg:!mr-[102] !ml-0 lg:!ml-[100px] mt-8 lg:mt-0 hidden lg:flex">
                    <div className="!mr-0 lg:!mr-[69.8px] h-auto lg:h-[637px] flex flex-col items-center lg:items-start">
                        <img src={Doc1} alt="" className="h-[90px] w-[90px] md:h-[100px] md:w-[100px] lg:h-[111.92px] lg:w-[111.92px] !mt-[20px] lg:!mt-[36.4px] object-contain" />
                        <img src={Doc3} alt="" className="!mt-[120px] lg:!mt-[175px] !ml-0 lg:!ml-[82px] w-[90px] h-[90px] md:w-[100px] md:h-[100px] lg:w-auto lg:h-auto object-contain" />
                    </div>
                    <div className="!ml-0 lg:!ml-[35px] flex flex-col justify-evenly h-auto lg:h-[637px] items-center lg:items-start">
                        <img src={Doc2} alt="" className="w-[90px] h-[90px] md:w-[95px] md:h-[95px] lg:w-[100px] lg:h-[100px] object-contain"/>
                        <img src={Doc4} alt="" className="w-[90px] h-[90px] md:w-[95px] md:h-[95px] lg:w-auto lg:h-auto object-contain" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GetStarted
