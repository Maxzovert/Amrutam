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
        <section className="w-full h-[300px] flex flex-col items-center gap-1">
            <div className="!mt-8 flex flex-col justify-center items-center">
                <h1 className="text-[#33643F] text-[40px] font-bold font-dm-sans">Featured</h1>
                <p className="font-dm-sans text-[20px] text-[#4C4C4C]">Recognized and celebrated by leading publications – Amrutam in the spotlight!</p>
            </div>
            <div className="flex w-full max-h-[96px] items-center justify-around !mt-12">
                {
                    BRANDS.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.logos}
                                alt={index}
                                className="w-[148px] h-[96px]"
                            />
                    ))
                }
            </div>
        </section>
    )
}

export default Features
