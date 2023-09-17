import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineProfile } from "react-icons/ai";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const [LISTVALUE, setLISTVALUE] = useState(0);

  const handleClick = (index) => {
    setLISTVALUE(index);
  };

  return (
    <div className=" bg-[#25273400] border-[1px] border-[#ffffff] fixed h-[70px] w-2/5 rounded-2xl bottom-8 right-96 flex items-center z-10">
      <ul className="flex justify-around w-full mr-5 ml-5">
        <Link
          to="home"
          smooth="true"
          onClick={() => handleClick(0)}
          className=" cursor-pointer"
        >
          <li
            className={`flex flex-col justify-center items-center translate-y-2 ${
              LISTVALUE === 0 ? "list" : ""
            } `}
          >
            <AiOutlineHome className="scale-150 text-textcolor duration-300 z-20 transmoveicon" />
            <p className="text-textcolor translate-y-10 opacity-0 duration-300 transmovetext">
              Home
            </p>
          </li>
        </Link>

        <Link
          to="experience"
          smooth="true"
          onClick={() => handleClick(1)}
          className=" cursor-pointer"
        >
          <li
            className={`flex flex-col justify-center items-center translate-y-2 ${
              LISTVALUE === 1 ? "list" : ""
            } `}
          >
            <PiSuitcaseSimpleDuotone className="scale-150 text-textcolor duration-300 z-20 transmoveicon" />
            <p className="text-textcolor translate-y-10 opacity-0 duration-300 transmovetext">
              Experience
            </p>
          </li>
        </Link>

        <Link
          to="projects"
          smooth="true"
          onClick={() => handleClick(2)}
          className=" cursor-pointer"
        >
          <li
            className={`flex flex-col justify-center items-center translate-y-2 ${
              LISTVALUE === 2 ? "list" : ""
            } `}
          >
            <AiOutlineProfile className="scale-150 text-textcolor duration-300 z-20 transmoveicon" />
            <p className="text-textcolor translate-y-10 opacity-0 duration-300 transmovetext">
              Projects
            </p>
          </li>
        </Link>

        <Link
          to="contact"
          smooth="true"
          onClick={() => handleClick(3)}
          className=" cursor-pointer"
        >
          <li
            className={`flex flex-col justify-center items-center translate-y-2 ${
              LISTVALUE === 3 ? "list" : ""
            } `}
          >
            <AiOutlineMail className="scale-150 text-textcolor z-20 duration-300 transmoveicon" />
            <p className="text-textcolor translate-y-10 opacity-0 duration-300 transmovetext">
              Contact
            </p>
          </li>
        </Link>
      </ul>

      <div
        className={`h-5 w-5 bg-yellow absolute -top-[26px] p-6 rounded-full -z-20 border-4 border-[#fff]  duration-300 iconback ${
          LISTVALUE === 0 ? "left-[43px]" : ""
        }  ${LISTVALUE === 1 ? "left-[162px]" : ""}  ${
          LISTVALUE === 2 ? "left-[286px]" : ""
        }  ${LISTVALUE === 3 ? "left-[400px]" : ""}`}
      ></div>
    </div>
  );
};

export default Nav;
