import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Information from "@components/Information";
import TitlePage from "@components/TitlePage";

export default function Index() {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const [showIndexPage, setShowIndexPage] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  useEffect(() => {
    // After 5 seconds (5000 milliseconds), show the index page
    const timeout = setTimeout(() => {
      setShowIndexPage(true);
    }, 3000);

    // After the title page fade-out animation duration (5 seconds), show the footer
    const footerTimeout = setTimeout(() => {
      setShowFooter(true);
    }, 3000);

    // Clear the timeouts to prevent them from running if the component unmounts
    return () => {
      clearTimeout(timeout);
      clearTimeout(footerTimeout);
    };
  }, []);

  return (
    <div className={`container ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anna Hjerpyn</title>
      </Head>
      {/* Conditionally render the Header only when showIndexPage is true */}
      {showIndexPage && (
        <Header title="ANNA HJERPYN*" toggleMobileNav={toggleMobileNav} />
      )}
      <nav
        className={`navigation-menu ${
          isMobileNavActive || !showIndexPage ? "links" : "hidden"
        }`}
      >
        {/* Add more links as needed */}
      </nav>
      <main className="main">
        {showIndexPage ? (
          <>
            <div className="site-preheader moving-text-container">
              <span className="moving-text">Work In Progress!</span>
            </div>
            <Information />
            {showFooter && <Footer />}
          </>
        ) : (
          <TitlePage showIndexPage={showIndexPage} />
        )}
      </main>
    </div>
  );
}
