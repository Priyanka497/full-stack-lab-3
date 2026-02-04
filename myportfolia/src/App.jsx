import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Priyanka Priya</h1>
        <p>Student | Aspiring Software Engineer</p>
      </header>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a lifelong learner interested in web development and technology.
          I enjoy learning new skills and building projects using HTML, CSS,
          JavaScript, and React.
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React (Basics)</li>
          <li>C Programming</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>Personal Portfolio Website</li>
          <li>Cricket Gallery using Bootstrap</li>
          <li>Password Validation in C</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: priyanka@example.com</p>
        <p>GitHub: github.com/priyanka</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Priyanka Priya</p>
      </footer>
    </div>
  );
}

export default App;
