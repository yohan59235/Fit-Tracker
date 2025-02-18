import "../GroupeMusculaire.css";

import Legs from "../../../assets/images/jambe2.jpg";

function Jambes() {
  return (
    <div className="Group_Container">
      <img src={Legs} alt="Homme faisant du squat guidé" />
      <h1>Jambes / Mollets</h1>
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

export default Jambes;
