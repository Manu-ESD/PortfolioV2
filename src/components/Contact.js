import React from "react";
import ContactMain from "../Utility/Images/sketch-img.png";

const Contact = () => {
  return (
    <div className="h-screen w-[90%] mx-auto flex flex-row" id="contact">
      <div className="w-3/6 ">
        <h3 className="text-[1.5rem] text-black font-bold my-3">Contact Me:</h3>
        <img
          className=" mix-blend-darken h-[70%]"
          src={ContactMain}
          alt="main image"
        ></img>
      </div>

      <div className="form w-3/6 py-14 flex flex-col gap-3">
        <label className="text-[#1B355A] font-semibold">Name</label>
        <input className="w-[60%] h-[30px] rounded-lg focus:outline-yellow border-none"></input>
        <label className="text-[#1B355A] font-semibold">Select</label>
        <select className="w-[60%] h-[30px] rounded-lg focus:outline-yellow border-none">
          <option className="hover:bg-yellow">Hire</option>
          <option className="hover:bg-yellow">Freelancing</option>
          <option className="hover:bg-yellow">Collaborating</option>
        </select>
        <label className="text-[#1B355A] font-semibold">Message</label>
        <textarea className="w-[60%] h-[150px] rounded-lg focus:outline-yellow border-none"></textarea>
        <button className="w-[150px] rounded-lg  text-textcolor mr-5 px-5 border border-[2px] border-yellow  flex flex-row items-center justify-around duration-300 bg-yellow hover:bg-[#ffffff00]">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
