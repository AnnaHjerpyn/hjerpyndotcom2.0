import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Information from "@components/Information";

export default function Home() {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  return (
    <div className={`container ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anna Hjerpyn</title>
      </Head>
      <Header title="ANNA HJERPYN*" toggleMobileNav={toggleMobileNav} />
      <nav className={`navigation-menu ${isMobileNavActive ? "links" : "hidden"}`}>
        {/* Navigation links */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {/* Add more links as needed */}
      </nav>
      <main>
        <div className="site-preheader moving-text-container">
          <span className="moving-text">Work In Progress!</span>
        </div>
        <Information />
      </main>
      <Footer />
    </div>
  );
}
