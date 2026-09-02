"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  formatRent,
  perPerson,
  rentLabel,
  sqftLabel,
  type Listing,
} from "@/data/listings";
import {
  Bath,
  BedDouble,
  Car,
  Check,
  ExternalLink,
  MapPin,
  PawPrint,
  Shirt,
  Square,
} from "lucide-react";

export function ListingCard({
  listing,
  highlighted = false,
}: {
  listing: Listing;
  highlighted?: boolean;
}) {
  const split = perPerson(listing);

  return (
    <Card
      className={`flex h-full flex-col overflow-hidden border-border/80 bg-card shadow-sm transition-shadow ${
        highlighted ? "ring-2 ring-primary shadow-md" : ""
      }`}
      id={`listing-${listing.id}`}
    >
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {listing.neighborhood}
            </p>
            <h2 className="font-heading mt-1 text-xl leading-tight">
              {listing.name}
            </h2>
            <p className="mt-1 flex items-start gap-1.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-3.5 shrink-0" />
              {listing.address}, {listing.city} {listing.zip}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold tracking-tight">
              {rentLabel(listing)}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatRent(split)} / person
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">
            <BedDouble /> 2 bed
          </Badge>
          <Badge variant="secondary">
            <Bath /> 2 bath
          </Badge>
          <Badge variant="secondary">
            <Square /> {sqftLabel(listing)}
          </Badge>
          <Badge>
            <Shirt /> In-unit laundry
          </Badge>
          {listing.stretch ? (
            <Badge variant="outline">Slightly over $4k</Badge>
          ) : null}
          {listing.confirmUnit ? (
            <Badge variant="outline">Confirm W/D in unit</Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="text-sm leading-relaxed">{listing.whyItFits}</p>
        <ul className="grid gap-1.5 text-sm text-muted-foreground">
          {listing.highlights.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto flex flex-wrap gap-2">
        <Button render={<a href={listing.url} target="_blank" rel="noreferrer" />}>
          Open listing
          <ExternalLink />
        </Button>
        <Button
          variant="outline"
          render={<a href={listing.mapsUrl} target="_blank" rel="noreferrer" />}
        >
          Map
        </Button>
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" />}>
            Full details
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>{listing.name}</SheetTitle>
              <SheetDescription>
                {listing.address}, {listing.city} {listing.zip}
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-5 px-4 pb-6">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Detail label="Rent" value={rentLabel(listing)} />
                <Detail label="Split two ways" value={formatRent(split)} />
                <Detail label="Layout" value="2 bed / 2 bath" />
                <Detail label="Size" value={sqftLabel(listing)} />
                <Detail label="Type" value={listing.type} />
                <Detail label="Availability" value={listing.available} />
              </div>
              <div>
                <h3 className="text-sm font-medium">In-unit laundry</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {listing.laundryNote}
                </p>
              </div>
              <div className="grid gap-2 text-sm">
                <p className="flex items-start gap-2">
                  <Car className="mt-0.5 size-4 shrink-0" />
                  {listing.parking}
                </p>
                <p className="flex items-start gap-2">
                  <PawPrint className="mt-0.5 size-4 shrink-0" />
                  {listing.pets}
                </p>
              </div>
              <p className="text-sm leading-relaxed">{listing.whyItFits}</p>
              <Button
                className="w-full"
                render={<a href={listing.url} target="_blank" rel="noreferrer" />}
              >
                View original listing
                <ExternalLink />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted/70 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-medium">{value}</p>
    </div>
  );
}
