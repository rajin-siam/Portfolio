import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm Md. Rajin Mashrur Siam</h1>
        <h2>A passionate learner and aspiring software engineer</h2>
        <p>
          I graduated from <strong>Mawlana Bhashani Science and Technology University</strong> and I'm currently exploring the world of <strong>software engineering</strong> and <strong>web development</strong>.
        </p>
        <p>
          I'm familiar with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Java</strong>, <strong>C++</strong>, and <strong>Spring Boot</strong>. I also enjoy solving problems on platforms like <strong>LeetCode</strong>, <strong>Codeforces</strong>, and <strong>AtCoder</strong>.
        </p>
        <p>
          I'm a <strong>quick learner</strong> who loves building real-world projects and solving interesting challenges.
        </p>

        <div className="cta-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
