"use client";

import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2su10yj",
        "template_g1tcepg",
        form.current,
        "0ef5fsFZL3Cgc4ice"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-5xl md:text-6xl tracking-[0.4em] mb-6 text-center"
      >
        CONTACT
      </motion.h2>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-gray-300 text-lg md:text-xl mb-16 text-center max-w-xl"
      >
        Tell us your vision and we’ll bring it to life.
      </motion.p>

      {/* CONTENT */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-left space-y-8 text-gray-300 text-lg"
        >
          <p>
            <span className="text-white text-xl">Location:</span><br />
            Abu Dhabi, UAE
          </p>

          <p>
            <span className="text-white text-xl">Phone:</span><br />
            +971 54 552 9189
          </p>

          <p>
            <span className="text-white text-xl">Email:</span><br />
            info@swingmood.ae
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <input
            name="from_name"
            placeholder="Name"
            required
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] transition"
          />

          <input
            name="from_email"
            placeholder="Email"
            required
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] transition"
          />

          <input
            name="event_type"
            placeholder="Type of Event"
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] transition"
          />

          <textarea
            name="message"
            placeholder="Tell us about your vision..."
            rows="4"
            required
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] resize-none transition"
          ></textarea>

          <button
            type="submit"
            className="mt-6 border border-[#C6A96B] text-[#C6A96B] py-4 text-lg tracking-[0.35em] hover:bg-[#C6A96B] hover:text-black transition-all duration-300"
          >
            SUBMIT
          </button>
        </motion.form>

      </div>
    </section>
  );
}