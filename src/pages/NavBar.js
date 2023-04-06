import { FaFire, FaMoon, FaSun } from "react-icons/fa";

import { SiAboutdotme } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";

const scrollHandle = (e) => {
  e.preventDefault();
  let id = e.target.id;
  let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
  window.location.href = "#" + id.slice(0, id.length - 1); // changing the url
  position && position.scrollIntoView({ behavior: "smooth", block: "start" }); //scrolling the page
};

const NavBar = () => {
  return (
    <div className="w-screen h-20 justify-center flex dark:bg-gray-900 text-renk_14 gap-16 mt-10">
      <NavbarIconMe icon={<SiAboutdotme size="26" />} />
      <NavbarIconProjects icon={<BiCodeCurly size="30" />} />
      <NavbarIconContact icon={<TfiEmail size="25" />} />
    </div>
  );
};

const NavbarIconMe = ({ icon, textme = "About" }) => (
  <div className="navbar-icon group">
    <a href="#About">{icon}
    <span className="navbar-tooltip group-hover:scale-100 -left-2">{textme}</span></a>
  </div>
);

const NavbarIconProjects = ({ icon, text = "Projects" }) => (
  <div className="navbar-icon group">
    <a href="#Projects">{icon}
    <span className="navbar-tooltip group-hover:scale-100 -left-4">{text}</span></a>
  </div>
);

const NavbarIconContact = ({ icon, text = "Contact" }) => (
  <div className="navbar-icon group">
    <a href="#Contact">{icon}
    <span className="navbar-tooltip group-hover:scale-100 -left-4">{text}</span></a>
  </div>
);

export default NavBar;
