import { Link, useNavigate } from "react-router-dom";

import "../GroupeMusculaire.css";

import Pecs from "../../../assets/images/pec4.jpg";

function Pectoraux() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={Pecs} alt="Homme faisant de l'écarté à la poulie" />
      <h1>Pectoraux</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux groupes musculaires
        </button>
        <Link to="/Pecs">
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

export default Pectoraux;
