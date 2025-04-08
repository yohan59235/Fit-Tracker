/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import UserContext from "../../services/UserContext";

import "./MonProfil.css";

function MonProfil() {
  const { user, setUser } = useContext(UserContext);
  const [userInfos] = useState({
    nomdecompte: user.nomdecompte,
    id: user.id,
  });

  const deleteAccount = () => {
    axios
      .delete(`http://localhost:3310/api/users/${user.id}`)
      .then((response) => console.info(response))
      .catch((error) => console.info(error));
  };

  const logoutBye = () => {
    axios
      .delete("http://localhost:3310/api/logout", { withCredentials: true })
      .then(() => setUser({ id: null, nomdecompte: null }))
      .catch((error) => console.info(error));
  };

  return (
    <div className="MonProfile_Container">
      <div>
        <h1>
          Hey, salut {userInfos.nomdecompte}, tu vas bien? prêt à t'entraîner?
        </h1>
      </div>
      <div>
        <Link to="/Connexion">
          <button type="button" onClick={logoutBye}>
            Tu veux te deconnecter ?
          </button>
        </Link>
        <Link to="/Connexion">
          <button type="button" onClick={deleteAccount}>
            Ah tu veux nous quitter?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MonProfil;
