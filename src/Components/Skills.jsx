import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Bounce";
import phplogo from "../Assets/phplogo.png";
import jslogo from "../Assets/jslogo.png";
import reactlogo from "../Assets/reactlogo.png";
import tailwindlogo from "../Assets/tailwindlogo.png";
import htmllogo from "../Assets/htmllogo.png";
import nodelogo from "../Assets/nodelogo.png";
import Flip from "react-reveal/Flip";

const Skills = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);
  const controlFade = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setShow(false); // Scrolling down
    } else {
      setShow(true); // Scrolling up
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlFade);
    return () => {
      window.removeEventListener("scroll", controlFade);
    };
  }, [prevScrollPos]);
  return (
    <div className={`w-full h-screen grid grid-cols-5 px-5`} id="about1">
      <Fade left duration={1000}>
        <div className="col-span-3">
          <div className="">
            <span className="flex justify-center items-center border-t border-black mt-11"></span>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <h1 className="font-bold text-gray-600 text-[1.2rem]">
            I'm using these
          </h1>
          <h1 className="font-black text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            Programming Languages, Frameworks and DevTools .
          </h1>
        </div>
      </Fade>
      <Fade left duration={2000}>
        <div className="col-span-2 flex justify-center items-center ml-10">
          <div className="">
            <div className="box px-3 py-3 bg-white shadow-2xl hover:scale-105 duration-300 rounded-lg hover:shadow-[#ff6be6]">
              <h1 className="text-[1rem] text-gray-600 ">
                "These programming languages and frameworks helped me build
                projects.{" "}
                <span className="text-[#51afe6] font-bold"> ReactJS</span> and{" "}
                <span className="text-[#51afe6] font-bold"> Tailwind CSS</span>{" "}
                were the things I used to create some of my projects, and for
                the database I used MySQL.
                <span className="text-[#51afe6] font-bold">
                  Tailwind CSS
                </span>{" "}
                and{" "}
                <span className="text-[#51afe6] font-bold">regular CSS</span>{" "}
                are the tools I used for design which are fantastic resources
                for a web developer like me. I am currently a college student
                yet I am committed to becoming a proficient front-end developer
                someday."
              </h1>
            </div>
          </div>
        </div>
      </Fade>
      <div className="w-full col-start-3 col-span-3">
        <div className="flex justify-center ">
          <div className=" grid grid-cols-3 gap-10 flex-col">
            <Flip top duration={2000} delay={100}>
              <div className="px-10 py-10 bg-[#fff] shadow-2xl text-white rounded-xl hover:scale-105 duration-300 hover:shadow-[#ff6be6]">
                <img className="h-[3rem]" src={reactlogo} alt="" />
              </div>
            </Flip>
            <Flip top duration={2000} delay={300}>
              <div className="px-10 py-10 bg-[#fff] shadow-2xl text-white rounded-xl hover:scale-105 duration-300  hover:shadow-[#ff6be6]">
                <img className="h-[2rem]" src={tailwindlogo} alt="" />
              </div>
            </Flip>
            <Flip top duration={2000} delay={500}>
              <div className="px-7 py-10 bg-[#fff] shadow-2xl text-white rounded-xl hover:scale-105  duration-300  hover:shadow-[#ff6be6]">
                <img className="h-[2.5rem]" src={phplogo} alt="" />
              </div>
            </Flip>
            <Flip top duration={2000} delay={600}>
              <div className="px-7 py-10 bg-[#fff] shadow-2xl text-white rounded-xl hover:scale-105 duration-300  hover:shadow-[#ff6be6]">
                <img className="h-[3rem]" src={nodelogo} alt="" />
              </div>
            </Flip>
            <Flip top duration={2000} delay={800}>
              <div className="px-10 py-10 bg-[#fff] shadow-2xl text-white rounded-xl hover:scale-105 duration-300  hover:shadow-[#ff6be6]">
                <img className="h-[3rem]" src={htmllogo} alt="" />
              </div>
            </Flip>
            <Flip top duration={2000} delay={1000}>
              <div className="px-10 py-10 bg-[#fff] shadow-2xl text-white rounded-xl hover:scale-105 duration-300  hover:shadow-[#ff6be6]">
                <img className="h-[3rem]" src={jslogo} alt="" />
              </div>
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
