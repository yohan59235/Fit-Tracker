import { Link, useNavigate } from "react-router-dom";

import "../GroupeMusculaire.css";

import Legs from "../../../assets/images/jambe2.jpg";

function Jambes() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={Legs} alt="Homme faisant du squat guidé" />
      <h1>Jambes / Mollets</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux groupes musculaires
        </button>
        <Link to="/ExosJambes">
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

export default Jambes;
