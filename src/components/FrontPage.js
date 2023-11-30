import React from "react";

const FrontPage = ({ portfolioRef }) => {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
      <p className="text-6xl">Hey, I'm Clement Shum</p>
      <p className="text-xl my-5">
        I'm an aspiring Full Stack Developer committed to building intuitive and
        dynamic web applications that enhance user experience and drive
        innovation.
      </p>
      <button
        onClick={() => scrollToRef(portfolioRef)}
        className="bg-violet-600 text-slate-50 px-10 py-2 rounded-md"
      >
        Projects
      </button>
    </div>
  );
};

export default FrontPage;
