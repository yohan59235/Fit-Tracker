import { Link, useNavigate } from "react-router-dom";

import "../GroupeMusculaire.css";

import TricepsTraining from "../../../assets/images/triceps1.jpg";

function Triceps() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  return (
    <div className="Group_Container">
      <img src={TricepsTraining} alt="Femme faisant des étirements" />
      <h1>Triceps</h1>
      <div className="Button_Exos">
        <button type="button" onClick={Back} className="Groupes_Return">
          Revenir aux groupes musculaires
        </button>
        <Link to="/ExosTriceps">
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

export default Triceps;
