import React from "react";
import Section from "./Section";
import SkillItem from "./SkillItem";

const SKILLS = [
  {
    name: "HTML",
    icon: "/html.svg",
  },
  {
    name: "CSS",
    icon: "/css.svg",
  },
  {
    name: "JavaScript",
    icon: "/javascript.svg",
  },
  {
    name: "React",
    icon: "/react.svg",
  },
  {
    name: "Sass",
    icon: "/sass.svg",
  },
];

export default function Skills() {
  return (
    <Section className="bg-secondary">
      <div className="mx-auto text-center" id="skills">
        <h2 className="text-4xl text-primary mb-6 font-bold">
          Mes compétences
        </h2>
        <div className="flex flex-wrap gap-3 w-full justify-center">
          {SKILLS.map((skill, index) => (
            <SkillItem key={index} name={skill.name} logo={skill.icon} />
          ))}
        </div>
      </div>
    </Section>
  );
}
