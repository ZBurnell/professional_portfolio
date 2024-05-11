import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4">
            Welcome,
            <br className="hidden lg:inline-block" />lets build something cool together!
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello! My name is Zack. I am a highly motivated and resourceful web developer with a passion for technology. As a recent graduate of a
            rigorous coding boot camp I am eager to leverage all of the skills I have gained with past career
            experiences to contribute effectively to innovative projects and grow within the field. A quick learner with
            a collaborative mindset, seeking opportunities to apply creativity and problem-solving abilities to drive
            meaningful impact in a diverse work environment.
          </p>
          <div className="flex justify-center">
            <button
              href="#contact"
              className="ml-4 inline-flex border py-2 px-6 focus:outline-none rounded text-lg">
              Work With Me
            </button>
            <button
              href="#projects"
              className="ml-4 inline-flex border py-2 px-6 focus:outline-none rounded text-lg">
              See My Past Work
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Untitled_design.png"
          />
        </div>
      </div>
    </section>
  );
}