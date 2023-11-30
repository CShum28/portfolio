import React from "react";
import Card from "react-bootstrap/Card";
import DineDash from "../images/DineDash.png";
import BudgetBuddy from "../images/BudgetBuddy.png";
import InterviewScheduler from "../images/InterviewScheduler.png";

const Portfolio = () => {
  const projects = [
    {
      name: "Budget App",
      description:
        "Streamline your finances effortlessly with Budget Buddy! Easily track income, expenses, and savings to take control of your financial future.",
      link: "https://github.com/CShum28/budget-app",
      image: BudgetBuddy,
    },
    {
      name: "Dine Dash",
      description:
        "DASH DINE is the user-side clone of Uber Eats, where users can agonise over all the possible food options in the city before settling on what they are comfortable with!",
      link: "https://github.com/John-Roxas/LHLFinal",
      image: DineDash,
    },
    {
      name: "Interview Scheduler",
      description:
        "The interview scheduling app simplifies the process by letting you choose preferred days and timeslots while also providing the flexibility to make edits or cancellations.",
      link: "https://github.com/CShum28/Interview-scheduler",
      image: InterviewScheduler,
    },
  ];

  return (
    <div className="md:h-fit lg:h-screen">
      <div className="flex flex-col pt-28 items-center">
        <h1 className="text-4xl mb-4">Projects</h1>
        <p>Please check out a bit of my work!</p>
      </div>
      <div className="flex lg:flex-row lg:m-2 md:flex-col md:items-center pt-10 lg:justify-between">
        {projects.map((project) => (
          <Card style={{ width: "18rem" }} className="md:mb-4">
            <Card.Img
              variant="top"
              src={project.image}
              className="h-60 object-contain"
            />

            <Card.Body className="flex flex-column justify-content-between">
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <button
                className="bg-violet-600 text-slate-50 px-10 py-2 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`${project.link}`);
                }}
              >
                Code
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
