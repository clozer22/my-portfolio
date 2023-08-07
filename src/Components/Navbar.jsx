import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../Assets/profile.jpg";
import { AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleScroll = () => {
    const element = document.getElementById("about1");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const scrollProfile = () => {
    const element = document.getElementById("profile");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollProject = () => {
    const element = document.getElementById("project");
    element.scrollIntoView({ behavior: "smooth" });

  };
  const scrollContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });

  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setShow(false); // Scrolling down
    } else {
      setShow(true); // Scrolling up
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [prevScrollPos]);
  return (
    <div
      className={`nav fixed top-0 z-[100] lg:w-full lg:bg-[#fff]  rdm:w-full sm:w-full md:w-full h-[80px] lg:grid rdm:flex rdm:justify-between rdm:items-center lg:grid-cols-3 lg:px-4 bg-transparent text-black shadow-2xl ${
        show ? "fadeIn" : "fadeOut"
      }`}
    >
      <div className="lg:col-span-1 lg:flex justify-center items-center sm:flex md:flex rdm:flex">
        <img
          className="cursor-pointer rounded-full lg:w-[3rem]  rdm:w-[3rem] md:w-[3rem] sm:w-[3rem] rdm:ml-6"
          src={logo}
          alt="Logo Image"
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <ul className="hidden md:flex" style={{ fontFamily: "Lato" }}>
          <li className="hover:border-b-2 border-b-[#000] px-5 font-bold text-[1.2rem] cursor-pointer" onClick={scrollProfile}>
            {" "}     
              Profile
          </li>
          <li className="hover:border-b-2 border-b-[#000] px-5 font-bold text-[1.2rem] cursor-pointer" onClick={handleScroll}>
              Skills
          </li>
          <li className="hover:border-b-2 border-b-[#000] px-5 font-bold text-[1.2rem] cursor-pointer" onClick={scrollProject}>     
              Projects  
          </li>
          <li className="hover:border-b-2 border-b-[#000] px-5 font-bold text-[1.2rem] cursor-pointer" onClick={scrollContact}>
              Contact    
          </li>
        </ul>
      </div>
      <div className="lg:col-span-1 flex justify-center items-center">
        <button
          className=" px-4 py-3 hover:scale-105 bg-gradient-to-r from-pink-500 to-violet-500  text-white flex justify-center items-center rounded  hover:bg-transparent    duration-300"
          style={{ fontFamily: "Lato" }}
        >
          Message me <AiOutlineMessage className="ml-1 text-[1.3rem]" />
        </button>
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10 rdm:col-span-1">
        {!nav ? (
          <FaBars className="xsm:mr-11 rdm:mr-11" />
        ) : (
          <FaTimes className="xsm:mr-11 rdm:mr-11 text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute lg:top-0 xsm:top-0 rdm:top-0 rdm:w-full left-0 lg:w-full xsm:w-full md:w-full sm:w-full lg:h-screen xsm:h-[500px] bg-black flex flex-col xsm:justify-center xsm:items-center rdm:justify-center rdm:items-center"
        }
      >
        <img
          className="cursor-pointer xsm:w-[200px] rdm:w-[5rem] rdm:mt-4"
          src={logo}
          alt="Logo Image"
        />

        <li className="text-white py-6 text-4xl xsm:text-[2rem] hover:border-b-4 border-b-[#9A208C]">
          <NavLink to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="text-white py-6 text-4xl xsm:text-[2rem] hover:border-b-4 border-b-[#9A208C]">
          <NavLink to="/characters" activeClassName="active-link">
            Characters
          </NavLink>
        </li>
        <li className="text-white py-6 text-4xl xsm:text-[2rem] hover:border-b-4 border-b-[#9A208C]">
          <NavLink to="/arcs" activeClassName="active-link">
            Arc
          </NavLink>
        </li>
      </ul>

      {/* Social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul className="">
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-white"
            href="/"
          >
            <span className="">Linkedin</span> <FaLinkedin size={30} />{" "}
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-white"
            href="/"
          >
            <span className="">Github</span> <FaGithub size={30} />{" "}
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center w-full text-white"
            href="/"
          >
            <span className="">Email</span> <HiOutlineMail size={30} />{" "}
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-white"
            href="/"
          >
            <span className="">Resume</span>{" "}
            <BsFillPersonLinesFill size={30} />{" "}
          </a>
        </li>
      </ul>
    </div> */}
    </div>
  );
};

export default Navbar;
