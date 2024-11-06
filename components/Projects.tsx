import React from "react";
import Section from "./Section";
import ProjectItem from "./ProjectItem";

const PROJECTS = [
  {
    imageUrl: "/724.webp",
    name: "724events",
    role: "Déboguez-une-application-React.JS",
    description: "Agence événementielle",
    gitHub:
      "https://github.com/Ngueminping48/OC_P_09_Debug-et-test-du-site-724events",
  },
  {
    imageUrl: "/sophiebluel.webp",
    name: "Architecte-Sophie-bluel",
    role: "Travaux d'architecte",
    description: "Portfolio pour architecte",
    gitHub:
      "https://github.com/Ngueminping48/Projet_6-_Sophie-Bluel-Architecte-D-int-rieur",
  },
  {
    imageUrl: "/ninacarducci.webp",
    name: "Nina-carducci",
    role: "Portfolio Photographe",
    description: "Portfolio pour photographe",
    gitHub: "https://github.com/Ngueminping48/Projet_08-Nina-Carducci",
  },
  {
    imageUrl: "/kasa.webp",
    name: "Kasa",
    role: "Agence immobilière / Vacances",
    description: "Site pour agence immobilière",
    gitHub: "https://github.com/Ngueminping48/kasa_kasa_oc_projet_07",
  },
  {
    imageUrl: "/argentbank.webp",
    name: "Argent Bank",
    role: "Gestion des transactions",
    description: "Authentification des utilisateurs",
    gitHub: "https://github.com/Ngueminping48/Projet_10_Argent_Banque_Api",
  },
];

export default function Projects() {
  return (
    <Section className="">
      <div className="mx-auto text-center" id="projects">
        <h2 className="text-4xl text-primary mb-6 font-bold">Mes projets</h2>
        <div className="grid w-full gap-4 grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {PROJECTS.map((project, index) => (
            <ProjectItem
              key={index}
              imageUrl={project.imageUrl}
              name={project.name}
              role={project.role}
              description={project.description}
              gitHub={project.gitHub}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
