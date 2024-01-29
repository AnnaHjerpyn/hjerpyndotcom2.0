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

  // Sample project data
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      imageUrl: "/images/project1.jpg",
    },
    // Add more projects as needed
  ];

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
