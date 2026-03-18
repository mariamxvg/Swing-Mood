"use client";

import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";
import translations from "../../translations.js";

export default function ContactSection({ lang }) {
  const form = useRef();
const t = translations[lang];
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
          alert(t.success);
        },
        (error) => {
          alert(t.error);
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pb-24"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-5xl md:text-6xl tracking-[0.4em] mb-6 text-center"
      >
        {t.contact_title}
      </motion.h2>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-gray-300 text-lg md:text-xl mb-16 text-center max-w-xl"
      >
        {t.contact_desc}
      </motion.p>

      {/* CONTENT */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-left space-y-6"
        >
          <div>
            <p className="text-gray-400 text-sm tracking-wide">{t.location}</p>
            <p className="text-lg font-light">Abu Dhabi, UAE</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm tracking-wide">{t.phone}</p>
            <p className="text-lg font-light">+971 54 552 9189</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm tracking-wide">{t.email}</p>
            <p className="text-lg font-light">info@swingmood.ae</p>
          </div>
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
            placeholder={t.name}
            required
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] transition"
          />

          <input
            name="from_email"
            placeholder={t.email_input}
            required
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] transition"
          />

          <input
            name="event_type"
            placeholder={t.event_type}
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] transition"
          />

          <textarea
            name="message"
            placeholder={t.message}
            rows="4"
            required
            className="bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#C6A96B] resize-none transition"
          ></textarea>

          <button
            type="submit"
            className="mt-10 border border-[#C6A96B] text-[#C6A96B] py-4 text-lg tracking-[0.35em] hover:bg-[#C6A96B] hover:text-black transition-all duration-300"
          >
            {t.submit}
          </button>
        </motion.form>

      </div>
    </section>
  );
}