import { SectionHeading } from "@/src/components/SectionHeading";
import { weddingConfig as config } from "@/src/config/weddingConfig";

export function TravelSection() {
  return (
    <section id="travel" className="section travel-section">
      <div className="site-container">
        <div className="travel-grid">
          <div className="travel-image-wrap" data-reveal="left">
            <img src={config.images.venue} alt="Outdoor wedding reception in Kandy" />
            <p>{config.travel.imageCaption}</p>
          </div>
          <div className="travel-copy" data-reveal="right">
            <SectionHeading
              eyebrow={config.travel.eyebrow}
              title={config.travel.title}
              description={config.travel.description}
            />
            <div className="travel-list">
              {config.travel.items.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="hotels-block">
          <div className="hotels-intro" data-reveal>
            <p className="eyebrow text-clay">{config.travel.eyebrow}</p>
            <h2>{config.travel.hotelTitle}</h2>
          </div>
          <div className="hotels-grid">
            {config.travel.hotels.map((hotel, index) => (
              <a
                key={hotel.name}
                href={hotel.url}
                target="_blank"
                rel="noreferrer"
                className="hotel-card"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="eyebrow text-clay">{hotel.distance}</span>
                <h3>{hotel.name}</h3>
                <p>{hotel.description}</p>
                <strong>{config.travel.hotelButton} ↗</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
