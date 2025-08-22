import React from 'react';
import ProfilePic from '../assets/Testimonials/ProfilePic.svg';
import FilledStar from '../assets/Testimonials/StartFIlled.svg';
import BlankStar from '../assets/Testimonials/StarBlank.svg'

const Testimonial = () => {
  return (
    <div className="max-h-none md:max-h-[485px] w-full px-4 md:px-8 !mt-8 md:!mt-12 flex justify-center items-center flex-col">
            <div className="text-center mb-8 md:mb-16 flex justify-center flex-col items-center">
                <h1 className="text-[#33643F] text-[28px] md:text-[36px] lg:text-[44px] font-bold font-dm-sans leading-tight">
                    What other Ayurvedic Doctors are Saying
                </h1>
                <p className="font-dm-sans text-[16px] md:text-[18px] lg:text-[22px] text-[#4C4C4C] mt-2 max-w-[600px] mx-auto">
                    Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
                </p>
            </div>

            <div className="w-full max-w-[1240px] h-auto md:h-[283px] !mt-8 md:!mt-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
                <div className="bg-[#FFEEC3] w-full lg:w-[347px] h-auto lg:h-[192px] rounded-[8px] flex flex-col !px-[20px] md:!px-[24px] !py-[16px] md:!py-[18px] !mt-0 lg:!mt-[46px]">
                    <div className="flex flex-row w-full lg:w-[234px] h-auto lg:h-[48px] justify-around">
                        <img src={ProfilePic} alt="" className="h-[40px] w-[40px] md:h-[44px] md:w-[44px]"/>
                        <div className="flex flex-col w-full lg:w-[178px] h-auto lg:h-[36px] !mt-[6px]">
                            <h1 className="font-dm-sans font-semibold text-[13px] md:text-[14px]">Dr. Pooja Deshmukh,<span className="font-dm-sans font-[400] text-[13px] md:text-[14px] text-[#333333]">BAMS</span></h1>
                            <div className="flex flex-row h-[11px] w-[81px] justify-around mt-1">
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={BlankStar} alt="" className="w-[11px] h-[11px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[299px] h-auto lg:h-[90px] !mt-[14px]">
                        <p className="font-dm-sans font-medium text-[12px] text-[#7E7E7E] leading-relaxed">"Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."</p>
                    </div>
                </div>

                <div className="bg-[#FFEEC3] w-full lg:w-[480px] h-auto lg:h-[283px] rounded-[8px] flex flex-col !px-[24px] md:!px-[32px] !py-[20px] md:!py-[29px] order-first lg:order-none">
                    <div className="flex flex-row w-full lg:w-[395px] h-auto lg:h-[72px] justify-around">
                        <img src={ProfilePic} alt="" className="h-[60px] w-[60px] md:h-[68px] md:w-[68px]"/>
                        <div className="flex flex-col w-full lg:w-[315px] h-auto lg:h-[48px] !mt-[10px] md:!mt-[14px] !ml-[8px]">
                            <h1 className="font-dm-sans font-semibold text-[16px] md:text-[18px]">Dr. Rajesh Iyer,<span className="font-dm-sans font-[400] text-[16px] md:text-[18px] text-[#333333]">Ayurvedic Practitioner</span></h1>
                            <div className="flex flex-row h-[11px] w-[81px] justify-around mt-1">
                                <img src={FilledStar} alt="" className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"/>
                                <img src={FilledStar} alt="" className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"/>
                                <img src={FilledStar} alt="" className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"/>
                                <img src={FilledStar} alt="" className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"/>
                                <img src={BlankStar} alt="" className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[431px] h-auto lg:h-[120px] !mt-[20px] md:!mt-[24px]">
                        <p className="font-dm-sans font-medium text-[14px] md:text-[16px] text-[#7E7E7E] leading-relaxed">"Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."</p>
                    </div>
                </div>

                <div className="bg-[#FFEEC3] w-full lg:w-[347px] h-auto lg:h-[192px] rounded-[8px] flex flex-col !px-[20px] md:!px-[24px] !py-[16px] md:!py-[18px] !mt-0 lg:!mt-[46px]">
                    <div className="flex flex-row w-full lg:w-[234px] h-auto lg:h-[48px] justify-around">
                        <img src={ProfilePic} alt="" className="h-[40px] w-[40px] md:h-[44px] md:w-[44px]"/>
                        <div className="flex flex-col w-full lg:w-[178px] h-auto lg:h-[36px] !mt-[6px]">
                            <h1 className="font-dm-sans font-semibold text-[13px] md:text-[14px]">Dr. Ananya Sharma,<span className="font-dm-sans font-[400] text-[13px] md:text-[14px] text-[#333333]">BAMS</span></h1>
                            <div className="flex flex-row h-[11px] w-[81px] justify-around mt-1">
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={FilledStar} alt="" className="w-[11px] h-[11px]"/>
                                <img src={BlankStar} alt="" className="w-[11px] h-[11px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[299px] h-auto lg:h-[90px] !mt-[14px]">
                        <p className="font-dm-sans font-medium text-[12px] text-[#7E7E7E] leading-relaxed">"As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products."</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Testimonial
