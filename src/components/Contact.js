import React, { useState } from "react";
import ContactMain from "../Utility/Images/Contact main.png";
import { BiMapAlt } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({ objective: "Hire" });

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  //   guggillamanohar@gmail.com
  //   Password
  // E4D47D186D5851F27528CAD65BF9B6CF05E1
  // smtp.elasticemail.com

  // Port
  // 2525

  // token
  // b82993cc-dacc-4100-8dcd-607de7a8fe6f

  const handleMail = (event) => {
    event.preventDefault();
    const config = {
      //SecureToken: "b82993cc-dacc-4100-8dcd-607de7a8fe6f",
      Host: "smtp.elasticemail.com",
      Username: "guggillamanohar@gmail.com",
      Password: "E4D47D186D5851F27528CAD65BF9B6CF05E1",
      To: "guggillamanohar@gmail.com",
      From: "g.v.manohar3@gmail.com",
      Subject: "Mail from Portfolio",
      Body:
        "UserName:" +
        formData.Username +
        "<br/> Email:" +
        formData.emailaddress +
        "<br/> Objective:" +
        formData.objective +
        "<br/> Message:" +
        formData.message,
    };
    if (window.Email) {
      window.Email.send(config).then((message) => alert(message));
      console.log(formData);
      console.log("Button Clicked");
    }
    console.log("Button Clicked");
  };
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
        {/* ///////////////////////////////FORM ////////////////////////// */}
        <form
          className="form w-3/6 py-14 flex flex-col gap-3 relative z-20"
          onSubmit={handleMail}
        >
          <div className="flex flex-row">
            <div className="flex flex-col w-[42%]">
              <label className="text-[#fff] text-[0.65rem] font-semibold mb-2 translate-x-4">
                YOUR NAME <span className="text-yellow">*</span>
              </label>
              <input
                className="w-[90%] h-[35px] rounded-[18px] focus:outline-[#ffffff00] bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"
                type="text"
                required
                style={{ border: "1px solid #ccc", color: "white" }}
                name="Username"
                value={formData.Username}
                onChange={changeHandler}
              ></input>
            </div>
            <div className="flex flex-col w-[42%]">
              <label className="text-[#fff] text-[0.65rem] font-semibold mb-2 translate-x-4 ">
                YOUR MAIL ADDRESS <span className="text-yellow">*</span>
              </label>
              <input
                className="w-[90%] h-[35px] rounded-[18px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"
                type="email"
                name="emailaddress"
                value={formData.emailaddress}
                onChange={changeHandler}
                required
              ></input>
            </div>
          </div>
          <label className="text-[#fff] text-[0.65rem] font-semibold translate-x-4">
            SELECT OBJECTIVE <span className="text-yellow">*</span>
          </label>
          <select
            className="w-[80%] h-[35px] rounded-[18px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] px-3 text-[0.7rem]"
            required
            name="objective"
            value={formData.objective}
            onChange={changeHandler}
          >
            <option value="Hire" className="hover:bg-yellow text-[#fff]">
              Hire
            </option>
            <option value="Freelance" className="hover:bg-yellow text-[#fff]">
              Freelance
            </option>
            <option
              value="Collaboration"
              className="hover:bg-yellow text-[#fff]"
            >
              Collaboration
            </option>
            <option value="Other" className="hover:bg-yellow text-[#fff]">
              Other
            </option>
          </select>
          <label className="text-[#fff] text-[0.65rem] font-semibold translate-x-4 ">
            MESSAGE
          </label>
          <textarea
            className="w-[80%] h-[100px] rounded-[20px] focus:outline-yellow bg-[#111117] border-[1px] border-[#fff] text-[#fff] p-3 text-[0.7rem]"
            required
            name="message"
            onChange={changeHandler}
            value={formData.message}
          ></textarea>
          <button
            className="w-[170px] h-[35px] rounded-[50px] mt-5  text-textcolor translate-x-72 text-[0.65rem] mr-5 px-5 border border-[1px] border-white  flex flex-row items-center justify-around duration-300 bg-yellow hover:bg-[#ffffff00]"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
        <div className="h-[50vh] w-[50vh]  flex justify-center items-center absolute top-[-25%] right-[-150px] z-0">
          <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff6c] absolute  opacity-[1]"></div>
          <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff79] absolute opacity-[1]"></div>
          <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff70] absolute opacity-[1]"></div>
        </div>
        <div className="h-[100vh] w-[100vh]  flex justify-center items-center absolute top-[3%] right-[320px] z-0">
          <div className="h-[20vh] w-[20vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff6c] absolute  opacity-[1]"></div>
          <div className="h-[15vh] w-[15vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff79] absolute opacity-[1]"></div>
          <div className="h-[10vh] w-[10vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff70] absolute opacity-[1]"></div>
        </div>
        <div className="absolute text-[#f0f0f069] bottom-16 right-24">
          <p>Made with ❤️ love by</p>
          <p className="" style={{ fontFamily: "Courgette" }}>
            G.V.Manohar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
