"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const navLinks = [
  { label: "01. HOME", href: "#home" },
  { label: "02. ABOUT", href: "#about" },
  { label: "03. PROJECTS", href: "#projects" },
  { label: "04. SKILLS", href: "#skills" },
  { label: "05. CERTS", href: "#certificates" },
  { label: "06. CONTACT", href: "#contact" },
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
      <nav className="fixed top-3 left-0 right-0 z-50 px-4 max-w-7xl mx-auto transition-all duration-300">
        <div
          className={`neo-border-lg neo-shadow-lg flex justify-between items-center px-4 py-2.5 transition-colors ${
            darkMode
              ? "bg-[#1E1E24] text-white border-black"
              : "bg-white text-black border-black"
          }`}
        >
          {/* Logo / Brand Tag */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#FF007A] text-white neo-border text-sm font-black tracking-wider uppercase neo-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
          >
            <Terminal size={18} className="stroke-[3]" />
            <span>FARDAN.DEV</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] neo-border" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2 font-mono text-xs font-bold">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 uppercase tracking-wider neo-border transition-all duration-150 ${
                  darkMode
                    ? "bg-[#121214] text-white hover:bg-[#00F0FF] hover:text-black neo-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    : "bg-[#FFE600] text-black hover:bg-[#FF007A] hover:text-white neo-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 neo-border neo-shadow-sm font-black transition-all ${
                darkMode
                  ? "bg-[#CCFF00] text-black hover:bg-[#00F0FF]"
                  : "bg-[#00F0FF] text-black hover:bg-[#FF007A] hover:text-white"
              }`}
              aria-label="Toggle Dark Mode"
              title={darkMode ? "Switch to High-Contrast Light Mode" : "Switch to Cyber Dark Mode"}
            >
              {darkMode ? <Sun size={18} className="stroke-[3]" /> : <Moon size={18} className="stroke-[3]" />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 bg-[#FF007A] text-white neo-border neo-shadow-sm transition-all"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={20} className="stroke-[3]" /> : <Menu size={20} className="stroke-[3]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-20 left-4 right-4 z-40 neo-border-lg neo-shadow-xl ${
              darkMode ? "bg-[#121214] text-white" : "bg-[#FFE600] text-black"
            }`}
          >
            <div className="window-header">
              <span>NAVIGATION_MENU.SYS</span>
              <div className="flex gap-1">
                <span className="w-3 h-3 bg-[#FF007A] neo-border rounded-full inline-block" />
                <span className="w-3 h-3 bg-[#FFE600] neo-border rounded-full inline-block" />
                <span className="w-3 h-3 bg-[#00F0FF] neo-border rounded-full inline-block" />
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2 font-mono text-sm font-bold">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 neo-border neo-shadow-sm font-bold uppercase transition-transform active:translate-x-[2px] active:translate-y-[2px] ${
                    darkMode
                      ? "bg-[#1E1E24] text-white hover:bg-[#00F0FF] hover:text-black"
                      : "bg-white text-black hover:bg-[#FF007A] hover:text-white"
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
