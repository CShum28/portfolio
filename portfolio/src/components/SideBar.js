import React from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  const icons = {
    faLinkedin: {
      icon: faLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/clementshum/",
    },
    faGithub: {
      icon: faGithub,
      label: "GitHub",
      link: "https://github.com/CShum28",
    },
    faFolder: {
      icon: faFolder,
      label: "Resume",
      link: "https://flowcv.com/resume/agwq13a2pi",
    },
    faEnvelope: { icon: faEnvelope, label: "Email" },
  };

  return (
    <div className="flex flex-col justify-center fixed top-1/2 left-0 -translate-y-1/2 z-20">
      {Object.keys(icons).map((icon) => (
        <div
          key={icon}
          className="relative flex items-center w-16 bg-gray-500 hover:cursor-pointer hover:w-fit hover:rounded-r-lg transition-all duration-300 truncate"
          onClick={(e) => {
            e.preventDefault();
            if (icons[icon].label === "Email") {
              console.log("send email");
              window.location = "mailto:clement.shum128@gmail.com";
            } else {
              console.log(icons[icon].label);
              window.open(`${icons[icon].link}`);
            }
          }}
        >
          <FontAwesomeIcon
            className="h-8 p-3 text-white"
            icon={icons[icon].icon}
          />
          <span className="pl-2 pr-4 text-slate-200 transition-opacity duration-300">
            {icons[icon].label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
