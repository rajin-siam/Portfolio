import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const ProblemSolving = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "solvedProblems"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setProblems(data);
    };

    fetchData();
  }, []);

  return (
    <section className="problem-solving" id="problem-solving">
      <h2>Problem Solving Progress</h2>
      <div className="problem-solving-container">
        <div className="column">
          {problems.slice(0, Math.ceil(problems.length / 2)).map((problem, index) => (
            <div className="problem-card" key={index}>
              <h3>{problem.platform}</h3>
              <p>Solved Problems: {problem.solved}</p>
              <a href={problem.profileUrl} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
        <div className="column">
          {problems.slice(Math.ceil(problems.length / 2)).map((problem, index) => (
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
