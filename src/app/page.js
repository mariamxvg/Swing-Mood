"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>

 {/* HERO */}
<motion.div
  id="home"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false }}
  transition={{ duration: 1 }}
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
>
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
      THE ART OF ATMOSPHERE
    </motion.p>

  </div>
</motion.div>

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
            SERVICES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            className="max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed mb-16"
          >
            From intimate private gatherings to full-scale experiences, we design and execute every detail.
            Music, artists, lighting, atmosphere, concept, and production — from idea to reality.
            Whatever you imagine, we bring to life.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {[
              {
                title: "Full Event Planning",
                desc: "Complete A–Z planning and execution for events of any scale."
              },
              {
                title: "Music & Artists",
                desc: "Curating DJs, bands, and performers tailored to your vibe."
              },
              {
                title: "Atmosphere & Design",
                desc: "Lighting, mood, and immersive environments crafted with intention."
              },
              {
                title: "Private Experiences",
                desc: "Weddings, dinners, and exclusive gatherings designed uniquely for you."
              }
            ].map((service, i) => (
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

  {/* BACKGROUND IMAGE */}
  <img 
    src="/cinematic.jpg"
    alt="Swing Mood Experience"
    className="absolute w-full h-full object-cover opacity-40"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* GOLD GLOW (subtle) */}
  <div className="absolute w-[500px] h-[500px] bg-[#C6A96B] opacity-5 blur-[180px] rounded-full"></div>

  {/* TEXT */}
  <div className="relative z-10 text-center px-6">
    <h2 className="text-3xl md:text-5xl tracking-[0.4em] text-white leading-relaxed">
      WHERE MUSIC SPEAKS  
      <br />
      SILENCE LISTENS
    </h2>
  </div>

</section>

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
            ABOUT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            Swing Mood is built on the belief that every moment carries a feeling — and that feeling can be designed.
            <br /><br />
            We craft experiences where music, lighting, space, and energy come together to create something unforgettable.
            <br /><br />
            This is not just event planning. This is the art of atmosphere.
          </motion.p>

        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />

      {/* WHATSAPP BUTTON (ADDED BACK) */}
      <a
        href="https://wa.me/971545529189?text=Hi%20Swing%20Mood%2C%20I%20want%20to%20plan%20an%20event"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="flex items-center gap-4">

          <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-base tracking-widest text-[#C6A96B]">
            CHAT WITH US
          </span>

          <div className="w-16 h-16 rounded-full border border-[#C6A96B] flex items-center justify-center backdrop-blur-md bg-black/60 transition-all duration-300
            group-hover:bg-[#C6A96B]
            shadow-[0_0_20px_rgba(198,169,107,0.15)]
            group-hover:shadow-[0_0_30px_rgba(198,169,107,0.4)]
          ">

            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7 text-[#C6A96B] group-hover:text-black transition"
              fill="currentColor"
            >
              <path d="M16 .396C7.163.396 0 7.558 0 16.396c0 2.893.755 5.613 2.073 7.98L0 32l7.827-2.049A15.905 15.905 0 0 0 16 32c8.837 0 16-7.162 16-15.604C32 7.558 24.837.396 16 .396z"/>
            </svg>

          </div>
        </div>
      </a>

    </>
  );
}