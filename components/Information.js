import React from "react";

const Information = () => {
  const skills = [
    "Python (proficient)",
    "C++ (proficient)",
    "HTML/CSS (proficient)",
    "GitHub (proficient)",
    "Java (proficient)",
    "JavaScript (proficient)",
    "MATLAB (proficient)",
    "Excel (proficient)",
    "R (intermediate)",
    "SOLIDWORKS (intermediate)",
  ];

  const relevantCoursework = [
    "Web Design and Development",
    "Introduction to Computer Science I & II",
    "Systems I: Introduction to Low-Level Programming and Computer Organization",
    "Foundations I: Discrete Structures",
    "Foundations II: Data Structures and Algorithms",
    "Introduction to Digital Logic",
    "Introduction to Analog Systems and Circuits",
    "Software I: Software Components",
    "Software II: Software Development and Design",
    "Introduction to Python 3 Programming",
    "Information Security",
  ];

  return (
    <div className="info">
      <div className="about-me">
        <div className="section-border">
          <h2 className="section-heading">About Me</h2>
          <p className="description">
            I am a Computer Science and Engineering student at the Ohio State University, with a keen interest in Web Development and Bioinformatics.
          </p>
          <div className="edu">
            <h2 className="section-heading">Education</h2>
            <p className="section-text">
              <span>Bachelor's of Science in Computer Science and Engineering</span>
              <br />
              <span>Expected Graduation: May 2024</span>
              <br />
              <span>The Ohio State University, Columbus, OH</span>
            </p>
          </div>
        </div>
      </div>

      <div className="content-columns">
        <div className="tab-column">
          <div className="tab section-border">
            <button className="tab-button active">Skills</button>
            <div className="tab-content">
              <ul className="section-list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tab section-border">
            <button className="tab-button active">Relevant Coursework</button>
            <div className="tab-content">
              <ul className="section-list">
                {relevantCoursework.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
