import { useState } from "react";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Amrutam?",
            answer:
                "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
        },
        {
            question: "How does Amrutam help me grow as a practitioner?",
            answer:
                "Amrutam helps practitioners by giving access to patients globally, providing credibility, and offering digital tools to grow efficiently.",
        },
        {
            question: "How do I become a part of Amrutam Doctor?",
            answer:
                "You can join by registering on our website/app, uploading necessary documents, and getting verified by our team.",
        },
        {
            question: "What is Amrutam Global as a platform?",
            answer:
                "Amrutam Global connects Ayurvedic doctors with people worldwide, bridging traditional knowledge with modern accessibility.",
        },
        {
            question: "What documents do I need to provide?",
            answer:
                "You need to provide valid ID proof, educational certificates, and your medical license to join as a verified practitioner.",
        },
        {
            question: "Is there a fee to join Amrutam?",
            answer:
                "No, there is no joining fee. Our platform is free for practitioners to register and start their journey.",
        },
    ];

    return (
        <section className="max-h-[1440px] w-full px-8 !mt-12 flex justify-center items-center flex-col">
            <div className="text-center mb-16">
                <h1 className="text-[#33643F] text-[44px] font-bold font-dm-sans">
                    Frequently Asked Questions
                </h1>
                <p className="font-dm-sans text-[22px] text-[#4C4C4C] mt-2">
                    Find quick answers to common questions to help you navigate the app and its features easily.
                </p>
            </div>

            <div className="space-y-4 !mt-[48px] w-[1030px] flex flex-col justify-between h-[442px]">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border-b border-gray-300 cursor-pointer w-[1030px] overflow-hidden transition-all duration-300 ${openIndex === index ? "h-[120px]" : "h-[52px]"
                            }`}
                        onClick={() => toggle(index)}
                    >
                        <div className="flex justify-between items-center w-full font-medium text-[#666666] font-dm-sans text-[20px] h-[52px] !py-[26px]">
                            {faq.question}
                            <span className="text-xl">
                                {openIndex === index ? "" : "+"}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="text-gray-600 text-sm pr-4">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center !mt-[48px] w-full !mb-[32px]">
                <button className="bg-[#3A643C] text-white px-7 py-7 w-[163px] h-[56px] rounded-[12px] font-semibold shadow-lg hover:bg-green-800 transition !ml-[10px]">
                    See More
                </button>
            </div>

        </section>
    );
};

export default Faqs;
