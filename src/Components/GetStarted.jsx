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
        <section className="w-full max-h-[840px] relative flex ">
            <div className="absolute z-20 left-[50%] !mt-[45px] top-0 flex justify-center">
                <img src={Iphone} alt="" className="w-[354px] h-[716px]" />
                <img src={IphoneTop} alt="" className="absolute z-20 !mt-[175px]" />
            </div>
            <div className="bg-[#FFEDBF] h-[637px] w-full !mt-[113px] !mb-[92px] flex">
                <div className="w-1/3 items-center justify-around !mt-[47px] !mr-[40px]">
                    <div className="w-[555px] h-[195.89px] !ml-[84px] flex flex-col justify-between ">
                        <h1 className="text-[#3A643C] font-dm-sans font-bold text-[40px]">Get Started Today – Download the App Now!</h1>
                        <p className="font-dm-sans text-[#666666] text-[20px] font-medium">Simplify consultations, manage patients, and grow your practice—all in one place.</p>
                    </div>
                    <div className=" !ml-[84px] !mt-[32.11px]">
                        <div className="flex w-[580px] justify-between">
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-[58px] w-[279.35px]">
                                <img src={Leaf} alt="" className="w-[46.35px] h-[34.57px] mx-[11.71px] my-[8px] !mr-[32px]" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[16px]">Build Trust and Community with Forum</h2>
                            </div>
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-[58px] w-[279.35px]">
                                <img src={Coin} alt="" className="w-[46.35px] h-[34.57px] mx-[11.71px] my-[8px] !mr-[32px]" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[16px]">Earn More with Pay Per Conversation</h2>
                            </div>
                        </div>
                        <div className="flex w-[580px] justify-between !mt-[40px]">
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-[58px] w-[279.35px]">
                                <img src={Call} alt="" className="w-[46.35px] h-[34.57px] mx-[11.71px] my-[8px] !mr-[32px]" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[16px]">Attract Patients with 5-Minute Free Call</h2>
                            </div>
                            <div className="border-[#9E9E9E] border-[1px] rounded-[12px] !p-[8px] flex items-center justify-between h-[58px] w-[279.35px]">
                                <img src={Wallet} alt="" className="w-[46.35px] h-[34.57px] mx-[11.71px] my-[8px] !mr-[32px]" />
                                <h2 className="font-dm-sans font-medium text-[#33643F] text-[16px]">Instant Access to Your Earnings with Wallet</h2>
                            </div>
                        </div>
                    </div>

                    <div className="h-[75.07px] w-[528px] flex !mt-[73.64px] !ml-[84px] justify-between">
                        <img src={PlayStore} alt="" className="w-[250.27px] h-[73.9px]" />
                        <img src={AppStore} alt="" className="w-[250.27px] h-[73.9px]" />
                    </div>
                </div>

                <div className="w-[671.57px] h-[715.14px] flex justify-between !mr-[102] !ml-[100px]">
                    <div className="!mr-[69.8px] h-[637px]">
                        <img src={Doc1} alt="" className="h-[111.92px] w-[111.92px] !mt-[36.4px]" />
                        <img src={Doc3} alt="" className="!mt-[175px] !ml-[82px]" />
                    </div>
                    <div className="!ml-[35px] flex flex-col justify-evenly h-[637px]">
                        <img src={Doc2} alt="" className="w-[100px] h-[100px]"/>
                        <img src={Doc4} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GetStarted
