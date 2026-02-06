import LatestProject from "./LatestProject";
import ProjectCard from "./ProjectCard";
import screenshot1 from "../assets/screenshot1.png";

function Projects() {
    return (
        <section>
            
            <h2>My Projects</h2>

            <LatestProject
                title = "GitHub Profile Explorer"
                description = "A web app that fetches and analyzes public GitHub repositories to give a quick overview of a developer's activity."
                tech = "React + Vite, GitHub API, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/github-fetcher/"
                github = "https://github.com/zj6pxpr5hd-creator/github-fetcher"
                screenshot= {screenshot1}
            /> 

            <h3>Other Projects</h3>
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
                tech = "React + Vite, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/focus-tracker"
                github = "https://github.com/zj6pxpr5hd-creator/focus-tracker.git"
            />

            <ProjectCard
                title = "Decision Journal"
                description = "A minimal decision-tracking app designed for reflection rather than optimization. Built to explore UI, state management and local persistance"
                tech = "React + Vite, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/decision-journal/"
                github = "https://github.com/zj6pxpr5hd-creator/decision-journal.git"
            />

            <ProjectCard
                title = "Funny Decision Engine"
                description = "A Decision Engine that responds to the priorities selected by the user. The answers are calculated based on user input (and are always sarcastic :) ) "
                tech = "React + Vite, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/funny-decision-engine/"
                github = "https://github.com/zj6pxpr5hd-creator/funny-decision-engine"
            />
            
            
        </section>
    );
}

export default Projects;