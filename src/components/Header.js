import React from "react";

const Header = ({ frontPageRef, aboutRef, portfolioRef, contactRef }) => {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-row justify-between pl-14 pt-4 pb-4 uppercase fixed w-full shadow-lg bg-slate-50 z-10">
      <div>
        <span className="font-bold">Clement Shum</span>
      </div>

      <div className="flex flex-row list-none pr-14 font-semibold">
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollToRef(frontPageRef)}
        >
          Home
        </li>
        <li
          className="pl-5 hover:cursor-pointer"
          onClick={() => scrollToRef(aboutRef)}
        >
          About
        </li>
        <li
          className="pl-5 hover:cursor-pointer"
          onClick={() => scrollToRef(portfolioRef)}
        >
          Projects
        </li>
        <li
          className="pl-5 hover:cursor-pointer"
          onClick={() => scrollToRef(contactRef)}
        >
          Contact
        </li>
      </div>
    </div>
  );
};

export default Header;
