import "../GroupeMusculaire.css";

import Stretch from "../../../assets/images/etirement1.jpg";

function Etirements() {
  return (
    <div className="Group_Container">
      <img src={Stretch} alt="Femme faisant des étirements" />
      <h1>Étirements</h1>
      <div className="Button_Exos">
        <button type="button">Ajouter un exercice</button>
      </div>
      <div className="Exos_Container">
        <div>
          <h1>Contenu</h1>
        </div>
      </div>
    </div>
  );
}

export default Etirements;
