import React from "react";
import { Nav } from "./Nav";

export default function Header() {
  return (
    <header className="border-b sticky top-0 backdrop-blur z-40 p-2 px-8 flex items-center justify-between">
      <h1 className="text-xl text-primary font-bold">Anne Laurence</h1>
      <Nav />
    </header>
  );
}
