"use client";

import { useState } from "react";
import { SectionHeading } from "@/src/components/SectionHeading";
import { weddingConfig as config } from "@/src/config/weddingConfig";

export function GiftsFaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="section gifts-section">
        <div className="site-container">
          <div data-reveal>
            <SectionHeading
              eyebrow={config.gifts.eyebrow}
              title={config.gifts.title}
              description={config.gifts.description}
              centered
              light
            />
          </div>
          <div className="gifts-grid">
            {config.gifts.items.map((gift, index) => (
              <a key={gift.title} href={gift.url} className="gift-card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <span>{gift.number}</span>
                <h3>{gift.title}</h3>
                <p>{gift.description}</p>
                <strong>{gift.button} ↗</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="site-container faq-grid">
          <div className="faq-intro" data-reveal>
            <SectionHeading eyebrow={config.faq.eyebrow} title={config.faq.title} description={config.faq.description} />
            <a className="text-link" href={`mailto:${config.wedding.contactEmail}`}>{config.faq.emailButton}</a>
          </div>
          <div className="faq-list" data-reveal>
            {config.faq.items.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article key={item.question} className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{item.question}</span>
                    <strong>{isOpen ? "−" : "+"}</strong>
                  </button>
                  <div className="faq-answer"><p>{item.answer}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
