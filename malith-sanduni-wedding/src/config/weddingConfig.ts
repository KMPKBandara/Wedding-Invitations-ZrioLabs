/**
 * ================================================================
 * ONLY EDIT THIS FILE + /public/images FOR A NEW WEDDING CUSTOMER.
 * ================================================================
 *
 * Every name, date, place, link, colour and visible sentence used by the
 * website is stored here. Keep the same property names and change the values.
 */
export const weddingConfig = {
  theme: {
    forest: "#1f3528",
    forestDark: "#122019",
    ivory: "#f8f5ef",
    stone: "#ebe7de",
    clay: "#a56647",
    gold: "#d1b37a",
    ink: "#27312a",
  },

  seo: {
    title: "Malith & Sanduni — Wedding Invitation",
    description:
      "Join Malith and Sanduni for their wedding celebration on 12 August 2027 in Kandy, Sri Lanka.",
    websiteUrl: "https://malithandsanduni.lk",
    socialImage: "og.png",
  },

  couple: {
    partnerOne: "Malith",
    partnerTwo: "Sanduni",
    partnerOneFullName: "Malith Jayawardena",
    partnerTwoFullName: "Sanduni Perera",
    monogram: "M&S",
  },

  wedding: {
    dateIso: "2027-08-12T15:30:00+05:30",
    dateShort: "12 · 08 · 27",
    dateLong: "Thursday, 12 August 2027",
    location: "Kandy, Sri Lanka",
    rsvpDeadline: "10 July 2027",
    contactEmail: "hello@malithandsanduni.lk",
  },

  images: {
    hero: "images/hero.png",
    venue: "images/venue.png",
    details: "images/details.png",
  },

  navigation: [
    { label: "Our Story", href: "#story" },
    { label: "Wedding", href: "#events" },
    { label: "Travel", href: "#travel" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "Together with their families",
    announcement: "We are getting married",
    rsvpButton: "Joyfully RSVP",
    exploreLabel: "Discover our celebration",
  },

  welcome: {
    eyebrow: "Ayubowan",
    title: "One beautiful day. Our favourite people.",
    description:
      "We would be honoured to begin our married life surrounded by the family and friends who made our story possible.",
    quote: "Where there is love, there is life.",
  },

  story: {
    eyebrow: "Our story",
    title: "From a Kandy rainstorm to forever",
    paragraphs: [
      "We first met at the University of Peradeniya when a sudden afternoon shower sent us both running for the same tiny shelter. A shared umbrella became tea by the lake, then countless long conversations.",
      "Five years, many train journeys and one sunrise proposal in Ella later, we are ready for our next adventure. We cannot wait to celebrate it with you in the hill country we call home.",
    ],
    timeline: [
      {
        year: "2021",
        title: "The first hello",
        description: "A rainy afternoon, one umbrella and two cups of hot tea.",
      },
      {
        year: "2026",
        title: "She said yes",
        description: "A quiet sunrise above Ella and the easiest answer of our lives.",
      },
      {
        year: "2027",
        title: "Our forever",
        description: "We celebrate the beginning of married life with all of you.",
      },
    ],
  },

  eventSection: {
    eyebrow: "The celebration",
    title: "When & where",
    description:
      "Everything you need for the day, from the ceremony to the last dance.",
    dateLabel: "Date & time",
    locationLabel: "Location",
    mapButton: "Open in Maps",
    calendarButton: "Add to Calendar",
  },

  events: [
    {
      id: "ceremony",
      number: "01",
      eyebrow: "The ceremony",
      title: "Our vows",
      date: "Thursday, 12 August 2027",
      time: "3:30 PM",
      venue: "St. Paul’s Church",
      address: "Deva Veediya, Kandy 20000, Sri Lanka",
      description:
        "Please arrive by 3:00 PM. The ceremony will begin promptly at half past three.",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=St+Paul%27s+Church+Kandy+Sri+Lanka",
      calendar: {
        startUtc: "20270812T100000Z",
        endUtc: "20270812T113000Z",
        location: "St. Paul's Church, Kandy, Sri Lanka",
      },
    },
    {
      id: "reception",
      number: "02",
      eyebrow: "The reception",
      title: "Dinner & dancing",
      date: "Thursday, 12 August 2027",
      time: "6:00 PM — Late",
      venue: "The Grand Kandyan",
      address: "89/10 Lady Gordon’s Drive, Kandy 20000, Sri Lanka",
      description:
        "Cocktails, a candlelit dinner and dancing follow. Transport leaves the church at 5:15 PM.",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Grand+Kandyan+Hotel",
      calendar: {
        startUtc: "20270812T123000Z",
        endUtc: "20270812T183000Z",
        location: "The Grand Kandyan, Kandy, Sri Lanka",
      },
    },
  ],

  scheduleSection: {
    eyebrow: "Wedding week",
    title: "The itinerary",
  },

  schedule: [
    {
      day: "Wednesday",
      date: "11 August",
      title: "Welcome dinner",
      time: "7:00 PM",
      note: "The Lake Terrace · Smart casual",
    },
    {
      day: "Thursday",
      date: "12 August",
      title: "Wedding day",
      time: "3:30 PM",
      note: "Ceremony, dinner & dancing",
    },
    {
      day: "Friday",
      date: "13 August",
      title: "Farewell brunch",
      time: "10:30 AM",
      note: "The Garden Pavilion · Casual",
    },
  ],

  travel: {
    eyebrow: "Travel & stay",
    title: "Meet us in the hills",
    description:
      "Make a weekend of it. Kandy is filled with lake walks, misty views and wonderful food.",
    imageCaption: "Kandy, our favourite place.",
    items: [
      {
        title: "Arriving in Kandy",
        description:
          "Kandy is approximately three hours from Bandaranaike International Airport by private transfer, or a beautiful train journey from Colombo Fort.",
      },
      {
        title: "Wedding transport",
        description:
          "Complimentary shuttles leave our recommended hotels at 2:30 PM and return every hour from 10:30 PM.",
      },
      {
        title: "Dress code",
        description:
          "Garden formal. Suits, sarees and long dresses in breathable fabrics are perfect for the hill-country weather.",
      },
    ],
    hotelTitle: "Recommended stays",
    hotels: [
      {
        name: "The Grand Kandyan",
        distance: "Reception venue",
        description: "Use booking reference MS2027 for our preferred guest rate.",
        url: "https://www.google.com/maps/search/?api=1&query=The+Grand+Kandyan+Hotel",
      },
      {
        name: "Radisson Hotel Kandy",
        distance: "8 minutes away",
        description: "A central option with lake views and convenient late check-in.",
        url: "https://www.google.com/maps/search/?api=1&query=Radisson+Hotel+Kandy",
      },
    ],
    hotelButton: "View Hotel",
  },

  gallery: {
    eyebrow: "Captured moments",
    title: "A glimpse of us",
    description: "A few details and places that inspired our celebration.",
    closeLabel: "Close gallery",
    previousLabel: "Previous image",
    nextLabel: "Next image",
    images: [
      {
        src: "/images/hero.png",
        alt: "Malith and Sanduni in the Sri Lankan tea hills",
        position: "center",
        className: "gallery-wide gallery-tall",
      },
      {
        src: "/images/details.png",
        alt: "Wedding stationery and ring details",
        position: "center",
        className: "gallery-tall",
      },
      {
        src: "/images/venue.png",
        alt: "Candlelit outdoor wedding reception",
        position: "center",
        className: "gallery-wide",
      },
      {
        src: "/images/hero.png",
        alt: "A quiet moment in Nuwara Eliya",
        position: "72% center",
        className: "",
      },
      {
        src: "/images/venue.png",
        alt: "Ivory flowers and warm lanterns",
        position: "22% center",
        className: "",
      },
      {
        src: "/images/details.png",
        alt: "Handmade wedding invitation details",
        position: "65% center",
        className: "",
      },
    ],
  },

  gifts: {
    eyebrow: "With love",
    title: "Your presence is our present",
    description:
      "Celebrating with you is more than enough. For those who have asked, we have listed a few optional ideas.",
    items: [
      {
        number: "01",
        title: "Our home",
        description: "A few thoughtful pieces for the home we are creating together.",
        button: "View collection",
        url: "#",
      },
      {
        number: "02",
        title: "Honeymoon fund",
        description: "Help us make our first adventure as newlyweds unforgettable.",
        button: "Visit our fund",
        url: "#",
      },
      {
        number: "03",
        title: "A shared cause",
        description: "A contribution to child education in Sri Lanka would mean so much.",
        button: "Learn more",
        url: "#",
      },
    ],
  },

  faq: {
    eyebrow: "Good to know",
    title: "Questions, answered",
    description: "If there is anything else you need, please send us a message.",
    emailButton: "Email us",
    items: [
      {
        question: "What should I wear?",
        answer:
          "The dress code is garden formal. We welcome suits, sarees and long dresses. Evenings can be cool in Kandy, so a light layer is helpful.",
      },
      {
        question: "Can I bring a plus-one or children?",
        answer:
          "Your RSVP invitation will show every guest included. Unless children are named there, our celebration will be adults-only.",
      },
      {
        question: "Is transport provided?",
        answer:
          "Yes. Shuttles connect the recommended hotels, ceremony and reception. Return trips begin at 10:30 PM.",
      },
      {
        question: "Can you accommodate dietary requirements?",
        answer:
          "Absolutely. Add allergies and dietary preferences to your RSVP, and our catering team will prepare a suitable meal.",
      },
      {
        question: "When should I RSVP?",
        answer:
          "Please reply by 10 July 2027. If your plans change afterward, email us and we will update your response.",
      },
    ],
  },

  rsvp: {
    eyebrow: "Kindly reply",
    title: "Will you join us?",
    description:
      "Search your invitation, choose your meal and tell us anything we should know.",
    openButton: "Open RSVP",
    closeButton: "Close RSVP",
    lookupTitle: "Find your invitation",
    lookupDescription:
      "Enter the first and last name on your invitation. In this demonstration, any name will continue.",
    guestNameLabel: "Guest name",
    guestNamePlaceholder: "e.g. Kavindu Fernando",
    lookupButton: "Continue",
    welcomePrefix: "Hello",
    attendanceQuestion: "Can you celebrate with us?",
    acceptLabel: "Joyfully accepts",
    declineLabel: "Regretfully declines",
    emailLabel: "Email address",
    guestCountLabel: "Number attending",
    mealLabel: "Menu preference",
    meals: ["Island harvest", "Coastal seafood", "Garden menu"],
    dietaryLabel: "Dietary requirements",
    dietaryPlaceholder: "Allergies or preferences",
    noteLabel: "A note for us",
    notePlaceholder: "Song request, travel question or a little hello…",
    demoNote:
      "Demo mode: the reply is saved only in this browser. Connect the form to a secure backend before publishing.",
    submitButton: "Send RSVP",
    savingButton: "Saving reply…",
    successEyebrow: "Reply received",
    successAcceptTitle: "We cannot wait to see you.",
    successDeclineTitle: "You will be missed.",
    successDescription: "Thank you. You can reopen the form if your plans change.",
    successButton: "Close invitation",
  },

  footer: {
    note: "Made with love in Sri Lanka",
    contactButton: "Contact the couple",
    backToTop: "Back to top",
  },
} as const;

export type WeddingConfig = typeof weddingConfig;
export type WeddingEvent = WeddingConfig["events"][number];
