/* eslint-disable react/no-danger */
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../../../services/UserContext";

import "../Exos.css";

import Exercices from "../../../Exercices";

function ExosJambes() {
  const JambesExercices = Exercices.filter(
    (exo) => Array.isArray(exo.muscles) && exo.muscles.includes("Jambes")
  );

  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  // fonction pour retirer le bouton "ajouter aux exercices" si l'utilisateur n'est pas connecté

  const { user } = useContext(UserContext);

  const isConnected = user.id && user.id !== "null";

  return (
    <div className="Exercices_Container">
      <button type="button" onClick={Back} className="Exos_Return">
        Revenir à la page précédente
      </button>
      {JambesExercices.map((exo) => (
        <div key={exo.id} className="Exercices_Windows">
          <div>
            <h3>{exo.name}</h3>
          </div>
          <div className="Exercices_Content">
            <video controls>
              <source src={exo.video} type="video/mp4" />
              Your browser does not support the video tag.
              <track kind="captions" />
            </video>

            <div className="Exercices_Equipments">
              <p>Equipements : </p>
              <p dangerouslySetInnerHTML={{ __html: exo.equipment }} />
            </div>
          </div>
          <div className="Exercices_Button">
            {isConnected ? (
              <button type="button">Ajouter à mes exercices</button>
            ) : null}

            <Link to={`/ExoCard/${exo.id}`}>
              <button type="button">Voir l'exercice</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExosJambes;
