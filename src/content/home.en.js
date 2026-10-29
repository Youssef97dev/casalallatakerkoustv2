import { siteConfig } from "@/data/siteConfig";

export const homeContentEn = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title:
      "Casa Lalla Takerkoust | Lakeside Restaurant & Day Pass Near Marrakech",
    description:
      "Experience Casa Lalla at Lake Takerkoust near Marrakech: scenic lake lunch, fine Moroccan cuisine, day pass, jet ski & quad tours towards Agafay. Book your table.",
    canonical: "https://casalallatakerkoust.com/",
    ogTitle:
      "Casa Lalla Takerkoust | Lakeside Restaurant & Day Pass Near Marrakech",
    ogDescription:
      "Premier lakeside restaurant & day retreat near Marrakech at Lake Lalla Takerkoust. Fine Moroccan dining, lake lunch, jet ski & quad tours near Agafay. Reserve your table.",
    ogLocale: "en_US",
    ogLocaleAlternate: "fr_FR",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": "https://casalallatakerkoust.com/#restaurant",
    name: siteConfig.name,
    image:
      "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
    url: siteConfig.urls.en,
    telephone: siteConfig.phone,
    menu: "https://casalallatakerkoust.com/menu/",
    acceptsReservations: "True",
    servesCuisine: ["Moroccan", "Mediterranean"],
    priceRange: "$$$",
    description:
      "Premier lakeside restaurant and day retreat offering refined Moroccan and Mediterranean dining with panoramic Atlas Mountain views near Marrakech.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.mapsUrl,
      siteConfig.tripadvisorUrl,
    ],
  },
  nav: {
    logoAlt: "Casa Lalla Takerkoust logo",
    reservationLabel: "Reservation",
    reservationLink: "/reservation",
    openMenuAria: "Open navigation menu",
    closeMenuAria: "Close navigation menu",
    langSwitcherAria: "Language selection",
    switchToEnAria: "English",
    switchToFrAria: "Français",
    links: [
      { label: "Home", href: "/" },
      { label: "Restaurant", href: "/restaurant-casa-lalla" },
      { label: "Rural Hotel", href: "/rural-hotel" },
      { label: "Private Events", href: "/private-events" },
      { label: "Activities", href: "/lalla-takerkoust-activities" },
      { label: "Menu", href: "/menu" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  hero: {
    logoAlt: "Casa Lalla Takerkoust emblem",
    scrollDownAria: "Scroll down to introduction",
    slides: [
      {
        desktopSrc:
          "https://casalallatakerkoust.com/images/sunset-cocktails-lalla-takerkoust-lounge.webp",
        desktopAlt:
          "Sunset cocktails served on the panoramic lounge terrace at Casa Lalla overlooking Lake Takerkoust",
        desktopTitle: "Sunset Cocktails Lounge at Lake Takerkoust",
        mobileSrc:
          "https://casalallatakerkoust.com/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
        mobileAlt:
          "Panoramic lake view from the Casa Lalla dining terrace in Takerkoust",
        mobileTitle: "Panoramic Lake View Dining in Takerkoust",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc:
          "https://casalallatakerkoust.com/images/agafay-restaurants-marocain-marrakech.webp",
        desktopAlt:
          "Refined Moroccan cuisine and fine dining table setting near the Agafay Desert at Casa Lalla",
        desktopTitle: "Fine Moroccan Dining Near Agafay Desert",
        mobileSrc:
          "https://casalallatakerkoust.com/images/tourists-enjoying-drinks-lalla-takerkoust.webp",
        mobileAlt:
          "Guests enjoying refreshing cocktails and lakeside vibes at Lake Lalla Takerkoust",
        mobileTitle: "Lakeside Day Club Experience at Lake Takerkoust",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc:
          "https://casalallatakerkoust.com/images/destination-wedding-marrakech-lake-takerkoust.webp",
        desktopAlt:
          "Elegant destination wedding celebration setup along Lake Lalla Takerkoust near Marrakech",
        desktopTitle: "Destination Weddings at Lake Lalla Takerkoust",
        mobileSrc:
          "https://casalallatakerkoust.com/images/casa-lalla-takerkoust-entrance-marrakech.webp",
        mobileAlt:
          "Welcoming entrance to Casa Lalla Takerkoust near Marrakech featuring bohemian architecture",
        mobileTitle: "Welcome to Casa Lalla Takerkoust Near Marrakech",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc:
          "https://casalallatakerkoust.com/images/corporate-event-venue-marrakech-lake.webp",
        desktopAlt:
          "Private event dining setup for celebrations and corporate retreats at Lake Takerkoust",
        desktopTitle: "Private Event Venue at Lake Takerkoust",
        mobileSrc:
          "https://casalallatakerkoust.com/images/boho-chic-lounge-mykonos-vibe-lalla-takerkoust.webp",
        mobileAlt:
          "Bohemian lounge space offering a tranquil oasis experience by the water",
        mobileTitle: "Boho-Chic Lakeside Lounge Oasis",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc:
          "https://casalallatakerkoust.com/images/seafood-pasta-mediterranean-dining-morocco.webp",
        desktopAlt:
          "Fresh Mediterranean seafood dish prepared with local ingredients at Casa Lalla",
        desktopTitle: "Mediterranean Dining at Casa Lalla",
        mobileSrc:
          "https://casalallatakerkoust.com/images/casa-lalla-takerkoust-lake-view-terrace.webp",
        mobileAlt:
          "Waterfront dining terrace at Casa Lalla Takerkoust offering panoramic lake views",
        mobileTitle: "Lakeside Dining Terrace at Casa Lalla",
        desktopClass: "object-bottom",
        mobileClass: "object-center",
      },
      {
        desktopSrc:
          "https://casalallatakerkoust.com/images/casa-lalla-takerkoust-best-restaurants-agafay.webp",
        desktopAlt:
          "Casa Lalla Takerkoust, luxury lakeside dining retreat near the Agafay Desert",
        desktopTitle: "Casa Lalla Lakeside Restaurant Experience",
        mobileSrc:
          "https://casalallatakerkoust.com/images/ambiance-agafay-vibes-meilleur-restaurants.webp",
        mobileAlt:
          "Warm evening ambiance and desert-inspired atmosphere at Casa Lalla",
        mobileTitle: "Agafay Desert Evening Ambiance at Casa Lalla",
        desktopClass: "object-bottom",
        mobileClass: "object-center",
      },
      {
        desktopSrc:
          "https://casalallatakerkoust.com/images/hidden-gem-restaurant-marrakech-lake-takerkoust.webp",
        desktopAlt:
          "Exterior gardens and scenic dining terrace of Casa Lalla Takerkoust near Marrakech",
        desktopTitle: "Casa Lalla Restaurant Grounds and Lake Views",
        mobileSrc:
          "https://casalallatakerkoust.com/images/sunset-restaurant-lake-takerkoust-marrakech.webp",
        mobileAlt:
          "Sunset view from the Casa Lalla restaurant terrace overlooking Lake Takerkoust",
        mobileTitle: "Sunset Dining at Lake Takerkoust",
        desktopClass: "object-bottom",
        mobileClass: "object-center",
      },
    ],
  },
  intro: {
    headline: "Exquisite cuisine and an extraordinary panoramic view",
    body: (
      <>
        Step into our Mediterranean culinary sanctuary at{" "}
        <strong className="font-medium text-casa-scarlet">
          CASA LALLA TAKERKOUST
        </strong>
        , a tranquil lakeside retreat where the calm of the water meets the
        golden tones of the Agafay Desert. Savor authentic Moroccan recipes and
        fresh Mediterranean flavors prepared with seasonal local produce.
        Whether you join us for a sunlit lunch, a relaxing day pass, or a
        romantic sunset dinner, Casa Lalla offers an intimate, peaceful
        alternative to bustling Marrakech dining, all set against the dramatic
        backdrop of the snow-capped Atlas Mountains.
      </>
    ),
    image: {
      src: "https://casalallatakerkoust.com/images/boho-chic-rattan-decor-luxury-restaurant.webp",
      alt: "Bohemian rattan decor and airy dining space at Casa Lalla Takerkoust",
      title: "Bohemian Interior Decor at Casa Lalla Takerkoust",
    },
  },
  about: {
    heading: "A space to dine, unwind, and celebrate",
    subheading:
      "Featuring our signature restaurant, where Mediterranean elegance meets lakeside tranquility",
    body: (
      <>
        Experience the natural harmony of bohemian elegance and Moroccan
        hospitality at <strong>Casa Lalla Takerkoust</strong>. Situated along
        the serene shores of Lake Lalla Takerkoust just a scenic drive from
        Marrakech, our estate welcomes travelers and members seeking slow living
        and quiet luxury. From relaxed poolside dining to evening cocktails
        overlooking the water, every moment is crafted to help you disconnect
        from urban rush and reconnect with nature.
      </>
    ),
    ctaLabel: "Reservations",
    ctaLink: "/reservation",
    hospitalityTitle: "Warm Welcome & Inclusive Hospitality",
    hospitalityNote:
      "Casa Lalla warmly welcomes guests from around the globe, Moroccan residents, and travelers alike in the authentic spirit of Moroccan hospitality. To guarantee a peaceful and seamless lakeside experience, advance table reservations are recommended.",
  },
  spaces: {
    heading: "Our Spaces",
    items: [
      {
        title: "Restaurant",
        image:
          "https://casalallatakerkoust.com/images/fine-dining-interior-casa-lalla-takerkoust.webp",
        alt: "Warm interior dining room and lakeside tables at Casa Lalla Restaurant",
        titleAttr: "Fine Dining Restaurant at Casa Lalla Takerkoust",
        link: "/restaurant-casa-lalla",
      },
      {
        title: "Activities",
        image:
          "https://casalallatakerkoust.com/images/adrenaline-quad-biking-marrakech-desert.webp",
        alt: "Quad biking, jet ski, and outdoor adventures at Lake Lalla Takerkoust and Agafay",
        titleAttr: "Outdoor Adventures and Desert Excursions",
        link: "/lalla-takerkoust-activities",
      },
      {
        title: "Private Events",
        image:
          "https://casalallatakerkoust.com/images/private-event-wedding-setup-casa-lalla.webp",
        alt: "Bespoke table arrangement for private weddings and receptions at Casa Lalla",
        titleAttr: "Private Events and Destination Weddings Venue",
        link: "/private-events",
      },
    ],
  },
  aboutTwo: {
    heading: "Sun-Drenched Gastronomy & Desert Vibes",
    subheading: "Being in the right place at the right time",
    body: (
      <>
        The cuisine at <strong>Casa Lalla Takerkoust</strong> is an authentic
        culinary journey celebrating the richness of Moroccan gastronomy and the
        freshness of the Mediterranean coast. Our kitchen prepares elevated
        classics using fresh, locally sourced ingredients: fragrant
        saffron-infused couscous, artisanal chicken pastilla harmonizing
        delicate sweet and savory spices, and tender grilled seafood. Pair your
        meal with curated Moroccan vintages or handcrafted cocktails at our
        open-air lounge as the sun sinks behind the Atlas peaks.
      </>
    ),
    ctaLabel: "Reservations",
    ctaLink: "/reservation",
  },
  events: {
    heading: "Private Events & Destination Weddings",
    paragraph1: (
      <>
        The majestic natural panorama of Lake Takerkoust provides an
        unforgettable backdrop for your milestone celebrations. From intimate
        destination weddings and anniversary dinners to corporate retreats and
        editorial photo shoots, <strong>Casa Lalla Takerkoust</strong> offers
        exclusive venue hire where nature, fine dining, and warm Moroccan
        hospitality merge seamlessly.
      </>
    ),
    paragraph2: (
      <>
        Our experienced events team assists you at every step, curating bespoke
        multi-course banquets crafted by our chefs, elegant bohemian styling,
        and ambient lighting. Celebrate in total privacy, immersed in the
        tranquil energy of the lake and the enchanting desert horizon.
      </>
    ),
    ctaLabel: "Discover Private Events",
    ctaLink: "/private-events",
    ctaAria:
      "Discover private events and destination weddings at Casa Lalla Takerkoust",
    image: {
      src: "https://casalallatakerkoust.com/images/mediterranean-seafood-cuisine-marrakech.webp",
      alt: "Refined Mediterranean dining and banquet setup prepared for private events at Casa Lalla",
      title: "Private Event Dining and Banquets at Casa Lalla Takerkoust",
    },
  },
  activities: {
    heading: "Lake Adventures & Desert Excursions",
    paragraph1: (
      <>
        <strong>Lake Lalla Takerkoust</strong> is an extraordinary playground
        for outdoor exploration. Easily accessible from Marrakech, guests can
        dive into a variety of thrilling adventures: ride off the beaten path on
        guided <strong>quad or buggy tours</strong> through the foothills of the
        High Atlas, glide across the lake on a jet ski, or enjoy a tranquil hike
        along the water observing migratory birdlife.
      </>
    ),
    paragraph2: (
      <>
        Explore the neighboring <strong>Agafay Desert</strong> just minutes away
        on horseback or camel excursions, or take a scenic bike tour through
        desert trails arriving at our peaceful oasis. From high-adrenaline
        escapades to restorative nature walks, Casa Lalla is your gateway to the
        great outdoors.
      </>
    ),
    ctaLabel: "Explore Activities",
    ctaLink: "/lalla-takerkoust-activities",
    ctaAria:
      "Explore outdoor activities and desert excursions at Lake Takerkoust",
    image: {
      src: "https://casalallatakerkoust.com/images/agafay-desert-buggy-tour-marrakech.webp",
      alt: "Agafay desert buggy excursion guided through Atlas Mountain foothills near Lake Takerkoust",
      title: "Agafay Desert Buggy Tour Near Lake Takerkoust",
    },
  },
  music: {
    sectionAria: "Discover Our Music and Sunset Lounge Vibe",
    heading: "Atmosphere & Musical Universe",
    subheading: "Curated Lake Takerkoust Sunset Lounge Vibes",
    description:
      "Immerse yourself in the sonic identity of Casa Lalla. Gentle organic house, melodic downtempo, and Mediterranean sunset grooves curated to accompany your lakeside dining, afternoon cocktails, and golden hour reflections against the Atlas Mountains.",
    listenOnSpotify: "Listen to the Full Playlist on Spotify",
    iframeTitle: "Casa Lalla Takerkoust Official Sunset Lounge Playlist",
  },
  instagram: {
    heading:
      "Experience Casa Lalla Takerkoust at your own pace — refined leisure, lakeside tranquility, and authentic hospitality.",
    subheading: "Follow us on Instagram",
    handle: "@casa.lalla.takerkoust",
    handleUrl: siteConfig.instagramUrl,
    items: [
      {
        src: "https://casalallatakerkoust.com/images/mykonos-vibes-restaurant-agafay-desert-marrakech.webp",
        alt: "Mediterranean-inspired lakeside restaurant terrace at Casa Lalla Takerkoust",
        title: "Lakeside Dining Experience at Casa Lalla",
        link: "https://www.instagram.com/p/DSHv8mkDbTF/",
      },
      {
        src: "https://casalallatakerkoust.com/images/ibiza-sunset-lounge-near-royal-mansour.webp",
        alt: "Sunset cocktail lounge overlooking the calm waters of Lake Takerkoust",
        title: "Sunset Lounge at Lake Takerkoust",
        link: "https://www.instagram.com/p/DSHvxAujVCu/",
      },
      {
        src: "https://casalallatakerkoust.com/images/mykonos-chic-Lalla-akerkoust-lake-morocco.webp",
        alt: "Bohemian chic waterfront dining atmosphere at Lake Lalla Takerkoust",
        title: "Bohemian Dining at Lake Lalla Takerkoust",
        link: "https://www.instagram.com/p/DSHuJyJDShv/",
      },
      {
        src: "https://casalallatakerkoust.com/images/luxury-trip-from-mamounia-the-lake.webp",
        alt: "Scenic day retreat by the lake with Atlas Mountain views near Marrakech",
        title: "Lakeside Day Retreat Experience",
        link: "https://www.instagram.com/p/DHjsxYRoOAP/",
      },
      {
        src: "https://casalallatakerkoust.com/images/royal-mansour-lake-takerkoust-agafay.webp",
        alt: "Tranquil outdoor lounge setting near Lake Takerkoust and the Agafay Desert",
        title: "Tranquil Outdoor Lounge at Casa Lalla",
        link: "https://www.instagram.com/p/DQ7fxQFDl_v/",
      },
      {
        src: "https://casalallatakerkoust.com/images/restaurants-marocain-marrakech-agafay.jpg",
        alt: "Authentic Moroccan and Mediterranean fine dining at Casa Lalla",
        title: "Moroccan Fine Dining at Casa Lalla",
        link: "https://www.instagram.com/p/DGlJuUJNAxp/",
      },
    ],
  },
  footer: {
    addressTitle: "Location",
    addressLine1: siteConfig.address.street,
    addressLine2: `${siteConfig.address.locality} ${siteConfig.address.postalCode}, ${siteConfig.address.countryEn}`,
    mapsUrl: siteConfig.mapsUrl,
    hoursStatus: siteConfig.hours.daysEn,
    hoursTime: `Opening hours: ${siteConfig.hours.formattedEn}`,
    navLinks: [
      { label: "RESTAURANT", href: "/restaurant-casa-lalla" },
      { label: "ACTIVITIES", href: "/lalla-takerkoust-activities" },
      { label: "RESERVATION", href: "/reservation" },
      { label: "CONTACT", href: "/contact" },
    ],
    socialAria: {
      instagram: "Visit Casa Lalla on Instagram",
      whatsapp: "Contact Casa Lalla on WhatsApp",
      email: "Send an email to Casa Lalla",
      tripadvisor: "Read reviews on TripAdvisor",
      maps: "Find Casa Lalla on Google Maps",
    },
    privacyPolicyLabel: "Privacy Policy",
    privacyPolicyLink: "/privacy-policy",
    legalLabel: "Privacy Policy",
    legalLink: "/privacy-policy",
    newsletterTitle: "Stay up to date",
    newsletterDesc: "Sign up to receive the Casa Lalla Takerkoust newsletter.",
    newsletterPlaceholder: "Email address",
    newsletterButton: "SIGN UP",
    copyright: "© 2026, CASA LALLA TAKERKOUST",
  },
  whatsappButton: {
    ariaLabel: "Chat with Casa Lalla Takerkoust on WhatsApp",
    alt: "WhatsApp contact icon",
  },
};
