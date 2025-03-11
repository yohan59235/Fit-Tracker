/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import axios from "axios";

import "./Connexion.css";

function Connexion() {
  const [showCreation, setShowCreation] = useState(true);
  const [nomdecompte, setNomdecompte] = useState("");
  const [password, SetPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

console.info("nomdecompte:", nomdecompte);
console.info("mot de passe:", password);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3310/api/users`, {
        nomdecompte,
        password,
      })
      .then((response) => {
        console.info("Le compte à bien été créé:", response);
        setShowModal(true);
      })
      .catch((err) => console.info("Il y a eu un problème:", err));
  };

  const handleChangeNomdecompte = (event) => {
    setNomdecompte(event.target.value);
  };

  const handleChangePassword = (event) => {
    SetPassword(event.target.value);
  };

  return (
    <div>
      {showCreation ? (
        <div className="Creation_Container">
          <h1>Créer ton compte</h1>
          <form onSubmit={submitForm}>
            <label htmlFor="Nickname">
              Nom de compte
              <input
                type="text"
                placeholder="Mon nom de compte"
                onChange={handleChangeNomdecompte}
                required="required"
              />
            </label>
            <label htmlFor="Password">
              Mot de passe
              <input
                type="password"
                placeholder="Mon mot de passe"
                onChange={handleChangePassword}
                required="required"
              />
            </label>
            {/* <label htmlFor="Repeat password">
              Répéter le mot de passe
              <input
                type="password"
                placeholder="Je répète mon mot de passe"
                onChange={handleChangePassword}
                required="required"
              />
            </label> */}
            <div className="Submit_Connexion">
              <input type="submit" value="S'enregistrer" />
            </div>
            <button type="button" onClick={() => setShowCreation(false)}>
              J'ai déjà un compte
            </button>
          </form>
          {showModal && (
            <div className="Inscription_Modal">
              <p>Merci, votre compte à bien été créé.</p>
              <p>Vous pouvez maintenant accéder aux menus.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="Connexion_Container">
          <h1>Connecte-toi</h1>
          <form>
            <label>
              Nom de compte
              <input
                type="text"
                placeholder="Mon nom de compte"
                required="required"
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                placeholder="Mon mot de passe"
                required="required"
              />
            </label>
            <div className="Submit_Connexion">
              <input type="submit" value="Se connecter" />
            </div>
            <button type="button" onClick={() => setShowCreation(true)}>
              Je n'ai pas encore de compte
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Connexion;
