import React from "react";
import ProfileImage from "../Utility/Images/Absolute_Reality_v16_sketch_art_0-removebg-preview.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import ParticleBg from "./ParticleBg";
import DesignationReleave from "./DesignationReleave";
import { motion } from "framer-motion";
import wave from "../Utility/Images/wave.png";
import "./Home.css";
import { BiLogoDiscordAlt, BiLogoLinkedinSquare } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="h-screen w-full flex flex-row justify-around p-8 relative pt-[100px]"
      id="home"
    >
      <div className="w-full h-[100vh] z-[2] absolute top-0 right-0 bg-gradient-to-t from-[#1c1e26] opacity-100"></div>
      <div className="w-full h-[100vh] z-[2] absolute top-0 right-0 bg-gradient-to-t from-[#1c1e26] opacity-100"></div>
      <div>
        {/* <motion.img
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          src={ProfileImage}
          className=" h-[70vh] absolute top-[50px] right-[100px] z-20 opacity-100"
          style={{
            // border: "2px solid red",
            width: "fit-content",
            // backgroundColor: "#fff0",
            borderBottomRightRadius: "10rem",
          }}
        ></motion.img> */}
        {/* //Big Concentric Circles */}
        <div className="h-[100vh] w-[100vh] z-10  flex justify-center items-center absolute top-[-5%] right-[50px] scale-125 overflow-hidden">
          <div className="h-[50vh] w-[50vh]  rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30]  absolute  opacity-[1]"></div>
          <div
            id="bigCircle"
            className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff75] absolute opacity-[1] z-10"
          >
            {/* first small circle */}
            <a
              href="https://discord.gg/ktg8PGt8"
              target="_blank"
              className="z-[10] cursor-pointer h-[5vh] w-[5vh] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute opacity-[1] translate-x-[48px] relative flex justify-center items-center"
            >
              <BiLogoDiscordAlt className="text-[#fff]"></BiLogoDiscordAlt>
              <div className="h-[5vh] z-10 w-[5vh] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] absolute  animate-ping scale-50"></div>
            </a>

            {/* second small circle */}
            <a
              href="https://github.com/Manu-ESD"
              target="_blank"
              className="h-[5vh] w-[5vh] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute opacity-[1] translate-x-[0px] translate-y-[18px] relative flex justify-center items-center"
            >
              <BsGithub className="text-[#fff]"></BsGithub>
              <div className="h-[5vh] w-[5vh] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] absolute animate-ping scale-50"></div>
            </a>
            {/* third small circle  */}
            <a
              href="https://www.linkedin.com/in/manoharguggilla/"
              target="_blank"
              className="h-[5vh] w-[5vh] rounded-[50%] bg-yellow  border-[1px] border-[#ffffff75] absolute opacity-[1] translate-x-[-15px] translate-y-[60px] relative flex justify-center items-center"
            >
              <BiLogoLinkedinSquare className="text-[#fff]"></BiLogoLinkedinSquare>
              <div className="h-[5vh] w-[5vh] rounded-[50%] bg-[#fff0]  border-[1px] border-[#ffffff75] absolute opacity-[1] absolute animate-ping scale-50"></div>
            </a>
          </div>
          <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px]  border-[#ffffff30] absolute opacity-[1]"></div>
        </div>
      </div>

      <img
        src={wave}
        className="w-[200px] h-[30px] relative top-[100px] right-[100px]"
      ></img>

      <div className="h-[100vh] w-[100vh]  flex justify-center items-center absolute top-[-50%] left-[-300px]">
        <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
        <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
      </div>

      {/* <div className="h-[60vh] w-[60vh] rounded-[50%] bg-yellow absolute right-[100px] opacity-[1]"></div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeIn", delay: 1 }}
      >
        <ParticleBg className="absolute top-0"></ParticleBg>
      </motion.div>

      <div className="h-[80vh] w-3/6 z-10 absolute left-0 ml-[60px]">
        <motion.h1
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          className=" text-[1.5rem] text-[#fff] font-[MainFont]"
        >
          I'm
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0.75 }}
          className=" text-[3rem] font-bold text-[#fff] mb-4 font-[MainFont]"
          //style={{ "text-shadow": "2px 2px 8px #000000" }}
        >
          <span className="text-yellow">Guggilla</span> Venkata Manohar
        </motion.h1>
        {/* <h3 className=" text-[1.5rem] font-bold text-[#ffffff] mb-4">
          Frontend Developer
        </h3> */}
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 1.5 }}
        >
          <DesignationReleave
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 1.5 }}
          ></DesignationReleave>
          <hr className="w-[150px] border-t-[3px] mb-[50px] text-yellow" />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 2.25 }}
            className="my-5 text-[#fff] text-[0.85rem] w-[80%]"
            style={{ fontFamily: "Manrope" }}
          >
            As a frontend developer with experience in React JS, Redux,
            JavaScript, and CSS, I have successfully designed and implemented
            responsive websites that adapt to various screen sizes and devices.
          </motion.p>
          <div className="flex flex-row w-[55%] h-10 gap-5">
            <Link to="contact" smooth="true" className="w-[150px] h-[45px]">
              <motion.button
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeIn", delay: 3 }}
                className="w-[150px] h-[45px] rounded-[50px]  text-textcolor text-sm mr-5 px-5 border border-[1px] border-white  flex flex-row items-center justify-around duration-300 bg-yellow hover:bg-[#ffffff00]"
              >
                Hire Me
                <FiThumbsUp></FiThumbsUp>
              </motion.button>
            </Link>
            <motion.a
              initial={{ opacity: 0, x: "-50%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeIn", delay: 3.75 }}
              className="w-[170px] h-[45px] rounded-[50px]  text-textcolor text-sm mr-5  px-8 py-3 border border-[1px] border-white  flex flex-row items-center justify-around duration-300 hover:bg-yellow"
              href="https://drive.google.com/file/d/1wTZoylXaHoXU1EHmB98U8eeV7tATdynu/view"
              target="_blank"
            >
              Resume
              <AiOutlineDownload></AiOutlineDownload>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
