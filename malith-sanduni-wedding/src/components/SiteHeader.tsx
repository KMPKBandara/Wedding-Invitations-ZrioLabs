"use client";

import { useEffect, useState } from "react";
import { weddingConfig as config } from "@/src/config/weddingConfig";

type SiteHeaderProps = {
  onRsvp: () => void;
};

export function SiteHeader({ onRsvp }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openRsvp = () => {
    setMenuOpen(false);
    onRsvp();
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="header-inner">
          <nav className="desktop-nav" aria-label="Primary navigation">
            {config.navigation.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#home" className="monogram" aria-label="Wedding home">
            {config.couple.monogram}
          </a>

          <div className="desktop-nav desktop-nav-right">
            {config.navigation.slice(3).map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <button className="header-rsvp" type="button" onClick={onRsvp}>
              RSVP
            </button>
          </div>

          <button
            className="menu-button"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <span className="monogram">{config.couple.monogram}</span>
          <button className="menu-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {config.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="button-light mobile-rsvp" type="button" onClick={openRsvp}>
          {config.hero.rsvpButton}
        </button>
      </div>
    </>
  );
}
