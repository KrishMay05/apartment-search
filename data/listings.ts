export type Neighborhood =
  | "Downtown Culver City"
  | "Park East"
  | "Palms"
  | "Fox Hills"
  | "Culver West"
  | "Jefferson";

export type Listing = {
  id: string;
  name: string;
  address: string;
  neighborhood: Neighborhood;
  city: string;
  zip: string;
  rentMin: number;
  rentMax: number;
  beds: 2;
  baths: 2;
  sqftMin: number;
  sqftMax: number;
  inUnitLaundry: true;
  laundryNote: string;
  type: "Apartment" | "Condo" | "Duplex" | "Townhome" | "ADU";
  highlights: string[];
  whyItFits: string;
  parking: string;
  pets: string;
  available: string;
  url: string;
  mapsUrl: string;
  stretch?: boolean;
  confirmUnit?: boolean;
};

export const SEARCHED_ON = "September 2, 2026";

export const listings: Listing[] = [
  {
    id: "westside-terrace",
    name: "Westside Terrace",
    address: "3636 S Sepulveda Blvd",
    neighborhood: "Palms",
    city: "Los Angeles",
    zip: "90034",
    rentMin: 3099,
    rentMax: 3565,
    beds: 2,
    baths: 2,
    sqftMin: 925,
    sqftMax: 1050,
    inUnitLaundry: true,
    laundryNote: "In-home washer and dryer in the 2 bed / 2 bath floor plans.",
    type: "Apartment",
    highlights: [
      "Resort-style pools and spa",
      "Fitness center and tennis",
      "Patio or balcony",
      "Granite kitchens",
    ],
    whyItFits:
      "Lowest 2/2 starting rent on this list, about $1,550 per person, with in-unit laundry and a full amenity set a few minutes from downtown Culver City.",
    parking: "On-site parking",
    pets: "Cats and dogs allowed",
    available: "Units listed as available now",
    url: "https://www.apartments.com/westside-terrace-apartments-los-angeles-ca/0ml3c51/",
    mapsUrl: "https://maps.google.com/?q=3636+S+Sepulveda+Blvd+Los+Angeles+CA+90034",
  },
  {
    id: "meadows",
    name: "The Meadows",
    address: "6300 Green Valley Cir",
    neighborhood: "Fox Hills",
    city: "Culver City",
    zip: "90230",
    rentMin: 3448,
    rentMax: 3955,
    beds: 2,
    baths: 2,
    sqftMin: 1087,
    sqftMax: 1170,
    inUnitLaundry: true,
    laundryNote:
      "Several 2/2 listings (including unit 3107) advertise in-unit laundry. Confirm the exact unit — some older homes still use shared laundry.",
    type: "Apartment",
    highlights: [
      "Gated garden community with streams",
      "1,087–1,170 sq ft 2/2 layouts",
      "Pool, gym, and clubhouse",
      "Covered parking",
    ],
    whyItFits:
      "Large 2/2 floor plans in Fox Hills, often under $3,700. Strong value if you confirm washer/dryer in the unit you tour.",
    parking: "Assigned covered parking",
    pets: "Dogs and cats (breed restrictions)",
    available: "Multiple 2/2s listed, including now and September dates",
    url: "https://www.westsiderentals.com/culver-city-ca/meadows-apartments-zrj6f6z",
    mapsUrl: "https://maps.google.com/?q=6300+Green+Valley+Cir+Culver+City+CA+90230",
    confirmUnit: true,
  },
  {
    id: "krueger",
    name: "8932 Krueger St duplex",
    address: "8932 Krueger St",
    neighborhood: "Park East",
    city: "Culver City",
    zip: "90232",
    rentMin: 3495,
    rentMax: 3495,
    beds: 2,
    baths: 2,
    sqftMin: 900,
    sqftMax: 900,
    inUnitLaundry: true,
    laundryNote: "Separate in-unit laundry room with washer and dryer.",
    type: "Duplex",
    highlights: [
      "Primary suite with ensuite tub",
      "Courtyard with pergola",
      "Hardwood floors and fireplace",
      "Listed as available now",
    ],
    whyItFits:
      "A true house-like duplex in Culver City with a dedicated laundry room, not a stacked closet unit. About $1,748 each.",
    parking: "On-site parking listed",
    pets: "Pet friendly",
    available: "Available now",
    url: "https://www.forrent.com/ca/culver-city/8932-krueger-st/rzd8d62",
    mapsUrl: "https://maps.google.com/?q=8932+Krueger+St+Culver+City+CA+90232",
  },
  {
    id: "college-ave",
    name: "3813 College Ave rear house",
    address: "3813 College Ave",
    neighborhood: "Downtown Culver City",
    city: "Culver City",
    zip: "90232",
    rentMin: 3500,
    rentMax: 3500,
    beds: 2,
    baths: 2,
    sqftMin: 800,
    sqftMax: 800,
    inUnitLaundry: true,
    laundryNote: "In-unit washer and dryer. Listing also calls out ensuite laundry.",
    type: "Apartment",
    highlights: [
      "Furnished and utilities included",
      "Hardwood floors",
      "Three blocks from Sony Pictures",
      "One parking space",
    ],
    whyItFits:
      "All-in $3,500 with Wi-Fi and utilities is closer to $1,750 each and rare for a 2/2 this close to downtown.",
    parking: "One designated space",
    pets: "Ask listing agent",
    available: "Listed as for rent",
    url: "https://www.exprealty.com/culver-city-ca-real-estate/12-3813-college-ave",
    mapsUrl: "https://maps.google.com/?q=3813+College+Ave+Culver+City+CA+90232",
  },
  {
    id: "overland-352",
    name: "Windsor Fountains #352",
    address: "4900 Overland Ave, Unit 352",
    neighborhood: "Jefferson",
    city: "Culver City",
    zip: "90230",
    rentMin: 3500,
    rentMax: 3500,
    beds: 2,
    baths: 2,
    sqftMin: 970,
    sqftMax: 970,
    inUnitLaundry: true,
    laundryNote: "Concealable in-unit laundry.",
    type: "Condo",
    highlights: [
      "Top floor with balcony",
      "Primary ensuite with glass shower",
      "Water, gas, trash, and parking included",
      "Heated pools, spa, and gym",
    ],
    whyItFits:
      "Resort-style Culver City condo at $3,500 with in-unit laundry and most utilities covered, so the split stays well under $2k.",
    parking: "Two-car parking included",
    pets: "Pet deposit listed at $500",
    available: "12-month lease, listed for rent",
    url: "https://www.rentable.co/culver-city-ca/4900-overland-ave",
    mapsUrl: "https://maps.google.com/?q=4900+Overland+Ave+Culver+City+CA+90230",
  },
  {
    id: "parkway-terrace",
    name: "Parkway Terrace",
    address: "5800 Green Valley Cir",
    neighborhood: "Fox Hills",
    city: "Culver City",
    zip: "90230",
    rentMin: 3691,
    rentMax: 3691,
    beds: 2,
    baths: 2,
    sqftMin: 1130,
    sqftMax: 1130,
    inUnitLaundry: true,
    laundryNote: "In-unit washer and dryer in 2 bed / 2 bath homes.",
    type: "Apartment",
    highlights: [
      "1,130 sq ft renovated 2/2",
      "Gas fireplace and quartz counters",
      "Pool, spa, and BBQ",
      "Garage parking",
    ],
    whyItFits:
      "One of the larger 2/2s under $3,700, with laundry in the unit and Fox Hills shopping a short walk away.",
    parking: "Garage",
    pets: "Pet friendly",
    available: "2/2s advertised from $3,691; confirm current vacancy",
    url: "https://www.parkwayterraceapts.com/",
    mapsUrl: "https://maps.google.com/?q=5800+Green+Valley+Cir+Culver+City+CA+90230",
  },
  {
    id: "girard",
    name: "3922 Girard Ave townhome",
    address: "3922 Girard Ave",
    neighborhood: "Park East",
    city: "Culver City",
    zip: "90232",
    rentMin: 3695,
    rentMax: 3695,
    beds: 2,
    baths: 2,
    sqftMin: 1100,
    sqftMax: 1100,
    inUnitLaundry: true,
    laundryNote: "Laundry in the attached two-car garage.",
    type: "Townhome",
    highlights: [
      "Attached two-car garage with storage",
      "Remodeled kitchen with granite",
      "Private balcony and skylights",
      "Culver City schools",
    ],
    whyItFits:
      "Townhome living instead of a big complex, with private laundry and garage parking, still under $1,850 each.",
    parking: "Two-car attached garage",
    pets: "Ask KNM Property Management",
    available: "Listed for rent",
    url: "https://www.rentable.co/culver-city-ca/3922-girard-ave",
    mapsUrl: "https://maps.google.com/?q=3922+Girard+Ave+Culver+City+CA+90232",
  },
  {
    id: "motor-tides",
    name: "Motor Tides by Wiseman",
    address: "3557 Motor Ave",
    neighborhood: "Palms",
    city: "Los Angeles",
    zip: "90034",
    rentMin: 3770,
    rentMax: 4095,
    beds: 2,
    baths: 2,
    sqftMin: 722,
    sqftMax: 895,
    inUnitLaundry: true,
    laundryNote: "Building-wide in-unit washer and dryer.",
    type: "Apartment",
    highlights: [
      "Brand-new building on Motor Ave",
      "Many 2/2s available now from $3,770",
      "Rooftop deck and fitness center",
      "Walk to Helms and studio campuses",
    ],
    whyItFits:
      "New construction with in-unit laundry and lots of inventory. Smaller square footage, but the split stays around $1,885–$2,050.",
    parking: "Parking available",
    pets: "Cats and dogs welcome",
    available: "Multiple 2/2s listed as available now",
    url: "https://hotpads.com/motor-tides-by-wiseman-los-angeles-ca-90034-253w515/pad",
    mapsUrl: "https://maps.google.com/?q=3557+Motor+Ave+Los+Angeles+CA+90034",
  },
  {
    id: "la-salle",
    name: "4180 La Salle Ave, Unit 2",
    address: "4180 La Salle Ave, Unit 2",
    neighborhood: "Park East",
    city: "Culver City",
    zip: "90232",
    rentMin: 3850,
    rentMax: 3850,
    beds: 2,
    baths: 2,
    sqftMin: 1400,
    sqftMax: 1400,
    inUnitLaundry: true,
    laundryNote: "Washer and dryer in unit.",
    type: "Apartment",
    highlights: [
      "About 1,400 sq ft",
      "Five-minute walk to downtown",
      "Hardwood floors and granite kitchen",
      "Near Ballona Creek bike path",
    ],
    whyItFits:
      "Biggest 2/2 on this list at $3,850. Quiet street, in-unit laundry, and walking distance to downtown Culver.",
    parking: "One carport plus storage",
    pets: "Ask landlord",
    available: "Listed within the last two weeks of research",
    url: "https://www.apartments.com/4180-la-salle-ave-culver-city-ca/12vm9t6/",
    mapsUrl: "https://maps.google.com/?q=4180+La+Salle+Ave+Culver+City+CA+90232",
  },
  {
    id: "oliver",
    name: "The Oliver at 11955 W Washington",
    address: "11955 W Washington Blvd",
    neighborhood: "Culver West",
    city: "Los Angeles",
    zip: "90066",
    rentMin: 3895,
    rentMax: 3895,
    beds: 2,
    baths: 2,
    sqftMin: 1365,
    sqftMax: 1365,
    inUnitLaundry: true,
    laundryNote: "Large laundry room with a full-size washer and dryer.",
    type: "Apartment",
    highlights: [
      "1,365 sq ft second-floor 2/2",
      "Oversized balcony",
      "Stainless kitchen, concrete floors",
      "About 7 minutes to downtown Culver",
    ],
    whyItFits:
      "A large, modern 2/2 with a real laundry room for $3,895. Culver West is a short drive to downtown, Marina, and the beach.",
    parking: "Ask listing (310) 963-1146",
    pets: "Ask listing",
    available: "Listed within the last two weeks of research",
    url: "https://www.apartments.com/11955-w-washington-blvd-los-angeles-ca/f6dxz5v/",
    mapsUrl: "https://maps.google.com/?q=11955+W+Washington+Blvd+Los+Angeles+CA+90066",
  },
  {
    id: "the-culver",
    name: "The Culver",
    address: "3325 S Canfield Ave",
    neighborhood: "Palms",
    city: "Los Angeles",
    zip: "90034",
    rentMin: 3995,
    rentMax: 3995,
    beds: 2,
    baths: 2,
    sqftMin: 1044,
    sqftMax: 1044,
    inUnitLaundry: true,
    laundryNote: "In-unit washer and dryer in every home.",
    type: "Apartment",
    highlights: [
      "Unit 307, 1,044 sq ft 2/2",
      "Quartz kitchens and plank floors",
      "Gym and parking",
      "Minutes from downtown Culver City",
    ],
    whyItFits:
      "Right at the $4,000 cap and $1,998 per person, with in-unit laundry in a renovated Palms building.",
    parking: "Parking on site",
    pets: "Pet friendly",
    available: "Unit 307 listed for July 15, 2026",
    url: "https://www.theculver.com/",
    mapsUrl: "https://maps.google.com/?q=3325+S+Canfield+Ave+Los+Angeles+CA+90034",
  },
  {
    id: "madison-adu",
    name: "4037 Madison Ave ADU",
    address: "4037 Madison Ave #4037A",
    neighborhood: "Park East",
    city: "Culver City",
    zip: "90232",
    rentMin: 3999,
    rentMax: 3999,
    beds: 2,
    baths: 2,
    sqftMin: 800,
    sqftMax: 800,
    inUnitLaundry: true,
    laundryNote: "Brand-new ADU with in-unit washer and dryer.",
    type: "ADU",
    highlights: [
      "Brand-new standalone unit",
      "Central HVAC and high ceilings",
      "Walk-in closet in primary",
      "A few blocks from downtown Culver",
    ],
    whyItFits:
      "New construction 2/2 at exactly $2,000 each. Smaller footprint, but private and walkable to downtown.",
    parking: "Street parking only",
    pets: "Ask Glaser Property Management",
    available: "Listed for rent",
    url: "https://www.padmapper.com/rentals/25336710p/2-bedroom-2-bath-apartment-at-4037-madison-ave-culver-city-ca-90232",
    mapsUrl: "https://maps.google.com/?q=4037+Madison+Ave+Culver+City+CA+90232",
  },
  {
    id: "maytime",
    name: "Lakeside Villas at 4821 Maytime Ln",
    address: "4821 Maytime Ln",
    neighborhood: "Jefferson",
    city: "Culver City",
    zip: "90230",
    rentMin: 3995,
    rentMax: 4100,
    beds: 2,
    baths: 2,
    sqftMin: 942,
    sqftMax: 942,
    inUnitLaundry: true,
    laundryNote: "Inside laundry / in-unit washer and dryer.",
    type: "Condo",
    highlights: [
      "Gated community with 24-hour security",
      "Two patios and two parking spots",
      "Landlord covers all utilities except electric",
      "Pools, spa, gym, lake, and playground",
    ],
    whyItFits:
      "Resort-style Fox Hills / Jefferson condo. Rent sits on the $4k line, but included utilities keep the true split close to $2k.",
    parking: "Two parking spots",
    pets: "One listing says no pets — confirm",
    available: "Listed as available now",
    url: "https://www.apartments.com/4821-maytime-ln-culver-city-ca/h28c333/",
    mapsUrl: "https://maps.google.com/?q=4821+Maytime+Ln+Culver+City+CA+90230",
  },
  {
    id: "harlow",
    name: "Harlow",
    address: "9901 Washington Blvd",
    neighborhood: "Downtown Culver City",
    city: "Culver City",
    zip: "90232",
    rentMin: 3948,
    rentMax: 4195,
    beds: 2,
    baths: 2,
    sqftMin: 890,
    sqftMax: 1029,
    inUnitLaundry: true,
    laundryNote: "Full-size in-home washer and dryer.",
    type: "Apartment",
    highlights: [
      "Heart of downtown Culver City",
      "Loft 2/2 layouts with quartz kitchens",
      "On-site shops and restaurants",
      "Fitness center and EV charging",
    ],
    whyItFits:
      "Best walk-to-everything option. Smaller loft 2/2s start near $3,948–$4,195, right at the $2k-per-person line.",
    parking: "Parking available",
    pets: "Pets allowed",
    available: "2/2 loft inventory advertised; larger 2/2s run higher",
    url: "https://www.apartments.com/harlow-culver-city-ca/z4mhd3z/",
    mapsUrl: "https://maps.google.com/?q=9901+Washington+Blvd+Culver+City+CA+90232",
    stretch: true,
  },
  {
    id: "clg-3838",
    name: "3838 by CLG",
    address: "3838 Dunn Dr",
    neighborhood: "Palms",
    city: "Culver City",
    zip: "90232",
    rentMin: 4149,
    rentMax: 4149,
    beds: 2,
    baths: 2,
    sqftMin: 794,
    sqftMax: 794,
    inUnitLaundry: true,
    laundryNote: "Washer and dryer in unit.",
    type: "Apartment",
    highlights: [
      "Unit 627, 2/2 with balcony",
      "Newer luxury building",
      "Pool and smart-home finishes",
      "Walkable to downtown Culver",
    ],
    whyItFits:
      "Slightly over $4k ($2,075 each) for a newer Palms/Culver 2/2 with in-unit laundry. Worth it if you want a modern building.",
    parking: "Gated parking",
    pets: "Pets welcome",
    available: "Unit 627 listed as available now",
    url: "https://www.apartments.com/3838-by-clg-culver-city-ca/prrt4dt/",
    mapsUrl: "https://maps.google.com/?q=3838+Dunn+Dr+Culver+City+CA+90232",
    stretch: true,
  },
  {
    id: "goldwyn",
    name: "The Goldwyn",
    address: "10300 Venice Blvd",
    neighborhood: "Downtown Culver City",
    city: "Culver City",
    zip: "90232",
    rentMin: 4200,
    rentMax: 4200,
    beds: 2,
    baths: 2,
    sqftMin: 1080,
    sqftMax: 1080,
    inUnitLaundry: true,
    laundryNote: "In-unit washer and dryer.",
    type: "Apartment",
    highlights: [
      "1,080 sq ft 2/2",
      "Quartz counters and stainless appliances",
      "Rooftop deck and covered parking",
      "On Venice Blvd near downtown",
    ],
    whyItFits:
      "A polished 2/2 just over $4k ($2,100 each). Strong if you want in-unit laundry and a downtown Culver address.",
    parking: "Secure covered parking",
    pets: "Pet friendly",
    available: "Two-bedroom listed at $4,200",
    url: "https://www.apartments.com/the-goldwyn-culver-city-ca/mf5nqtj/",
    mapsUrl: "https://maps.google.com/?q=10300+Venice+Blvd+Culver+City+CA+90232",
    stretch: true,
  },
];

export const neighborhoods: Neighborhood[] = [
  "Downtown Culver City",
  "Park East",
  "Palms",
  "Fox Hills",
  "Culver West",
  "Jefferson",
];

export function formatRent(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function rentLabel(listing: Listing) {
  if (listing.rentMin === listing.rentMax) {
    return formatRent(listing.rentMin);
  }
  return `${formatRent(listing.rentMin)}–${formatRent(listing.rentMax)}`;
}

export function perPerson(listing: Listing, people = 2) {
  return Math.round(listing.rentMin / people);
}

export function sqftLabel(listing: Listing) {
  if (listing.sqftMin === listing.sqftMax) {
    return `${listing.sqftMin.toLocaleString()} sq ft`;
  }
  return `${listing.sqftMin.toLocaleString()}–${listing.sqftMax.toLocaleString()} sq ft`;
}
