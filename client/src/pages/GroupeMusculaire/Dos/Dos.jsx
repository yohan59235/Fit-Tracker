import "../GroupeMusculaire.css";

import Back from "../../../assets/images/dos4.jpg";

function Dos() {
  return (
    <div className="Group_Container">
      <img src={Back} alt="Homme faisant tirage bucheron" />
      <h1>Dos</h1>
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

export default Dos;
