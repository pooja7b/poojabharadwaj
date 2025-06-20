import React from "react";
import resume from "./assets/Pooja_Bharadwaj_Resume.pdf";

const sections = [
  "Home",
  "About Me",
  "Skills",
  "Experience",
  "Education",
  "Certifications",
  "Achievements & Publications",
  "Contact"
];

function App() {
  return (
    <>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <a href={"#" + section.toLowerCase().replace(/ & | /g, "-")}>
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header id="home">
        <h1>Pooja Bharadwaj</h1>
        <h2>Senior Security Lead</h2>
        <a className="download-btn" href={resume} download>
          Download Resume
        </a>
      </header>

      {sections.slice(1).map((section) => (
        <section id={section.toLowerCase().replace(/ & | /g, "-")} key={section}>
          <h2>{section}</h2>
          <p>[Content for {section} goes here]</p>
        </section>
      ))}
    </>
  );
}

export default App;