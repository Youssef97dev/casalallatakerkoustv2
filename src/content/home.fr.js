import { siteConfig } from "@/data/siteConfig";

export const homeContentFr = {
  locale: "fr",
  htmlLang: "fr",
  meta: {
    title:
      "Casa Lalla Takerkoust | Restaurant au Lac & Day Pass près de Marrakech",
    description:
      "Découvrez Casa Lalla au lac de Takerkoust près de Marrakech : déjeuner au bord du lac, cuisine marocaine raffinée, day pass, jet ski & quad vers Agafay. Réservez.",
    canonical: "https://casalallatakerkoust.com/fr/",
    ogTitle:
      "Casa Lalla Takerkoust | Restaurant au Lac & Day Pass près de Marrakech",
    ogDescription:
      "Restaurant d’exception et havre de détente au lac Lalla Takerkoust près de Marrakech. Déjeuner au lac, cuisine marocaine, jet ski & quad vers Agafay. Réservez votre table.",
    ogLocale: "fr_FR",
    ogLocaleAlternate: "en_US",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": "https://casalallatakerkoust.com/fr/#restaurant",
    name: siteConfig.name,
    image: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
    url: siteConfig.urls.fr,
    telephone: siteConfig.phone,
    menu: "https://casalallatakerkoust.com/fr/menu/",
    acceptsReservations: "True",
    servesCuisine: ["Marocaine", "Méditerranéenne"],
    priceRange: "$$$",
    description:
      "Restaurant d’exception au bord du lac de Takerkoust et havre de paix près de Marrakech, offrant une cuisine marocaine et méditerranéenne raffinée face à l’Atlas.",
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
    logoAlt: "Logo Casa Lalla Takerkoust",
    reservationLabel: "Réservation",
    reservationLink: "/fr/reservation",
    openMenuAria: "Ouvrir le menu de navigation",
    closeMenuAria: "Fermer le menu de navigation",
    langSwitcherAria: "Sélection de la langue",
    switchToEnAria: "English",
    switchToFrAria: "Français",
    links: [
      { label: "Accueil", href: "/fr/" },
      { label: "Restaurant", href: "/fr/restaurant-casa-lalla" },
      { label: "Hôtel Rural", href: "/fr/rural-hotel" },
      { label: "Événements privés", href: "/fr/private-events" },
      { label: "Activités", href: "/fr/lalla-takerkoust-activities" },
      { label: "Menu", href: "/fr/menu" },
      { label: "Galerie", href: "/fr/gallery" },
      { label: "Contact", href: "/fr/contact" },
    ],
  },
  hero: {
    logoAlt: "Emblème Casa Lalla Takerkoust",
    scrollDownAria: "Défiler vers la présentation",
    slides: [
      {
        desktopSrc: "/images/sunset-cocktails-lalla-takerkoust-lounge.webp",
        desktopAlt:
          "Cocktails au coucher du soleil sur la terrasse du bar lounge face au lac Takerkoust",
        desktopTitle: "Lounge cocktails au coucher du soleil au lac Takerkoust",
        mobileSrc: "/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
        mobileAlt:
          "Vue panoramique sur le lac depuis la terrasse du restaurant Casa Lalla à Takerkoust",
        mobileTitle: "Restaurant panoramique au lac de Takerkoust",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc: "/images/agafay-restaurants-marocain-marrakech.webp",
        desktopAlt:
          "Gastronomie marocaine raffinée servie dans un cadre intimiste près du désert d'Agafay",
        desktopTitle: "Gastronomie marocaine raffinée près d'Agafay",
        mobileSrc: "/images/tourists-enjoying-drinks-lalla-takerkoust.webp",
        mobileAlt:
          "Hôtes savourant des cocktails rafraîchissants dans l'ambiance au bord du lac Lalla Takerkoust",
        mobileTitle: "Détente au bord du lac Lalla Takerkoust",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc: "/images/destination-wedding-marrakech-lake-takerkoust.webp",
        desktopAlt:
          "Cérémonie de mariage bohème chic au bord du lac Lalla Takerkoust près de Marrakech",
        desktopTitle: "Mariages d'exception au lac Lalla Takerkoust",
        mobileSrc: "/images/casa-lalla-takerkoust-entrance-marrakech.webp",
        mobileAlt:
          "Entrée chaleureuse de Casa Lalla Takerkoust près de Marrakech à l’architecture bohème",
        mobileTitle: "Bienvenue à Casa Lalla Takerkoust près de Marrakech",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc: "/images/corporate-event-venue-marrakech-lake.webp",
        desktopAlt:
          "Espace de réception pour événements privés et séminaires d'entreprise au lac Takerkoust",
        desktopTitle: "Lieu d'événements privés au bord du lac Takerkoust",
        mobileSrc: "/images/boho-chic-lounge-mykonos-vibe-lalla-takerkoust.webp",
        mobileAlt:
          "Espace lounge bohème chic offrant une oasis de détente face à l'eau",
        mobileTitle: "Oasis lounge bohème chic au lac de Takerkoust",
        desktopClass: "object-center",
        mobileClass: "object-center",
      },
      {
        desktopSrc: "/images/seafood-pasta-mediterranean-dining-morocco.webp",
        desktopAlt:
          "Plat de poissons et fruits de mer méditerranéens préparé avec des ingrédients frais à Casa Lalla",
        desktopTitle: "Cuisine méditerranéenne raffinée à Casa Lalla",
        mobileSrc: "/images/casa-lalla-takerkoust-lake-view-terrace.webp",
        mobileAlt:
          "Terrasse au bord du lac à Casa Lalla Takerkoust offrant une vue imprenable sur l'eau",
        mobileTitle: "Terrasse du restaurant au lac de Takerkoust",
        desktopClass: "object-bottom",
        mobileClass: "object-center",
      },
      {
        desktopSrc: "/images/casa-lalla-takerkoust-best-restaurants-agafay.webp",
        desktopAlt:
          "Casa Lalla Takerkoust, table d'exception au bord de l'eau près du désert d'Agafay",
        desktopTitle: "Casa Lalla : restaurant d'exception au lac de Takerkoust",
        mobileSrc: "/images/ambiance-agafay-vibes-meilleur-restaurants.webp",
        mobileAlt:
          "Ambiance festive et chaleureuse aux inspirations du désert à Casa Lalla",
        mobileTitle: "Ambiance du désert d'Agafay à Casa Lalla",
        desktopClass: "object-bottom",
        mobileClass: "object-center",
      },
      {
        desktopSrc: "/images/hidden-gem-restaurant-marrakech-lake-takerkoust.webp",
        desktopAlt:
          "Jardins paysagers et terrasse panoramique de Casa Lalla Takerkoust près de Marrakech",
        desktopTitle: "Domaine et terrasse du restaurant Casa Lalla",
        mobileSrc: "/images/sunset-restaurant-lake-takerkoust-marrakech.webp",
        mobileAlt:
          "Coucher de soleil sur le lac Takerkoust depuis la terrasse du restaurant Casa Lalla",
        mobileTitle: "Dîner au coucher du soleil au lac Takerkoust",
        desktopClass: "object-bottom",
        mobileClass: "object-center",
      },
    ],
  },
  intro: {
    headline: "Une cuisine exquise et une vue panoramique extraordinaire",
    body: (
      <>
        Entrez dans notre paradis culinaire méditerranéen à{" "}
        <strong className="font-medium text-casa-scarlet">CASA LALLA TAKERKOUST</strong>, une oasis paisible nichée là où la sérénité du lac rencontre les teintes dorées du désert d’Agafay. Découvrez notre havre au bord de l’eau, offrant des saveurs authentiques, des produits locaux de saison et une chaleureuse hospitalité marocaine. Que vous recherchiez un déjeuner paisible au bord du lac, un day pass ressourçant ou un dîner au coucher du soleil, nous proposons une alternative raffinée aux restaurants marocains à Marrakech, alliant gastronomie délicate et vue imprenable sur les sommets enneigés de l’Atlas.
      </>
    ),
    image: {
      src: "/images/boho-chic-rattan-decor-luxury-restaurant.webp",
      alt: "Décor en rotin bohème chic et espace de restauration lumineux à Casa Lalla Takerkoust",
      title: "Décoration intérieure bohème chic à Casa Lalla Takerkoust",
    },
  },
  about: {
    heading: "Un lieu pour savourer, se ressourcer et célébrer",
    subheading:
      "Découvrez notre restaurant signature, où l’élégance méditerranéenne rencontre la quiétude du lac",
    body: (
      <>
        Découvrez l’harmonie parfaite entre élégance bohème et sérénité marocaine à <strong>Casa Lalla Takerkoust</strong>. Érigé face aux eaux paisibles du lac de Takerkoust, à quelques encablures de Marrakech, notre domaine accueille voyageurs et épicuriens en quête d’une douceur de vivre préservée. Loin du tumulte citadin, laissez-vous porter par les plaisirs de la table, la beauté du climat et une atmosphère inspirée des rivages méditerranéens de Formentera, Ibiza et Mykonos.
      </>
    ),
    ctaLabel: "Réservations",
    ctaLink: "/fr/reservation",
    hospitalityTitle: "Esprit d’Accueil & Hospitalité Marocaine",
    hospitalityNote:
      "Casa Lalla accueille chaleureusement les hôtes de toutes nationalités, les résidents marocains et les voyageurs dans la pure tradition de l’hospitalité marocaine. Afin de garantir un accueil privilégié au bord du lac, la réservation préalable de votre table est vivement recommandée.",
  },
  spaces: {
    heading: "Nos Espaces",
    items: [
      {
        title: "Restaurant",
        image: "/images/fine-dining-interior-casa-lalla-takerkoust.webp",
        alt: "Intérieur élégant et tables en terrasse au restaurant Casa Lalla Takerkoust",
        titleAttr: "Restaurant gastronomique à Casa Lalla Takerkoust",
        link: "/fr/restaurant-casa-lalla",
      },
      {
        title: "Activités",
        image: "/images/adrenaline-quad-biking-marrakech-desert.webp",
        alt: "Randonnées en quad, jet ski et activités de plein air au lac de Takerkoust et Agafay",
        titleAttr: "Activités de plein air et excursions dans le désert",
        link: "/fr/lalla-takerkoust-activities",
      },
      {
        title: "Événements Privés",
        image: "/images/private-event-wedding-setup-casa-lalla.webp",
        alt: "Mise en place de table soignée pour mariages et réceptions privées à Casa Lalla",
        titleAttr: "Espace d’événements privés et mariages au bord du lac",
        link: "/fr/private-events",
      },
    ],
  },
  aboutTwo: {
    heading: "Gastronomie ensoleillée et esprit du désert",
    subheading: "Être au bon endroit au bon moment",
    body: (
      <>
        La table de <strong>Casa Lalla Takerkoust</strong> est une célébration vivante du terroir marocain et des richesses de la Méditerranée. Nos chefs réinterprètent avec finesse les recettes traditionnelles en privilégiant des ingrédients locaux d’une grande fraîcheur&nbsp;: pastilla croustillante au poulet aux délicates notes sucrées-salées, couscous parfumé au safran pur et poissons grillés du jour. Accompagnez votre dégustation d’une sélection soignée de vins marocains ou d’un cocktail maison au bar lounge, face aux reflets changeants de l’Atlas.
      </>
    ),
    ctaLabel: "Réservations",
    ctaLink: "/fr/reservation",
  },
  events: {
    heading: "Événements Privés & Mariages d’Exception",
    paragraph1: (
      <>
        Le panorama exceptionnel du lac et des cimes de l’Atlas offre un décor mémorable pour célébrer vos plus beaux moments. Qu’il s’agisse d’un mariage intime, d’un anniversaire élégant ou d’un événement d’entreprise, <strong>Casa Lalla Takerkoust</strong> met à votre disposition un domaine d’exception où se conjuguent harmonieusement nature sauvage et hospitalité attentionnée.
      </>
    ),
    paragraph2: (
      <>
        Notre équipe d’organisation vous accompagne dans chaque détail&nbsp;: menus de fête personnalisés élaborés par nos chefs, scénographie soignée et ambiance lumineuse sur mesure. Partagez des instants d’émotion en toute exclusivité, portés par la quiétude du lac et la beauté des paysages marocains.
      </>
    ),
    ctaLabel: "Découvrir nos événements",
    ctaLink: "/fr/private-events",
    ctaAria: "Découvrez les événements privés et mariages à Casa Lalla Takerkoust",
    image: {
      src: "/images/mediterranean-seafood-cuisine-marrakech.webp",
      alt: "Cuisine méditerranéenne gastronomique préparée pour des réceptions privées à Casa Lalla",
      title: "Banquets et réceptions privées à Casa Lalla Takerkoust",
    },
  },
  activities: {
    heading: "Aventures sur le Lac & Excursions dans le Désert",
    paragraph1: (
      <>
        Le <strong>lac de Lalla Takerkoust</strong> est un terrain d’exploration privilégié pour les amateurs de grands espaces. Facilement accessible depuis Marrakech, plongez au cœur d’activités palpitantes&nbsp;: randonnées guidées en <strong>quad ou en buggy</strong> à travers les contreforts du Haut Atlas, sessions de jet-ski sur les eaux calmes du lac, ou promenades paisibles le long des rives à la rencontre de la faune locale.
      </>
    ),
    paragraph2: (
      <>
        Explorez également le <strong>désert d’Agafay</strong> tout proche lors d’excursions à cheval ou à dos de dromadaire, ou optez pour une balade à vélo reliant le désert à l’oasis du lac. Des sensations vives aux moments de contemplation, Casa Lalla est votre point de départ pour une immersion totale dans la nature.
      </>
    ),
    ctaLabel: "Découvrir les activités",
    ctaLink: "/fr/lalla-takerkoust-activities",
    ctaAria: "Découvrez les activités de plein air et excursions au lac de Takerkoust",
    image: {
      src: "/images/agafay-desert-buggy-tour-marrakech.webp",
      alt: "Excursion en buggy dans le désert d'Agafay face aux montagnes du Haut Atlas près du lac de Takerkoust",
      title: "Excursion en buggy dans le désert près de Takerkoust",
    },
  },
  music: {
    sectionAria: "Découvrez notre univers musical et l'ambiance Sunset Lounge",
    heading: "Ambiance & Univers Musical",
    subheading: "Sélection Sunset Lounge au Lac de Takerkoust",
    description:
      "Plongez dans l’identité sonore de Casa Lalla. House organique délicate, mélodies downtempo et rythmes solaires méditerranéens soigneusement sélectionnés pour accompagner votre déjeuner au bord de l’eau, vos cocktails en terrasse et la contemplation de l’heure dorée face à l’Atlas.",
    listenOnSpotify: "Écouter la playlist complète sur Spotify",
    iframeTitle: "Playlist officielle Sunset Lounge Casa Lalla Takerkoust",
  },
  instagram: {
    heading:
      "Vivez Casa Lalla Takerkoust à votre rythme — élégance décontractée, quiétude au bord du lac et hospitalité sincère.",
    subheading: "Suivez-nous sur Instagram",
    handle: "@casa.lalla.takerkoust",
    handleUrl: siteConfig.instagramUrl,
    items: [
      {
        src: "/images/mykonos-vibes-restaurant-agafay-desert-marrakech.webp",
        alt: "Terrasse du restaurant aux inspirations méditerranéennes au lac de Takerkoust",
        title: "Terrasse au bord du lac à Casa Lalla",
        link: "https://www.instagram.com/p/DSHv8mkDbTF/",
      },
      {
        src: "/images/ibiza-sunset-lounge-near-royal-mansour.webp",
        alt: "Bar lounge au coucher du soleil face aux eaux calmes du lac Takerkoust",
        title: "Lounge au coucher du soleil au lac Takerkoust",
        link: "https://www.instagram.com/p/DSHvxAujVCu/",
      },
      {
        src: "/images/mykonos-chic-Lalla-akerkoust-lake-morocco.webp",
        alt: "Ambiance bohème chic au bord du lac Lalla Takerkoust",
        title: "Atmosphère bohème au lac Lalla Takerkoust",
        link: "https://www.instagram.com/p/DSHuJyJDShv/",
      },
      {
        src: "/images/luxury-trip-from-mamounia-the-lake.webp",
        alt: "Échappée paisible au lac de Takerkoust face aux montagnes de l'Atlas",
        title: "Évasion au lac de Takerkoust",
        link: "https://www.instagram.com/p/DHjsxYRoOAP/",
      },
      {
        src: "/images/royal-mansour-lake-takerkoust-agafay.webp",
        alt: "Espace lounge extérieur à proximité du lac Takerkoust et d'Agafay",
        title: "Espace lounge en plein air à Casa Lalla",
        link: "https://www.instagram.com/p/DQ7fxQFDl_v/",
      },
      {
        src: "/images/restaurants-marocain-marrakech-agafay.jpg",
        alt: "Gastronomie marocaine et méditerranéenne authentique servie à Casa Lalla",
        title: "Gastronomie marocaine à Casa Lalla",
        link: "https://www.instagram.com/p/DGlJuUJNAxp/",
      },
    ],
  },
  footer: {
    addressTitle: "Adresse",
    addressLine1: siteConfig.address.street,
    addressLine2: `${siteConfig.address.locality} ${siteConfig.address.postalCode}, ${siteConfig.address.countryFr}`,
    mapsUrl: siteConfig.mapsUrl,
    hoursStatus: siteConfig.hours.daysFr,
    hoursTime: `Horaires d’ouverture\u00A0: ${siteConfig.hours.formattedFr}`,
    navLinks: [
      { label: "RESTAURANT", href: "/fr/restaurant-casa-lalla" },
      { label: "ACTIVITÉS", href: "/fr/lalla-takerkoust-activities" },
      { label: "RÉSERVATION", href: "/fr/reservation" },
      { label: "CONTACT", href: "/fr/contact" },
    ],
    socialAria: {
      instagram: "Consulter la page Instagram de Casa Lalla",
      whatsapp: "Contacter Casa Lalla sur WhatsApp",
      email: "Envoyer un courriel à Casa Lalla",
      tripadvisor: "Consulter nos avis sur TripAdvisor",
      maps: "Localiser Casa Lalla sur Google Maps",
    },
    privacyPolicyLabel: "Politique de Confidentialité",
    privacyPolicyLink: "/fr/politique-de-confidentialite",
    legalLabel: "Politique de Confidentialité",
    legalLink: "/fr/politique-de-confidentialite",
    newsletterTitle: "Restez informé",
    newsletterDesc:
      "Inscrivez-vous pour recevoir la lettre d’information de Casa Lalla Takerkoust.",
    newsletterPlaceholder: "Adresse e-mail",
    newsletterButton: "S’INSCRIRE",
    copyright: "© 2026, CASA LALLA TAKERKOUST",
  },
  whatsappButton: {
    ariaLabel: "Discuter avec Casa Lalla Takerkoust sur WhatsApp",
    alt: "Icône de contact WhatsApp",
  },
};
