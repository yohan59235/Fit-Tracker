import "../../GroupeMusculaire/GroupeMusculaire.css";

import Din from "../../../assets/images/diner.jpg";

function Diner() {
  return (
    <div className="Group_Container">
      <img src={Din} alt="plat" />
      <h1>Dîner</h1>
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

export default Diner;
