import { Link, useNavigate } from "react-router-dom";

import "../GroupeMusculaire.css";

import Abdos from "../../../assets/images/abs1.jpg";

function Abdominaux() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={Abdos} alt="deux personnes faisant des abdos" />
      <h1>Abdominaux</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux groupes musculaires
        </button>
        <Link to="/Abs">
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

export default Abdominaux;
