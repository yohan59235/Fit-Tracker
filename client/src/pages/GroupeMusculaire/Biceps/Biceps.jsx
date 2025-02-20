import { Link } from "react-router-dom";

import "../GroupeMusculaire.css";

import Bibi from "../../../assets/images/biceps2.jpg";

function Biceps() {
  return (
    <div className="Group_Container">
      <img
        src={Bibi}
        alt="Homme faisant du curl marteau pour muscler les biceps"
      />
      <h1>Biceps</h1>
      <div className="Button_Exos">
        <Link to="/ExosBiceps">
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

export default Biceps;
