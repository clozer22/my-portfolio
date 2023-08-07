import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import logo from "../Assets/logo.png";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal";

const Contact = () => {
  return (
    <div className="w-full h-screen mt-[10rem]">
      <div className="flex justify-center items-center">
        <Flip top>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-[3rem]" id="contact">
            CONTACT
          </h1>
        </Flip>
      </div>
      <div className="box bg-black shadow-2xl px-5 py-5 grid grid-cols-2 mx-[6rem] rounded-xl">
        <div className="col-span-1">
          <form action="" className="flex flex-col">
            <Fade>
              <input
                className="text-white border border-white bg-transparent mb-3 rounded-md px-2 py-2 "
                type="text"
                placeholder="NAME"
              />
              <input
                className="text-white border border-white bg-transparent mb-3 rounded-md px-2 py-2 "
                type="text"
                placeholder="EMAIL"
              />
              <textarea
                className="text-white resize-none border border-white bg-transparent rounded-md px-2"
                placeholder="MESSAGE"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="bg-gradient-to-r from-pink-500 to-violet-500 flex justify-center items-center rounded-md mt-3 py-2 text-white">
                Send <AiOutlineSend />
              </button>
            </Fade>
          </form>
        </div>
        <div className="col-span-1 rounded-xl ml-2 grid grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <Flip top>
              <div className="flex-col">
                <CiLocationOn className="text-white text-[2rem] mb-6" />
                <BsFillTelephoneFill className="text-white text-[2rem] mb-6" />
                <BsFillEnvelopeFill className="text-white text-[2rem]" />
              </div>
            </Flip>
          </div>
          <div className="col-span-1 flex justify-center mr-[10rem] ">
            <Flip top>
              <div>
                <h1 className="text-white mb-9">Malabon City</h1>
                <h1 className="text-white mb-9">09981728741</h1>
                <h1 className="text-white mb-9">markmjaballe@gmail.com</h1>
              </div>
            </Flip>
          </div>
          <Flip top>
            <div className="col-span-2 flex justify-center items-center border-t border-t-gray-500 mx-10">
              <img src={logo} className="h-[15rem]" alt="" />
            </div>
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default Contact;
