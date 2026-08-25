type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${centered ? "section-heading-centered" : ""}`}>
      <p className={`eyebrow ${light ? "text-gold" : "text-clay"}`}>{eyebrow}</p>
      <h2 className={`display-title ${light ? "text-ivory" : "text-ink"}`}>{title}</h2>
      {description ? (
        <p className={`section-description ${light ? "text-ivory-muted" : "text-ink-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
