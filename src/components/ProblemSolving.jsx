// src/components/ProblemSolving.jsx

import React from "react";
import solvedProblems from "../data/solvedProblems"; // import data

const ProblemSolving = () => {
  return (
    <section className="problem-solving">
      <h2>Problem Solving Progress</h2>
      <div className="problem-solving-container">
        {/* First column */}
        <div className="column">
          {solvedProblems.slice(0, Math.ceil(solvedProblems.length / 2)).map((problem, index) => (
            <div className="problem-card" key={index}>
              <h3>{problem.platform}</h3>
              <p>Solved Problems: {problem.solved}</p>
              <a href={problem.profileUrl} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>

        {/* Second column */}
        <div className="column">
          {solvedProblems.slice(Math.ceil(solvedProblems.length / 2)).map((problem, index) => (
            <div className="problem-card" key={index}>
              <h3>{problem.platform}</h3>
              <p>Solved Problems: {problem.solved}</p>
              <a href={problem.profileUrl} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
