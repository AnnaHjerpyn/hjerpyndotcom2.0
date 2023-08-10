import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
    <meta name="description" content="Computer Science and Engineering student at OSU"></meta>
      <Head>
        <title>Anna Hjerpyn</title>
      </Head>
      <main>
        <Header title="ANNA HJERPYN*" />
        <div className="links">
          <span><a href="https://www.linkedin.com/in/anna-hjerpyn-707806212" target="_blank">LINKEDIN</a></span>
          <span><a href="https://github.com/AnnaHjerpyn" target="_blank">GITHUB</a></span>
          <span><a href="mailto:hjerpyn.2@osu.edu" target="_blank">EMAIL</a></span>
        </div>
        <div className="info">
          <p className="description">
            I'm currently a student at the Ohio State University studying Computer Science and Engineering with interests in Web Development and Bioinformatics.
          </p>
        <div className="edu">
          <h3>EDUCATION</h3>
          Bachelor of Science in Computer Science and Engineering
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
      </main>
    </div>
  )
}
