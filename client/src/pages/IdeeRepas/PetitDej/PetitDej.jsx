import "../../GroupeMusculaire/GroupeMusculaire.css";

import PtitDej from "../../../assets/images/petitdej.jpg";

function PetitDej() {
  return (
    <div className="Group_Container">
      <img src={PtitDej} alt="plat" />
      <h1>Petit-Déjeuner</h1>
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

export default PetitDej;
