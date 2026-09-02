import { getZipArea } from "@/data/search-areas";
import type { MapBounds } from "@/lib/geo";
import type { ZipGeocodeResponse } from "@/lib/zip-search";
import { normalizeUsZip } from "@/lib/us-zip";
import { NextResponse } from "next/server";

type NominatimResult = {
  display_name: string;
  lat: string;
  lon: string;
  boundingbox?: [string, string, string, string];
};

function boundsFromNominatim(boundingbox: [string, string, string, string]): MapBounds {
  const [south, north, west, east] = boundingbox.map(Number);
  return { south, north, west, east };
}

function labelFromDisplayName(displayName: string, zip: string): string {
  const parts = displayName.split(", ");
  const place = parts.slice(0, 2).join(", ");
  return `${zip} · ${place}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zip = normalizeUsZip(searchParams.get("zip") ?? "");

  if (!zip) {
    return NextResponse.json(
      { error: "Enter a valid US zip code (5 digits, optional +4)." },
      { status: 400 },
    );
  }

  const knownArea = getZipArea(zip);
  if (knownArea) {
    const centerLat = (knownArea.bounds.north + knownArea.bounds.south) / 2;
    const centerLng = (knownArea.bounds.east + knownArea.bounds.west) / 2;

    return NextResponse.json({
      zip: knownArea.zip,
      label: knownArea.label,
      bounds: knownArea.bounds,
      lat: centerLat,
      lng: centerLng,
    } satisfies ZipGeocodeResponse);
  }

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("postalcode", zip);
  url.searchParams.set("country", "US");
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");

  let response: Response;
  try {
    response = await fetch(url, {
      headers: {
        "User-Agent": "CulverCityApartmentFinder/1.0 (apartment-search)",
        Accept: "application/json",
      },
      next: { revalidate: 60 * 60 * 24 },
    });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the geocoding service. Try again in a moment." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "Geocoding service returned an error." },
      { status: 502 },
    );
  }

  const results = (await response.json()) as NominatimResult[];
  const match = results[0];

  if (!match?.boundingbox) {
    return NextResponse.json(
      { error: `No location found for zip code ${zip}.` },
      { status: 404 },
    );
  }

  const bounds = boundsFromNominatim(match.boundingbox);
  const lat = Number(match.lat);
  const lng = Number(match.lon);

  return NextResponse.json({
    zip,
    label: labelFromDisplayName(match.display_name, zip),
    bounds,
    lat,
    lng,
  } satisfies ZipGeocodeResponse);
}
