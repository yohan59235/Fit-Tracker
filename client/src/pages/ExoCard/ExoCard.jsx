/* eslint-disable react/no-danger */
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Exercices from "../../Exercices";

import "./ExoCard.css";

function ExoCard() {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const exo = Exercices.find((exercise) => exercise.id === parseInt(id, 10));
  if (!exo) {
    return <p>Exercice non trouvé 🚫</p>;
  }
  return (
    <div className="ExoCard_Container">
      <div className="ExoCard_Header">
        <button type="button" onClick={Back}>
          Revenir aux exercices
        </button>
        <h1>{exo.name}</h1>
        <video controls>
          <source src={exo.video} />
          <track kind="captions" />
        </video>
      </div>
      <div className="ExoCard_Instructions">
        <div>
          <p>Equipements :</p>
          <p dangerouslySetInnerHTML={{ __html: exo.equipment }} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: exo.instructions }} />
      </div>
    </div>
  );
}

ExoCard.propTypes = {
  exo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExoCard;
