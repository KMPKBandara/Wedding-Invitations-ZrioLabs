"use client";

import { SectionHeading } from "@/src/components/SectionHeading";
import { weddingConfig as config } from "@/src/config/weddingConfig";
import { downloadCalendarEvent } from "@/src/lib/calendar";

export function EventSections() {
  return (
    <>
      <section id="events" className="section events-section">
        <div className="site-container">
          <div data-reveal>
            <SectionHeading
              eyebrow={config.eventSection.eyebrow}
              title={config.eventSection.title}
              description={config.eventSection.description}
              centered
            />
          </div>

          <div className="events-grid">
            {config.events.map((event, index) => (
              <article key={event.id} className="event-card" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <span className="event-number">{event.number}</span>
                <p className="eyebrow text-clay">{event.eyebrow}</p>
                <h3>{event.title}</h3>
                <div className="event-facts">
                  <div>
                    <span>{config.eventSection.dateLabel}</span>
                    <strong>{event.time}</strong>
                    <p>{event.date}</p>
                  </div>
                  <div>
                    <span>{config.eventSection.locationLabel}</span>
                    <strong>{event.venue}</strong>
                    <p>{event.address}</p>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-actions">
                  <a className="button-dark" href={event.mapUrl} target="_blank" rel="noreferrer">
                    {config.eventSection.mapButton} ↗
                  </a>
                  <button className="button-outline" type="button" onClick={() => downloadCalendarEvent(event)}>
                    {config.eventSection.calendarButton} ↓
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section schedule-section">
        <div className="site-container schedule-inner">
          <div data-reveal>
            <SectionHeading eyebrow={config.scheduleSection.eyebrow} title={config.scheduleSection.title} centered />
          </div>
          <div className="schedule-list">
            {config.schedule.map((item, index) => (
              <article key={item.title} className="schedule-row" data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
                <div>
                  <p className="eyebrow text-clay">{item.day}</p>
                  <span>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="schedule-time">
                  <strong>{item.time}</strong>
                  <span>{item.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
