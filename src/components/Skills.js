import Bootstrap from "../images/Skills/Boostrap.png";
import CSS from "../images/Skills/CSS.png";
import Express from "../images/Skills/Express.png";
import Github from "../images/Skills/GitHub.png";
import HTML from "../images/Skills/HTML.png";
import JavaScript from "../images/Skills/JavaScript.webp";
import NodeJS from "../images/Skills/NodeJS.png";
import PostgreSQL from "../images/Skills/PostgreSQL.png";
import React from "../images/Skills/React.png";
import Tailwind from "../images/Skills/Tailwind.png";

import Card from "react-bootstrap/Card";

const Skills = () => {
  const skills = [
    { skill: "Boostrap", logo: Bootstrap },
    { skill: "CSS", logo: CSS },
    { skill: "Express", logo: Express },
    { skill: "Github", logo: Github },
    { skill: "HTML", logo: HTML },
    { skill: "JavaScript", logo: JavaScript },
    { skill: "NodeJS", logo: NodeJS },
    { skill: "PostgreSQL", logo: PostgreSQL },
    { skill: "React", logo: React },
    { skill: "Tailwind", logo: Tailwind },
  ];

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Skill</h1>
        <p>These are the technical stacks I've worked with</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-x-8 lg:gap-y-4 justify-items-center items-center">
        {skills.map((skill) => (
          <Card className="h-36 p-4 flex md:mb-4 flex-col items-center z-0 w-80">
            <Card.Img
              variant="top"
              src={skill.logo}
              className="object-contain h-36"
            />
            <Card.Body>
              <Card.Title>{skill.skill}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
