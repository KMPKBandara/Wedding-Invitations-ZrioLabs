"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/src/components/SectionHeading";
import { weddingConfig as config } from "@/src/config/weddingConfig";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    if (activeImage === null) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") setActiveImage((activeImage + 1) % config.gallery.images.length);
      if (event.key === "ArrowLeft") setActiveImage((activeImage - 1 + config.gallery.images.length) % config.gallery.images.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeImage]);

  const move = (direction: number) => {
    if (activeImage === null) return;
    setActiveImage((activeImage + direction + config.gallery.images.length) % config.gallery.images.length);
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="site-container">
        <div data-reveal>
          <SectionHeading
            eyebrow={config.gallery.eyebrow}
            title={config.gallery.title}
            description={config.gallery.description}
            centered
          />
        </div>
        <div className="gallery-grid">
          {config.gallery.images.map((image, index) => (
            <button
              type="button"
              key={`${image.alt}-${index}`}
              className={`gallery-item ${image.className}`}
              onClick={() => setActiveImage(index)}
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 60}ms` }}
              aria-label={image.alt}
            >
              <img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} />
              <span>View +</span>
            </button>
          ))}
        </div>
      </div>

      {activeImage !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo gallery" onMouseDown={() => setActiveImage(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label={config.gallery.closeLabel}>×</button>
          <button className="lightbox-previous" type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label={config.gallery.previousLabel}>‹</button>
          <img src={config.gallery.images[activeImage].src} alt={config.gallery.images[activeImage].alt} onMouseDown={(event) => event.stopPropagation()} />
          <button className="lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label={config.gallery.nextLabel}>›</button>
          <p>{activeImage + 1} / {config.gallery.images.length}</p>
        </div>
      ) : null}
    </section>
  );
}
