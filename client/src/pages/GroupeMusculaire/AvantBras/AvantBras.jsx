import { Link } from "react-router-dom";

import "../GroupeMusculaire.css";

import AvantB from "../../../assets/images/avant1.jpg";

function AvantBras() {
  return (
    <div className="Group_Container">
      <img src={AvantB} alt="Avant bras d'un homme" />
      <h1>Avant-Bras</h1>
      <div className="Button_Exos">
        <Link to="/ExosAvantBras">
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

export default AvantBras;
