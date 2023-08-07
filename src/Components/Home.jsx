import React from "react";
import profile from "../Assets/profile2.png";
import Typed from "react-typed";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
const Home = () => {
  return (
    <div>
    <div
      className="h-screen w-full lg:grid lg:grid-cols-2  pt-[4rem] pl-10"
      style={{ fontFamily: "Poppins", backgroundImage: `url(${require(`../Assets/background.png`)})` }}
    >
      <Fade>
        <div className="col-span-1 flex justify-center flex-col">
          <h1 className="font-black text-[2.5rem] text-gray-800">Hello I'm </h1>
          <div>
            <h1 className="font-black text-[4rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
              MJ Diez Aballe
            </h1>
            <h1 className="font-black text-[2rem] text-gray-600">
              <Typed
                className=""
                strings={["FRONT-END DEVELOPER", "FULL-STACK DEVELOPER"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </h1>
            <p>
              "I'm currently a 3rd-year college student at Global Reciprocal
              Colleges. My goal is to finish this course and become a front-end
              developer or full-stack developer."
            </p>
          </div>
        </div>
      </Fade>
      <div className="col-span-1 flex justify-center items-center">
        <Bounce bottom>
          <img className="hover:scale-105 duration-300 h-[30rem] " src={profile} alt="" />
        </Bounce>
      </div>
    </div>
    <div id="about1" className="mt-[10rem]">
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
