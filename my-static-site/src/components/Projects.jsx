import LatestProject from "./LatestProject";
import ProjectCard from "./ProjectCard";
import screenshot4 from "../assets/screenshot4.png";

function Projects() {
    return (
        <section>
            
            <h2>My Projects</h2>
            <h3>Latest Project</h3>
            <LatestProject
                title = "SchedulExams"
                description = "Enter your exams and receive a simple, actionable daily study plan to prepare efficiently."
                tech = "React + Vite, Vercel for hosting"
                link = "https://schedule-exams.vercel.app/"
                github = "https://github.com/zj6pxpr5hd-creator/schedule-exams"
                screenshot= {screenshot4}
            /> 

            <h3>Other Projects</h3>

            <ProjectCard
                title = "SignalBoard"
                description = "SignalBoard is a fullstack application for sharing previsions, insights and ideas with the community"
                tech = "React + Vite, Express.js, PostgreSQL, Vercel and Render for hosting"
                link = "https://signal-board-omega.vercel.app/"
                github = "https://github.com/zj6pxpr5hd-creator/signal-board.git"
            /> 

            <ProjectCard
                title = "Poke-Cache"
                description = "PokeCache is a small web application that consumes the PokeAPI and implements a client-side caching system using localStorage."
                tech = "React + Vite, Poke API, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/poke-fetcher/"
                github = "https://github.com/zj6pxpr5hd-creator/poke-fetcher.git"
            /> 

            <ProjectCard
                title = "GitHub Profile Explorer"
                description = "A web app that fetches and analyzes public GitHub repositories to give a quick overview of a developer's activity."
                tech = "React + Vite, GitHub API, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/github-fetcher/"
                github = "https://github.com/zj6pxpr5hd-creator/github-fetcher"
            /> 

            <ProjectCard
                title = "Funny Decision Engine"
                description = "A Decision Engine that responds to the priorities selected by the user. The answers are calculated based on user input (and are always sarcastic :) ) "
                tech = "React + Vite, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/funny-decision-engine/"
                github = "https://github.com/zj6pxpr5hd-creator/funny-decision-engine"
            />

            <ProjectCard
                title = "Decision Journal"
                description = "A minimal decision-tracking app designed for reflection rather than optimization. Built to explore UI, state management and local persistance"
                tech = "React + Vite, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/decision-journal/"
                github = "https://github.com/zj6pxpr5hd-creator/decision-journal.git"
            />

            <ProjectCard
                title = "Focus Tracker"
                description = "Simple time tracker to record study sessions. The data gets saved in localStorage and is available between reloads"
                tech = "React + Vite, Github pages for hosting"
                link = "https://zj6pxpr5hd-creator.github.io/focus-tracker"
                github = "https://github.com/zj6pxpr5hd-creator/focus-tracker.git"
            />

            <ProjectCard
                title = "Tic Tac Toe Game"
                description = "A classic Tic Tac Toe game built in JavaScript with a simple, user‑friendly interface that keeps the focus on strategy and fun."
                tech= "html, css, javascript"
                link= "https://codepen.io/Rouche-Capelli/pen/XJdgKWY"
                github = ""
            />

            <ProjectCard
                title="Javascript Calculator"
                description="A simple calculator built to practice Javascript fundamentals and DOM manipulation."
                tech= "html, css, javascript"
                link= "https://codepen.io/Rouche-Capelli/pen/pvyjrXv"
                github = ""
            />

        </section>
    );
}

export default Projects;