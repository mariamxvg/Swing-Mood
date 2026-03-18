"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "services", "about", "contact"];

      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 150;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "services", "about", "contact"];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      {/* 🔥 SCROLLABLE NAV CONTAINER */}
      <div
        className="flex justify-start md:justify-center gap-10 md:gap-16 text-sm md:text-base tracking-[0.4em] overflow-x-auto whitespace-nowrap px-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >

        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`relative group transition-all duration-300 flex-shrink-0 ${
              active === item
                ? "text-[#C6A96B]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.toUpperCase()}

            {/* underline */}
            <span
              className={`absolute left-0 -bottom-2 h-[1px] bg-[#C6A96B] transition-all duration-400 ${
                active === item
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`}
            ></span>

            {/* glow effect */}
            {active === item && (
              <span className="absolute inset-0 blur-md opacity-20 text-[#C6A96B]">
                {item.toUpperCase()}
              </span>
            )}
          </a>
        ))}

      </div>
    </div>
  );
}