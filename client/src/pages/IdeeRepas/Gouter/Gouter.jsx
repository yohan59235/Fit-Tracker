import "../../GroupeMusculaire/GroupeMusculaire.css";

import Gout from "../../../assets/images/gouter.png";

function Gouter() {
  return (
    <div className="Group_Container">
      <img src={Gout} alt="plat" />
      <h1>Goûter</h1>
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

export default Gouter;
