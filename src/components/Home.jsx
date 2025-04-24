import React from "react";

function Home() {
  return (
    <section
      className="home relative bg-cover bg-center bg-no-repeat text-white px-4 md:px-8 py-12"
      style={{ backgroundImage: "url('/images/home-background-img.jpg')" }}
      id="home"
    >
      <div className="home-content max-w-3xl text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Hi, I'm Md. Rajin Mashrur Siam
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-300 mb-4">
          A passionate learner and aspiring software engineer
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-shadow">
          I graduated from{" "}
          <strong>Mawlana Bhashani Science and Technology University</strong>{" "}
          and I'm currently exploring the world of{" "}
          <strong>software engineering</strong> and{" "}
          <strong>web development</strong>.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-shadow">
          I'm familiar with <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong>, <strong>React</strong>,{" "}
          <strong>Java</strong>, <strong>C++</strong>, and{" "}
          <strong>Spring Boot</strong>. I also enjoy solving problems on
          platforms like <strong>LeetCode</strong>, <strong>Codeforces</strong>,
          and <strong>AtCoder</strong>.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed text-shadow">
          I'm a <strong>quick learner</strong> who loves building real-world
          projects and solving interesting challenges.
        </p>

        <div className="cta-buttons mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="btn bg-gray-900 text-white hover:bg-gray-700 px-6 py-3 rounded-md transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-md transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
