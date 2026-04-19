import React from 'react'

const About = () => {
          let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
    return (
   
        <div className="container my-4" style = {myStyle}>
            <h2>About This App</h2>
            <p>
                This is a simple and efficient <strong>Todo List Application</strong> built by Anum a Software Engineering Student at National University of Technology (NUTECH) Islamabad
                using <strong>React.js</strong>. It helps you organize your daily tasks, stay productive,
                and never forget what matters.
            </p>

            <p>
                You can add new tasks, delete completed ones, and your todos are safely stored
                in your browser using <strong>localStorage</strong>, so they remain even after refreshing the page.
            </p>

            <p>
                This project is created as part of my journey to learn modern
                <strong> frontend development with React</strong>.
            </p>

            <p className="text-muted">
                Simple • Fast • User-Friendly
            </p>
        </div>
    );
};

export default About
