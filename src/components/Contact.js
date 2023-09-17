import React from "react";
import ContactMain from "../Utility/Images/Contact main.png";
import { BiMapAlt } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="h-screen w-[100%] mx-auto bg-gradient-to-b -translate-y-3 from-[#1c1e26] relative"
      id="contact"
    >
      <div className="w-[90%] mx-auto flex flex-row">
        <div className="w-3/6 relative z-10">
          <h3 className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold my-3 mb-10">
            Contact:
          </h3>

          <div className="h-[100vh] w-[100vh]  flex justify-center items-center absolute top-[0%] left-[-250px] z-10">
            <div className="h-[70vh] w-[70vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff2a] absolute z-0">
              <a
                href="https://github.com/Manu-ESD"
                target="_blank"
                className="h-[5vh] w-[5vh] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute opacity-[1] translate-x-[300px] translate-y-[50px] flex justify-center items-center"
              >
                <BiMapAlt className="text-[#fff]"></BiMapAlt>
                <div className="h-[5vh] w-[5vh] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] animate-ping scale-50"></div>
              </a>
              <div className="absolute translate-x-[22rem] translate-y-[52px] text-[#fff]">
                <p>Address</p>
                <p className="text-[0.7rem]">Hyderabad, Talangan, India</p>
              </div>
            </div>

            <div className="h-[60vh] w-[60vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff4f] absolute z-0">
              <a
                href="https://github.com/Manu-ESD"
                target="_blank"
                className="h-[5vh] w-[5vh] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute opacity-[1] translate-x-[335px] translate-y-[120px] flex justify-center items-center"
              >
                <IoMdContact className="text-[#fff]"></IoMdContact>
                <div className="h-[5vh] w-[5vh] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] animate-ping scale-50"></div>
              </a>
              <div className="absolute translate-x-[24rem] translate-y-[120px] text-[#fff]">
                <p>Contact</p>
                <p className="text-[0.7rem]">+917780633848</p>
              </div>
            </div>
            <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff46] absolute z-0">
              <a
                href="https://github.com/Manu-ESD"
                target="_blank"
                className="h-[5vh] w-[5vh] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute opacity-[1] translate-x-[298px] translate-y-[200px] flex justify-center items-center"
              >
                <AiOutlineMail className="text-[#fff]"></AiOutlineMail>
                <div className="h-[5vh] w-[5vh] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] animate-ping scale-50"></div>
              </a>
              <div className="absolute translate-x-[21.5rem] translate-y-[200px] text-[#fff]">
                <p>Mail</p>
                <p className="text-[0.7rem]">g.v.manohar3@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form w-3/6 py-14 flex flex-col gap-3 relative z-20">
          <div className="flex flex-row">
            <div className="flex flex-col w-[42%]">
              <label className="text-[#fff] text-[0.65rem] font-semibold mb-2 translate-x-4">
                YOUR NAME <span className="text-yellow">*</span>
              </label>
              <input
                className="w-[90%] h-[35px] rounded-[18px] focus:outline-[#ffffff00] bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"
                style={{ border: "1px solid #ccc", color: "white" }}
              ></input>
            </div>
            <div className="flex flex-col w-[42%]">
              <label className="text-[#fff] text-[0.65rem] font-semibold mb-2 translate-x-4 ">
                YOUR MAIL ADDRESS <span className="text-yellow">*</span>
              </label>
              <input className="w-[90%] h-[35px] rounded-[18px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"></input>
            </div>
          </div>
          <label className="text-[#fff] text-[0.65rem] font-semibold translate-x-4">
            SELECT OBJECTIVE <span className="text-yellow">*</span>
          </label>
          <select className="w-[80%] h-[35px] rounded-[18px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] px-3 text-[0.7rem]">
            <option className="hover:bg-yellow text-[#fff]">Hire</option>
            <option className="hover:bg-yellow text-[#fff]">Freelancing</option>
            <option className="hover:bg-yellow text-[#fff]">
              Collaboration
            </option>
          </select>
          <label className="text-[#fff] text-[0.65rem] font-semibold translate-x-4 ">
            MESSAGE
          </label>
          <textarea className="w-[80%] h-[100px] rounded-[20px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"></textarea>
          <button className="w-[170px] h-[35px] rounded-[50px] mt-5  text-textcolor translate-x-72 text-[0.65rem] mr-5 px-5 border border-[1px] border-white  flex flex-row items-center justify-around duration-300 bg-yellow hover:bg-[#ffffff00]">
            SEND MESSAGE
          </button>
        </div>

        <div className="h-[100vh] w-[100vh]  flex justify-center items-center absolute top-[-50%] right-[-300px]">
          <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff6c] absolute  opacity-[1]"></div>
          <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff79] absolute opacity-[1]"></div>
          <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff70] absolute opacity-[1]"></div>
        </div>

        <div className="h-[100vh] w-[100vh]  flex justify-center items-center absolute top-[3%] right-[320px] z-0">
          <div className="h-[20vh] w-[20vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff6c] absolute  opacity-[1]"></div>
          <div className="h-[15vh] w-[15vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff79] absolute opacity-[1]"></div>
          <div className="h-[10vh] w-[10vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff70] absolute opacity-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
