import { SectionHeading } from "@/src/components/SectionHeading";
import { weddingConfig as config } from "@/src/config/weddingConfig";

export function StorySection() {
  return (
    <>
      <section id="welcome" className="section welcome-section">
        <div className="welcome-inner" data-reveal>
          <p className="eyebrow text-clay">{config.welcome.eyebrow}</p>
          <h2>{config.welcome.title}</h2>
          <p className="welcome-quote">“{config.welcome.quote}”</p>
          <div className="small-divider"><span>◆</span></div>
          <p className="welcome-description">{config.welcome.description}</p>
        </div>
      </section>

      <section id="story" className="section story-section">
        <div className="site-container story-grid">
          <div className="story-image-wrap" data-reveal="left">
            <img src={config.images.hero} alt={`${config.couple.partnerOne} and ${config.couple.partnerTwo}`} className="story-image" />
            <div className="story-detail-image">
              <img src={config.images.details} alt="Wedding stationery details" />
            </div>
          </div>
          <div className="story-copy" data-reveal="right">
            <SectionHeading eyebrow={config.story.eyebrow} title={config.story.title} />
            <div className="body-copy">
              {config.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="site-container">
          <div className="timeline-grid">
            {config.story.timeline.map((item, index) => (
              <article key={item.year} className="timeline-card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
