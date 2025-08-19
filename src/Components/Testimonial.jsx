import React from 'react';
import ProfilePic from '../assets/Testimonials/ProfilePic.svg';
import FilledStar from '../assets/Testimonials/StartFilled.svg';
import BlankStar from '../assets/Testimonials/StarBlank.svg'

const Testimonial = () => {
  return (
    <div className="max-h-[485px] w-full px-8 !mt-12 flex justify-center items-center flex-col">
            <div className="text-center mb-16">
                <h1 className="text-[#33643F] text-[44px] font-bold font-dm-sans">
                    What other Ayurvedic Doctors are Saying
                </h1>
                <p className="font-dm-sans text-[22px] text-[#4C4C4C] mt-2">
                    Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
                </p>
            </div>

            <div className="w-[1240px] h-[283px] !mt-12 flex flex-row justify-between">
                <div className="bg-[#FFEEC3] w-[347px] h-[192px] raounded-[8px] flex flex-col !px-[24px] !py-[18px] !mt-[46px]">
                    <div className="flex flex-row w-[234px] h-[48px] justify-around">
                        <img src={ProfilePic} alt="" className="h-[44px] w-[44px]"/>
                        <div className="flex flex-col w-[178px] h-[36px] !mt-[6px]">
                            <h1 className="font-dm-sans font-semibold text-[14px]">Dr. Pooja Deshmukh,<span className="font-dm-sans font-[400] text-[14px] text-[#333333]">BAMS</span></h1>
                            <div className="flex flex-row h-[11px] w-[81px] justify-around">
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={BlankStar} alt="" className="w-[11px] h-[11px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[299px] h-[90px] !mt-[14.85px]">
                        <p className="font-dm-sans font-medium text-[12px] text-[#7E7E7E]">"Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."</p>
                    </div>
                </div>

                <div className="bg-[#FFEEC3] w-[480px] h-[283px] raounded-[8px] flex flex-col !px-[32px] !py-[29px]">
                    <div className="flex flex-row w-[395px] h-[72px] justify-around">
                        <img src={ProfilePic} alt="" className="h-[68px] w-[68px]"/>
                        <div className="flex flex-col w-[315px] h-[48px] !mt-[14px] !ml-[8px]">
                            <h1 className="font-dm-sans font-semibold text-[18px]">Dr. Rajesh Iyer,<span className="font-dm-sans font-[400] text-[18px] text-[#333333]">Ayurvedic Practitioner</span></h1>
                            <div className="flex flex-row h-[11px] w-[81px] justify-around">
                                <img src={FilledStar} alt="" className="w-[17px] h-[17px]"/>
                                <img src={FilledStar} alt="" className="w-[17px] h-[17px]"/>
                                <img src={FilledStar} alt="" className="w-[17px] h-[17px]"/>
                                <img src={FilledStar} alt="" className="w-[17px] h-[17px]"/>
                                <img src={BlankStar} alt="" className="w-[17px] h-[17px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[431px] h-[120px] !mt-[24px]">
                        <p className="font-dm-sans font-medium text-[16px] text-[#7E7E7E]">"Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."</p>
                    </div>
                </div>

                <div className="bg-[#FFEEC3] w-[347px] h-[192px] raounded-[8px] flex flex-col !px-[24px] !py-[18px] !mt-[46px]">
                    <div className="flex flex-row w-[234px] h-[48px] justify-around">
                        <img src={ProfilePic} alt="" className="h-[44px] w-[44px]"/>
                        <div className="flex flex-col w-[178px] h-[36px] !mt-[6px]">
                            <h1 className="font-dm-sans font-semibold text-[14px]">Dr. Ananya Sharma,<span className="font-dm-sans font-[400] text-[14px] text-[#333333]">BAMS</span></h1>
                            <div className="flex flex-row h-[11px] w-[81px] justify-around">
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={BlankStar} alt="" className="w-[11px] h-[11px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[299px] h-[90px] !mt-[14.85px]">
                        <p className="font-dm-sans font-medium text-[12px] text-[#7E7E7E]">"As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products."</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Testimonial
