# Malith & Sanduni — Customisable Wedding Website

A complete digital wedding invitation made with React, TypeScript and Tailwind CSS. It uses only local generated images and is designed so a new customer version can be created by editing one configuration file and replacing images.

## Verified requirements

- Node.js 22.13 or newer
- npm 10 or newer
- Works from Windows PowerShell, Command Prompt, Git Bash, macOS and Linux
- No external images
- No paid packages, image APIs or runtime image services

## Open the website

1. Extract the ZIP.
2. Open the extracted folder in Visual Studio Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open the address printed in the terminal, normally:

```text
http://localhost:5173
```

Stop the development server with `Ctrl + C`.

## Make a new customer website

Edit only:

```text
src/config/weddingConfig.ts
```

This file contains:

- couple names and monogram;
- wedding date, location, RSVP deadline and contact email;
- all navigation and button labels;
- story, timeline, event and itinerary text;
- ceremony and reception map links;
- travel, hotels, registry and FAQ information;
- RSVP labels and meal options;
- website colours;
- SEO title, description, URL and social image;
- every image path used by the website.

The configuration is strongly typed. Do not rename or remove its property names—only replace the values.

## Replace the images

Images are stored in:

```text
public/images/
```

The easiest method is to replace these three files while keeping the filenames:

```text
public/images/hero.png
public/images/venue.png
public/images/details.png
```

Also replace `public/og.png` with a 1200 × 630 social-sharing image for the customer. If you use different filenames, update them under `images`, `gallery.images` and `seo.socialImage` in `weddingConfig.ts`.

Recommended image shapes:

- `hero.png`: wide landscape, approximately 2:1
- `venue.png`: landscape, approximately 16:9
- `details.png`: square
- `og.png`: exactly 1200 × 630

## Validation commands

Before deployment, run:

```bash
npm run typecheck
npm run lint
npm run build
```

All three commands are cross-platform and do not require Bash.

## RSVP behaviour

The RSVP is a working front-end demonstration. It stores the latest response in the guest's browser under the key `wedding-rsvp-demo`.

Before using the website for a real wedding, connect `src/components/RsvpModal.tsx` to a secure server or form service. Validate every field on the server and never place a private guest list in front-end code.

## Main project structure

```text
app/
  globals.css                 Complete responsive design and animations
  layout.tsx                  SEO metadata loaded from the configuration
  page.tsx                    Main page entry
public/
  images/                     All local wedding photography
  favicon.svg                 Browser icon
  og.png                      Social-sharing image
src/
  config/
    weddingConfig.ts          The only customer-content file to edit
  components/
    WeddingSite.tsx           Main page composition
    SiteHeader.tsx            Desktop and mobile navigation
    HeroSection.tsx           Hero and countdown
    StorySection.tsx          Story and timeline
    EventSections.tsx         Events, maps, calendar and itinerary
    TravelSection.tsx         Travel and hotels
    GallerySection.tsx        Gallery and lightbox
    GiftsFaqSection.tsx       Registry and FAQ
    RsvpBanner.tsx            RSVP call-to-action
    RsvpModal.tsx             RSVP form
  hooks/                      Countdown and reveal animations
  lib/calendar.ts             Calendar download helper
```

## Deployment checklist

1. Replace the dummy data and images.
2. Set the real domain in `weddingConfig.ts`.
3. Replace the social-sharing image.
4. Connect RSVP submissions to a secure backend.
5. Test all map, hotel and registry links.
6. Run the three validation commands.
7. Deploy to Vercel, Cloudflare or another compatible host.
