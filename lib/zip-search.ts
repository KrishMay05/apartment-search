import type { ZipArea } from "@/data/search-areas";
import { getZipArea } from "@/data/search-areas";
import type { MapBounds } from "@/lib/geo";
import { isValidUsZip, normalizeUsZip } from "@/lib/us-zip";

export type ZipGeocodeResponse = {
  zip: string;
  label: string;
  bounds: MapBounds;
  lat: number;
  lng: number;
};

export function toZipArea(result: ZipGeocodeResponse): ZipArea {
  return {
    zip: result.zip,
    label: result.label,
    bounds: result.bounds,
  };
}

export async function geocodeUsZip(
  input: string,
): Promise<{ area: ZipArea } | { error: string }> {
  const zip = normalizeUsZip(input);
  if (!zip) {
    return { error: "Enter a valid US zip code (5 digits, optional +4)." };
  }

  const knownArea = getZipArea(zip);
  if (knownArea) {
    return { area: knownArea };
  }

  const response = await fetch(`/api/geocode/zip?zip=${encodeURIComponent(zip)}`);
  const payload = (await response.json()) as ZipGeocodeResponse | { error: string };

  if (!response.ok) {
    return {
      error:
        "error" in payload && payload.error
          ? payload.error
          : `Could not look up zip code ${zip}.`,
    };
  }

  return { area: toZipArea(payload as ZipGeocodeResponse) };
}

export { isValidUsZip, normalizeUsZip };
