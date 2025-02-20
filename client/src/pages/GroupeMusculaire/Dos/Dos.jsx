import { Link } from "react-router-dom";

import "../GroupeMusculaire.css";

import Back from "../../../assets/images/dos4.jpg";

function Dos() {
  return (
    <div className="Group_Container">
      <img src={Back} alt="Homme faisant tirage bucheron" />
      <h1>Dos</h1>
      <div className="Button_Exos">
        <Link to="/ExosDos">
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

export default Dos;
