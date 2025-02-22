/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";

import "./Infos.css";

import { SlArrowDown } from "react-icons/sl";

function Infos() {
  const [activeSection, setActiveSection] = useState(null);

  const showSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <div className="Infos_Container">
      <div className="Infos_FAQ">
        <button type="button" onClick={() => showSection("faq")}>
          (F.A.Q) Foire Aux Questions
        </button>
        <SlArrowDown className="Icons" onClick={() => showSection("faq")} />
        {activeSection === "faq" && (
          <div>
            <div>
              <h2>1- Qu'est ce que Fit-Tracker ?</h2>
              <p>
                Cette application est conçue pour aider les utilisateurs à
                atteindre leurs objectifs de fitness et de nutrition. Elle
                permet de sélectionner des exercices (musculation, cardio,
                étirements), de suivre ses séances, de créer des plans de repas
                et de suivre sa progression.
              </p>
            </div>
            <div>
              <h2>2- Comment créer un compte ?</h2>
              <p>
                Pour créer un compte, cliquez sur l'icône en forme de personne.
                Vous devrez fournir un e-mail valide, un nom d'utilisateur et un
                mot de passe.
              </p>
            </div>
            <div>
              <h2>3- Comment ajouter des exercices à ma liste personnelle ?</h2>
              <p>
                - Accédez à la section "Groupes musculaires" en cliquant sur
                l'icône haltère.
              </p>
              <p>- Choisissez le groupe musculaire souhaité.</p>
              <p>- Cliquez sur "Ajouter un exercice".</p>
              <p>
                - Parcourez la liste d'exercices proposée et cliquer sur
                "Ajouter à mes exercices".
              </p>
              <p>
                - L'exercice maintenant ajouté vous pourrez renseigner vos
                performances (nombres de séries, répétitions, poids).
              </p>
            </div>
            <div>
              <h2>4- Quels sont les détails fournis pour chaque exercice ?</h2>
              <p>Chaque fiche d'exercice contient :</p>
              <p>- Le nom de l'exercice.</p>
              <p>- Une vidéo démonstrative.</p>
              <p>- L'équipements nécessaires.</p>
              <p>- Une explication détaillée sur la méthode d'entraînement.</p>
            </div>
            <div>
              <h2>5- Comment suivre mes repas ?</h2>
              <p>En construction</p>
            </div>
            <div>
              <h2>6- Mes données sont-elles sécurisées ?</h2>
              <p>
                Oui. Nous mettons en œuvre des mesures strictes de sécurité.
                Consultez la "Politique de confidentialité" pour plus
                d'informations.
              </p>
            </div>
            <div>
              <h2>7- Comment signaler un problème ou donner mon avis ?</h2>
              <p>Vous pouvez envoyer un e-mail à yohan.collinse@free.fr</p>
            </div>
          </div>
        )}
      </div>
      <div className="Infos_CGU">
        <button type="button" onClick={() => showSection("cgu")}>
          Conditions Générales d'Utilisation
        </button>
        <SlArrowDown className="Icons" onClick={() => showSection("cgu")} />
        {activeSection === "cgu" && (
          <div>
            <div>
              <h2>1- Préambule</h2>
              <p>
                Les présentes CGU régissent l'accès et l'utilisation de
                l'application. En vous inscrivant ou en utilisant nos services,
                vous acceptez ces conditions.
              </p>
            </div>
            <div>
              <h2>2- Accès aux services</h2>
              <p>
                - L'application est destinée aux utilisateurs de plus de 16 ans
                ou aux mineurs avec l'autorisation parentale.
              </p>
              <p>
                - L'inscription est obligatoire pour accéder aux fonctionnalités
                personnalisées.
              </p>
            </div>
            <div>
              <h2>3- Utilisation de l'application</h2>
              <p>Vous vous engagez à :</p>
              <p>
                Utiliser l'application de manière conforme aux lois en vigueur.
              </p>
              <p>
                Ne pas porter atteinte aux droit des autres utilisateurs ou de
                l'éditeur.
              </p>
              <p>Fournir des informations exactes lors de votre inscription.</p>
            </div>
            <div>
              <h2>4- Propriété intellectuelle</h2>
              <p>
                Tous les contenus (textes, vidéos, images) sont protégés et
                appartiennent à l'éditeur ou à ses partenaires. Toute
                reproduction non autorisée est interdite.
              </p>
            </div>
            <div>
              <h2>5- Données personnelles</h2>
              <p>
                Vos données sont collectées pour assurer le bon fonctionnement
                de l'application. Vous pouvez accéder, modifier ou supprimer vos
                données conformément à notre politique de confidentialité.
              </p>
            </div>
            <div>
              <h2>6- Responsabilité</h2>
              <p>
                L'application fournit des information à titre indicatif. Avant
                de commencer tout programme, consultez un professionnel de
                santé. L'éditeur décline toute responsabilité en cas de
                blessures ou dommages résultant de l'utilisation de
                l'application.
              </p>
            </div>
            <div>
              <h2>7- Modification des CGU</h2>
              <p>
                L'éditeur peut modifier ces CGU à tout moment. Les utilisateurs
                seront informés des changements majeurs.
              </p>
            </div>
            <div>
              <h2>8- Contact</h2>
              <p>
                Pour toute question, contactez-nous à yohan.collinse@free.fr
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="Infos_Politique">
        <button type="button" onClick={() => showSection("politique")}>
          Politique de confidentialité
        </button>
        <SlArrowDown
          className="Icons"
          onClick={() => showSection("politique")}
        />
        {activeSection === "politique" && (
          <div>
            <div>
              <h2>1- Données collectées</h2>
              <p>
                Lors de votre utilisation de l'application, nous collections :
              </p>
              <p>- informations personnelles : adresse e-mail, pseudonyme.</p>
              <p>
                - Données d'utilisation : exercices suivis, repas enregistrés.
              </p>
            </div>
            <div>
              <h2>2- Utilisation des données</h2>
              <p>Vos données sont utilisées pour :</p>
              <p>- Gérer votre compte et personnaliser votre expérience.</p>
              <p>- Améliorer nos services.</p>
              <p>
                - Communiquer avec vous (informations importantes, assistance)
              </p>
            </div>
            <div>
              <h2>3- Partage des données</h2>
              <p>Nous ne partageons vos données avec des tiers que si :</p>
              <p>
                - Cela est nécessaire pour fournir nos services (ex :
                hebergeurs).
              </p>
              <p>Cela est requis par la loi.</p>
              <p>Vous avez donné votre consentement explicite.</p>
            </div>
            <div>
              <h2>4- Sécurité</h2>
              <p>
                Nous appliquons des mesures de sécurité pour protéger vos
                données contre tout accès non autorisé ou perte accidentelle.
              </p>
            </div>
            <div>
              <h2>5- Vos droits</h2>
              <p>Conformément au RGPD, vous pouvez :</p>
              <p>- Accéder à vos données.</p>
              <p>- Demander leur rectification ou suppression.</p>
              <p>- Vous opposer à leur traitement.</p>
              <p>
                Pour exercer ces droits, contactez-nous à yohan.collinse@free.fr
              </p>
            </div>
            <div>
              <h2>6- Durée de conservation</h2>
              <p>
                Vos données sont conservées tant que votre compte est actif et
                pour une durée légale après suppression.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="Infos_Mentions">
        <button type="button" onClick={() => showSection("mentions")}>
          Mentions légales
        </button>
        <SlArrowDown
          className="Icons"
          onClick={() => showSection("mentions")}
        />
        {activeSection === "mentions" && (
          <div>
            <div>
              <h2>1- Éditeur de l'application</h2>
              <p>- Nom de l'editeur : COLLINSE Yohan</p>
              <p>- Statut juridique : En formation</p>
              <p>- Responsable de la publication : COLLINSE Yohan</p>
              <p>- Contact : yohan.collinse@free.fr</p>
            </div>
            <div>
              <h2>2- Hébergement</h2>
              <p>- Hebergeur : En cours</p>
              <p>- Adresse : adresse de l'hébergeur</p>
              <p>- Contact de l'hébergeur : coordonnées de l'hébergeur</p>
            </div>
            <div>
              <h2>Propriété intellectuelle</h2>
              <p>
                Tous les éléments de l'application sont protégés par les lois
                françaises et internationales sur la propriété intellectuelle.
                Toute utilisation non autorisée peut entraîner des poursuites.
              </p>
            </div>
            <div>
              <h2>Limitation de responsabilité</h2>
              <p>
                L'éditeur ne pourra être tenu responsable des dommages directs
                ou indirects causés par l'utilisation ou l'impossibilité
                d'utiliser l'application.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Infos;
