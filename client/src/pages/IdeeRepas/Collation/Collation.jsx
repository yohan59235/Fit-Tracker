import "../../GroupeMusculaire/GroupeMusculaire.css";

import Collat from "../../../assets/images/collation.png";

function Encas() {
  return (
    <div className="Group_Container">
      <img src={Collat} alt="plat" />
      <h1>Collation</h1>
      <div className="Button_Exos">
        <button type="button">Ajouter un plat</button>
      </div>
      <div className="Exos_Container">
        <div>
          <h1>Contenu</h1>
        </div>
      </div>
    </div>
  );
}

export default Encas;
