import React, { useState } from "react";
import Link from "next/link";

export default function Header({ title }) {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  return (
    <div>
      <header className={`header ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
        <div className="mobile-nav-button" onClick={toggleMobileNav}>
          <span className={`burger-icon ${isMobileNavActive ? "open" : ""}`}></span>
        </div>
        <div className="links">
          <div className={`link-pair ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
            <Link href="https://www.linkedin.com/in/anna-hjerpyn-707806212" target="_blank">
              <a>LINKEDIN</a>
            </Link>
            <Link href="https://github.com/AnnaHjerpyn" target="_blank">
              <a>GITHUB</a>
            </Link>
          </div>
        </div>
        <h1 className="title">{title}</h1>
        <div className="links">
          <div className={`link-pair ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
            <Link href="mailto:hjerpyn.2@osu.edu" target="_blank">
              <a>EMAIL</a>
            </Link>
            <Link href="/project">
              <a>PROJECTS</a>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
