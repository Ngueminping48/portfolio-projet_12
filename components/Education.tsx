import React from "react";
import Section from "./Section";
import EducationItem from "./EducationItem";

const EDUCATION = [
  {
    name: "Formation Intégrateur web",
    role: "OpenClassrooms",
    description:
      "J'ai terminé ma certification d'Intégrateur Web à OpenClassrooms en 2024, obtenant un diplôme de Niveau 5. Au cours de ce programme, j'ai développé des compétences en HTML, CSS, JavaScript, React et Git, en me concentrant sur la création et la maintenance de sites web dynamiques.",
  },
  {
    name: "Gestionnaire Financière",
    role: "Université Paris Saclay",
    description: "",
  },
  {
    name: "Cordinatrice sociale",
    role: "Bien a la maison",
    description: "",
  },
  {
    name: "BAC Gestion Administrative",
    role: "Niveau 4",
    description: "",
  },
];

export default function Education() {
  return (
    <Section className="">
      <div className="mx-auto text-center" id="education">
        <h2 className="text-4xl text-primary mb-6 font-bold">Mon parcours</h2>
        <div className="grid w-full gap-4 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
          {EDUCATION.map((xp, index) => (
            <EducationItem
              key={index}
              name={xp.name}
              role={xp.role}
              description={xp.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
