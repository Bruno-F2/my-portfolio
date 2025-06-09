"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUp } from "lucide-react";

export default function Header() {
  const navLinks = [
    { title: "Inicio", href: "/" },
    { title: "Sobre mí", href: "/#" },
    { title: "Servicios", href: "/#" },
    { title: "Portfolio", href: "/#" },
    { title: "Contáctame", href: "/#" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Efecto para el botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="flex justify-between pt-0 pb-0 pr-5 pl-5">
        <div className="p-2">
          <a href="/">
            <motion.img
              src="/logo.png"
              alt="Logo"
              whileHover={{ scale: 1.01 }}
              className="w-24 md:w-36"
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center p-5 space-x-2">
          {navLinks.map((link) => {
            return (
              <motion.a
                key={link.title}
                href={link.href}
                className="font-semibold text-newBlue-200 opacity-80 p-2 hover:opacity-100 transition-opacity"
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                <span className="link link-underline link-underline-black">
                  {" "}
                  {link.title}
                </span>
              </motion.a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 pr-1 self-center cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring" }}
        >
          {isOpen ? (
            <X className="text-newBlue-200" size={24} />
          ) : (
            <Menu className="text-newBlue-200" size={24} />
          )}
        </motion.button>

        {/* Mobile Navigation */}
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden py-4 px-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="text-newBlue-200 font-semibold p-2 self-center"
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.1 + index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-newBlue-200 text-white p-3 rounded-full shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Ir arriba"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
