import { Link } from "react-router-dom";

import "./Repas.css";

import Eat from "../../assets/images/repas1.jpg";

function Repas() {
  return (
    <div className="Repas_Container">
      <img src={Eat} alt="Assiette" />
      <h1>Tes repas</h1>
      <div>
        <Link to="/PetitDej">
          <h2>Petit déjeuner</h2>
        </Link>
      </div>
      <div>
        <Link to="/Collation">
          <h2>Collation</h2>
        </Link>
      </div>
      <div>
        <Link to="/Dejeuner">
          <h2>Déjeuner</h2>
        </Link>
      </div>
      <div>
        <Link to="/Gouter">
          <h2>Goûter</h2>
        </Link>
      </div>
      <div>
        <Link to="/Diner">
          <h2>Dîner</h2>
        </Link>
      </div>
    </div>
  );
}

export default Repas;
