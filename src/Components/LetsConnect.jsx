import React from "react";
import LetsConnectImg from "../assets/LetsConnect.png";

const LetsConnect = () => {
  return (
    <div className="flex items-center justify-center flex-col py-16 w-full !mt-[40px]">
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-[#33643F] text-4xl font-bold font-dm-sans">
          Let’s Connect
        </h1>
        <p className="font-dm-sans text-lg text-[#4C4C4C] mt-2">
          We’re here to help you on your wellness journey. Reach out to us for
          any questions, product inquiries, or personalized advice.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center !mt-[40px] w-[1240px] h-[471px] justify-around !my-[100px]">

        <div className="">
          <img
            src={LetsConnectImg}
            alt="Lets Connect"
            className="rounded-lg w-[498px] h-[471px]"
          />
        </div>

        <div className="flex-1 w-[718px] h-[471px] border-[1px] border-[#C2C2C2] rounded-[8px] !p-[38px]">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="w-[306px] h-[70px] flex flex-col justify-between">
                <label className="font-dm-sans text-[14px] font-medium text-[#3A643B]">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Vikas Kumar"
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500"
                />
              </div>
              <div className="w-[306px] h-[70px] flex flex-col justify-between">
                <label className="block text-sm font-medium text-[#33643F]">
                  Your Contact Number
                </label>
                <input
                  type="text"
                  placeholder="8743414476"
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="!mt-[24px] w-[646px] h-[70px] flex flex-col justify-between">
              <label className="block text-sm font-medium text-[#33643F]">
                Your Email
              </label>
              <input
                type="email"
                placeholder="vikass@gmail.com"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500"
              />
            </div>

            <div className="!mt-[24px]">
              <label className="block text-sm font-medium text-[#33643F]">
                Message (Optional)
              </label>
              <textarea
                placeholder="I want to On-board as a Doctor"
                rows="3"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-[#33643F] py-2 bg-transparent placeholder:text-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="w-[236px] h-[56px] !mt-[24px]">
              <button
                type="submit"
                className="bg-[#315918] w-[236px] h-[56px] text-white  rounded-[8px] hover:bg-[#285232] transition"
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
