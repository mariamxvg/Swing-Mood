"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import ContactSection from "./components/ContactSection";
import translations from "../translations";
import { useState, useEffect, useRef } from "react";
import { Noto_Kufi_Arabic } from "next/font/google";
const arabicFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});
export default function Home() {
  const [lang, setLang] = useState("en");
  const [openLang, setOpenLang] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
  function handleClickOutside(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenLang(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const t = translations[lang];  return (
  <div
  dir={lang === "ar" ? "rtl" : "ltr"}
  className={lang === "ar" ? arabicFont.className : ""}
>
      {/* HERO */}
      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
      >
{/* 🌐 LANGUAGE DROPDOWN */}
<div ref={dropdownRef} className={`absolute top-6 ${lang === "ar" ? "left-6" : "right-6"} z-50`}>
  <button
    onClick={() => setOpenLang(!openLang)}
    className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition"
  >
    🌐 {lang.toUpperCase()}
  </button>

  {openLang && (
    <motion.div
  initial={{ opacity: 0, scale: 0.95, y: -10 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.2 }}
  className={`absolute mt-3 w-44 bg-black border border-white/10 rounded-xl shadow-lg overflow-hidden ${
    lang === "ar" ? "left-0" : "right-0"
  }`}
>
      {["en", "ar", "ru", "es", "hi"].map((l) => (
        <button
          key={l}
          onClick={() => {
            setLang(l);
            setOpenLang(false);
          }}
          className={`block w-full text-left px-4 py-2 hover:bg-white/10 transition ${
            lang === l ? "text-[#C6A96B]" : "text-white"
          }`}
        >
          {l === "en" && "English"}
          {l === "ar" && "العربية"}
          {l === "ru" && "Русский"}
          {l === "es" && "Español"}
          {l === "hi" && "हिंदी"}
        </button>
      ))}
    </motion.div>
  )}
</div>
        
  
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#141414_0%,_#000_75%)]"></div>


        <div className="absolute w-[900px] h-[900px] bg-[#C6A96B] opacity-10 blur-[220px] rounded-full top-[65%] left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#C6A96B] opacity-5 blur-[180px] rounded-full top-[20%] left-1/2 -translate-x-1/2"></div>


        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-[-120px]"
          >
            <Image
              src="/LOGOweb.png"
              alt="Swing Mood Logo"
              width={480}
              height={480}
              priority
            />
          </motion.div>


          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl tracking-[0.35em] text-white"
          >
            {t.hero}
          </motion.p>
        </div>
      </motion.div>

{/* 360 APPROACH SECTION */}
<section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white bg-black overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#141414_0%,_#000_75%)]"></div>

  {/* GLOW */}
  <div className="absolute w-[900px] h-[900px] bg-[#C6A96B] opacity-10 blur-[220px] rounded-full top-[60%] left-1/2 -translate-x-1/2"></div>

  <div className="relative z-10 w-full max-w-6xl">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20 text-center"
    >
      <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight">
        {t.approach_title}
      </h2>
      <p className="text-gray-400 mt-4 tracking-[0.2em] uppercase text-sm">
        {t.approach_desc}
      </p>
    </motion.div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
     {t.approach_items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="border border-white/10 rounded-2xl p-10 bg-white/5 hover:bg-white/10 transition"
        >
          <span className="text-[#C6A96B] text-xs tracking-widest">
            0{i + 1}
          </span>

          <h3 className="mt-4 text-xl tracking-wide">
            {item}
          </h3>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#141414_0%,_#000_75%)]"></div>


        <div className="absolute w-[900px] h-[900px] bg-[#C6A96B] opacity-15 blur-[240px] rounded-full top-[65%] left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#C6A96B] opacity-10 blur-[200px] rounded-full top-[20%] left-1/2 -translate-x-1/2"></div>


        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-5xl md:text-6xl tracking-[0.4em] mb-10"
          >
            {t.services_title}
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            className="max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed mb-16"
          >
            {t.services_desc}
          </motion.p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {t.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
                className="border border-white/10 p-10 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 text-left"
              >
                <h3 className="text-xl md:text-2xl tracking-[0.25em]">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg mt-4">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* CINEMATIC SECTION */}
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

  {/* CINEMATIC BACKGROUND (ZOOM EFFECT) */}
  <motion.img 
    src="/cinematic.png"
    alt="Swing Mood Experience"
    initial={{ scale: 1 }}
    whileInView={{ scale: 1.1 }}
    transition={{ duration: 12, ease: "easeOut" }}
    className="absolute w-full h-full object-cover opacity-60"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* SUBTLE GOLD GLOW */}
  <div className="absolute w-[500px] h-[500px] bg-[#C6A96B] opacity-5 blur-[180px] rounded-full"></div>

  {/* TEXT (ANIMATED) */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: false }}
    className="relative z-10 text-center px-6"
  >
    <h2 className="text-3xl md:text-5xl tracking-[0.4em] text-white leading-relaxed">
      {t.cinematic_1} 
      <br />
      {t.cinematic_2}
    </h2>
  </motion.div>

</section>


{/* TICKER SECTION */}
<div className="py-28 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap relative">

  {/* LEFT FADE */}
  <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />

  {/* RIGHT FADE */}
  <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

  <div className="flex animate-marquee gap-28 items-center">
    {t.ticker.map((item, idx) => (
      <span
  key={idx}
  className={`
    ${lang === "ar" 
      ? "text-white/40 text-5xl md:text-6xl font-serif italic tracking-normal" 
      : "text-white/40 text-4xl md:text-5xl font-serif italic tracking-[0.5em]"
    }
    transition-all duration-500
    hover:text-[#C6A96B]
    hover:scale-105
    cursor-default
  `}
>
  {item}
</span>
    ))}
  </div>

</div>
      {/* ABOUT */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#141414_0%,_#000_75%)]"></div>


        <div className="absolute w-[900px] h-[900px] bg-[#C6A96B] opacity-15 blur-[240px] rounded-full top-[65%] left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#C6A96B] opacity-10 blur-[200px] rounded-full top-[20%] left-1/2 -translate-x-1/2"></div>


        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-5xl md:text-6xl tracking-[0.4em] mb-12"
          >
            {t.about_title}
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            {t.about_desc}
          </motion.p>
        </div>
      </section>




      {/* THE VISION SECTION (Restored exactly as requested) */}
      <section id="vision" className="relative py-40 px-6 z-10 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full border border-white/5 p-12 md:p-24 rounded-[3rem] backdrop-blur-3xl bg-white/[0.02] text-center"
        >
          <span className="text-[#C6A96B] tracking-[0.5em] text-sm uppercase mb-8 block">{t.vision_label}</span>
          <h2 className="text-5xl md:text-7xl mb-10 italic font-serif uppercase leading-tight">{t.vision_title}</h2>
          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed font-light italic">
            {t.vision_desc}
          </p>
          <div className="mt-12 w-16 h-[1px] bg-[#C6A96B] mx-auto opacity-30" />
        </motion.div>
      </section>

      {/* CONTACT */}
      <ContactSection lang={lang} />


      {/* WHATSAPP BUTTON (ADDED BACK) */}
      <a
        href="https://wa.me/971545529189?text=Hi%20Swing%20Mood%2C%20I%20want%20to%20plan%20an%20event"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="flex items-center gap-4">
          <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-base tracking-widest text-[#C6A96B]">
            {t.whatsapp}
          </span>


          <div className="w-16 h-16 rounded-full border border-[#C6A96B] flex items-center justify-center backdrop-blur-md bg-black/60 transition-all duration-300 group-hover:bg-[#C6A96B] shadow-[0_0_20px_rgba(198,169,107,0.15)] group-hover:shadow-[0_0_30px_rgba(198,169,107,0.4)]">
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
  <path d="M19.11 17.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.30-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.30.3-.50.10-.20.05-.37-.02-.52-.07-.15-.67-1.60-.92-2.20-.24-.58-.49-.50-.67-.50-.17 0-.37-.02-.57-.02-.20 0-.52.07-.80.37-.27.30-1.05 1.02-1.05 2.48 0 1.45 1.08 2.85 1.23 3.05.15.20 2.13 3.25 5.16 4.56.72.31 1.28.50 1.72.64.72.23 1.37.20 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.70.25-1.30.17-1.42-.08-.12-.27-.20-.57-.35z"/>
</svg>
          </div>
        </div>
      </a>
    </div>
  );
}