import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const tabsData = [
  {
    label: "Plant&Go",
    content:
      "Plant&Go is a mobile application that encourages the pursuit of a sustainable diet. Through this application, users are able to see and order from a list of participating restaurants that are pursuing greener alternatives in food.",
    img: "/portfolio/assets/plantngo-logo.png",
    alt: "plantngoIcon",
    link: "https://github.com/plantngo/plantngo_backend",
  },
  {
    label: "WiFi Tracker",
    content:
      "Wifi Tracker is a Java application that approximates the location of a person based on a trilateration algorithm. This algorithm takes in the signal strength of the person to all available routers in range and then generates the approximate position.",
    img: "/portfolio/assets/wifiTracker.png",
    alt: "wifiTrackerIcon",
    link: "https://github.com/hongyao38/WiFi_Tracker",
  },
];

const Projects = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <section id="projects" className="pt-10 pb-24 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        {/* HEADERS */}
        <div className="px-4 mx-auto">
          <h2 className="font-playfair xs:font-semibold text-3xl md:text-7xl text-center underline decoration-2 underline-offset-4">
            Projects
          </h2>
        </div>

        {/* TABS */}
        <div className="relative mt-16">
          <div className="flex space-x-5 justify-center">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="pt-2 pb-3 xs:font-semibold text-xl md:text-3xl"
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span
            className="absolute bottom-0 block h-1 bg-teal-500 transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
        </div>

        {/* Contents */}
        <div className="md:flex py-4 justify-center items-center">
          <img
            alt={tabsData[activeTabIndex].alt}
            src={tabsData[activeTabIndex].img}
            className="md:max-w-[500px] md:mx-5 max-w-[200px] mx-auto"
          />
          <div className="md:flex md:flex-col text-center md:text-left">
            <p className="my-4 md:mt-0">{tabsData[activeTabIndex].content}</p>
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 transition duration-500 mt-2 md:mt-6"
              href={tabsData[activeTabIndex].link}
              target="_blank"
              rel="noreferrer"
            >
              Link to GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
