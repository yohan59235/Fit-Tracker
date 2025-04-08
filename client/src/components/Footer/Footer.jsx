/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { IoMdHome } from "react-icons/io";
import { MdFitnessCenter, MdFastfood } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

import UserContext from "../../services/UserContext";

import "./Footer.css";

function Footer() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  // Verification de connexion pour afficher le menu profil

  const { user } = useContext(UserContext);

  const isConnected = user.id && user.id !== "null";

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
      {isConnected ? (
        <div
          className={`Icon_Container ${activeIcon === "user" ? "active" : ""}`}
          onClick={() => handleIconClick("user")}
        >
          <Link to="/MonProfil/:id">
            <FaUser className="Icon" />
          </Link>
        </div>
      ) : null}
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
