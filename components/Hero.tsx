import React from "react";
import Section from "./Section";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Canvas from "./Canvas";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="border-none relative group overflow-hidden gap-4 h-[80vh] flex items-center justify-center max-md:flex-col">
      <Canvas />
      <div className="flex flex-col gap-4 items-start z-10">
        <div className="flex flex-col items-start">
          <h2 className="text-6xl font-semibold text-primary">Anne Laurence</h2>
          <h3 className="text-3xl">Développeuse web</h3>
        </div>
        <Link href="/CV_WEB Anne Laurence.pdf" >
        <Button>
          Télécharger mon CV <Download />
        </Button>
        </Link>
      </div> 
      <div className=" z-10">
        <Image
          src=""
          alt=""
          width={300}
          height={300}
          className="rounded-full" 
        />
      </div>
    </Section>
  );
}
