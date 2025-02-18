import { useState } from "react";

import "./Connexion.css";

function Connexion() {
  const [showCreation, setShowCreation] = useState(true);

  return (
    <div>
      {showCreation ? (
        <div className="Creation_Container">
          <h1>Créer ton compte</h1>
          <form>
            <label>
              Nom de compte
              <input
                type="text"
                placeholder="Mon nom de compte"
                required="required"
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                placeholder="Mon mot de passe"
                required="required"
              />
            </label>
            <label>
              Répéter le mot de passe
              <input
                type="password"
                placeholder="Je répète mon mot de passe"
                required="required"
              />
            </label>
            <div className="Submit_Connexion">
              <input type="submit" value="S'enregistrer" />
            </div>
            <button type="button" onClick={() => setShowCreation(false)}>
              J'ai déjà un compte
            </button>
          </form>
        </div>
      ) : (
        <div className="Connexion_Container">
          <h1>Connecte-toi</h1>
          <form>
            <label>
              Nom de compte
              <input
                type="text"
                placeholder="Mon nom de compte"
                required="required"
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                placeholder="Mon mot de passe"
                required="required"
              />
            </label>
            <div className="Submit_Connexion">
              <input type="submit" value="Se connecter" />
            </div>
            <button type="button" onClick={() => setShowCreation(true)}>
              Je n'ai pas encore de compte
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Connexion;
