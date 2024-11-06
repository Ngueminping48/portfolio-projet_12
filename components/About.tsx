import React from "react";
import Section from "./Section";

export default function About() {
  return (
    <Section className="bg-secondary py-24">
      <div
        className="flex justify-between w-1/2 mx-auto text-center"
        id="about"
      >
        <div>
          <h2 className="whitespace-nowrap text-4xl text-primary mb-6 font-bold">
            A propos
          </h2>
          <p className="leading-relaxed text-white">
            Passionnee de l&apos;informatique et du design, je suis une personne
            enthousiaste et dynamique qui aime travailler au sein d&apos;une
            entreprise de haute technologie. J&apos;aime partager mes
            connaissances et mes expériences avec les autres.
          </p>
        </div>
      </div>
    </Section>
  );
}
