import React from "react";
import Image from "next/image";

interface SkillItemProps {
  name: string;
  logo: string;
}

export default function SkillItem({ name, logo }: SkillItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-square bg-accent-foreground rounded p-4 w-32 h-32">
        <Image
          width={32}
          height={32}
          priority
          className="w-full"
          src={`/icons${logo}`}
          alt={`${name} logo`}
        />
      </div>
      <span className="text-lg text-white">{name}</span>
    </div>
  );
}
