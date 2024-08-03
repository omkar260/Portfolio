import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 relative z-50">
      <div className="flex justify-between gap-10 items-center h-16 w-full">
        <span className="text-white text-2xl font-bold cursor-pointer">
          <span className="text-voilet">オムカル</span> (Omkar)
        </span>
        <div className="relative">
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </div>
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-40 w-48">
              <Link
                to="home"
                className="block text-white text-lg cursor-pointer py-2 px-4 hover:bg-gray-700 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
                onClick={toggleMenu}
              >
                <span className="text-voilet">#</span>home
              </Link>
              <Link
                to="works"
                className="block text-white text-lg cursor-pointer py-2 px-4 hover:bg-gray-700 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
                onClick={toggleMenu}
              >
                <span className="text-voilet">#</span>skills
              </Link>
              <Link
                to="about-me"
                className="block text-white text-lg cursor-pointer py-2 px-4 hover:bg-gray-700 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
                onClick={toggleMenu}
              >
                <span className="text-voilet">#</span>projects
              </Link>
              <Link
                to="contacts"
                className="block text-white text-lg cursor-pointer py-2 px-4 hover:bg-gray-700 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
                onClick={toggleMenu}
              >
                <span className="text-voilet">#</span>contacts
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=9373446686&text=Hye%20What%27%20up%20dude%20%F0%9F%98%8D"
                className="text-white text-lg cursor-pointer hover:bg-gray-700 py-2 px-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-voilet">#</span>whats-app
              </a>
            </div>
          )}
        </div>
        <div className="hidden md:flex gap-10 mt-2">
          <Link
            to="home"
            className="text-white text-lg cursor-pointer hover:bg-gray-700 py-2 px-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
          >
            <span className="text-voilet">#</span>home
          </Link>
          <Link
            to="works"
            className="text-white text-lg cursor-pointer hover:bg-gray-700 py-2 px-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
          >
            <span className="text-voilet">#</span>skills
          </Link>
          <Link
            to="about-me"
            className="text-white text-lg cursor-pointer hover:bg-gray-700 py-2 px-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
          >
            <span className="text-voilet">#</span>projects
          </Link>
          <Link
            to="contacts"
            className="text-white text-lg cursor-pointer hover:bg-gray-700 py-2 px-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
          >
            <span className="text-voilet">#</span>contacts
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=9373446686&text=Hye%20What%27%20up%20dude%20%F0%9F%98%8D"
            className="text-white text-lg cursor-pointer hover:bg-gray-700 py-2 px-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transform after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-voilet">#</span>whats-app
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
