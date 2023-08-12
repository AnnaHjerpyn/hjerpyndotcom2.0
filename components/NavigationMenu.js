// NavigationMenu.js
import React from "react";
import Link from "next/link";

export default function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <Link href="https://www.linkedin.com/in/anna-hjerpyn-707806212" target="_blank">
        <a>LINKEDIN</a>
      </Link>
      <Link href="https://github.com/AnnaHjerpyn" target="_blank">
        <a>GITHUB</a>
      </Link>
      <Link href="mailto:hjerpyn.2@osu.edu" target="_blank">
        <a>EMAIL</a>
      </Link>
      <Link href="/project">
        <a>PROJECTS</a>
      </Link>
    </div>
  );
}
