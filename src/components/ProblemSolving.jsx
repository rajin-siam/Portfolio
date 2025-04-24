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
    <section className="problem-solving py-12 px-6" id="problem-solving">
      <h2 className="text-3xl font-bold text-center mb-8">Problem Solving Progress</h2>
      <div className="problem-solving-container flex flex-wrap gap-8 justify-center">
        <div className="column flex flex-col gap-8 w-full sm:w-1/2 lg:w-1/3">
          {problems.slice(0, Math.ceil(problems.length / 2)).map((problem, index) => (
            <div className="problem-card bg-gray-100 p-6 rounded-lg shadow-lg" key={index}>
              <h3 className="text-xl font-semibold mb-2">{problem.platform}</h3>
              <p className="text-lg mb-2">Solved Problems: {problem.solved}</p>
              <a
                href={problem.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
        <div className="column flex flex-col gap-8 w-full sm:w-1/2 lg:w-1/3">
          {problems.slice(Math.ceil(problems.length / 2)).map((problem, index) => (
            <div className="problem-card bg-gray-100 p-6 rounded-lg shadow-lg" key={index}>
              <h3 className="text-xl font-semibold mb-2">{problem.platform}</h3>
              <p className="text-lg mb-2">Solved Problems: {problem.solved}</p>
              <a
                href={problem.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
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
