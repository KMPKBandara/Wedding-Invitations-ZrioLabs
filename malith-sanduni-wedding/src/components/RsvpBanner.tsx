import { weddingConfig as config } from "@/src/config/weddingConfig";

type RsvpBannerProps = {
  onRsvp: () => void;
};

export function RsvpBanner({ onRsvp }: RsvpBannerProps) {
  return (
    <section id="rsvp" className="rsvp-banner">
      <img src={config.images.venue} alt="" aria-hidden="true" />
      <div className="rsvp-banner-overlay" />
      <div className="rsvp-banner-border" />
      <div className="rsvp-banner-content" data-reveal>
        <p className="eyebrow text-gold">{config.rsvp.eyebrow} by {config.wedding.rsvpDeadline}</p>
        <h2>{config.rsvp.title}</h2>
        <p>{config.rsvp.description}</p>
        <button className="button-light" type="button" onClick={onRsvp}>{config.rsvp.openButton} →</button>
      </div>
    </section>
  );
}
