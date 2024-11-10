import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectItemProps {
  imageUrl?: string;
  name: string;
  role: string;
  description: string;
  gitHub?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imageUrl,
  name,
  role,
  description,
  gitHub,
}) => {
  return (
    <div className="relative group flex-col overflow-hidden items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <div className="max-h-1/3">
          <Image
            className="w-full h-56 object-cover"
            src={`${imageUrl}`}
            alt={`${name} anne laurence`}
            width={600}
            height={500}
            priority
          />
        </div>
      </Link>
      <div className="p-4 w-full items-start flex flex-wrap flex-col gap-2 justify-start">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link href="#">{name}</Link>
        </h3>
        <span className="text-gray-500 dark:text-gray-400 text-left">
          {role}
        </span>
        <p className="text-left mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="absolute top-2 right-2">
          <Link href={`${gitHub}`} target="_blank">
            <Button className="flex space-x-4 sm:mt-0">Dépôt Github</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
