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

export function isValidMapBounds(bounds: MapBounds): boolean {
  const { south, west, north, east } = bounds;
  return (
    Number.isFinite(south) &&
    Number.isFinite(west) &&
    Number.isFinite(north) &&
    Number.isFinite(east) &&
    south >= -90 &&
    south <= 90 &&
    north >= -90 &&
    north <= 90 &&
    west >= -180 &&
    west <= 180 &&
    east >= -180 &&
    east <= 180 &&
    south < north &&
    west < east
  );
}
