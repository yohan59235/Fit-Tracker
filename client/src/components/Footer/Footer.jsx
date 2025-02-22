/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom";
import { useState } from "react";

import { IoMdHome } from "react-icons/io";
import { MdFitnessCenter, MdFastfood } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };
  return (
    <div className="Footer_Container">
      <div
        className={`Icon_Container ${activeIcon === "home" ? "active" : ""}`}
        onClick={() => handleIconClick("home")}
      >
        <Link to="/">
          <IoMdHome className="Icon" />
        </Link>
      </div>
      <div
        className={`Icon_Container ${activeIcon === "programme" ? "active" : ""}`}
        onClick={() => handleIconClick("programme")}
      >
        <Link to="/Programme">
          <MdFitnessCenter className="Icon" />
        </Link>
      </div>
      <div
        className={`Icon_Container ${activeIcon === "food" ? "active" : ""}`}
        onClick={() => handleIconClick("food")}
      >
        <Link to="/Repas">
          <MdFastfood className="Icon" />
        </Link>
      </div>
      <div
        className={`Icon_Container ${activeIcon === "user" ? "active" : ""}`}
        onClick={() => handleIconClick("user")}
      >
        <Link to="/Connexion">
          <FaUser className="Icon" />
        </Link>
      </div>
      <div
        className={`Icon_Container ${activeIcon === "question" ? "active" : ""}`}
        onClick={() => handleIconClick("question")}
      >
        <Link to="/Infos">
          <FaCircleQuestion className="Icon" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
