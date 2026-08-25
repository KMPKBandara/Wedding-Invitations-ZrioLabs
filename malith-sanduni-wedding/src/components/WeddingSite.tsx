"use client";

import { type CSSProperties, useCallback, useEffect, useState } from "react";
import { EventSections } from "@/src/components/EventSections";
import { GallerySection } from "@/src/components/GallerySection";
import { GiftsFaqSection } from "@/src/components/GiftsFaqSection";
import { HeroSection } from "@/src/components/HeroSection";
import { RsvpBanner } from "@/src/components/RsvpBanner";
import { RsvpModal } from "@/src/components/RsvpModal";
import { SiteHeader } from "@/src/components/SiteHeader";
import { StorySection } from "@/src/components/StorySection";
import { TravelSection } from "@/src/components/TravelSection";
import { weddingConfig as config } from "@/src/config/weddingConfig";
import { useReveal } from "@/src/hooks/useReveal";

export function WeddingSite() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const openRsvp = useCallback(() => setRsvpOpen(true), []);
  const closeRsvp = useCallback(() => setRsvpOpen(false), []);
  useReveal();

  useEffect(() => {
    document.title = config.seo.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", config.seo.description);
  }, []);

  const themeStyle = {
    "--forest": config.theme.forest,
    "--forest-dark": config.theme.forestDark,
    "--ivory": config.theme.ivory,
    "--stone": config.theme.stone,
    "--clay": config.theme.clay,
    "--gold": config.theme.gold,
    "--ink": config.theme.ink,
  } as CSSProperties;

  return (
    <main style={themeStyle}>
      <SiteHeader onRsvp={openRsvp} />
      <HeroSection onRsvp={openRsvp} />
      <StorySection />
      <EventSections />
      <TravelSection />
      <GallerySection />
      <GiftsFaqSection />
      <RsvpBanner onRsvp={openRsvp} />

      <footer className="site-footer">
        <div className="site-container footer-main">
          <div>
            <p className="footer-names">{config.couple.partnerOne} <em>&</em> {config.couple.partnerTwo}</p>
            <p className="footer-date">{config.wedding.dateLong} · {config.wedding.location}</p>
          </div>
          <a className="footer-contact" href={`mailto:${config.wedding.contactEmail}`}>{config.footer.contactButton}</a>
        </div>
        <div className="site-container footer-bottom">
          <p>{config.footer.note}</p>
          <a href="#home">{config.footer.backToTop} ↑</a>
        </div>
      </footer>

      <RsvpModal open={rsvpOpen} onClose={closeRsvp} />
    </main>
  );
}
