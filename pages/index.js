import Head from "next/head";
import Link from "next/link";
import { useState } from "react"; // Import useState
import Header from "@components/Header";
import Footer from "@components/Footer";
import Information from "@components/Information";

export default function Home() {
  const [isMobileNavActive, setMobileNavActive] = useState(false); // Initialize mobile nav state

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive); // Toggle mobile nav state
  };

  return (
    <div
      className={`container ${isMobileNavActive ? "mobile-nav-active" : ""}`}
    >
      <meta
        name="description"
        content="Computer Science and Engineering student at OSU"
      ></meta>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anna Hjerpyn</title>
      </Head>
      <main>
        <div className="site-preheader moving-text-container">
          <span className="moving-text">Work In Progress!</span>
        </div>
        <Header title="ANNA HJERPYN*" />
        <Information />
      </main>
      <Footer />
    </div>
  );
}
