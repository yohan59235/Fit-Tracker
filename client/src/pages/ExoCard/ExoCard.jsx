/* eslint-disable react/no-danger */
import { useParams } from "react-router-dom";

import Exercices from "../../Exercices";

function ExoCard() {
  const { id } = useParams();
  const exo = Exercices[id - 1];

  return (
    <div>
      <div>
        <h1>{exo.name}</h1>
        <video controls>
          <source src={exo.video} />
          <track kind="captions" />
        </video>
      </div>
      <div>
        <p>Équipement :{exo.equipment}</p>
        <p dangerouslySetInnerHTML={{ __html: exo.instructions }} />
      </div>
    </div>
  );
}

export default ExoCard;
