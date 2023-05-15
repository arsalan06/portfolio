"use client"
import React from "react";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import styles from"./styles/banner.module.css"
function MainBanner() {
  return (
    <>
    <div className="min-h-screen bg-slate-300 w-full  flex justify-around lg:flex-row md:flex-row sm:flex-col">
      <div className="w-1/2 pl-4 pr-4 flex-shrink mt-32">
        <p className=" uppercase text-md">WELCOME TO MY WORLD</p>
        <p className="font-bold text-6xl">
          Hi, I’m <span className="text-pink-600"> Jone Lee  <br></br>a </span>
          <Typewriter
            words={['Reactjs Developer', 'Nextjs Developer', 'Perfessional Coder']}
            loop={true}
            // cursor
            // cursorStyle='_'
            typeSpeed={70}
            // deleteSpeed={50}
            // delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </p>
        <p className="text-gray-500 leading-7 text-lg">
          Hi! My name is Jhon Wick and I have completed my Bachelors in Computer
          Science. I have 2+ years of experience in Mobile Application
          Development . I have assisted many clients locally and made apps that
          boosted their sales and increased their business. Because everyone is
          using mobile phones and you need the best app to engage them. Feel
          free to reach out. I am available for your answers. Have a great day.
        </p>
        <p className=" uppercase text-md">find with me</p>
        <div className="flex">
          <br></br>
        <div className="flex w-1/2 justify-start">
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 mr-5 ${styles.box_shadow} `}>
        <FaWhatsapp className="text-2xl cursor-pointer" />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300  mr-5 ${styles.box_shadow} `}>
          <AiFillGithub className="text-2xl cursor-pointer" />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300  mr-5 ${styles.box_shadow} `}>
          <AiFillLinkedin className="text-2xl cursor-pointer " />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300  mr-5 ${styles.box_shadow} `}>
          <AiOutlineTwitter className="text-2xl cursor-pointer " />
          </span>
        </div>
        {/* <div className="flex w-1/2 justify-around">
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.box_shadow} `}>
        <FaWhatsapp className="text-2xl cursor-pointer" />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.box_shadow} `}>
          <AiFillGithub className="text-2xl cursor-pointer" />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.box_shadow} `}>
          <AiFillLinkedin className="text-2xl cursor-pointer " />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.box_shadow} `}>
          <AiOutlineTwitter className="text-2xl cursor-pointer " />
          </span>
        </div> */}
        </div>
      </div>
      <div className="w-1/3 mt-32">
        <Image
          src="/pro.png"
          width={300}
          height={450}
          alt="Picture of the author"
        />
      </div>
    </div>
    </>
  );
}

export default MainBanner;
