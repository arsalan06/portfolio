"use client";
import { Fragment, useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles/header.module.css";
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
      className={`flex w-full items-center justify-between p-6 lg:px-8  sticky bg-slate-300 top-0 h-28 ${scrolling}`}
      aria-label="Global"
      id="nav"
    >
      <div className={`italic hover:not-italic hover:text-slate-600 font-bold text-2xl text-white  ${styles.patterns}`}>
        <svg width="100%" height="100%" className={styles.svg}>
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
      <div className="flex w-40 items-center justify-between mr-10">
        <FaWhatsapp className="text-2xl cursor-pointer text-white" />
        <AiFillGithub className="text-2xl cursor-pointer text-white" />
        <AiFillLinkedin className="text-2xl cursor-pointer text-white" />
        <AiOutlineTwitter className="text-2xl cursor-pointer text-white" />
      </div>
    </nav>
    // </header>
  );
}
