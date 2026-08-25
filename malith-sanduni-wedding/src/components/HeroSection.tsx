"use client";

import { weddingConfig as config } from "@/src/config/weddingConfig";
import { useCountdown } from "@/src/hooks/useCountdown";

type HeroSectionProps = {
  onRsvp: () => void;
};

export function HeroSection({ onRsvp }: HeroSectionProps) {
  const countdown = useCountdown(config.wedding.dateIso);
  const countdownValues = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <section id="home" className="hero-section">
      <img className="hero-image" src={config.images.hero} alt={`${config.couple.partnerOne} and ${config.couple.partnerTwo} in the tea hills`} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow hero-animate delay-1">{config.hero.eyebrow}</p>
        <h1 className="hero-title hero-animate delay-2">
          <span>{config.couple.partnerOne}</span>
          <em>&</em>
          <span>{config.couple.partnerTwo}</span>
        </h1>
        <div className="hero-meta hero-animate delay-3">
          <span>{config.wedding.dateShort}</span>
          <i />
          <span>{config.wedding.location}</span>
        </div>
        <p className="hero-announcement hero-animate delay-4">{config.hero.announcement}</p>
        <button className="hero-button hero-animate delay-4" type="button" onClick={onRsvp}>
          {config.hero.rsvpButton}
        </button>
      </div>

      <a href="#welcome" className="hero-explore">
        <span>↓</span> {config.hero.exploreLabel}
      </a>

      <div className="countdown-card" aria-label="Wedding countdown">
        {countdown.finished ? (
          <p className="countdown-finished">Today is our day.</p>
        ) : (
          countdownValues.map((item) => (
            <div key={item.label} className="countdown-item">
              <strong>{String(item.value).padStart(2, "0")}</strong>
              <span>{item.label}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
