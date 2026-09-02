"use client";

import {
  defaultMapCenter,
  defaultMapZoom,
  zipAreas,
  type ZipArea,
} from "@/data/search-areas";
import { formatRent, rentLabel, type Listing } from "@/data/listings";
import {
  leafletBoundsFromMapBounds,
  type MapBounds,
} from "@/lib/geo";
import { MAP_CAPTURE_BOUNDS_EVENT } from "@/lib/listing-area";
import L from "leaflet";
import { useEffect, useMemo } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

type ListingMapProps = {
  listings: Listing[];
  allListings: Listing[];
  selectedZips: string[];
  searchBounds: MapBounds | null;
  selectedListingId: string | null;
  onZipToggle: (zip: string) => void;
  onSearchBoundsChange: (bounds: MapBounds | null) => void;
  onListingSelect: (id: string | null) => void;
};

function createMarkerIcon(active: boolean, dimmed: boolean) {
  const size = active ? 18 : 14;
  const opacity = dimmed ? 0.35 : 1;
  const color = active ? "var(--primary)" : "oklch(0.42 0.09 42)";

  return L.divIcon({
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
    html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:9999px;background:${color};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,.25);opacity:${opacity};"></span>`,
  });
}

function MapResizeFix() {
  const map = useMap();

  useEffect(() => {
    const timer = window.setTimeout(() => map.invalidateSize(), 100);
    return () => window.clearTimeout(timer);
  }, [map]);

  return null;
}

function FitToSelection({
  selectedZips,
  searchBounds,
}: {
  selectedZips: string[];
  searchBounds: MapBounds | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (searchBounds) {
      map.fitBounds(leafletBoundsFromMapBounds(searchBounds), { padding: [32, 32] });
      return;
    }

    if (selectedZips.length === 0) {
      return;
    }

    const areas = zipAreas.filter((area) => selectedZips.includes(area.zip));
    if (areas.length === 0) {
      return;
    }

    const south = Math.min(...areas.map((area) => area.bounds.south));
    const west = Math.min(...areas.map((area) => area.bounds.west));
    const north = Math.max(...areas.map((area) => area.bounds.north));
    const east = Math.max(...areas.map((area) => area.bounds.east));
    map.fitBounds(
      [
        [south, west],
        [north, east],
      ],
      { padding: [32, 32] },
    );
  }, [map, searchBounds, selectedZips]);

  return null;
}

function CaptureMapBounds({
  onCapture,
}: {
  onCapture: (bounds: MapBounds) => void;
}) {
  const map = useMapEvents({
    click() {
      // no-op; capture is driven by parent button
    },
  });

  useEffect(() => {
    const handler = () => {
      const bounds = map.getBounds();
      onCapture({
        south: bounds.getSouth(),
        west: bounds.getWest(),
        north: bounds.getNorth(),
        east: bounds.getEast(),
      });
    };

    window.addEventListener(MAP_CAPTURE_BOUNDS_EVENT, handler);
    return () =>
      window.removeEventListener(MAP_CAPTURE_BOUNDS_EVENT, handler);
  }, [map, onCapture]);

  return null;
}

function ZipOverlay({
  area,
  selected,
  onToggle,
}: {
  area: ZipArea;
  selected: boolean;
  onToggle: (zip: string) => void;
}) {
  const map = useMap();
  const bounds = leafletBoundsFromMapBounds(area.bounds);

  return (
    <Rectangle
      bounds={bounds}
      pathOptions={{
        color: selected ? "oklch(0.42 0.09 42)" : "oklch(0.55 0.04 55)",
        weight: selected ? 2.5 : 1.5,
        fillColor: selected ? "oklch(0.42 0.09 42)" : "oklch(0.75 0.02 80)",
        fillOpacity: selected ? 0.18 : 0.06,
        dashArray: selected ? undefined : "6 4",
      }}
      eventHandlers={{
        click: () => {
          onToggle(area.zip);
          map.fitBounds(bounds, { padding: [32, 32] });
        },
      }}
    />
  );
}

export function ListingMap({
  listings,
  allListings,
  selectedZips,
  searchBounds,
  selectedListingId,
  onZipToggle,
  onSearchBoundsChange,
  onListingSelect,
}: ListingMapProps) {
  const filteredIds = useMemo(
    () => new Set(listings.map((listing) => listing.id)),
    [listings],
  );

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/80">
      <MapContainer
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        className="h-[min(52vh,420px)] w-full z-0"
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapResizeFix />
        <FitToSelection selectedZips={selectedZips} searchBounds={searchBounds} />
        <CaptureMapBounds onCapture={onSearchBoundsChange} />

        {zipAreas.map((area) => (
          <ZipOverlay
            key={area.zip}
            area={area}
            selected={selectedZips.includes(area.zip)}
            onToggle={onZipToggle}
          />
        ))}

        {searchBounds ? (
          <Rectangle
            bounds={leafletBoundsFromMapBounds(searchBounds)}
            pathOptions={{
              color: "oklch(0.35 0.08 250)",
              weight: 2,
              fillColor: "oklch(0.35 0.08 250)",
              fillOpacity: 0.08,
              dashArray: "8 6",
            }}
          />
        ) : null}

        {allListings.map((listing) => {
          const isFiltered = filteredIds.has(listing.id);
          const isSelected = listing.id === selectedListingId;

          return (
            <Marker
              key={listing.id}
              position={[listing.lat, listing.lng]}
              icon={createMarkerIcon(isSelected, !isFiltered)}
              eventHandlers={{
                click: () => onListingSelect(isSelected ? null : listing.id),
              }}
            >
              <Popup>
                <div className="min-w-[180px] space-y-1 text-sm">
                  <p className="font-medium">{listing.name}</p>
                  <p className="text-muted-foreground">
                    {listing.neighborhood} · {listing.zip}
                  </p>
                  <p>{rentLabel(listing)}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatRent(Math.round(listing.rentMin / 2))} / person
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
