export const googleEventMeta = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "DATURHA - Mennecy Metal Festival",
  startDate: "2024-09-07T12:00:00+02:00",
  endDate: "2024-09-07T23:00:00+02:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Parc de Villeroy",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 avenue de Villeroy",
      addressLocality: "Mennecy",
      postalCode: "91540",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
  },
  image: [
    "https://cdn.sortiraparis.com/images/80/1665/1039906-mennecy-metal-fest-2024-eisbrecher-lordi-korpiklaani-les-premiers-noms.jpg",
  ],
  description:
    "Le Mennecy Metal Festival 2024 avec Eisbrecher, Lordi, Korpiklaani, et plus encore. Ne manquez pas l'occasion de voir Daturha en live !",
  offers: {
    "@type": "Offer",
    url: "https://www.fnactickets.com/ticket-evenement/mennecy-metal-fest-fst24mmf-lt.htm",
    price: "33",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    validFrom: "2024-05-21T12:00:00+02:00",
  },
  performer: {
    "@type": "PerformingGroup",
    name: "Daturha",
  },
  organizer: {
    "@type": "Organization",
    name: "Musiko Eye",
    url: "https://www.musiko-eye.fr/",
  },
};
