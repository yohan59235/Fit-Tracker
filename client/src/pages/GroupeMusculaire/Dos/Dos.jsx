import { Link, useNavigate } from "react-router-dom";

import "../GroupeMusculaire.css";

import BackTraining from "../../../assets/images/dos4.jpg";

function Dos() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={BackTraining} alt="Homme faisant tirage bucheron" />
      <h1>Dos</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux groupes musculaires
        </button>
        <Link to="/ExosDos">
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

export default Dos;
