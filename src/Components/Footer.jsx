import React from "react";
import Flip from "react-reveal/Flip";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-white shadow-3xl hover:shadow-[#ff6be6] grid grid-cols-2">
      <div
        className="col-span-1 flex justify-center items-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="px-5 py-5 text-[1.4rem]">
          © 2023 Clozer Gaming. All rights reserved.
        </h1>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <Flip top duration={2000} delay={100}>
          <a href="https://www.facebook.com/MjAballe14/" target="_blank">
            <BsFacebook className="text-[2rem] ml-10 hover:text-pink-600 duration-300" />
          </a>
        </Flip>
        <Flip top duration={2000} delay={200}>
          <a href="https://www.instagram.com/em_jey22/?hl=en" target="_blank">
            <BsInstagram className="text-[2rem] ml-10 hover:text-pink-600 duration-300" />
          </a>
        </Flip>
        <Flip top duration={2000} delay={300}>
          <BsTwitter className="text-[2rem] ml-10 hover:text-pink-600 duration-300" />
        </Flip>
        <Flip top duration={2000} delay={400}>
          <a href="https://github.com/clozer22/my-portfolio" target="_blank">
            <BsGithub className="text-[2rem] ml-10 hover:text-pink-600 duration-300" />
          </a>
        </Flip>
      </div>
    </div>
  );
};

export default Footer;
