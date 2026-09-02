"use client";

import { ListingCard } from "@/components/listing-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  listings,
  neighborhoods,
  SEARCHED_ON,
  type Neighborhood,
} from "@/data/listings";
import { MapPin, Shirt, Users, Wallet } from "lucide-react";
import { useMemo, useState } from "react";

type SortKey = "rent" | "size" | "split";

export function ApartmentFinder() {
  const [neighborhood, setNeighborhood] = useState<"all" | Neighborhood>("all");
  const [maxRent, setMaxRent] = useState(4300);
  const [hideStretch, setHideStretch] = useState(false);
  const [sort, setSort] = useState<SortKey>("rent");

  const filtered = useMemo(() => {
    const next = listings.filter((listing) => {
      if (neighborhood !== "all" && listing.neighborhood !== neighborhood) {
        return false;
      }
      if (listing.rentMin > maxRent) {
        return false;
      }
      if (hideStretch && listing.stretch) {
        return false;
      }
      return true;
    });

    next.sort((a, b) => {
      if (sort === "size") {
        return b.sqftMax - a.sqftMax;
      }
      if (sort === "split") {
        return a.rentMin / 2 - b.rentMin / 2;
      }
      return a.rentMin - b.rentMin;
    });

    return next;
  }, [hideStretch, maxRent, neighborhood, sort]);

  return (
    <div className="flex flex-1 flex-col">
      <header className="relative overflow-hidden border-b border-border/80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.86_0.05_80),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.9_0.03_50),transparent_45%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              Culver City apartment search
            </p>
            <h1 className="font-heading mt-2 text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
              2 bed / 2 bath homes with in-unit laundry, around $3–4k.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sixteen places in Culver City and the blocks around it that fit a
              $3,000–$4,000 unit, or about $2,000 per person. Every listing on
              this page is a 2 bed / 2 bath with washer and dryer in the home.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              <Wallet /> $3k–$4k / month
            </Badge>
            <Badge variant="secondary">
              <Users /> Under $2k per person
            </Badge>
            <Badge variant="secondary">
              <Shirt /> In-unit laundry
            </Badge>
            <Badge variant="secondary">
              <MapPin /> Culver City, Palms, Fox Hills
            </Badge>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Neighborhood</span>
              <select
                className="h-9 rounded-lg border border-input bg-transparent px-3 text-sm"
                value={neighborhood}
                onChange={(event) =>
                  setNeighborhood(event.target.value as "all" | Neighborhood)
                }
              >
                <option value="all">All nearby areas</option>
                {neighborhoods.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">
                Max rent {maxRent >= 4300 ? "(includes stretch)" : ""}
              </span>
              <input
                type="range"
                min={3100}
                max={4300}
                step={50}
                value={maxRent}
                onChange={(event) => setMaxRent(Number(event.target.value))}
                className="mt-2"
              />
              <span className="text-muted-foreground">
                Up to ${maxRent.toLocaleString()}
              </span>
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Sort</span>
              <select
                className="h-9 rounded-lg border border-input bg-transparent px-3 text-sm"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
              >
                <option value="rent">Lowest rent first</option>
                <option value="split">Lowest per person</option>
                <option value="size">Largest first</option>
              </select>
            </label>
            <div className="flex flex-col justify-end gap-2">
              <Button
                variant={hideStretch ? "default" : "outline"}
                onClick={() => setHideStretch((value) => !value)}
              >
                {hideStretch ? "Showing $4k and under" : "Hide slightly over $4k"}
              </Button>
              <p className="text-xs text-muted-foreground">
                {filtered.length} of {listings.length} places match
              </p>
            </div>
          </CardContent>
        </Card>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed bg-card px-6 py-16 text-center">
            <h2 className="font-heading text-2xl">No places in that slice</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Widen the rent cap or turn stretch listings back on. Culver City
              2/2s with in-unit laundry cluster hard around $3,500–$4,200.
            </p>
          </div>
        ) : (
          <section className="grid gap-5 md:grid-cols-2">
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </section>
        )}

        <section className="rounded-xl border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <h2 className="font-heading text-lg text-foreground">
            How this list was built
          </h2>
          <p className="mt-2">
            Researched on {SEARCHED_ON} from public listings on Apartments.com,
            Zillow, Redfin, RentCafe, HotPads, Zumper, and property sites. I
            kept only 2 bedroom / 2 bathroom homes in Culver City, Palms, Fox
            Hills, Park East, Culver West, and Jefferson. Laundry had to be
            in-unit, not a shared hallway room. Luxury buildings like Upper Ivy,
            Access Culver City, and Coda were left off because their 2/2s start
            well above $4,500.
          </p>
          <p className="mt-2">
            Rents, availability, and fees move fast. Open the original listing
            before you tour, and ask specifically about washer/dryer ownership
            (some condos want you to supply machines) plus parking and pet
            deposits.
          </p>
        </section>
      </main>
    </div>
  );
}
