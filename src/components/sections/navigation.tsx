"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/calculators", label: "Calculators" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ's" },
];

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 h-[88px] transition-all duration-300 ${
    isSticky ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]" : "bg-transparent"
  }`;

  const logoTextColor = isSticky ? "text-text-dark" : "text-white";
  const navLinkColor = isSticky ? "text-muted-foreground" : "text-white";
  const hamburgerColor = isSticky ? "text-text-dark" : "text-white";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={headerClasses}
    >
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/svgs/6tTbkXggWgQCAJ4DO2QEdXXmgM-1.svg"
              alt="Livohaus logo icon"
              width={32}
              height={32}
            />
          </motion.div>
          <span className={`text-[28px] font-bold ${logoTextColor} transition-colors duration-300`}>
            Livohaus
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {link.href.startsWith("/") ? (
                <Link
                  href={link.href}
                  className={`nav-link ${navLinkColor} transition-colors hover:text-primary relative group`}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`nav-link ${navLinkColor} transition-colors hover:text-primary relative group`}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              )}
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="hidden items-center gap-3 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-button-hover lg:flex hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.button
            className={`lg:hidden ${hamburgerColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[88px] left-0 w-full bg-white shadow-lg lg:hidden overflow-hidden"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="container flex flex-col items-center gap-6 py-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="nav-link text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="nav-link text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="mt-2 flex items-center gap-3 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-button-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}