# Culver City 2 Bed / 2 Bath Finder

A small web app that collects **2 bedroom / 2 bathroom** rentals in and around Culver City, California, with **in-unit laundry**, priced around **$3,000–$4,000** a month (or about **$2,000 per person**).

The list is a curated snapshot from public listings, not a live feed. Always confirm rent, availability, and washer/dryer details with the landlord or leasing office before touring.

## What’s included

- Sixteen 2 bed / 2 bath homes in Culver City, Palms, Fox Hills, Park East, Culver West, and Jefferson
- In-unit laundry on every listing (shared hallway laundry was excluded)
- Rent, split-per-person, square footage, and original listing links
- Filters for neighborhood, max rent, and “slightly over $4k”

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To use a specific port:

```bash
npm run dev -- -p 43123
```

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
