import "./App.css";
import Card from "./Card";
import bearImg from "./images/bear.png";
import hookImg from "./images/hook.png";
import githubLight from "./images/github-light.svg";
import githubDark from "./images/github.svg";
import LinkLight from "./images/linkedin-light.svg";
import LinkDark from "./images/linkedin-dark.svg";
function Hero() {
  return (
    <>
      <section className="text-text font-inconsolata p-3 md:text-lg bg-background">
        <div className="p-2 pb-15 pt-10 text-center md:pr-30 md:pt-25 md:pl-30 lg:text-left lg:pl-100 lg:pr-100">
          <div className="p-8 text-3xl md:text-4xl md:pl-0">
            <h1 className="font-bold">Hi, Im Chenai</h1>
            <h2 className="font-normal">Frontend Developer</h2>
          </div>
          <p className="text-sm font-heebo pb-5">
            Hi! Welcome to my portfolio. I love building websites related to my
            hobbies, and this is where I’m tracking my progress. Stick around,
            more projects coming soon!
          </p>
          <a
            href="https://drive.google.com/file/d/1uYt3SZqBrZzJC6eq5yg7RcR_v5AewGyt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-button)] hover:bg-[var(--color-button-hover)] inline-block w-50 transition duration-150 ease-in-out hover:scale-105 font-heeborounded-md text-white py-2 px-4 border-4 border-transparent text-center"
          >
            My Resume
          </a>
          <div className="flex justify-center mt-4 space-x-3 lg:justify-start">
            <a
              href="https://github.com/chenai13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLight}
                className="w-8 block dark:hidden [var(--opacity-icon-hover)] icon"
                alt="GitHub icon"
              />
              <img
                src={githubDark}
                className="w-8 hidden dark:block [var(--opacity-icon-hover)] icon"
                alt="GitHub icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chenai-lamarque-090802214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkLight}
                alt="LinkedIn icon "
                className="w-8 block dark:hidden [var(--opacity-icon-hover)] icon"
              />
              <img
                src={LinkDark}
                alt="LinkedIn icon"
                className="w-8 hidden dark:block [var(--opacity-icon-hover)] icon"
              />
            </a>
          </div>
        </div>
      </section>
      <div className="bg-projects text-text font-inconsolata py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col">
          {/* Section Title */}
          <p className="text-xl font-semibold mb-6 text-center lg:text-left">
            My projects
          </p>

          {/* Card Row */}
          <div className="flex flex-col items-center space-y-6 md:space-y-6 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-6">
            <Card
              link="https://chenai13.github.io/crochet-assistant/"
              title="Crochet Assistant"
              img={bearImg}
              alt="A bear illustration"
              date="April 2025"
              prg="React, Javascript"
              p="My crochet assistant website, aimed to help with tracking personal projects."
            />

            <Card
              title="The Knitting Corner"
              img={hookImg}
              alt="A yarn and hook illustration"
              date="November 2024"
              prg="HTML, CSS"
              p="A small, e-commerce website I made to sell my crochet products and tutorials."
              link="https://chenai13.github.io/knitting-corner/"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
