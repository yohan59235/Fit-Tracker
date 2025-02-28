import { Link, useNavigate } from "react-router-dom";

import "../../GroupeMusculaire/GroupeMusculaire.css";

import Gout from "../../../assets/images/gouter.png";

function Gouter() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={Gout} alt="plat" />
      <h1>Goûter</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux repas
        </button>
        <Link to="/ListeGouter">
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

export default Gouter;
