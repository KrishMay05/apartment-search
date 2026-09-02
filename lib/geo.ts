export type LatLng = { lat: number; lng: number };

export type MapBounds = {
  south: number;
  west: number;
  north: number;
  east: number;
};

export function isInBounds(
  point: LatLng,
  bounds: MapBounds,
): boolean {
  return (
    point.lat >= bounds.south &&
    point.lat <= bounds.north &&
    point.lng >= bounds.west &&
    point.lng <= bounds.east
  );
}

export function boundsFromLeaflet(
  bounds: [[number, number], [number, number]],
): MapBounds {
  const [[south, west], [north, east]] = bounds;
  return { south, west, north, east };
}

export function leafletBoundsFromMapBounds(bounds: MapBounds): [
  [number, number],
  [number, number],
] {
  return [
    [bounds.south, bounds.west],
    [bounds.north, bounds.east],
  ];
}
