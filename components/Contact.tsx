import React from "react";
import Section from "./Section";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Section className="bg-card py-32 text-center">
      <h2 className="text-4xl text-primary font-bold -mt-16 mb-16">
        Contactez-moi
      </h2>
      <div
        className="w-2/3 max-lg:w-full mx-auto flex justify-between max-sm:flex-col gap-4 max-sm:items-center max-sm:text-center"
        id="contact"
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Mail />
            <span>annelaurencekamenikameni@gmail.com</span>
          </div>
          <div className="flex gap-2">
            <Phone />
            <span>+33 6 95 31 62 05</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={""} className="hover:text-primary">
            <LinkedInLogoIcon className="size-8" />
          </Link>
          <Link href={""} className="hover:text-primary">
            <InstagramLogoIcon className="size-8" />
          </Link>
          <Link href={""} className="hover:text-primary">
            <GitHubLogoIcon className="size-8" />
          </Link>
          <Link href={""} className="hover:text-primary">
            <TwitterLogoIcon className="size-8" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
