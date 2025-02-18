/* eslint-disable react/no-danger */
import { Link } from "react-router-dom";

import "../Exos.css";

import Exercices from "../../../Exercices";

function Abs() {
  const AbdosExercices = Exercices.filter(
    (exo) => Array.isArray(exo.muscles) && exo.muscles.includes("Abdominaux")
  );

  return (
    <div className="Exercices_Container">
      {AbdosExercices.map((exo) => (
        <div key={exo.id} className="Exercices_Windows">
          <div>
            <h3>{exo.name}</h3>
          </div>
          <div>
            <video controls>
              <source src={exo.video} type="video/mp4" />
              Your browser does not support the video tag.
              <track kind="captions" />
            </video>

            <div className="Exercices_Equipments">
              <p>Equipements : </p>
              <p dangerouslySetInnerHTML={{ __html: exo.equipment }} />
              <button type="button">Ajouter à mes exercices</button>

              <Link to="/ExoCard">
                <button type="button">Voir l'exercice</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Abs;
