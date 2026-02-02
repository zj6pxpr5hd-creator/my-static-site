import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section>
            <h2>My Projects</h2>
            <ProjectCard
                title="Javascript Calculator"
                description="A simple calculator built to practice Javascript fundamentals and DOM manipulation."
                tech= "html, css, javascript"
                link= "https://codepen.io/Rouche-Capelli/pen/pvyjrXv"
                github = ""
            />
            <ProjectCard
                title = "Tic Tac Toe Game"
                description = "A classic Tic Tac Toe game implemented in JavaScript with a simple UI."
                tech= "html, css, javascript"
                link= "https://codepen.io/Rouche-Capelli/pen/XJdgKWY"
                github = ""
            />

            <ProjectCard
                title = "Focus Tracker"
                description = "Simple time tracker to record study sessions. The data gets saved in localStorage and is available between reloads"
                tech = "React, Vite, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/focus-tracker"
                github = "https://github.com/zj6pxpr5hd-creator/focus-tracker.git"
            />
        </section>
    );
}

export default Projects;