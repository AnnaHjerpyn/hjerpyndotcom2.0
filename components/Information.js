import React from "react";

const Information = () => {
  return (
    <div className="info">
      <p className="description">
        I'm currently a student at the Ohio State University studying Computer
        Science and Engineering with interests in Web Development and
        Bioinformatics.
      </p>
      <div className="edu">
        <h3 className="section-heading">EDUCATION</h3>
        <p className="section-text">
          Bachelor's of Science in Computer Science and Engineering
          <br />
          May 2024 | the Ohio State University | Columbus, OH
        </p>
      </div>
      <h3 className="section-heading">SKILLS</h3>
      <ul className="section-list">
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
      <h3 className="section-heading">RELEVANT COURSEWORK</h3>
      <ul className="section-list">
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
  );
};

export default Information;
