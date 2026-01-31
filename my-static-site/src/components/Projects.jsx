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
            />
            <ProjectCard
                title = "Tic Tac Toe Game"
                description = "A classic Tic Tac Toe game implemented in JavaScript with a simple UI."
                tech= "html, css, javascript"
                link= "https://codepen.io/Rouche-Capelli/pen/XJdgKWY"
            />
        </section>
    );
}

export default Projects;