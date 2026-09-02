import type { MapBounds } from "@/lib/geo";

export type ZipArea = {
  zip: string;
  label: string;
  bounds: MapBounds;
};

/** Approximate zip boundaries for the Culver City search region. */
export const zipAreas: ZipArea[] = [
  {
    zip: "90232",
    label: "90232 · Culver City core",
    bounds: {
      south: 34.004,
      west: -118.412,
      north: 34.028,
      east: -118.372,
    },
  },
  {
    zip: "90230",
    label: "90230 · Fox Hills & Jefferson",
    bounds: {
      south: 33.972,
      west: -118.418,
      north: 34.004,
      east: -118.368,
    },
  },
  {
    zip: "90034",
    label: "90034 · Palms",
    bounds: {
      south: 34.002,
      west: -118.418,
      north: 34.028,
      east: -118.388,
    },
  },
  {
    zip: "90066",
    label: "90066 · Culver West",
    bounds: {
      south: 33.992,
      west: -118.442,
      north: 34.012,
      east: -118.408,
    },
  },
];

export const defaultMapCenter: [number, number] = [34.008, -118.402];
export const defaultMapZoom = 13;

export function getZipArea(zip: string) {
  return zipAreas.find((area) => area.zip === zip);
}
