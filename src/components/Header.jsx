import React from "react";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0   ">
      <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between px-8 py-4 text-white bg-transparent">
        {/* Logo  */}
        <h1 className="logo flex items-center gap-1 font-bold text-lg">
          <span>My</span>
          <span className="text-primary-500 shadow-primary">Portfolio</span>
        </h1>
        {/* menu items  */}
        <div className=" items-center gap-4 hidden sm:flex">
          <a href="home">Home</a>
          <a href="education">Education</a>
          <a href="services">services</a>
          <a href="testimonials">Testomonials</a>
          <a href="contact">contact</a>
        </div>
      </div>
    </div>
  );
};
