"use client"
import React from "react";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import styles from"./styles/banner.module.css"
function MainBanner() {
  return (
    <>
    <div className="min-h-screen bg-custombgcolor w-full  flex justify-around lg:flex-row md:flex-row sm:flex-col">
      <div className="w-1/2 pl-4 pr-4 flex-shrink mt-28">
        <p className=" uppercase text-md font-sans text-linkcolor">WELCOME TO MY WORLD</p>
        <p className="font-bold text-6xl leading-snug mt-4">
          Hi, I’m <span className="text-red-600"> Jone Lee  <br></br>a </span>
          <Typewriter
            words={['Reactjs Developer', 'Nextjs Developer', 'Professional Coder']}
            loop={true}
            typeSpeed={70}
          />
        </p>
        <p className="text-gray-500 leading-7 text-lg mt-4 font-sans">
          Hi! My name is Jhon Wick and I have completed my Bachelors in Computer
          Science. I have 2+ years of experience in Mobile Application
          Development . I have assisted many clients locally and made apps that
          boosted their sales and increased their business.
        </p>
        <p className=" uppercase text-md font-sans text-linkcolor mt-10">find with me</p>
        <div className="flex">
          <br></br>
        <div className="flex w-1/2 justify-start mt-4">
          <span className={`drop-shadow-5xl pl-4 pr-4 pt-4 pb-4 rounded-lg cursor-pointer bg-sociallinkcolor mr-5 ransition ease-in-out delay-150 hover:-translate-y-1 ${styles.whatsapp_social_box_shadow} `}>
        <FaWhatsapp className="text-2xl cursor-pointer " />
          </span>
          <span className={`drop-shadow-5xl pl-4 pr-4 pt-4 pb-4 rounded-lg cursor-pointer bg-sociallinkcolor  mr-5 ransition ease-in-out delay-150 hover:-translate-y-1  ${styles.git_social_box_shadow} `}>
          <FiGithub className="text-2xl cursor-pointer" />
          </span>
          <span className={`drop-shadow-5xl pl-4 pr-4 pt-4 pb-4 rounded-lg cursor-pointer bg-sociallinkcolor  mr-5 ransition ease-in-out delay-150 hover:-translate-y-1 ${styles.linkedin_social_box_shadow} `}>
          <SlSocialLinkedin className="text-2xl cursor-pointer " />
          </span>
          <span className={`drop-shadow-5xl pl-4 pr-4 pt-4 pb-4 rounded-lg  bg-sociallinkcolor mr-5 transition ease-in-out delay-150 hover:-translate-y-1  cursor-pointer ${styles.twitter_social_box_shadow} `}>
          <TfiTwitter className="text-2xl cursor-pointer" />
          </span>
        </div>
        {/* <div className="flex w-1/2 justify-around">
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.social_box_shadow} `}>
        <FaWhatsapp className="text-2xl cursor-pointer" />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.social_box_shadow} `}>
          <AiFillGithub className="text-2xl cursor-pointer" />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.social_box_shadow} `}>
          <AiFillLinkedin className="text-2xl cursor-pointer " />
          </span>
          <span className={`drop-shadow-5xl pl-2 pr-2 pt-2 pb-2 rounded-lg bg-slate-300 ${styles.social_box_shadow} `}>
          <AiOutlineTwitter className="text-2xl cursor-pointer " />
          </span>
        </div> */}
        </div>
      </div>
      <div className="w-1/4 mt-40">
        <div className={`drop-shadow-5xl pl-4 pr-4 pt-0 pb-4 rounded-lg cursor-pointer bg-sociallinkcolor mr-5 ransition ease-in-out delay-150 hover:-translate-y-1 relative h-80 ${styles.profile_box_shadow} `}>
        <Image
          src="/profile.png"
          width={300}
          height={500}
          alt="Picture of the author"
         className="absolute bottom-0 z-10"
        />
        </div>
      </div>
    </div>
    </>
  );
}

export default MainBanner;
