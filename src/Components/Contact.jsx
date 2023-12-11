import React, { useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import logo from "../Assets/logo.png";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal";
import emailjs from "@emailjs/browser";
import Alert from "react-popup-alert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const notify = (type, message) => toast[type](message);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qsx3e1m",
        "template_kpzoeit",
        form.current,
        "qk01zcsW32rI747Wo"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify("success", "Message Sent");
        },
        (error) => {
          notify("error", "Message not sent");
        }
      );
  };

  const [alert, setAlert] = React.useState({
    type: "error",
    text: "This is a alert message",
    show: false,
  });

  function onCloseAlert() {
    setAlert({
      type: "",
      text: "",
      show: false,
    });
  }

  function onShowAlert(type, message) {
    setAlert({
      type: type,
      text: message,
      show: true,
    });
  }

  return (
    <div className="w-full h-screen mt-[10rem]">
      {/* <Alert
        header={"Success ✔"}
        btnText={"Close"}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{
          position: "fixed",
          top: "50%",
          left: "50%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Customize the background color
          padding: "40px", // Customize the padding
        }}
        headerStyles={{
          color: "green",
          fontWeight: "bold",
          fontSize: "2rem",

        }}
        textStyles={{
          color: "white", // Customize the text color
          textAlign: "center",
          padding: "10px",
        }}
        buttonStyles={{
          padding: "5px 10px",
          textAlign: "center",
          borderRadius: "5px",
          color: "white",
        }}
      /> */}

      <div className="flex justify-center items-center">
        <Flip top>
          <h1
            className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-[3rem]"
            id="contact"
          >
            CONTACT
          </h1>
        </Flip>
      </div>
      <div className="box bg-black shadow-2xl px-5 py-5 grid grid-cols-2 mx-[6rem] rounded-xl">
        <div className="col-span-1">
          <form
            action=""
            className="flex flex-col"
            ref={form}
            onSubmit={sendEmail}
          >
            <Fade>
              <input
                className="text-white border border-white bg-transparent mb-3 rounded-md px-2 py-2 "
                type="text"
                name="user_name"
                placeholder="User name"
              />
              <input
                className="text-white border border-white bg-transparent mb-3 rounded-md px-2 py-2 "
                type="email"
                name="user_email"
                placeholder="Email"
              />
              <textarea
                className="text-white resize-none border border-white bg-transparent rounded-md px-2"
                placeholder="MESSAGE"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button
                onClick={sendEmail}
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-gradient-to-l hover:scale-105 duration-300 flex justify-center items-center rounded-md mt-3 py-2 text-white"
              >
                <ToastContainer
                position="bottom-right"
                theme="light"
                style={{zIndex: 100}} />
                Send <AiOutlineSend className="ml-2" />
              </button>
            </Fade>
          </form>
        </div>
        <div className="col-span-1 rounded-xl ml-2 grid grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <Flip top>
              <div className="flex-col">
                <CiLocationOn className="text-white text-[2rem] mb-6 hover:text-pink-600 duration-300 " />
                <BsFillTelephoneFill className="text-white text-[2rem] mb-6 hover:text-pink-600 duration-300" />
                <BsFillEnvelopeFill className="text-white text-[2rem] hover:text-pink-600 duration-300" />
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
