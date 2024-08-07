import React from "react";
import SectionTitle from "./SectionTitle";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-2 py-24">
      <SectionTitle title="Contact" />
      <div className="mx-auto flex flex-col gap-8 items-center max-w-[600px] text-center">
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Feel free to reach out to me for inquiries, collaborations, or just to say hello! I am always eager to connect
          and discuss exciting opportunities.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">You can find me here:</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;
