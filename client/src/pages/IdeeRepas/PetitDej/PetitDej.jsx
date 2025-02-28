import { Link, useNavigate } from "react-router-dom";

import "../../GroupeMusculaire/GroupeMusculaire.css";

import PtitDej from "../../../assets/images/petitdej.jpg";

function PetitDej() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={PtitDej} alt="plat" />
      <h1>Petit-Déjeuner</h1>
      <div className="Button_Exos">
      <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux repas
        </button>
        <Link to="/ListePetitDej">
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

export default PetitDej;
