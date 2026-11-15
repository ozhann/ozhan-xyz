export type Country = {
  name: string;
  code: string;
  coords: readonly [number, number];
  photo?: string;
  caption?: string;
};

export type CurrentCity = {
  city: string;
  code: string;
  coords: readonly [number, number];
};

const countries: readonly Country[] = [
  { name: "Netherlands", code: "nl", coords: [52.3676, 4.9041], photo: "/travel/nl.jpg", caption: "Amsterdam" },
  { name: "Germany", code: "de", coords: [52.52, 13.405], photo: "/travel/de.jpg", caption: "Berlin" },
  { name: "Indonesia", code: "id", coords: [-6.2088, 106.8456], photo: "/travel/id.jpg", caption: "Bali" },
  { name: "Thailand", code: "th", coords: [13.7563, 100.5018], photo: "/travel/th.jpg", caption: "Thailand" },
  { name: "Singapore", code: "sg", coords: [1.3521, 103.8198], photo: "/travel/sg.jpg", caption: "Singapore" },
  { name: "Georgia", code: "ge", coords: [41.7151, 44.8271] },
  { name: "Saudi Arabia", code: "sa", coords: [24.7136, 46.6753], photo: "/travel/sa.jpg", caption: "Riyadh" },
  { name: "United Arab Emirates", code: "ae", coords: [25.2048, 55.2708], photo: "/travel/ae.jpg", caption: "Dubai" },
  { name: "Romania", code: "ro", coords: [44.4268, 26.1025], photo: "/travel/ro.jpg", caption: "Romania" },
  { name: "Albania", code: "al", coords: [41.3275, 19.8187], photo: "/travel/al.jpg", caption: "Albania" },
  { name: "Hungary", code: "hu", coords: [47.4979, 19.0402] },
  { name: "Austria", code: "at", coords: [48.2082, 16.3738] },
  { name: "Czech Republic", code: "cz", coords: [50.0755, 14.4378], photo: "/travel/cz.jpg", caption: "Prague" },
  { name: "Poland", code: "pl", coords: [52.2297, 21.0122], photo: "/travel/pl.jpg", caption: "Poland" },
  { name: "Lithuania", code: "lt", coords: [54.6872, 25.2797], photo: "/travel/lt.jpg", caption: "Lithuania" },
  { name: "Estonia", code: "ee", coords: [59.437, 24.7536], photo: "/travel/ee.jpg", caption: "Tallinn" },
  { name: "Finland", code: "fi", coords: [60.1699, 24.9384], photo: "/travel/fi.jpg", caption: "Helsinki" },
  { name: "Sweden", code: "se", coords: [59.3293, 18.0686], photo: "/travel/se.jpg", caption: "Stockholm" },
  { name: "Italy", code: "it", coords: [41.9028, 12.4964], photo: "/travel/it.jpg", caption: "Florence" },
  { name: "France", code: "fr", coords: [48.8566, 2.3522], photo: "/travel/fr.jpg", caption: "Paris" },
  { name: "Belgium", code: "be", coords: [50.8503, 4.3517], photo: "/travel/be.jpg", caption: "Belgium" },
  { name: "United Kingdom", code: "gb", coords: [51.5074, -0.1278], photo: "/travel/gb.jpg", caption: "London" },
  { name: "Spain", code: "es", coords: [40.4168, -3.7038], photo: "/travel/es.jpg", caption: "Barcelona" },
  { name: "Portugal", code: "pt", coords: [38.7223, -9.1393], photo: "/travel/pt.jpg", caption: "Lisbon" },
  { name: "United States", code: "us", coords: [40.7128, -74.006] },
  { name: "Bahamas", code: "bs", coords: [25.0443, -77.3504] },
  { name: "Croatia", code: "hr", coords: [45.815, 15.9819], photo: "/travel/hr.jpg", caption: "Dubrovnik" },
  { name: "Gibraltar", code: "gi", coords: [36.1408, -5.3536], photo: "/travel/gi.jpg", caption: "Gibraltar" },
  { name: "Monaco", code: "mc", coords: [43.7384, 7.4246], photo: "/travel/mc.jpg", caption: "Monte Carlo" },
  { name: "Ukraine", code: "ua", coords: [50.4501, 30.5234] },
  { name: "Vatican City", code: "va", coords: [41.9029, 12.4534], photo: "/travel/va.jpg", caption: "Vatican" },
  { name: "Türkiye", code: "tr", coords: [41.0082, 28.9784], photo: "/travel/tr.jpg", caption: "Istanbul" },
  { name: "Greece", code: "gr", coords: [36.8933, 27.2877], photo: "/travel/gr.jpg", caption: "Kos" },
];

const currentCities: readonly CurrentCity[] = [
  { city: "Amsterdam", code: "nl", coords: [52.3676, 4.9041] },
];

export const site = {
  name: "Özhan Yılmaz",
  title: "Senior Software Engineer",
  location: currentCities.map((place) => place.city).join(" · "),
  countries,
  currentCities,
  tagline:
    "Full-stack engineer with 10+ years building products across FinTech, eCommerce, and live operations.",
  bio: "I use AI-assisted workflows to ship reliable Laravel and React features across regulated finance and accreditation tools.",
  email: "ozhanyilmaz@gmail.com",
  photo: "/photo.jpg",
  url: "https://ozhan.xyz",
  githubUsername: "ozhann",
  socials: [
    { label: "GitHub", href: "https://github.com/ozhann", followers: null as number | null },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ozhanyilmazz/", followers: null as number | null },
    { label: "X", href: "https://x.com/ozhan_dev", followers: 828 as number | null },
    { label: "Instagram", href: "https://www.instagram.com/ozhanyilmaz_/", followers: 629 as number | null },
    { label: "Email", href: "mailto:ozhanyilmaz@gmail.com", followers: null as number | null },
  ],
  projects: [
    {
      name: "The Event Verse",
      role: "Senior Software Engineer",
      industry: "Live events",
      years: "2025 – Present",
      href: "https://theeventverse.com" as string | null,
    },
    {
      name: "Riverty",
      role: "Software Engineer",
      industry: "FinTech",
      years: "2022 – 2025",
      href: "https://www.riverty.com" as string | null,
    },
    {
      name: "Petsdeli",
      role: "Frontend Engineer",
      industry: "eCommerce",
      years: "2020 – 2022",
      href: "https://www.petsdeli.de" as string | null,
    },
  ],
} as const;
