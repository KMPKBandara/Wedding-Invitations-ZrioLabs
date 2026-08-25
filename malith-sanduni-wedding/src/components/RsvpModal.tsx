"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { weddingConfig as config } from "@/src/config/weddingConfig";

type RsvpModalProps = {
  open: boolean;
  onClose: () => void;
};

type Step = "lookup" | "form" | "success";

export function RsvpModal({ open, onClose }: RsvpModalProps) {
  const [step, setStep] = useState<Step>("lookup");
  const [guestName, setGuestName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [saving, setSaving] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    const focusTimer = window.setTimeout(() => nameInput.current?.focus(), 120);

    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  const close = () => {
    onClose();
    window.setTimeout(() => {
      setStep("lookup");
      setGuestName("");
      setAttending("yes");
    }, 300);
  };

  const handleLookup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (guestName.trim().length >= 2) setStep("form");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
    window.localStorage.setItem(
      "wedding-rsvp-demo",
      JSON.stringify({ guestName, attending, ...formData, submittedAt: new Date().toISOString() }),
    );
    window.setTimeout(() => {
      setSaving(false);
      setStep("success");
    }, 500);
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="rsvp-modal-title">
        <div className="modal-header">
          <span>{config.couple.monogram}</span>
          <button type="button" onClick={close} aria-label={config.rsvp.closeButton}>×</button>
        </div>
        <div className="modal-body">
          {step === "lookup" ? (
            <div className="modal-step">
              <p className="eyebrow text-clay">{config.rsvp.eyebrow}</p>
              <h2 id="rsvp-modal-title">{config.rsvp.lookupTitle}</h2>
              <p className="modal-description">{config.rsvp.lookupDescription}</p>
              <form onSubmit={handleLookup} className="rsvp-form">
                <label htmlFor="guest-name">{config.rsvp.guestNameLabel}</label>
                <input
                  ref={nameInput}
                  id="guest-name"
                  value={guestName}
                  onChange={(event) => setGuestName(event.target.value)}
                  placeholder={config.rsvp.guestNamePlaceholder}
                  minLength={2}
                  required
                />
                <button className="button-dark button-full" type="submit">{config.rsvp.lookupButton} →</button>
              </form>
            </div>
          ) : null}

          {step === "form" ? (
            <div className="modal-step">
              <button className="modal-back" type="button" onClick={() => setStep("lookup")}>← {config.rsvp.guestNameLabel}</button>
              <p className="eyebrow text-clay">{config.rsvp.eyebrow}</p>
              <h2 id="rsvp-modal-title">{config.rsvp.welcomePrefix}, {guestName}</h2>
              <p className="modal-description">Please reply by {config.wedding.rsvpDeadline}.</p>
              <form onSubmit={handleSubmit} className="rsvp-form form-spaced">
                <fieldset>
                  <legend>{config.rsvp.attendanceQuestion}</legend>
                  <div className="attendance-grid">
                    <label className={attending === "yes" ? "selected" : ""}>
                      <input type="radio" name="attendance" value="yes" checked={attending === "yes"} onChange={() => setAttending("yes")} />
                      {config.rsvp.acceptLabel}
                    </label>
                    <label className={attending === "no" ? "selected" : ""}>
                      <input type="radio" name="attendance" value="no" checked={attending === "no"} onChange={() => setAttending("no")} />
                      {config.rsvp.declineLabel}
                    </label>
                  </div>
                </fieldset>

                <div className="form-two-columns">
                  <div>
                    <label htmlFor="rsvp-email">{config.rsvp.emailLabel}</label>
                    <input id="rsvp-email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="guest-count">{config.rsvp.guestCountLabel}</label>
                    <select id="guest-count" name="guestCount" defaultValue="1" disabled={attending === "no"}>
                      <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>
                    </select>
                  </div>
                </div>

                {attending === "yes" ? (
                  <div className="form-two-columns">
                    <div>
                      <label htmlFor="meal">{config.rsvp.mealLabel}</label>
                      <select id="meal" name="meal" defaultValue="">
                        <option value="" disabled>Choose a menu</option>
                        {config.rsvp.meals.map((meal) => <option key={meal} value={meal}>{meal}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dietary">{config.rsvp.dietaryLabel}</label>
                      <input id="dietary" name="dietary" placeholder={config.rsvp.dietaryPlaceholder} />
                    </div>
                  </div>
                ) : null}

                <div>
                  <label htmlFor="guest-note">{config.rsvp.noteLabel}</label>
                  <textarea id="guest-note" name="note" placeholder={config.rsvp.notePlaceholder} rows={4} />
                </div>
                <p className="demo-note">{config.rsvp.demoNote}</p>
                <button className="button-dark button-full" type="submit" disabled={saving}>
                  {saving ? config.rsvp.savingButton : config.rsvp.submitButton}
                </button>
              </form>
            </div>
          ) : null}

          {step === "success" ? (
            <div className="modal-step success-step">
              <div className="success-mark">✓</div>
              <p className="eyebrow text-clay">{config.rsvp.successEyebrow}</p>
              <h2 id="rsvp-modal-title">{attending === "yes" ? config.rsvp.successAcceptTitle : config.rsvp.successDeclineTitle}</h2>
              <p className="modal-description">{config.rsvp.successDescription}</p>
              <button className="button-outline" type="button" onClick={close}>{config.rsvp.successButton}</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
