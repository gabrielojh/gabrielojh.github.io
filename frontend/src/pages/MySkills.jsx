import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javaIcon from "../assets/java.svg";
import cIcon from "../assets/c.svg";
import springbootIcon from "../assets/springboot.svg";
import pythonIcon from "../assets/python.svg";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const responsive = {
    LargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="skills" className="pt-10 pb-24 relative">
      <div className="px-4 skill-bx">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Runs once, requires 50% of div to be shown
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-playfair xs:font-semibold text-3xl md:text-7xl text-center underline decoration-2 underline-offset-4">
            MY <span className="text-red ">SKILLS</span>
          </h2>
          <p className="font-opensans text-center mt-8 mx-auto md:mx-40 md:text-md">
            Through the projects and modules I have taken in University, I have
            used several coding languages and frameworks. However, I am
            constantly seeking opportunities to learn new technologies and
            expand my skill set. Listed below are some of the coding languages,
            frameworks and databases I am familiar with.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Runs once, requires 50% of div to be shown
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 , y: 50},
            visible: { opacity: 1 , y: 0},
          }}
        >
          <div className="mt-28">
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slide"
            >
              <div className="item">
                <img
                  alt="Java Icon"
                  src={javaIcon}
                  className="mx-auto w-[50px] md:w-[150px]"
                />
                <h5 className="font-opensans xs:font-semibold text-4xl text-center">
                  Java
                </h5>
              </div>
              <div className="item">
                <img
                  alt="Spring Boot Icon"
                  src={springbootIcon}
                  className="mx-auto w-[50px] md:w-[150px]"
                />
                <h5 className="font-opensans xs:font-semibold text-4xl text-center">
                  Spring Boot
                </h5>
              </div>
              <div className="item">
                <img
                  alt="C Icon"
                  src={cIcon}
                  className="mx-auto w-[50px] md:w-[150px]"
                />
                <h5 className="font-opensans xs:font-semibold text-4xl text-center">
                  C
                </h5>
              </div>
              <div className="item">
                <img
                  alt="Python Icon"
                  src={pythonIcon}
                  className="mx-auto w-[50px] md:w-[150px]"
                />
                <h5 className="font-opensans xs:font-semibold text-4xl text-center">
                  Python
                </h5>
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
