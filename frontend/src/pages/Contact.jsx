import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {

  const formInitialDetails = {
    formName: "",
    formEmail: "",
    formMessage: "",
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('http://localhost:4000/api/messages', {
      method: 'POST',
      headers: {"Content-Type" : "application/json;charset=utf-8"},
      body: JSON.stringify(formDetails)
    });
    setButtonText("Send");
    let result = response.json();

    setFormDetails(formInitialDetails);

    if (result.code === 200) {
      setStatus({success: true, message: "Message sent sucessfully"});
    } else {
      setStatus({success: false, message: "Something went wrong, try again later!"});
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl text-yellow">
            CONTACT ME
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
    
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5 items-center">

        {/* IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="/assets/contact-image.jpeg" alt="contact" className="max-h-[600px]"/>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form onSubmit={handleSubmit}>

            {/* NAME FIELD */}
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="name"
              value={formDetails.formName}
              onChange={(e) => onFormUpdate("formName", e.target.value)}
            />

            {/* EMAIL FIELD */}
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="email"
              value={formDetails.formEmail}
              onChange={(e) => onFormUpdate("formEmail", e.target.value)}
            />

            {/* MESSAGE FIELD */}
            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="message"
              rows="4"
              cols="50"
              value={formDetails.formMessage}
              onChange={(e) => onFormUpdate("formMessage", e.target.value)}
            />
            
            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white 
                transition duration-500"
            >
                {buttonText}
            </button>
            <div>
              <p>{status.message}</p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
