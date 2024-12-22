import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="w-full bg-black text-white">
      <Header />
      <div className="w-full mx-auto max-w-[1000px]">
        <Hero />
        <Education />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
