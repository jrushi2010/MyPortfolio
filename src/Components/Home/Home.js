import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import topImage from "../../assets/Illustration top.png";
import bottomImage from "../../assets/Ilustration bottom.png";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute -left-10 md:left-0 -z-10">
        <img className="w-32 lg:w-full" src={topImage} alt="top" />
      </div>
      <div className="absolute lg:relative z-50">
        <Header />
      </div>
      <div className="pt-60 md:w-2/3 lg:pt-80 md:justify-center md:items-center flex-col container">
        <div className="text-2xl font-bold lg:text-left md:text-4xl lg:text-6xl">
          <p>Creative UX/UI Designer</p>
          <p className="lg:py-4 text-[#3DDCFF]">Shreyas Kulkarni</p>
          <p>Based in India</p>
        </div>
        <div className="lg:text-left lg:items-start lg:justify-start pt-[60px]">
          <button className="w-40 my-4 md:mr-4 md:w-48 py-2.5 text-center bg-white bg-opacity-30 rounded-[30px] shadow border-2 border-none backdrop-blur-[23.15px]">
            Hire me
          </button><br className="md:hidden lg:hidden"></br>
          <button className="w-40 md:w-48 py-2.5 text-center bg-gradient-to-r from-fuchsia-500 to-blue-800 rounded-[30px] shadow border border-none ">
            Download CV
          </button>
        </div>
      </div>
      <div className="absolute pt-20 lg:right-0 top-96 lg:top-[28rem]">
        <img src={bottomImage} alt="bottom" />
      </div>

    </div>
  );
};

export default Home;
