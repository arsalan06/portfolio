import React from "react";
import styles from "./styles/skill.module.css";
import Image from "next/image";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
function MySkills() {
  return (
    <div className={`h-full w-full bg-custombgcolor mt-10 `}>
      <p className="text-red-600 capitalize font-sans">FEATURE</p>
      <p className="text-gray-800 capitalize font-sans text-5xl font-bold mt-4">
        What I Do
      </p>
      <div className={`flex flex-row justify-between mt-10 mb-10 ${styles.skill_main_container}`}>
        <div className={`${styles.skill_card_box_shadow} cursor-pointer`}>
          <RiReactjsLine className={`${styles.skill_card_logo_con}`} />
          <p className="font-sans font-bold text-xl mt-3">React JS</p>
          <p className="font-sans text-lg mt-3">
            The React.js framework is an open-source JavaScript framework and
            library developed by Facebook. It`s used for building interactive
            user interfaces and web applications.
          </p>
          <div className={styles.demo}>
            <AiOutlineArrowRight
              className={`${styles.skill_card_arrow_icon}`}
            />
          </div>
        </div>
        <div className={`${styles.skill_card_box_shadow} `}>
          <TbBrandNextjs className={`${styles.skill_card_logo_con}`} />
          <p className="font-sans font-bold text-xl mt-3">Next JS</p>
          <p className="font-sans text-lg mt-3">
            The React.js framework is an open-source JavaScript framework and
            library developed by Facebook. It`s used for building interactive
            user interfaces and web applications.
          </p>
        </div>
        <div className={`${styles.skill_card_box_shadow} `}>
          <IoLogoNodejs className={`${styles.skill_card_logo_con}`} />
          <p className="font-sans font-bold text-xl mt-3">Node JS</p>
          <p className="font-sans text-lg mt-3">
            The React.js framework is an open-source JavaScript framework and
            library developed by Facebook. It`s used for building interactive
            user interfaces and web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
