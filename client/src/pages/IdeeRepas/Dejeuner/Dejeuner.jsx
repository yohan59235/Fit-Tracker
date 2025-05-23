import "../../GroupeMusculaire/GroupeMusculaire.css";

import Dej from "../../../assets/images/dejeuner.png";

function Dejeuner() {
  return (
    <div className="Group_Container">
      <img src={Dej} alt="plat" />
      <h1>Déjeuner</h1>
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

export default Dejeuner;
