/* eslint-disable react/no-danger */
import { Link, useNavigate } from "react-router-dom";

import "../Exos.css";

import Exercices from "../../../Exercices";

function ExosCardio() {
  const CardioExercices = Exercices.filter(
    (exo) => Array.isArray(exo.muscles) && exo.muscles.includes("Cardio")
  );

  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Exercices_Container">
      <button type="button" onClick={Back} className="Exos_Return">
        Revenir à la page précédente
      </button>
      {CardioExercices.map((exo) => (
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
            <button type="button">Ajouter à mes exercices</button>

            <Link to={`/ExoCard/${exo.id}`}>
              <button type="button">Voir l'exercice</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExosCardio;
