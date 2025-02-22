import { Link, useNavigate } from "react-router-dom";

import "../GroupeMusculaire.css";

import EpaulesTraining from "../../../assets/images/epaule3.png";

function Epaules() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img
        src={EpaulesTraining}
        alt="Homme faisant de l'écarté à la machine pour travailler les épaules"
      />
      <h1>Épaules / Trapèzes</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux groupes musculaires
        </button>
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
