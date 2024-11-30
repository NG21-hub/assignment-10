import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>My Portfolio</h1>
        <p>Welcome to my personal space on the web!</p>
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Nino, developer specializing in creating modern web applications.
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="#project1">Project 1</a> - A brief description of Project 1.
            </li>
            <li>
              <a href="#project2">Project 2</a> - A brief description of Project 2.
            </li>
            <li>
              <a href="#project3">Project 3</a> - A brief description of Project 3.
            </li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>
            Feel free to reach out! <a href="mailto:glonti.nino2@gmail.com">glonti.nino2@gmail.com</a>
          </p>
        </section>
      </main>
      <footer>
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
