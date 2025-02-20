import { Link } from "react-router-dom";

import "../GroupeMusculaire.css";

import EpaulesTraining from "../../../assets/images/epaule3.png";

function Epaules() {
  return (
    <div className="Group_Container">
      <img
        src={EpaulesTraining}
        alt="Homme faisant de l'écarté à la machine pour travailler les épaules"
      />
      <h1>Épaules / Trapèzes</h1>
      <div className="Button_Exos">
        <Link to="/ExosEpaules">
        <button type="button">Ajouter un exercice</button>
        </Link>
      </div>
      <div className="Exos_Container">
        <div>
          <h1>Contenu</h1>
        </div>
      </div>
    </div>
  );
}

export default Epaules;
