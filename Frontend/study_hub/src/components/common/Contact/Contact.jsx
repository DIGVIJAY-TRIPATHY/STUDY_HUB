
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactIntro from "./ContactIntro";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactFAQ from "./ContactFAQ";
import ContactCTA from "./ContactCTA";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div id="contact" className="scroll-mt-20">
      <ContactIntro />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};

export default Contact;
