import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.png";
import Left from "../../assets/images/19.png";
import Middle from "../../assets/images/10.jpg";
import Right from "../../assets/images/8.jpg";
import Background from "../../assets/images/2.jpg";
import Programme from "../../assets/images/11.jpg";
import Food from "../../assets/images/22.jpg";
import Notes from "../../assets/images/21.jpg";

import "./Home.css";

function Home() {
  const [modalOpen, setModalOpen] = useState(true);

  const clickModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Home_Container">
      {modalOpen && (
        <div className="Modal_Overlay">
          <div className="Modal_Header">
            <h1>FIT TRACKER</h1>
            <img src={Logo} alt="Logo du site Fit Tracker" />
            <p>Prêt à créer ton programme d'entraînement ?</p>
          </div>
          <div className="Left_Right">
            <img src={Left} alt="Pratiquant de musculation" />
            <img src={Right} alt="Pratiquante de yoga" />
          </div>
          <div className="Middle">
            <img src={Middle} alt="Une pratiquante de sport" />
          </div>
          <div className="Button_Footer">
            <p>
              Rejoins nous et créer ton programme d'entraînement, tes repas
              favoris afin de rester focus sur ta prise de masse ou perte de
              poid.
            </p>
            <button type="button" onClick={clickModal} className="Modal_Button">
              <p>Créer ton compte et rejoins nous !</p>
            </button>
          </div>
        </div>
      )}
      {!modalOpen && (
        <div className="Home_Content">
          <div className="Home_Title">
            <h1>Fit-Tracker</h1>
            <p>
              Votre application favorite pour la gestion de votre programme
              d'entraînement
            </p>
          </div>
          <div className="Home_Background">
            <img
              src={Background}
              alt="Fond d'écran de deux personnes s'entraînant"
            />
          </div>
          <h2>En rejoignant la communauté tu pourras</h2>
          <div className="Programme_Content">
            <p>
              Ajouter des exos à ton programme selon ce que tu souhaites
              travailler.
            </p>
            <img src={Programme} alt="Pratiquant de musculation" />
          </div>
          <div className="Food_Content">
            <p>
              Te créer une liste d'idées de repas pour garder une alimentation
              seine.
            </p>
            <img src={Food} alt="Plan de travail avec plusieurs plats" />
          </div>
          <div className="Notes_Content">
            <p>
              Noter tes perfs, nombre de séries / répétitions et vois ton
              évolution.
            </p>
            <img src={Notes} alt="Prises de notes" />
          </div>
          <div className="Text_Button">
            <p>Alors rejoins-nous et inscris toi.</p>
            <Link to="/Connexion">
              <button type="button">
                <p>Créer mon compte</p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
