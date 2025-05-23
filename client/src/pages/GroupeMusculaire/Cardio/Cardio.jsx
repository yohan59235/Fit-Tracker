import "../GroupeMusculaire.css";

import CardioTraining from "../../../assets/images/cardio2.png";

function Cardio() {
  return (
    <div className="Group_Container">
      <img src={CardioTraining} alt="homme faisant de l'écarté à la poulie" />
      <h1>Cardio</h1>
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

export default Cardio;
