export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "leicester",
  name: "Leicester",
  countyOrRegion: "Leicestershire",
  latitude: 52.5984,
  longitude: -1.0879,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "loughborough",
    name: "Loughborough",
    countyOrRegion: "Leicestershire",
    latitude: 52.7701,
    longitude: -1.2040,
  },
  {
    slug: "hinckley",
    name: "Hinckley",
    countyOrRegion: "Leicestershire",
    latitude: 52.5420,
    longitude: -1.3695,
  },
  {
    slug: "coalville",
    name: "Coalville",
    countyOrRegion: "Leicestershire",
    latitude: 52.7213,
    longitude: -1.3720,
  },
  {
    slug: "market-harborough",
    name: "Market Harborough",
    countyOrRegion: "Leicestershire",
    latitude: 52.4771,
    longitude: -0.9204,
  },
  {
    slug: "melton-mowbray",
    name: "Melton Mowbray",
    countyOrRegion: "Leicestershire",
    latitude: 52.7663,
    longitude: -0.8890,
  },
  {
    slug: "oadby",
    name: "Oadby",
    countyOrRegion: "Leicestershire",
    latitude: 52.5985,
    longitude: -1.0794,
  },
  {
    slug: "wigston",
    name: "Wigston",
    countyOrRegion: "Leicestershire",
    latitude: 52.5817,
    longitude: -1.0951,
  },
  {
    slug: "blaby",
    name: "Blaby",
    countyOrRegion: "Leicestershire",
    latitude: 52.5678,
    longitude: -1.1683,
  },
  {
    slug: "birstall",
    name: "Birstall",
    countyOrRegion: "Leicestershire",
    latitude: 52.6670,
    longitude: -1.1296,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
