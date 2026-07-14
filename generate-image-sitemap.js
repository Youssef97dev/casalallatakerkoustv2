const fs = require("fs");
const path = require("path");

// Add this helper function
function escapeXML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const DOMAIN = "https://casalallatakerkoust.com";

// Group your images by the page they actually appear on
const sitePages = [
  // --- ENGLISH PAGES ---
  {
    pageUrl: "/gallery/",
    lastmod: "2026-07-13",
    priority: "1.0",
    images: [
      {
        image: "/images/petit-dejeuner-piscine-hotel-lalla-takerkoust.webp",
        alt: "Fresh morning breakfast served by the poolside at Casa Lalla Hotel Rural overlooking Lake Takerkoust.",
        title: "Morning Poolside Breakfast — Casa Lalla Hotel",
      },
      {
        image: "/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
        alt: "Casa Lalla rural oasis located where the golden dunes of the Agafay Desert meet the water.",
        title: "Agafay Desert Accommodation Oasis",
      },
      {
        image:
          "/images/charming-guest-room-accommodation-lalla-takerkoust.webp",
        alt: "One of the 9 uniquely designed charming guest rooms at Casa Lalla Takerkoust.",
        title: "Charming Boutique Hotel Room",
      },
      {
        image: "/images/elegant-bathroom-hotel-rural-agafay-desert.webp",
        alt: "Elegant and clean guest bathroom featuring warm natural materials at Casa Lalla Hotel Rural.",
        title: "Elegant Hotel Bathroom Amenities",
      },
      {
        image: "/images/evening-dining-access-casa-lalla-restaurant.webp",
        alt: "An intimate evening dining experience set up for guests transitioning from day to night.",
        title: "Intimate Evening Dining Experience",
      },
      {
        image:
          "/images/mediterranean-lifestyle-architecture-agafay-marrakech.webp",
        alt: "Beautiful retro-bohemian architectural details embodying the Mediterranean lifestyle at the hotel.",
        title: "Retro-Bohemian Hotel Architecture",
      },
      {
        image: "/images/poolside-breakfast-hotel-rural-lalla-takerkoust.webp",
        alt: "Fresh morning breakfast served gently by the poolside for guests of the boutique hotel.",
        title: "Morning Poolside Breakfast",
      },
      {
        image: "/images/hotel-de-charme-marrakech-chambre-retro-boheme.webp",
        alt: "Spacious retro-bohemian guest room blending vintage Moroccan warmth and understated elegance at Casa Lalla Hotel Rural.",
        title: "Boutique Hotel Room",
      },
      {
        image: "/images/romantic-night-ambiance-boutique-hotel-marrakech.webp",
        alt: "Serene and welcoming nighttime ambiance at Casa Lalla, illuminated by soft retro lighting.",
        title: "Serene Nighttime Hotel Ambiance",
      },
      {
        image: "/images/scenic-window-view-accommodation-agafay-marrakech.webp",
        alt: "Looking out the bedroom window at the beautiful natural landscape surrounding the rural hotel.",
        title: "Scenic Room Views of Nature",
      },
      {
        image: "/images/shaded-guest-patio-room-view-lake-takerkoust.webp",
        alt: "Shaded guest patio outside the room, the perfect spot to read and disconnect near Marrakech.",
        title: "Relaxing Guest Patio & Terrace",
      },
      {
        image: "/images/patio-salon-boheme-hotel-marrakech-agafay.webp",
        alt: "Shaded patio sofas and retro-bohemian outdoor lounge for relaxing at Casa Lalla Hotel Rural near Agafay.",
        title: "Bohemian Patio Lounge & Terrace — Casa Lalla",
      },
      {
        image: "/images/agafay-desert-sunset-dinner-restaurant-marrakech.webp",
        alt: "Guests enjoying a boho sunset dinner and cocktails at Casa Lalla lounge near Agafay",
        title: "Agafay Sunset Dinner & Boho Lounge — Casa Lalla",
      },
      {
        image: "/images/best-restaurant-lake-lalla-takerkoust-lunch-view.webp",
        alt: "Fresh Mediterranean lunch served on the sunny terrace overlooking Lake Lalla Takerkoust",
        title: "Lake View Restaurant Lunch — Casa Lalla Takerkoust",
      },
      {
        image: "/images/restaurant-casa-lalla-takerkoust-agafay-vibes.webp",
        alt: "Restaurant Casa Lalla dining area overlooking Lake Takerkoust with Agafay desert vibes near Marrakech",
        title:
          "Experience Restaurant Casa Lalla - Takerkoust & Agafay Desert Dining",
      },
      {
        image:
          "/images/casa-lalla-takerkoust-restaurant-ibiza-style-marrakech.webp",
        alt: "Exclusive Ibiza style restaurant and day club at Lake Lalla Takerkoust near Marrakech",
        title:
          "Experience Ibiza Style Luxury Dining at Lake Takerkoust Marrakech",
      },
      {
        image: "/images/bohemian-terrace-dining-casa-lalla-takerkoust.webp",
        alt: "Boho-chic terrace dining at Casa Lalla Takerkoust offering a luxury desert experience",
        title: "Bohemian Luxury Terrace Dining Outside Marrakech",
      },
      {
        image: "/images/atlas-mountains-view-from-restaurant-marrakech.webp",
        alt: "Breathtaking Atlas Mountains view from a luxury day club and restaurant in Marrakech",
        title: "Panoramic Atlas Mountain Views from Our Lakeside Restaurant",
      },
      {
        image: "/images/spanish-tapas-mediterranean-food-marrakech.webp",
        alt: "Gourmet Spanish tapas and Mediterranean food served at an upscale Marrakech restaurant",
        title: "Premium Spanish Tapas & Mediterranean Cuisine in Marrakech",
      },
      {
        image: "/images/signature-cocktails-day-club-marrakech.webp",
        alt: "Signature craft cocktails at a luxury day club by Lake Takerkoust with Ibiza party vibes",
        title: "Refresh with Signature Cocktails at Our Marrakech Day Club",
      },
      {
        image: "/images/romantic-dinner-agafay-desert-under-stars.webp",
        alt: "Elegant romantic dinner setup under the stars in the Agafay Desert with luxury service",
        title: "Unforgettable Romantic Desert Dinner Under the Stars",
      },
      {
        image: "/images/lalla-takerkoust-marrakech-weather-sunset.webp",
        alt: "Golden hour sunset dinner at a luxury Agafay desert restaurant with perfect Marrakech weather",
        title: "Golden Hour Luxury Sunset Dinner Near Marrakech",
      },
      {
        image: "/images/agafay-desert-day-trip.webp",
        alt: "Premium Mediterranean mezze platter served during a luxury Agafay Desert day trip",
        title: "Indulge in Mediterranean Mezze on Your Agafay Day Trip",
      },
      {
        image: "/images/restaurants-agafay-poolside-lunch.webp",
        alt: "Luxury poolside lunch with Ibiza vibes in the rocky landscape of the Agafay desert",
        title: "Luxury Poolside Lunch in the Agafay Desert",
      },
      {
        image: "/images/private-events-restaurants-agafay-desert.webp",
        alt: "Intricate Moroccan boho-chic decor at Casa Lalla, perfect for private events near Marrakech",
        title: "Boho-Chic Private Event Venue at Casa Lalla Agafay",
      },
      {
        image: "/images/casa-lalla-takerkoust-agafay-desert-view.webp",
        alt: "Panoramic view of Casa Lalla Takerkoust luxury day club situated near the Agafay desert",
        title: "Stunning Panoramic Views of Casa Lalla Takerkoust",
      },
      {
        image: "/images/authentic-moroccan-food-marrakech-restaurants.webp",
        alt: "Authentic high-end Moroccan food platter served at a trendy restaurant near Marrakech",
        title: "High-End Authentic Moroccan Food Tasting",
      },
      {
        image: "/images/agafay-desert-pool-ibiza-vibe-marrakech.webp",
        alt: "Relaxing by the luxury pool at Casa Lalla Takerkoust with an exclusive Ibiza day club vibe",
        title: "Exclusive Ibiza Vibe Poolside Lounge in Marrakech",
      },
      {
        image: "/images/luxury-dining-takerkoust-mykonos-style.webp",
        alt: "Outdoor luxury dining experience at Casa Lalla featuring a chic Mykonos aesthetic",
        title: "Chic Mykonos-Style Outdoor Luxury Dining",
      },
      {
        image: "/images/best-moroccan-food-lunch-lake-takerkoust.webp",
        alt: "VIP guests enjoying a premium Moroccan food lunch overlooking Lake Takerkoust",
        title: "Premium Moroccan Lunch Overlooking Lake Takerkoust",
      },
      {
        image: "/images/sunset-party-agafay-ibiza-atmosphere.webp",
        alt: "Vibrant sunset party atmosphere at Casa Lalla in Agafay featuring world-class Ibiza energy",
        title: "Vibrant Ibiza-Style Sunset Party at Casa Lalla",
      },
      {
        image: "/images/chic-desert-oasis-design-mykonos-inspiration.webp",
        alt: "Chic desert oasis design of Casa Lalla drawing inspiration from luxury Mykonos architecture",
        title: "Discover Our Mykonos-Inspired Desert Oasis",
      },
      {
        image: "/images/casa-lalla-agafay-menu-moroccan-cuisine.webp",
        alt: "A gourmet spread of traditional Moroccan cuisine from the exclusive Casa Lalla Agafay menu",
        title: "Gourmet Moroccan Cuisine from the Casa Lalla Menu",
      },
      {
        image: "/images/lalla-takerkoust-lake-weather-marrakech.webp",
        alt: "Magical sunset over Lake Takerkoust with premium boho-chic Agafay desert vibes",
        title: "Magical Sunset Views and Boho-Chic Desert Vibes",
      },
      {
        image: "/images/agafay-desert-buggy-tour-marrakech.webp",
        alt: "Elevated rooftop terrace view over the serene waters of Lake Takerkoust after a buggy tour",
        title: "Rooftop Terrace Views over Serene Lake Takerkoust",
      },
      {
        image: "/images/quad-biking-agafay-desert-marrakech.webp",
        alt: "High-end mixology and creative cocktails at the best festive day club in Marrakech",
        title: "Festive Day Club Mixology & Creative Cocktails",
      },
      {
        image: "/images/agafay-desert-day-trip-shuttle-service.webp",
        alt: "Attentive VIP service at an Agafay desert luxury camp providing a 5-star guest experience",
        title: "5-Star VIP Service in the Agafay Desert",
      },
      {
        image: "/images/mechoui-roasted-lamb-desert-dinner.webp",
        alt: "Panoramic views of the Lake Takerkoust dam and the snow-capped High Atlas Mountains",
        title: "Breathtaking Views of Lake Takerkoust and the Atlas Mountains",
      },
      {
        image: "/images/spanish-paella-lakeside-marrakech-restaurant.webp",
        alt: "Lush Mediterranean gardens for a peaceful escape combining Ibiza chill out with Marrakech charm",
        title: "Peaceful Mediterranean Gardens with Ibiza Chill Vibes",
      },
      {
        image: "/images/lobster-pastilla-mediterranean-cuisine-marrakech.webp",
        alt: "Vibrant assortment of premium Moroccan salads at a top luxury restaurant in Marrakech",
        title: "Premium Assortment of Authentic Moroccan Salads",
      },
      {
        image: "/images/yoga-lalla-takerkoust-lake-meditation.webp",
        alt: "Sophisticated outdoor dining with authentic Agafay vibes at our luxury Mykonos-style camp",
        title: "Sophisticated Outdoor Dining with Agafay Desert Vibes",
      },
      {
        image: "/images/lakeside-picnic-atlas-mountains-view.webp",
        alt: "Nightly stargazing sessions from our rooftop terrace under the clear Agafay desert skies",
        title: "Rooftop Stargazing Sessions in the Agafay Desert",
      },
      {
        image: "/images/mastiha-signature-cocktail-marrakech-lounge.webp",
        alt: "Fresh grilled Mediterranean octopus and seafood, a staple at our Mykonos-inspired restaurant",
        title: "Fresh Grilled Mediterranean Seafood & Octopus",
      },
      {
        image: "/images/restaurants-marocain-marrakech-chef.webp",
        alt: "The perfect sunset aperitif at our luxury lounge bar overlooking Lake Lalla Takerkoust",
        title: "Enjoy the Perfect Sunset Aperitif Overlooking the Lake",
      },
      {
        image: "/images/mediterranean-mezze-platter-boho-chic.webp",
        alt: "Elegant boho-chic afternoon tea service offering a luxury experience near Marrakech",
        title: "Elegant Boho-Chic Afternoon Tea Experience",
      },
      {
        image: "/images/floating-breakfast-heart-tray-private-pool.webp",
        alt: "Action-packed quad biking and buggy tour through the rocky landscape of the Agafay desert",
        title: "Action-Packed Agafay Desert Quad Biking Tour",
      },
      {
        image: "/images/organic-herb-garden-sustainable-culinary.webp",
        alt: "Chic rooftop lounge with premium Ibiza vibes and panoramic Agafay desert sunset views",
        title: "Chic Rooftop Lounge with Premium Ibiza Sunset Vibes",
      },
      {
        image: "/images/best-moroccan-food-tagine-restaurant-marrakech.webp",
        alt: "Traditional gourmet Moroccan tagine served at a luxury restaurant near the Atlas Mountains",
        title:
          "Authentic Moroccan Cuisine at Casa Lalla best restaurant in marrakech",
      },
      {
        image: "/images/couples-dining-experience-restaurant-near-agafay.webp",
        alt: "Couple enjoying a luxury romantic dinner with sunset views near the Agafay desert, Morocco",
        title: "Romantic Couples Dining in Morocco",
      },
      {
        image:
          "/images/luxury-rooftop-restaurant-agafay-desert-surroundings.webp",
        alt: "Luxurious boho rooftop seating area offering panoramic views of the Agafay desert surroundings",
        title: "Luxury Rooftop Lounge View in Agafay",
      },
      {
        image: "/images/romantic-dinner-marrakech-atlas-mountains-view.webp",
        alt: "Romantic candlelight dinner table setup with Atlas Mountains backdrop at Casa Lalla in Morocco",
        title: "Romantic Dinner Experience Near Marrakech",
      },
      {
        image: "/images/traditional-moroccan-tea-experience-takerkoust.webp",
        alt: "Pouring traditional Moroccan mint tea with a beautiful lake view at Casa Lalla restaurant",
        title: "Moroccan Mint Tea Experience",
      },
      {
        image:
          "/images/atlas-mountains-restaurant-panoramic-view-marrakech.webp",
        alt: "Stunning panoramic views of the snow-capped Atlas Mountains from a luxury dining table in Morocco",
        title: "Panoramic Atlas Mountains Dining",
      },
    ],
  },
  {
    pageUrl: "/", // English Homepage
    lastmod: "2026-06-01",
    priority: "0.9",
    images: [
      {
        image: "/images/sunset-cocktails-lalla-takerkoust-lounge.webp",
        alt: "Premium sunset cocktails at our Ibiza-style lounge bar terrace near Agafay",
        title: "Ibiza-Style Sunset Cocktails Lounge at Lake Takerkoust",
      },
      {
        image: "/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
        alt: "Beautiful panoramic lake view from the Casa Lalla luxury restaurant terrace in Takerkoust",
        title: "Panoramic Lake View Restaurant Experience in Takerkoust",
      },
      {
        image: "/images/agafay-restaurants-marocain-marrakech.webp",
        alt: "Fine Moroccan dining experience at a premium luxury restaurant in the Agafay Desert",
        title: "Fine Moroccan Dining in the Agafay Desert",
      },
      {
        image: "/images/tourists-enjoying-drinks-lalla-takerkoust.webp",
        alt: "Tourists enjoying an exclusive Mykonos vibe day club experience with refreshing drinks at Lake Lalla Takerkoust",
        title: "Exclusive Mykonos Vibe Day Club at Lake Takerkoust",
      },
      {
        image: "/images/destination-wedding-marrakech-lake-takerkoust.webp",
        alt: "Elegant boho-chic destination wedding ceremony setup at Lake Lalla Takerkoust near Marrakech",
        title: "Luxury Destination Weddings at Lake Lalla Takerkoust",
      },
      {
        image: "/images/casa-lalla-takerkoust-entrance-marrakech.webp",
        alt: "The welcoming grand entrance to Casa Lalla Takerkoust near Marrakech featuring luxury beach club aesthetics",
        title: "Welcome to Casa Lalla Takerkoust Near Marrakech",
      },
      {
        image: "/images/corporate-event-venue-marrakech-lake.webp",
        alt: "Sophisticated Mykonos-inspired boho-chic lounge setup for private VIP and corporate events at Lake Takerkoust",
        title: "VIP Corporate Events in a Chic Mykonos-Inspired Desert Oasis",
      },
      {
        image: "/images/boho-chic-lounge-mykonos-vibe-lalla-takerkoust.webp",
        alt: "Mykonos-inspired boho-chic lounge setup offering a relaxing VIP desert oasis experience",
        title: "Mykonos-Inspired Boho-Chic Lounge Oasis",
      },
      {
        image: "/images/seafood-pasta-mediterranean-dining-morocco.webp",
        alt: "Fresh Mediterranean seafood pasta served at our luxury lakefront restaurant near Marrakech with a chic Ibiza atmosphere",
        title:
          "Premium Mediterranean Seafood Dining with a Chic Ibiza Atmosphere",
      },
      {
        image: "/images/casa-lalla-takerkoust-lake-view-terrace.webp",
        alt: "Chic Ibiza-style lakefront terrace at Casa Lalla Takerkoust offering stunning waterfront views",
        title: "Chic Lakefront Dining Terrace at Casa Lalla",
      },
      {
        image: "/images/casa-lalla-takerkoust-best-restaurants-agafay.webp",
        alt: "Le Casa Lalla, reconnu comme l'un des meilleurs restaurants de luxe près du désert d'Agafay",
        title: "Casa Lalla : Meilleur Restaurant près d'Agafay",
      },
      {
        image: "/images/ambiance-agafay-vibes-meilleur-restaurants.webp",
        alt: "Ambiance chaleureuse et festive aux vibrations d'Agafay au cœur du restaurant Casa Lalla",
        title: "Ambiance Festive Agafay Vibes au Casa Lalla",
      },
      {
        image: "/images/hidden-gem-restaurant-marrakech-lake-takerkoust.webp",
        alt: "Beautiful exterior and dining area of Casa Lalla, a hidden gem restaurant near Marrakech",
        title: "Casa Lalla Restaurant Exterior & Dining",
      },
      {
        image: "/images/sunset-restaurant-lake-takerkoust-marrakech.webp",
        alt: "Breathtaking sunset view from Casa Lalla restaurant terrace overlooking Lake Takerkoust near Marrakech",
        title: "Sunset Dining at Lake Takerkoust, Morocco",
      },
      {
        image: "/images/fine-dining-interior-casa-lalla-takerkoust.webp",
        alt: "Elegant fine dining interior and welcoming restaurant atmosphere at Casa Lalla Takerkoust",
        title: "Mykonos Vibe Elegant Dining Room at Casa Lalla",
      },
      {
        image: "/images/adrenaline-quad-biking-marrakech-desert.webp",
        alt: "High-speed quad bike tour and thrilling luxury activities near our Ibiza style day club in the Agafay Desert",
        title: "Thrilling Luxury Activities & Tours Near Lake Takerkoust",
      },
      {
        image: "/images/private-event-wedding-setup-casa-lalla.webp",
        alt: "Beautiful table setup for a private event and unforgettable wedding celebration at Casa Lalla Takerkoust venue",
        title:
          "Exclusive Ibiza Style Venue for Private Events at Lake Takerkoust",
      },
      {
        image: "/images/mediterranean-seafood-cuisine-marrakech.webp",
        alt: "Gourmet Mediterranean seafood cuisine served at our luxury Mykonos-style restaurant near Lake Lalla Takerkoust in Marrakech",
        title:
          "Premium Mediterranean Seafood Dining with Ibiza Vibes at Lake Takerkoust",
      },
    ],
  },
  {
    pageUrl: "/blog/mykonos-vibes-restaurant-morocco/",
    lastmod: "2026-06-10",
    priority: "0.9",
    images: [
      {
        image: "/images/restaurants-marocain-marrakech-garden.webp",
        alt: "Authentic Moroccan hospitality and traditional riad-style architecture at the Casa Lalla Takerkoust oasis.",
        title: "Traditional Moroccan riad-inspired retreat in Lalla Takerkoust",
      },
      {
        image: "/images/restaurants-marocain-marrakech-show.webp",
        alt: "Relaxing outdoor swimming pool overlooking the breathtaking Lalla Takerkoust Lake and desert landscape.",
        title: "Swimming pool with panoramic views of Lalla Takerkoust Lake",
      },
    ],
  },
  {
    pageUrl:
      "/blog/marrakech-beach-clubs-discover-the-ibiza-mykonos-experience-at-lake-takerkoust/",
    lastmod: "2026-06-10",
    priority: "0.9",
    images: [
      {
        image: "/images/agafay-desert-marrakech-restaurants.webp",
        alt: "Fresh, locally sourced Moroccan breakfast spread at a luxury boutique lodge near Marrakech.",
        title: "Moroccan breakfast experience near Agafay Desert",
      },
      {
        image: "/images/high-atlas-mountains-snow-peaks-marrakech.webp",
        alt: "Enjoying traditional Moroccan mint tea on a sunlit terrace overlooking the Agafay Desert.",
        title: "Mint tea terrace with Agafay Desert views",
      },
      {
        image: "/images/elegant-table-setting-mediterranean-luxe.webp",
        alt: "Gourmet culinary experience and elegant table setting at Casa Lalla Takerkoust.",
        title: "Elegant dining experience at Casa Lalla Takerkoust",
      },
      {
        image: "/images/meilleur-restaurant-ibiza.webp",
        alt: "Thrilling quad biking and off-road buggy adventure through the Agafay Desert starting from Casa Lalla Takerkoust.",
        title: "Agafay Desert quad biking and buggy adventure",
      },
    ],
  },
  {
    pageUrl: "/restaurant-casa-lalla/",
    lastmod: "2026-06-24",
    priority: "0.9",
    images: [
      {
        image: "/images/pool-day-pass-agafay-lalla-takerkoust-marrakech.webp",
        alt: "Bohemian white sunbeds and swimming pool at Casa Lalla day club near Agafay, Marrakech",
        title: "Agafay and Lalla Takerkoust Pool Day Pass — Casa Lalla",
      },
    ],
  },
  {
    pageUrl: "/private-events/",
    lastmod: "2026-06-24",
    priority: "0.9",
    images: [
      {
        image: "/images/mykonos-style-architecture-marrakech-lake.webp",
        alt: "Stunning Mykonos style architecture at our luxury day club oasis overlooking Lake Takerkoust near Marrakech",
        title: "Mykonos Style Architecture & Luxury Oasis at Lake Takerkoust",
      },
      {
        image: "/images/ibiza-mykonos-style-restaurants.webp",
        alt: "Chic Ibiza and Mykonos style restaurant setting offering a VIP luxury day club experience near the Agafay Desert",
        title: "Ibiza & Mykonos Style Luxury Restaurant Near Agafay",
      },
      {
        image: "/images/boho-chic-interior-design-marrakech-lake.webp",
        alt: "Stunning boho-chic interior design at our luxury lakeside restaurant, blending Mykonos aesthetics with Marrakech charm",
        title: "Boho-Chic Interior Design at Our Luxury Lakeside Restaurant",
      },
    ],
  },
  {
    pageUrl: "/lalla-takerkoust-activities/",
    lastmod: "2026-06-24",
    priority: "0.9",
    images: [
      {
        image: "/images/high-atlas-mountains-quad-marrakech.webp",
        alt: "Scenic quad biking experience facing the High Atlas Mountains near our luxury Ibiza-style desert retreat",
        title:
          "High Atlas Mountains Quad Adventure & Luxury Day Club Experience",
      },
      {
        image: "/images/adrenaline-buggy-tour-marrakech-agafay-desert.webp",
        alt: "Adrenaline-fueled buggy tour through the Agafay Desert, a premium excursion near our Mykonos-inspired oasis",
        title:
          "Adrenaline Buggy Tour in Agafay Desert – Luxury Off-Road Adventure",
      },
      {
        image: "/images/quad-tour-agafay-desert-marrakech.webp",
        alt: "Premium quad bike tour in the Agafay Desert near our luxury Ibiza-style day club in Marrakech",
        title: "Premium Agafay Desert Quad Tour & Luxury Day Club",
      },
      {
        image: "/images/quad-bike-tour-agafay-desert-adventure.webp",
        alt: "Action-packed quad bike tour adventure in the Agafay Desert offering a luxury excursion near Lake Takerkoust",
        title: "Action-Packed Agafay Desert Quad Bike Adventure",
      },
      {
        image: "/images/luxury-tour-experience-casa-lalla-takerkoust.webp",
        alt: "Exclusive luxury tour experience at Casa Lalla Takerkoust combining Agafay Desert adventures with chic Ibiza vibes",
        title: "Exclusive Luxury Tour Experience at Casa Lalla Takerkoust",
      },
    ],
  },
  {
    pageUrl: "/rural-hotel/",
    lastmod: "2026-07-13",
    priority: "0.9",
    images: [
      {
        image: "/images/hotel-marrakech-vue-montagnes-atlas.webp",
        alt: "Snow-capped Atlas Mountains serving as a breathtaking backdrop for guests relaxing at Casa Lalla Hotel Rural.",
        title: "Atlas Mountains View Hotel",
      },
      {
        image: "/images/relaxing-sunbeds-poolside-hotel-lalla-takerkoust.webp",
        alt: "Plush sunbeds aligned by the poolside inviting guests to unwind and slow down.",
        title: "Poolside Sunbeds & Relaxation",
      },
      {
        image: "/images/hotel-vue-lac-lalla-takerkoust-marrakech.webp",
        alt: "Exterior of Casa Lalla Hotel Rural overlooking the shimmering waters of Lake Lalla Takerkoust.",
        title: "Lake View Boutique Hotel",
      },
      {
        image: "/images/piscine-oasis-hotel-rural-lalla-takerkoust.webp",
        alt: "Serene swimming pool oasis surrounded by nature and plush sunbeds at Casa Lalla Hotel Rural near Marrakech.",
        title: "Tranquil lake view",
      },
      {
        image: "/images/hebergement-proche-desert-agafay-oasis.webp",
        alt: "Casa Lalla rural hotel located at the crossroads where the golden Agafay Desert meets Lake Takerkoust.",
        title: "Agafay Desert Accommodation Oasis",
      },
      {
        image: "/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
        alt: "Exterior of Casa Lalla Hotel Rural overlooking the shimmering waters of Lake Lalla Takerkoust.",
        title: "Lake View Boutique Hotel — Casa Lalla Takerkoust",
      },
      {
        image: "/images/patio-sofas-lounge-boutique-hotel-marrakech.webp",
        alt: "Comfortable patio sofas under the shade, ideal for a peaceful afternoon escape.",
        title: "Comfortable Shaded Patio Lounge",
      },
      {
        image: "/images/retro-bohemian-room-boutique-hotel-agafay.webp",
        alt: "Spacious retro-bohemian guest room blending vintage warmth with understated elegance at Casa Lalla.",
        title: "Retro-Bohemian Guest Room — Agafay Area",
      },
      {
        image: "/images/sunset-golden-hour-hotel-rural-lalla-takerkoust.webp",
        alt: "Warm golden hour sunlight bathing the tranquil courtyards of Casa Lalla Hotel Rural.",
        title: "Golden Hour at Casa Lalla Hotel",
      },
      {
        image: "/images/vintage-moroccan-decor-room-marrakech-getaway.webp",
        alt: "Thoughtfully designed bedroom featuring vintage Moroccan decor and cozy textures for a relaxing stay.",
        title: "Vintage Moroccan Room Decor — Casa Lalla",
      },
      {
        image: "/images/atlas-mountains-view-hotel-getaway-marrakech.webp",
        alt: "Snow-capped Atlas Mountains serving as the backdrop for the serene Casa Lalla rural hotel.",
        title: "Atlas Mountains View Hotel Near Marrakech",
      },
    ],
  },
];

// Build the XML structure
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// Loop through each page
sitePages.forEach((page) => {
  const lastmod = page.lastmod || new Date().toISOString().split("T")[0];
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${page.pageUrl}</loc>\n`; // The specific page (e.g., /fr/galerie)
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;

  // Loop through the images on that specific page
  page.images.forEach((item) => {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${DOMAIN}${item.image}</image:loc>\n`;

    // Safely escape the alt text
    const captions = ["Restaurant Casa Lalla Takerkoust agafay vibes"];
    const tags = captions.join(" | ");
    const safeCaption = escapeXML(`${item.alt} | ${tags}`);
    xml += `      <image:caption>${safeCaption}</image:caption>\n`;

    // Safely escape the title (or fallback to alt)
    const rawTitle = item.title ? item.title : item.alt;
    const safeTitle = escapeXML(rawTitle);
    xml += `      <image:title>${safeTitle}</image:title>\n`;
    xml += `      <image:geo_location>Marrakech, Morocco</image:geo_location>\n`;
    xml += `    </image:image>\n`;
  });

  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Save it
fs.writeFileSync(path.join(__dirname, "public", "image-sitemap.xml"), xml);
console.log("✅ Multi-page Image Sitemap generated successfully!");
