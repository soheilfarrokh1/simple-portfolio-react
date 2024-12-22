import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const roles = ["Frontend developer", "Ui Ux Designer", "Backend Developer"];
export const Hero = () => {
  let counter = 1;
  const [role, setRole] = useState(roles[counter]);

  const switcher = () => {
    setTimeout(() => {
      counter++;
    }, 3000);
  };

  useEffect(() => {
    switcher();
  }, []);
  useEffect(() => {
    setRole(roles[counter]);
  }, [counter]);

  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-full px-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        {/* part one  */}
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-2xl text-white font-bold capitalize">
            Hi my name is <span className="text-primary-500">Soheilfa</span>
          </h1>
          <h2 className="text-lg text-white flex gap-2">
            <span>I am</span>
            <span className="text-primary-500">{role}</span>
          </h2>
          <p className="text-base max-w-[70%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur ducimus laboriosam libero consequatur adipisci. Et
            architecto at commodi, saepe molestiae aliquid quos. Sed animi
            repellendus vero, repellat beatae et consequatur!
          </p>
          <div className="flex items-center gap-4 text-2xl">
            {/* social icons  */}
            <button className="icon-btn">
              <FaInstagram />
            </button>
            <button className="icon-btn">
              <FaLinkedin />
            </button>
            <button className="icon-btn">
              <FaGithub />
            </button>
            <button className="icon-btn">
              <FaWhatsapp />
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm">
            {/* buttons  */}
            <button className="btn-primary ">See more</button>
            <button className="btn-primary-fill">See all my projects</button>
          </div>
        </div>
        {/* part two  */}
        <div className="w-full h-full flex items-center justify-center ">
          <div className="hero-image-wrapper w-[300px] h-[300px] rounded-full bg-primary-500 box-shadow-primary overflow-hidden cursor-pointer hover:scale-125 hover:rotate-180 transition-all duration-500">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
