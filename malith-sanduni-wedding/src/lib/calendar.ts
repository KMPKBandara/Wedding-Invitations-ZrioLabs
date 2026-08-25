import type { WeddingEvent } from "@/src/config/weddingConfig";

function escapeValue(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function downloadCalendarEvent(event: WeddingEvent): void {
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//EN",
    "BEGIN:VEVENT",
    `UID:${event.id}-wedding@example.com`,
    `DTSTART:${event.calendar.startUtc}`,
    `DTEND:${event.calendar.endUtc}`,
    `SUMMARY:${escapeValue(event.title)}`,
    `DESCRIPTION:${escapeValue(event.description)}`,
    `LOCATION:${escapeValue(event.calendar.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([calendar], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.id}-wedding.ics`;
  link.click();
  window.URL.revokeObjectURL(url);
}
