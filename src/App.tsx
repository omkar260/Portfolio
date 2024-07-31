import Navbar from "./nav/Navbar";
import LineHorizontal from "./assets/LineHorizontal.svg";
import figma from "./assets/Figma.svg";
import vector from "./assets/Vector.svg";
import github from "./assets/Github.svg";
import { useEffect } from "react";
import Home from "./components/home/Home";
import "./index.css";
import {Example} from "./components/work/ClipPathLinks";
import AboutMe from "./components/aboutMe/AboutMe";
import Contacts from "./components/contacts/Contacts";
const App = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-omkar]") as HTMLDivElement;
    const cursorDotOutline = document.querySelector(
      "[data-mante]"
    ) as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 0,
            fill: "forwards",
          }
        );
      }

      if (cursorDotOutline) {
        cursorDotOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 1000 ,
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="h-screen flex font-code text-white bg-ligthGray px-4">
        <div className="cursor-dot" data-omkar></div>
        <div className="cursor-outline" data-mante></div>
        {/* <div className="flex flex-col items-center">
          <img src={line} className="h-20" alt="Line" />
          <img src={figma} alt="Figma" />
          <img src={vector} alt="Vector" />
          <img src={github} alt="GitHub" />
        </div> */}
        <div className="w-full flex flex-col bg-customGray mx-20 cure px-4 py-2 ">
          <div className="bg-inherit">
            <section id="home" className="h-screen py-2">
          <Navbar />
              <Home />
            </section>
            <section id="works" className="h-screen py-6">
              <div
                id="text"
                className=" flex text-2xl my-10 md:text-3xl lg:text-4xl font-semibold"
              >
                <span className="text-voilet">#{" "}</span>skills{" "}
                <img src={LineHorizontal} className="h-20 w-1/2" alt="Line" />
              </div>
              <Example />
            </section>
            <section id="about-me" className="h-screen py-6">
              <AboutMe />
            </section>
            <section id="contacts" className="h-screen py-6">
              <Contacts />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
