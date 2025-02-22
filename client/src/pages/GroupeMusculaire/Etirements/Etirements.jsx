import { Link, useNavigate } from "react-router-dom";

import "../GroupeMusculaire.css";

import Stretch from "../../../assets/images/etirement1.jpg";

function Etirements() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={Stretch} alt="Femme faisant des étirements" />
      <h1>Étirements</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux groupes musculaires
        </button>
        <Link to="/ExosEtirements">
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

export default Etirements;
