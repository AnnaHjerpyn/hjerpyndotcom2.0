import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react'; // Import useState
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  const [isMobileNavActive, setMobileNavActive] = useState(false); // Initialize mobile nav state

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive); // Toggle mobile nav state
  };

  return (
    <div className="container">
    <meta name="description" content="Computer Science and Engineering student at OSU"></meta>
      <Head>
        <title>Anna Hjerpyn</title>
      </Head>
      <main>
        <div className="site-preheader moving-text-container">
          <span className="moving-text">Work In Progress!</span>
        </div>
        <div className={`links ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <div className="left-link-pair">
            <div className="link-pair">
              <Link href="https://www.linkedin.com/in/anna-hjerpyn-707806212" target="_blank"><a>LINKEDIN</a></Link>
            </div>
            <div className="link-pair">
              <Link href="https://github.com/AnnaHjerpyn" target="_blank"><a>GITHUB</a></Link>
            </div>
          </div>
          <Header title="ANNA HJERPYN*" />
          <div className="right-link-pairs">
            <div className="link-pair">
              <Link href="mailto:hjerpyn.2@osu.edu" target="_blank"><a>EMAIL</a></Link>
            </div>
            <div className="link-pair">
              <Link href="/project"><a>PROJECTS</a></Link>
            </div>
          </div>
        </div>
        <div className="info">
          <p className="description">
            I'm currently a student at the Ohio State University studying Computer Science and Engineering with interests in Web Development and Bioinformatics.
          </p>
        <div className="edu">
          <h3>EDUCATION</h3>
          Bachelor's of Science in Computer Science and Engineering
          <br></br>
          May 2024 | the Ohio State University | Columbus, OH
        </div>
          <h3>SKILLS</h3>
          <ul>
            <li>Python, proficient</li>
            <li>C++, proficient</li>
            <li>HTML/CSS, proficient</li>
            <li>GitHub, proficient</li>
            <li>Java, proficient</li>
            <li>JavaScript, proficient</li>
            <li>MATLAB, proficient</li>
            <li>Excel, proficient</li>
            <li>R, intermediate</li>
            <li>SOLIDWORKS, intermediate</li>
          </ul>
          <h3>RELEVANT COURSEWORK</h3>
          <ul>
            <li>Web Design and Development</li>
            <li>Introduction to Computer Science I & II</li>
            <li>Systems I: Introduction to Low-Level Programming and Computer Organization</li>
            <li>Foundations I: Discrete Structures</li>
            <li>Foundations II: Data Structures and Algorithms</li>
            <li>Introduction to Digital Logic</li>
            <li>Introduction to Analog Systems and Circuits</li>
            <li>Software I: Software Components</li>
            <li>Software II: Software Development and Design</li>
            <li>Introduction to Python 3 Programming</li>
            <li>Information Security</li>
          </ul>
        </div>
        <div className="mobile-nav-button" onClick={toggleMobileNav}>
          <span className={`burger-icon ${isMobileNavActive ? 'open' : ''}`}></span>
        </div>
      </main>
      <Footer />
    </div>
  )
  
}
