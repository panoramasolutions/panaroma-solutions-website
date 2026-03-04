import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../assets/logo.svg';
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = ["hero", "about", "services", "why-choose-us", "faqs", "contact"];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId);
              }
            });
          },
          { threshold: 0.5 } // At least 50% of the section needs to be visible
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Our services" },
    { href: "#why-choose-us", label: "Why Choose us" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container-fluid mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-[80px] md:h-auto py-2 md:py-0">
          <Link to="/" className="flex-shrink-0 z-50 relative">
            <img
              src={logo}
              alt="Panorama Logo"
              className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm px-4 lg:px-6 py-2 rounded-full transition-colors text-white ${activeSection === link.href.substring(1) ? "bg-active-nav-color font-bold" : "hover:bg-white/10"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <style>{`
            @keyframes spin {
              0% {
                transform: translate(-50%, -50%) rotate(0deg);
              }
              100% {
                transform: translate(-50%, -50%) rotate(180deg);
              }
            }
            
            .group:hover {
              border-color: transparent;
            }
            .animated-border-box {
              position: absolute;
              inset: 0;
              border-radius: 32px;
              padding: 2px;
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
            }
            .group:hover .animated-border-box {
              opacity: 1;
            }
            .animated-border-box::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 150%;
              height: 500%;
              background: conic-gradient(from 0deg, #00EEFF 10%, white 50%, black 80%, #00EEFF 100%);
              animation: spin 0.5s ease-in-out infinite alternate;
            }
          `}</style>

          <Link to="/solutions" className="group relative hidden md:flex items-center justify-center w-auto px-5 h-11 rounded-32 bg-gradient-to-b from-white/24 via-black/49 to-white/49 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] text-white font-bold text-[15px] hover:bg-[#06303E] cursor-pointer overflow-hidden">
            <span className="relative z-10 whitespace-nowrap">Explore solutions</span>
            <div className="animated-border-box"></div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 relative text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center pt-20 pb-10 px-4 md:hidden h-min"
              >
                <nav className="flex flex-col items-center gap-6 w-full">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-xl font-medium text-white ${activeSection === link.href.substring(1) ? "text-active-nav-color" : ""
                        }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <Link
                    to="/solutions"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-4 flex items-center justify-center w-full max-w-[280px] h-12 rounded-32 bg-gradient-to-b from-white/24 via-black/49 to-white/49 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] text-white font-bold text-lg transition-opacity hover:bg-none hover:bg-[#06303E] hover:border-white hover:border-[1px] cursor-pointer"
                  >
                    Explore Solutions
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
