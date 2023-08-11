import React, { useState } from "react";
import Link from "next/link";

export default function Header({ title }) {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  return (
    <header className={`header ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
      <div className="header-content">
        <h1 className="title">{title}</h1>
        <div className="mobile-nav-button" onClick={toggleMobileNav}>
          <span className={`burger-icon ${isMobileNavActive ? "open" : ""}`}></span>
        </div>
      </div>
      <div className={`links ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
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
    </header>
  );
}
