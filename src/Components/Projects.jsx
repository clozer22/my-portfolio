import React from "react";
import hxh from "../Assets/hxhback.png";
import project from "../Assets/project2.png";
import pizza from "../Assets/pizza.png";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Bounce";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="w-full px-[13rem]" style={{ fontFamily: "Poppins" }}>
      <div className="">
        <Flip top>
          <h1 className=" text-[2.7rem] mb-10" id="project">
            Thesis projects and personal projects.
          </h1>
        </Flip>
      </div>
      <Fade left>
        <div className="mb-6 flex items-center box w-full bg-white shadow-2xl px-4 py-4 rounded-lg hover:shadow-[#ff6be6] hover:scale-105 duration-300">
          <img src={hxh} alt="" />
          <div className="flex-col">
            <h1
              className="px-5 text-[2rem] font-bolder"
              style={{ fontFamily: "Poppins" }}
            >
              Hunter x Hunter Website
            </h1>
            <h1 className="text-gray-600 px-5 mb-3">
              This website is just a personal project because Hunter X hunter is
              my favorite anime.
            </h1>
            <a
              className="mx-5  px-2 py-2 bg-gradient-to-r from-pink-500 to-violet-500  flex justify-center items-center w-[10rem] text-white"
              href="https://hunterx-hunter.vercel.app/" target="_blank"
            >
              Hunter Website <BiLinkExternal className="text-[1.3rem]" />
            </a>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="mb-6 flex items-center box w-full bg-white shadow-2xl px-4 py-4 rounded-lg hover:shadow-[#ff6be6] hover:scale-105 duration-300">
          <img src={project} alt="" />
          <div className="flex-col">
            <h1
              className="px-5 text-[1.6rem] font-bolder"
              style={{ fontFamily: "Poppins" }}
            >
              SALES ORDER MANAGEMENT SYSTEM
            </h1>
            <h1 className="text-gray-600 px-5">
              This is a thesis project in my school when I'm in my 2nd year of
              college.
            </h1>
            <a
              className="cursor-not-allowed  mx-5 px-2 py-2 bg-gradient-to-r from-pink-500 to-violet-500  flex justify-center items-center w-[11rem] text-white"
              
            >
              Ordering System<BiLinkExternal className="text-[1.3rem]" />
            </a>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="flex items-center box w-full bg-white shadow-2xl px-4 py-4 rounded-lg hover:shadow-[#ff6be6] hover:scale-105 duration-300">
          <img src={pizza} alt="" />
          <div className="flex-col">
            <h1
              className="px-5 text-[1.6rem] font-bolder"
              style={{ fontFamily: "Poppins" }}
            >
              Clozer's Piza
            </h1>
            <h1 className="text-gray-600 px-5">
              This is a personal project that I made. It's just a landing page I
              created using ReactJS and Tailwind CSS.
            </h1>
            <a
              className="mx-5 cursor-not-allowed   px-2 py-2 bg-gradient-to-r from-pink-500 to-violet-500  flex justify-center items-center w-[10rem] text-white"
              
            >
              Clozer's Pizza <BiLinkExternal className="text-[1.3rem]" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
