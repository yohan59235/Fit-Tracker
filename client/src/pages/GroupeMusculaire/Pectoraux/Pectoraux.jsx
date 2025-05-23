import { Link } from "react-router-dom";

import "../GroupeMusculaire.css";

import Pecs from "../../../assets/images/pec4.jpg";

function Pectoraux() {
  return (
    <div className="Group_Container">
      <img src={Pecs} alt="Homme faisant de l'écarté à la poulie" />
      <h1>Pectoraux</h1>
      <div className="Button_Exos">
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
