import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./services/UserContext";

import App from "./App";
import Home from "./pages/Home/Home";
import Connexion from "./pages/Connexion/Connexion";
import Programme from "./pages/Programme/Programme";
import Pectoraux from "./pages/GroupeMusculaire/Pectoraux/Pectoraux";
import Dos from "./pages/GroupeMusculaire/Dos/Dos";
import Biceps from "./pages/GroupeMusculaire/Biceps/Biceps";
import Triceps from "./pages/GroupeMusculaire/Triceps/Triceps";
import AvantBras from "./pages/GroupeMusculaire/AvantBras/AvantBras";
import Epaules from "./pages/GroupeMusculaire/Epaules/Epaules";
import Abdominaux from "./pages/GroupeMusculaire/Abdominaux/Abdominaux";
import Jambes from "./pages/GroupeMusculaire/Jambes/Jambes";
import Cardio from "./pages/GroupeMusculaire/Cardio/Cardio";
import Etirements from "./pages/GroupeMusculaire/Etirements/Etirements";
import Repas from "./pages/Repas/Repas";
import PetitDej from "./pages/IdeeRepas/PetitDej/PetitDej";
import Collation from "./pages/IdeeRepas/Collation/Collation";
import Dejeuner from "./pages/IdeeRepas/Dejeuner/Dejeuner";
import Gouter from "./pages/IdeeRepas/Gouter/Gouter";
import Diner from "./pages/IdeeRepas/Diner/Diner";
import Pecs from "./pages/Exos/Pecs/Pecs";
import Abs from "./pages/Exos/Abdos/Abs";
import ExoCard from "./pages/ExoCard/ExoCard";
import ExosDos from "./pages/Exos/ExosDos/ExosDos";
import ExosBiceps from "./pages/Exos/ExosBiceps/ExosBiceps";
import ExosCardio from "./pages/Exos/ExosCardio/ExosCardio";
import ExosEpaules from "./pages/Exos/ExosEpaules/ExosEpaules";
import ExosEtirements from "./pages/Exos/ExosEtirements/ExosEtirements";
import ExosJambes from "./pages/Exos/ExosJambes/ExosJambes";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Connexion", element: <Connexion /> },
      { path: "/Programme", element: <Programme /> },
      { path: "/Pectoraux", element: <Pectoraux /> },
      { path: "/Dos", element: <Dos /> },
      { path: "/Biceps", element: <Biceps /> },
      { path: "/Triceps", element: <Triceps /> },
      { path: "/AvantBras", element: <AvantBras /> },
      { path: "/Epaules", element: <Epaules /> },
      { path: "/Abdominaux", element: <Abdominaux /> },
      { path: "/Jambes", element: <Jambes /> },
      { path: "/Cardio", element: <Cardio /> },
      { path: "/Etirements", element: <Etirements /> },
      { path: "/Repas", element: <Repas /> },
      { path: "/PetitDej", element: <PetitDej /> },
      { path: "/Collation", element: <Collation /> },
      { path: "/Dejeuner", element: <Dejeuner /> },
      { path: "/Gouter", element: <Gouter /> },
      { path: "/Diner", element: <Diner /> },
      { path: "/Pecs", element: <Pecs /> },
      { path: "/Abs", element: <Abs /> },
      { path: "/ExosDos", element: <ExosDos /> },
      { path: "/ExosBiceps", element: <ExosBiceps /> },
      { path: "/ExosCardio", element: <ExosCardio /> },
      { path: "/ExosEpaules", element: <ExosEpaules /> },
      { path: "/ExosEtirements", element: <ExosEtirements /> },
      { path: "/ExosJambes", element: <ExosJambes /> },
      { path: "/ExoCard:id", element: <ExoCard /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
