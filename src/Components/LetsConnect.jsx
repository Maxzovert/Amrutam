import React from "react";
import LetsConnectImg from "../assets/LetsConnect.png";

const LetsConnect = () => {
  return (
    <div className="flex items-center justify-center flex-col py-8 md:py-16 w-full !mt-[20px] md:!mt-[40px] px-4 md:px-0">
      <div className="text-center mb-8 md:mb-12 max-w-2xl">
        <h1 className="text-[#33643F] text-[28px] md:text-[32px] lg:text-4xl font-bold font-dm-sans leading-tight">
          Let's Connect
        </h1>
        <p className="font-dm-sans text-[16px] md:text-[17px] lg:text-lg text-[#4C4C4C] mt-2 leading-relaxed">
          We're here to help you on your wellness journey. Reach out to us for
          any questions, product inquiries, or personalized advice.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center !mt-[20px] md:!mt-[40px] w-full max-w-[1240px] h-auto lg:h-[471px] justify-around !my-[50px] md:!my-[100px]">

        <div className="order-2 lg:order-1">
          <img
            src={LetsConnectImg}
            alt="Lets Connect"
            className="rounded-lg w-full max-w-[400px] md:max-w-[450px] lg:w-[498px] h-auto lg:h-[471px] object-contain"
          />
        </div>

        <div className="flex-1 w-full lg:w-[718px] h-auto lg:h-[471px] border-[1px] border-[#C2C2C2] rounded-[8px] !p-[24px] md:!p-[32px] lg:!p-[38px] order-1 lg:order-2">
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="w-full lg:w-[306px] h-auto lg:h-[70px] flex flex-col justify-between">
                <label className="font-dm-sans text-[14px] font-medium text-[#3A643B] mb-2 lg:mb-0">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Vikas Kumar"
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500"
                />
              </div>
              <div className="w-full lg:w-[306px] h-auto lg:h-[70px] flex flex-col justify-between">
                <label className="block text-sm font-medium text-[#33643F] mb-2 lg:mb-0">
                  Your Contact Number
                </label>
                <input
                  type="text"
                  placeholder="8743414476"
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="!mt-[16px] md:!mt-[24px] w-full lg:w-[646px] h-auto lg:h-[70px] flex flex-col justify-between">
              <label className="block text-sm font-medium text-[#33643F] mb-2 lg:mb-0">
                Your Email
              </label>
              <input
                type="email"
                placeholder="vikass@gmail.com"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500"
              />
            </div>

            <div className="!mt-[16px] md:!mt-[24px]">
              <label className="block text-sm font-medium text-[#33643F] mb-2 lg:mb-0">
                Message (Optional)
              </label>
              <textarea
                placeholder="I want to On-board as a Doctor"
                rows="3"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="w-full lg:w-[236px] h-auto lg:h-[56px] !mt-[16px] md:!mt-[24px]">
              <button
                type="submit"
                className="bg-[#315918] w-full lg:w-[236px] h-[48px] lg:h-[56px] text-white rounded-[8px] hover:bg-[#285232] transition text-[14px] md:text-[16px] font-medium"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
