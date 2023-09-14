import React from "react";
import ProfileImage from "../Utility/Images/Image Landing page.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import ParticleBg from "./ParticleBg";
import DesignationReleave from "./DesignationReleave";

const Home = () => {
  return (
    <div
      className="h-screen w-full flex flex-row justify-around p-8 relative"
      id="home"
    >
      <img
        src={ProfileImage}
        className=" h-[100vh] absolute top-0 right-0 z-0 opacity-100"
      ></img>
      <ParticleBg className="absolute top-0"></ParticleBg>

      <div className="h-[80vh] w-3/6 z-10 absolute left-0 ml-[60px]">
        <h1 className=" text-[1.5rem]">I'm</h1>
        <h1
          className=" text-[2.2rem] font-bold text-[#1B355A] mb-4"
          //style={{ "text-shadow": "2px 2px 8px #000000" }}
        >
          Guggilla Venkata Manohar
        </h1>
        {/* <h3 className=" text-[1.5rem] font-bold text-[#ffffff] mb-4">
          Frontend Developer
        </h3> */}
        <DesignationReleave></DesignationReleave>
        <hr className="w-[150px] border-t-[3px] mb-[50px] text-yellow" />

        <div>
          <p className="my-5 text-[#1B355A] font-semibold">
            As a frontend developer with experience in React JS, Redux,
            JavaScript, and CSS, I have successfully designed and implemented
            responsive websites that adapt to various screen sizes and devices.
            I have collaborated with teams of up to eight members, utilizing
            agile methodologies to deliver high-quality products on time. My
            project management skills have been instrumental in creating
            flowcharts and diagrams to document and illustrate the logical steps
            of the development process.
          </p>
          <div className="flex flex-row w-[50%] h-10">
            <button className="w-[150px] rounded-lg  text-textcolor mr-5 px-5 border border-[2px] border-yellow  flex flex-row items-center justify-around duration-300 bg-yellow hover:bg-[#ffffff00]">
              Hire Me
              <FiThumbsUp></FiThumbsUp>
            </button>
            <button className="w-[150px] rounded-lg  text-textcolor mr-5  px-5 border border-[2px] border-yellow  flex flex-row items-center justify-around duration-300 hover:bg-yellow">
              Resume
              <AiOutlineDownload></AiOutlineDownload>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
