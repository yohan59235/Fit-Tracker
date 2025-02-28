import { Link, useNavigate } from "react-router-dom";

import "../../GroupeMusculaire/GroupeMusculaire.css";

import Dej from "../../../assets/images/dejeuner.png";

function Dejeuner() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={Dej} alt="plat" />
      <h1>Déjeuner</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux repas
        </button>
        <Link to="/ListeDejeuner">
          <button type="button">Ajouter un plat</button>
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

export default Dejeuner;
