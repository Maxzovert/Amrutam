import React from 'react'
import C_1 from "../assets/Featured Section/C-1.svg";
import C_2 from "../assets/Featured Section/C-2.svg";
import C_3 from "../assets/Featured Section/C-3.svg";
import C_4 from "../assets/Featured Section/C-4.svg";
import C_5 from "../assets/Featured Section/C-5.svg";
import C_6 from "../assets/Featured Section/C-6.svg";
import C_7 from "../assets/Featured Section/C-7.svg";
import C_8 from "../assets/Featured Section/C-8.svg";
import C_9 from "../assets/Featured Section/C-9.svg";

const Features = () => {
    const BRANDS = [
        { logos: C_1 },
        { logos: C_2 },
        { logos: C_3 },
        { logos: C_4 },
        { logos: C_5 },
        { logos: C_6 },
        { logos: C_7 },
        { logos: C_8 },
        { logos: C_9 },
    ]
    return (
        <section className="w-full min-h-[300px] flex flex-col items-center gap-1 px-4 md:px-0">
            <div className="!mt-8 flex flex-col justify-center items-center text-center">
                <h1 className="text-[#33643F] text-[28px] md:text-[32px] lg:text-[40px] font-bold font-dm-sans">Featured</h1>
                <p className="font-dm-sans text-[16px] md:text-[18px] lg:text-[20px] text-[#4C4C4C] max-w-[600px] leading-relaxed">Recognized and celebrated by leading publications – Amrutam in the spotlight!</p>
            </div>
            <div className="flex flex-wrap w-full max-h-none md:max-h-[96px] items-center justify-center md:justify-around gap-4 md:gap-0 !mt-8 md:!mt-12">
                {
                    BRANDS.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.logos}
                                alt={index}
                                className="w-[100px] h-[64px] md:w-[120px] md:h-[78px] lg:w-[148px] lg:h-[96px] object-contain"
                            />
                    ))
                }
            </div>
        </section>
    )
}

export default Features
