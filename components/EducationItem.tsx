import React from "react";
import Link from "next/link";

interface EducationItemProps {
  name: string;
  role: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  name,
  role,
  description,
}) => {
  return (
    <div className="relative group flex-col overflow-hidden items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <div className="max-h-1/3"></div>
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
      </div>
    </div>
  );
};

export default EducationItem;
