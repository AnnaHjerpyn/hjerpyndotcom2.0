import React from "react";
import Link from "next/link";

export default function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <Link href="https://www.linkedin.com/in/anna-hjerpyn-707806212" target="_blank">LINKEDIN</Link>
      <Link href="https://github.com/AnnaHjerpyn" target="_blank">GITHUB</Link>
      <Link href="mailto:hjerpyn.2@osu.edu" target="_blank">EMAIL</Link>
      <Link href="/project">PROJECTS</Link>
    </div>
  );
}
