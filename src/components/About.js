import React from "react";
import Skills from "./Skills";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS",
    "PostgreSQL",
    "Express",
    "Tailwind",
    "Bootstrap",
    "GitHub",
  ];

  return (
    <div className="flex flex-col items-center w-full h-fil pb-28 text-left lg:shrink-0">
      {/* <div className="flex flex-col justify-center items-center  w-full h-screen bg-slate-200"> */}
      <div className="pt-28 w-fit">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-4">About Me</h1>
        </div>
        <div className="text-xl">
          <p className="pb-4 ">
            Hello! I'm a passionate Full Stack Developer dedicated to crafting
            websites and applications that significantly contribute to the
            success of the overall product. My journey in web development is
            marked by a continuous learning curve, and I take pride in sharing
            my insights and knowledge with the wider development community.
          </p>
          <p>
            Through my projects, which you can explore in the Projects section,
            I demonstrate my commitment to building engaging and effective web
            solutions. I believe in the power of community and
            knowledge-sharing, which is why I actively post helpful content
            about web development and programming on my LinkedIn. These
            contributions not only reflect my skills but also my enthusiasm to
            help others in the dev community.If you're looking for a developer
            with a blend of creativity, technical skill, and a community-driven
            approach, I'd love to hear from you. Let's connect and see how we
            can collaborate towards success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
