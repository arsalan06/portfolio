"use client";
import { Fragment, useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles/header.module.css";
import Link from "next/link";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState("");
  useEffect(() => {
    let nav = document.getElementById("nav");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        setScrolling("drop-shadow-2xl");
      } else {
        setScrolling("");
      }
    });
  }, []);
  return (
    // <header className="bg-transparent">
    <nav
      className={`flex w-full items-center justify-between p-6 lg:px-8 z-50 sticky bg-custombgcolor top-0 h-24 ${scrolling ? "": "border-b border-gray-400 "} ${scrolling}`}
      aria-label="Global"
      id="nav"
      // style={{
      //   borderBottom:"1px solid gray"
      // }}
    >
      <div
        className={`italic hover:not-italic hover:text-slate-600 font-bold text-2xl text-white  ${styles.patterns}`}
      >
        <svg width="100%" height="90%" className={styles.svg}>
          <defs>
            <pattern
              id="polka-dots"
              x="0"
              y="0"
              // width="100"
              // height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
            </pattern>
          </defs>

          <text x="50%" y="60%" text-anchor="middle" className={styles.text}>
            Portfolio
          </text>
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <Link href={"/"} className="mr-5 font-sans text-linkcolor text-base">
          HOME
        </Link>
        <Link href={"/"} className="mr-5 font-sans text-linkcolor text-base">
          FEATURE
        </Link>
        <Link href={"/"} className="mr-5 font-sans text-linkcolor text-base">
          PORTFOLIO
        </Link>
        <Link href={"/"} className="mr-5 font-sans text-linkcolor text-base">
          RESUME
        </Link>
        <Link href={"/"} className="mr-5 font-sans text-linkcolor text-base">
          CLIENTS
        </Link>
        <Link href={"/"} className="mr-5 font-sans text-linkcolor text-base">
          PRICE
        </Link>
        <button  className={`mr-5 font-sans text-linkcolor text-lg bottom-auto  pl-4 pr-4 pt-3 pb-3 rounded-xl border-gray-500 ${styles.box_shadow}`}>
          Contact us
        </button>
      </div>
    </nav>
    // </header>
  );
}
