"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-[#0a0e18]/90 backdrop-blur-xl border-b border-[#427AB5]/25 shadow-lg shadow-[#427AB5]/10"
              : "bg-white/90 backdrop-blur-xl border-b border-[#427AB5]/25 shadow-lg shadow-[#427AB5]/15"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  darkMode ? "text-[#FFE8BE]/80 hover:text-[#FFE8BE]" : "text-[#406AAF] hover:text-[#406AAF]"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-[#427AB5]/0 group-hover:bg-[#427AB5]/20"
                    : "bg-[#427AB5]/0 group-hover:bg-[#427AB5]/12"
                }`} />
              </button>
            ))}
          </motion.div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-[#427AB5]/20 hover:bg-[#427AB5]/35 text-[#F7DD7D]"
                  : "bg-[#427AB5]/12 hover:bg-[#427AB5]/22 text-[#406AAF]"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2.5 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-[#427AB5]/20 hover:bg-[#427AB5]/35 text-[#F7DD7D]"
                  : "bg-[#427AB5]/12 hover:bg-[#427AB5]/22 text-[#406AAF]"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-[72px] left-0 right-0 z-40 mx-4 rounded-2xl border shadow-2xl ${
              darkMode
                ? "bg-[#0d1424]/95 backdrop-blur-xl border-[#427AB5]/25 shadow-[#427AB5]/15"
                : "bg-white/95 backdrop-blur-xl border-[#427AB5]/25 shadow-[#427AB5]/15"
            }`}
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    darkMode
                      ? "text-[#FFE8BE]/80 hover:text-[#FFE8BE] hover:bg-[#427AB5]/20"
                      : "text-[#406AAF] hover:bg-[#427AB5]/12"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
