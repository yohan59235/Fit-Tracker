import { Link } from "react-router-dom";

import "./Programme.css";

import Training from "../../assets/images/pec3.jpg";

function Programme() {
  return (
    <div className="Programme_Container">
      <img src={Training} alt="Homme faisant du développé couché" />
      <h1>Gère ton programme</h1>
      <div>
        <Link to="/Pectoraux">
          <h2>Pectoraux</h2>
        </Link>
      </div>
      <div>
        <Link to="/Dos">
          <h2>Dos</h2>
        </Link>
      </div>
      <div>
        <Link to="/Biceps">
          <h2>Biceps</h2>
        </Link>
      </div>
      <div>
        <Link to="/Triceps">
          <h2>Triceps</h2>
        </Link>
      </div>
      <div>
        <Link to="/AvantBras">
          <h2>Avant-Bras</h2>
        </Link>
      </div>
      <div>
        <Link to="/Epaules">
          <h2>Épaules / Trapèzes</h2>
        </Link>
      </div>
      <div>
        <Link to="/Abdominaux">
          <h2>Abdos</h2>
        </Link>
      </div>
      <div>
        <Link to="/Jambes">
          <h2>Jambes/Mollets</h2>
        </Link>
      </div>
      <div>
        <Link to="/Cardio">
          <h2>Cardio</h2>
        </Link>
      </div>
      <div>
        <Link to="/Etirements">
          <h2>Étirements</h2>
        </Link>
      </div>
    </div>
  );
}

export default Programme;
