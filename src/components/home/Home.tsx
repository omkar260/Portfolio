import picImage from "../../assets/picImage.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { Skills } from "../skills/Skills";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Fullstack Developer", "Devops", "AI ML Enthusiast"],
    loop: true,
  });

  return (
    <div className="flex flex-col mt-10  md:flex-row justify-between items-center">
      <div className="w-1/2 flex flex-col gap-2 py-10 md:py-10 md:px-2">
        <div
          id="text"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold"
        >
          I am{" "}
          <span id="text" className="text-voilet">
            Omkar Mante
          </span>
        </div>
        {/* <div className="text-gray-500 mt-2">
          Specializing in {" "}
          <span id="text" className="text-voilet">
            Spring Boot  {" "}
          </span>
          and  {" "}
          <span id="text" className="text-voilet">
            React
          </span>
          , with strengths in {" "} 
          <span id="text" className="text-voilet">
             API Integrations 
          </span>
          , {" "}
          <span id="text" className="text-voilet">
            UI Development
          </span>
          ,{" "}
          <span id="text" className="text-voilet">
            State Management
          </span>
          ,{" "}
          <span id="text" className="text-voilet">
            Security
          </span>
          ,{" "}
          <span id="text" className="text-voilet">
            Docker
          </span>{" "}
          &{" "}
          <span id="text" className="text-voilet">
            Deployment
          </span>
          , and maintaining high coding standards. Proven track record of
          delivering scalable, high-quality solutions.
        </div> */}
        <div className="text-gray-500 mt-10">
          I specialize in{" "}
          <span id="text" className="text-voilet">
            backend services{" "}
          </span>{" "}
          with{" "}
          <span id="text" className="text-voilet">
            Spring Boot{" "}
          </span>{" "}
          and{" "}
          <span id="text" className="text-voilet">
            frontend development
          </span>{" "}
          with{" "}
          <span id="text" className="text-voilet">
            React
          </span>
          . My ability to collaborate closely with product owners ensures that
          requirements are meticulously gathered and translated into{" "}
          <span id="text" className="text-voilet">
            high-quality solutions
          </span>
          .
        </div>
        <div id="text" className="lg:text-4xl font-semibold text-voilet mt-10">
          <span>
            {text}
            <Cursor />
          </span>
        </div>
        <div className="mt-4">
          {/* <button className="text-black bg-white py-2 px-4 rounded">
            Buttons
          </button> */}
          {/* <Skills/> */}
        </div>
      </div>
      <div className="py-10 md:py-10 md:px-2">
        <img
          src={picImage}
          alt="Profile"
          className="w-100 h-100 object-cover"
        />
      </div>
    </div>
  );
}
