import type { Listing } from "@/data/listings";
import { isInBounds, type MapBounds } from "@/lib/geo";

export function listingMatchesArea(
  listing: Listing,
  selectedZips: string[],
  searchBounds: MapBounds | null,
) {
  if (searchBounds) {
    return isInBounds({ lat: listing.lat, lng: listing.lng }, searchBounds);
  }

  if (selectedZips.length > 0) {
    return selectedZips.includes(listing.zip);
  }

  return true;
}

export const MAP_CAPTURE_BOUNDS_EVENT = "listing-map:capture-bounds";

export function captureMapBounds() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(MAP_CAPTURE_BOUNDS_EVENT));
}
